import assert from "node:assert/strict";
import test from "node:test";
import { LeadFileError, MAX_FILE_BYTES, validateLeadFiles } from "../lib/lead-files.ts";
import { saveWithLeadFiles } from "../lib/lead-upload.ts";

const png = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 0]);
const photo = () => new File([png], "reference.png", { type: "image/png" });
const cad = () => new File(["CAD"], "drawing.dwg", { type: "application/octet-stream" });

test("files are optional and valid photo/CAD files retain their kind", async () => {
  assert.deepEqual(await validateLeadFiles(new FormData()), []);
  const data = new FormData();
  data.append("photos", photo());
  data.append("cadFiles", cad());
  const files = await validateLeadFiles(data);
  assert.deepEqual(files.map(({ kind, mimeType }) => [kind, mimeType]), [["photo", "image/png"], ["cad", "application/octet-stream"]]);
});

test("rejects invalid image signatures, CAD formats, counts, sizes and unknown file fields", async () => {
  for (const [field, file] of [
    ["photos", new File(["not a PNG"], "fake.png", { type: "image/png" })],
    ["cadFiles", new File(["x"], "script.exe", { type: "application/octet-stream" })],
    ["photos", new File([new Uint8Array(MAX_FILE_BYTES + 1)], "large.png", { type: "image/png" })],
    ["other", photo()],
  ]) {
    const data = new FormData();
    data.append(field, file);
    await assert.rejects(validateLeadFiles(data), LeadFileError);
  }
  const many = new FormData();
  for (let index = 0; index < 4; index += 1) many.append("photos", photo());
  await assert.rejects(validateLeadFiles(many), LeadFileError);
});

test("upload failure cleans staged objects and does not save the lead", async () => {
  const stored = new Set();
  let calls = 0;
  let saved = false;
  const bucket = {
    async put(key) { stored.add(key); calls += 1; if (calls === 2) throw new Error("R2 failed"); },
    async delete(key) { stored.delete(key); },
  };
  const files = await validateLeadFiles(new FormData());
  files.push({ file: photo(), kind: "photo", mimeType: "image/png", originalName: "one.png" });
  files.push({ file: photo(), kind: "photo", mimeType: "image/png", originalName: "two.png" });
  await assert.rejects(saveWithLeadFiles(files, bucket, async () => { saved = true; }), /R2 failed/);
  assert.equal(saved, false);
  assert.equal(stored.size, 0);
});

test("database failure cleans uploads; successful save receives metadata", async () => {
  const stored = new Set();
  const bucket = { async put(key) { stored.add(key); }, async delete(key) { stored.delete(key); } };
  const files = [{ file: cad(), kind: "cad", mimeType: "application/octet-stream", originalName: "drawing.dwg" }];
  await assert.rejects(saveWithLeadFiles(files, bucket, async () => { throw new Error("DB failed"); }), /DB failed/);
  assert.equal(stored.size, 0);
  const result = await saveWithLeadFiles(files, bucket, async (pending) => pending[0]);
  assert.equal(result.originalName, "drawing.dwg");
  assert.match(result.storageKey, /^leads\/[a-f0-9-]+\/[a-f0-9-]+$/);
  assert.equal(stored.size, 1);
});
