"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { LeadChoices } from "@/db/schema";
import styles from "@/app/admin-dashboard/admin-dashboard.module.css";

type LeadDetailsDialogProps = {
  leadId: string;
  leadName: string;
  leadStatus: "contacted" | "not_contacted";
  choices: LeadChoices;
};

type LeadNote = {
  id: string;
  body: string;
  createdAt: string;
  updatedAt: string;
};

type ToastState = {
  message: string;
  tone: "success" | "error";
} | null;

function formatChoice(values: string[] | undefined) {
  return values && values.length ? values : ["Not specified"];
}

function formatReadiness(value: LeadChoices["projectReadiness"]) {
  if (value === "has-brief") return ["Has a brief"];
  if (value === "needs-ideas") return ["Needs ideas"];
  return ["Historical submission"];
}

function prettyStatus(status: "contacted" | "not_contacted") {
  return status === "contacted" ? "Contacted" : "Not contacted";
}

export function LeadDetailsDialog({ leadId, leadName, leadStatus, choices }: LeadDetailsDialogProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const noteAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const moreTriggerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState(leadStatus);
  const [toast, setToast] = useState<ToastState>(null);
  const [notes, setNotes] = useState<LeadNote[]>([]);
  const [notesCursor, setNotesCursor] = useState<string | null>(null);
  const [notesLoading, setNotesLoading] = useState(false);
  const [notesReady, setNotesReady] = useState(false);
  const [noteDraft, setNoteDraft] = useState("");
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState("");
  const [savingNote, setSavingNote] = useState(false);
  const loadMoreRootRef = useRef<HTMLDivElement | null>(null);

  const choiceSections = useMemo(
    () => {
      const current = [
        { step: "01", label: "Capabilities", values: formatChoice(choices.capabilities) },
        { step: "02", label: "Readiness", values: formatReadiness(choices.projectReadiness) },
        { step: "03", label: "Installation", values: [choices.installationIncluded ? "Included" : "Historical / not recorded"] },
      ];
      if (choices.serviceScope?.length) current.push({ step: "H1", label: "Historical scope", values: choices.serviceScope });
      if (choices.projectStage?.length) current.push({ step: "H2", label: "Historical stage", values: choices.projectStage });
      return current;
    },
    [choices]
  );

  function showToast(message: string, tone: "success" | "error" = "success") {
    setToast({ message, tone });
    window.setTimeout(() => {
      setToast((current) => (current?.message === message ? null : current));
    }, 2200);
  }

  const loadNotes = useCallback(
    async (cursor?: string | null) => {
      if (notesLoading) return;
      setNotesLoading(true);
      try {
        const url = new URL(`/api/admin/leads/${leadId}/notes`, window.location.origin);
        if (cursor) url.searchParams.set("cursor", cursor);
        url.searchParams.set("limit", "8");
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to load notes");
        const data = await response.json();
        setNotes((current) => (cursor ? [...current, ...(data.notes as LeadNote[])] : (data.notes as LeadNote[])));
        setNotesCursor((data.nextCursor as string | null) ?? null);
        setNotesReady(true);
      } catch {
        showToast("Could not load notes", "error");
      } finally {
        setNotesLoading(false);
      }
    },
    [leadId, notesLoading]
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onCancel = (event: Event) => {
      event.preventDefault();
      dialog.close();
    };

    dialog.addEventListener("cancel", onCancel);
    return () => dialog.removeEventListener("cancel", onCancel);
  }, []);

  useEffect(() => {
    const trigger = moreTriggerRef.current;
    const root = loadMoreRootRef.current;
    if (!trigger || !root || !dialogRef.current?.open) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && notesCursor && !notesLoading) {
          void loadNotes(notesCursor);
        }
      },
      { root, threshold: 0.1 }
    );
    observer.observe(trigger);
    return () => observer.disconnect();
  }, [loadNotes, notesCursor, notesLoading]);

  async function handleOpen() {
    dialogRef.current?.showModal();
    if (!notesReady) {
      setNotes([]);
      setNotesCursor(null);
      await loadNotes(null);
    }
  }

  async function updateStatus(nextStatus: "contacted" | "not_contacted") {
    const previous = status;
    setStatus(nextStatus);
    try {
      const body = new FormData();
      body.set("status", nextStatus);
      const response = await fetch(`/api/admin/leads/${leadId}/status`, {
        method: "PATCH",
        body,
      });
      if (!response.ok) throw new Error("status");
      showToast(`Status changed to ${prettyStatus(nextStatus)}`);
    } catch {
      setStatus(previous);
      showToast("Status update failed", "error");
    }
  }

  async function addNote() {
    const body = noteDraft.trim();
    if (!body || savingNote) return;
    setSavingNote(true);
    try {
      const formData = new FormData();
      formData.set("body", body);
      const response = await fetch(`/api/admin/leads/${leadId}/notes`, { method: "POST", body: formData });
      if (!response.ok) throw new Error("note");
      const data = await response.json();
      setNotes((current) => [data.note as LeadNote, ...current]);
      setNoteDraft("");
      noteAreaRef.current?.focus();
      showToast("Note added");
    } catch {
      showToast("Could not add note", "error");
    } finally {
      setSavingNote(false);
    }
  }

  async function saveNote(noteId: string) {
    const body = editingValue.trim();
    if (!body) return;
    setSavingNote(true);
    try {
      const formData = new FormData();
      formData.set("body", body);
      const response = await fetch(`/api/admin/lead-notes/${noteId}`, { method: "PATCH", body: formData });
      if (!response.ok) throw new Error("note");
      const data = await response.json();
      setNotes((current) => current.map((note) => (note.id === noteId ? (data.note as LeadNote) : note)));
      setEditingNoteId(null);
      showToast("Note updated");
    } catch {
      showToast("Could not update note", "error");
    } finally {
      setSavingNote(false);
    }
  }

  async function deleteNote(noteId: string) {
    setSavingNote(true);
    try {
      const response = await fetch(`/api/admin/lead-notes/${noteId}`, { method: "DELETE" });
      if (!response.ok) throw new Error("note");
      setNotes((current) => current.filter((note) => note.id !== noteId));
      showToast("Note deleted");
    } catch {
      showToast("Could not delete note", "error");
    } finally {
      setSavingNote(false);
    }
  }

  return (
    <>
      <button className={styles.selectionButton} type="button" onClick={() => void handleOpen()}>
        Open lead
        <span>↗</span>
      </button>

      <dialog className={styles.choiceDialog} ref={dialogRef}>
        <form method="dialog" className={styles.choiceDialogShell}>
          <header className={styles.choiceDialogHeader}>
            <div>
              <p className={styles.choiceDialogEyebrow}>Lead overview</p>
              <h3>{leadName}</h3>
              <p className={styles.choiceDialogSub}>{prettyStatus(status)}</p>
            </div>
            <button className={styles.choiceDialogClose} type="submit" aria-label="Close dialog">
              ×
            </button>
          </header>

          <div className={styles.choiceTimeline}>
            {choiceSections.map((item) => (
              <section className={styles.choiceStep} key={item.label}>
                <div className={styles.choiceStepMarker}>
                  <span>{item.step}</span>
                  <i />
                </div>
                <div className={styles.choiceStepBody}>
                  <p>{item.label}</p>
                  <div className={styles.choiceDialogChips}>
                    {item.values.map((value) => (
                      <span className={styles.choiceDialogChip} key={value}>
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          <section className={styles.detailBlock}>
            <div className={styles.detailHeader}>
              <div>
                <p className={styles.choiceDialogEyebrow}>Status</p>
                <h4>Update lead state</h4>
              </div>
              {toast ? <span className={`${styles.toast} ${toast.tone === "error" ? styles.toastError : ""}`}>{toast.message}</span> : null}
            </div>
            <label className={styles.statusSelectWrap}>
              <span>Current status</span>
              <select
                className={styles.statusSelect}
                value={status}
                onChange={(event) => void updateStatus(event.target.value as "contacted" | "not_contacted")}
              >
                <option value="not_contacted">Not contacted</option>
                <option value="contacted">Contacted</option>
              </select>
            </label>
          </section>

          <section className={styles.detailBlock}>
            <div className={styles.detailHeader}>
              <div>
                <p className={styles.choiceDialogEyebrow}>Notes</p>
                <h4>Lead notes</h4>
              </div>
              <span className={styles.choiceDialogMeta}>{notes.length} loaded</span>
            </div>

            <div className={styles.notesComposer}>
              <textarea
                ref={noteAreaRef}
                className={styles.noteInput}
                rows={4}
                value={noteDraft}
                onChange={(event) => setNoteDraft(event.target.value)}
                placeholder="Add a private note..."
              />
              <button className={styles.noteAction} type="button" onClick={() => void addNote()} disabled={savingNote}>
                Add note
              </button>
            </div>

            <div className={styles.notesPanel} ref={loadMoreRootRef}>
              {notes.map((note) => {
                const isEditing = editingNoteId === note.id;
                return (
                  <article className={styles.noteCard} key={note.id}>
                    <div className={styles.noteMeta}>
                      <span>{new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short" }).format(new Date(note.createdAt))}</span>
                      <div>
                        <button
                          className={styles.noteInlineButton}
                          type="button"
                          onClick={() => {
                            setEditingNoteId(note.id);
                            setEditingValue(note.body);
                          }}
                        >
                          Edit
                        </button>
                        <button className={styles.noteInlineButton} type="button" onClick={() => void deleteNote(note.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                    {isEditing ? (
                      <div className={styles.notesComposer}>
                        <textarea
                          className={styles.noteInput}
                          rows={4}
                          value={editingValue}
                          onChange={(event) => setEditingValue(event.target.value)}
                        />
                        <div className={styles.noteEditActions}>
                          <button className={styles.noteAction} type="button" onClick={() => void saveNote(note.id)} disabled={savingNote}>
                            Save note
                          </button>
                          <button
                            className={styles.noteInlineButton}
                            type="button"
                            onClick={() => setEditingNoteId(null)}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className={styles.noteBody}>{note.body}</p>
                    )}
                  </article>
                );
              })}

              {notesCursor ? <div ref={moreTriggerRef} className={styles.notesSentinel} /> : null}
              {notesLoading ? <p className={styles.choiceDialogMeta}>Loading more notes...</p> : null}
            </div>
          </section>
        </form>
      </dialog>
    </>
  );
}
