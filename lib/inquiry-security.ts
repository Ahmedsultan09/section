function toBase64Url(bytes: ArrayBuffer) {
  const array = new Uint8Array(bytes);
  let binary = "";
  array.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export async function signFileAccess(key: string, expires: number, secret: string) {
  const cryptoKey = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return toBase64Url(await crypto.subtle.sign("HMAC", cryptoKey, new TextEncoder().encode(`${key}:${expires}`)));
}

export async function verifyFileAccess(key: string, expires: number, signature: string, secret: string) {
  if (!Number.isFinite(expires) || expires < Date.now()) return false;
  const expected = await signFileAccess(key, expires, secret);
  if (expected.length !== signature.length) return false;
  let mismatch = 0;
  for (let index = 0; index < expected.length; index += 1) mismatch |= expected.charCodeAt(index) ^ signature.charCodeAt(index);
  return mismatch === 0;
}
