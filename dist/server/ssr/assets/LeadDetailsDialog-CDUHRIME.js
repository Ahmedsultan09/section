import { T as __toESM, t as require_jsx_runtime, y as require_react } from "../index.js";
//#region app/admin-dashboard/admin-dashboard.module.css
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var admin_dashboard_module_default = {
	shell: "_shell_kb7iz_1",
	loginWrap: "_loginWrap_kb7iz_12",
	panel: "_panel_kb7iz_18",
	eyebrow: "_eyebrow_kb7iz_27",
	title: "_title_kb7iz_34",
	sub: "_sub_kb7iz_40",
	error: "_error_kb7iz_46",
	form: "_form_kb7iz_56",
	field: "_field_kb7iz_61",
	button: "_button_kb7iz_85",
	topbar: "_topbar_kb7iz_95",
	brandBlock: "_brandBlock_kb7iz_105",
	user: "_user_kb7iz_114",
	ghostButton: "_ghostButton_kb7iz_119",
	stats: "_stats_kb7iz_128",
	stat: "_stat_kb7iz_128",
	tableSection: "_tableSection_kb7iz_158",
	tableHeader: "_tableHeader_kb7iz_163",
	filters: "_filters_kb7iz_170",
	filterField: "_filterField_kb7iz_177",
	statusSelect: "_statusSelect_kb7iz_191",
	filterActions: "_filterActions_kb7iz_215",
	filterButton: "_filterButton_kb7iz_220",
	filterReset: "_filterReset_kb7iz_221",
	statusSave: "_statusSave_kb7iz_222",
	sectionTitle: "_sectionTitle_kb7iz_244",
	sectionMeta: "_sectionMeta_kb7iz_250",
	pagination: "_pagination_kb7iz_256",
	pageButton: "_pageButton_kb7iz_263",
	pageMeta: "_pageMeta_kb7iz_281",
	tableWrap: "_tableWrap_kb7iz_288",
	table: "_table_kb7iz_158",
	date: "_date_kb7iz_327",
	name: "_name_kb7iz_328",
	phone: "_phone_kb7iz_329",
	messageCell: "_messageCell_kb7iz_354",
	statusForm: "_statusForm_kb7iz_360",
	statusBadgeWrap: "_statusBadgeWrap_kb7iz_377",
	statusBadge: "_statusBadge_kb7iz_377",
	statusPending: "_statusPending_kb7iz_392",
	statusContacted: "_statusContacted_kb7iz_398",
	choices: "_choices_kb7iz_404",
	selectionButton: "_selectionButton_kb7iz_410",
	choiceDialog: "_choiceDialog_kb7iz_440",
	choiceDialogShell: "_choiceDialogShell_kb7iz_457",
	choiceDialogHeader: "_choiceDialogHeader_kb7iz_467",
	choiceDialogSub: "_choiceDialogSub_kb7iz_481",
	choiceDialogEyebrow: "_choiceDialogEyebrow_kb7iz_487",
	choiceDialogClose: "_choiceDialogClose_kb7iz_495",
	choiceTimeline: "_choiceTimeline_kb7iz_506",
	choiceStep: "_choiceStep_kb7iz_512",
	choiceStepMarker: "_choiceStepMarker_kb7iz_523",
	choiceStepBody: "_choiceStepBody_kb7iz_542",
	choiceDialogChips: "_choiceDialogChips_kb7iz_550",
	choiceDialogChip: "_choiceDialogChip_kb7iz_550",
	detailBlock: "_detailBlock_kb7iz_568",
	detailHeader: "_detailHeader_kb7iz_578",
	choiceDialogMeta: "_choiceDialogMeta_kb7iz_590",
	statusSelectWrap: "_statusSelectWrap_kb7iz_597",
	notesComposer: "_notesComposer_kb7iz_609",
	noteInput: "_noteInput_kb7iz_614",
	noteAction: "_noteAction_kb7iz_631",
	noteInlineButton: "_noteInlineButton_kb7iz_632",
	noteEditActions: "_noteEditActions_kb7iz_657",
	notesPanel: "_notesPanel_kb7iz_663",
	noteCard: "_noteCard_kb7iz_671",
	noteMeta: "_noteMeta_kb7iz_678",
	noteBody: "_noteBody_kb7iz_690",
	notesSentinel: "_notesSentinel_kb7iz_697",
	toast: "_toast_kb7iz_701",
	toastError: "_toastError_kb7iz_715"
};
//#endregion
//#region app/admin-dashboard/LeadDetailsDialog.tsx
var import_jsx_runtime = require_jsx_runtime();
function formatChoice(values) {
	return values && values.length ? values : ["Not specified"];
}
function formatReadiness(value) {
	if (value === "has-brief") return ["Has a brief"];
	if (value === "needs-ideas") return ["Needs ideas"];
	return ["Historical submission"];
}
function prettyStatus(status) {
	return status === "contacted" ? "Contacted" : "Not contacted";
}
function LeadDetailsDialog({ leadId, leadName, leadStatus, choices }) {
	const dialogRef = (0, import_react.useRef)(null);
	const noteAreaRef = (0, import_react.useRef)(null);
	const moreTriggerRef = (0, import_react.useRef)(null);
	const [status, setStatus] = (0, import_react.useState)(leadStatus);
	const [toast, setToast] = (0, import_react.useState)(null);
	const [notes, setNotes] = (0, import_react.useState)([]);
	const [notesCursor, setNotesCursor] = (0, import_react.useState)(null);
	const [notesLoading, setNotesLoading] = (0, import_react.useState)(false);
	const [notesReady, setNotesReady] = (0, import_react.useState)(false);
	const [noteDraft, setNoteDraft] = (0, import_react.useState)("");
	const [editingNoteId, setEditingNoteId] = (0, import_react.useState)(null);
	const [editingValue, setEditingValue] = (0, import_react.useState)("");
	const [savingNote, setSavingNote] = (0, import_react.useState)(false);
	const loadMoreRootRef = (0, import_react.useRef)(null);
	const choiceSections = (0, import_react.useMemo)(() => {
		const current = [
			{
				step: "01",
				label: "Capabilities",
				values: formatChoice(choices.capabilities)
			},
			{
				step: "02",
				label: "Readiness",
				values: formatReadiness(choices.projectReadiness)
			},
			{
				step: "03",
				label: "Installation",
				values: [choices.installationIncluded ? "Included" : "Historical / not recorded"]
			}
		];
		if (choices.serviceScope?.length) current.push({
			step: "H1",
			label: "Historical scope",
			values: choices.serviceScope
		});
		if (choices.projectStage?.length) current.push({
			step: "H2",
			label: "Historical stage",
			values: choices.projectStage
		});
		return current;
	}, [choices]);
	function showToast(message, tone = "success") {
		setToast({
			message,
			tone
		});
		window.setTimeout(() => {
			setToast((current) => current?.message === message ? null : current);
		}, 2200);
	}
	const loadNotes = (0, import_react.useCallback)(async (cursor) => {
		if (notesLoading) return;
		setNotesLoading(true);
		try {
			const url = new URL(`/api/admin/leads/${leadId}/notes`, window.location.origin);
			if (cursor) url.searchParams.set("cursor", cursor);
			url.searchParams.set("limit", "8");
			const response = await fetch(url);
			if (!response.ok) throw new Error("Failed to load notes");
			const data = await response.json();
			setNotes((current) => cursor ? [...current, ...data.notes] : data.notes);
			setNotesCursor(data.nextCursor ?? null);
			setNotesReady(true);
		} catch {
			showToast("Could not load notes", "error");
		} finally {
			setNotesLoading(false);
		}
	}, [leadId, notesLoading]);
	(0, import_react.useEffect)(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;
		const onCancel = (event) => {
			event.preventDefault();
			dialog.close();
		};
		dialog.addEventListener("cancel", onCancel);
		return () => dialog.removeEventListener("cancel", onCancel);
	}, []);
	(0, import_react.useEffect)(() => {
		const trigger = moreTriggerRef.current;
		const root = loadMoreRootRef.current;
		if (!trigger || !root || !dialogRef.current?.open) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting) && notesCursor && !notesLoading) loadNotes(notesCursor);
		}, {
			root,
			threshold: .1
		});
		observer.observe(trigger);
		return () => observer.disconnect();
	}, [
		loadNotes,
		notesCursor,
		notesLoading
	]);
	async function handleOpen() {
		dialogRef.current?.showModal();
		if (!notesReady) {
			setNotes([]);
			setNotesCursor(null);
			await loadNotes(null);
		}
	}
	async function updateStatus(nextStatus) {
		const previous = status;
		setStatus(nextStatus);
		try {
			const body = new FormData();
			body.set("status", nextStatus);
			if (!(await fetch(`/api/admin/leads/${leadId}/status`, {
				method: "PATCH",
				body
			})).ok) throw new Error("status");
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
			const response = await fetch(`/api/admin/leads/${leadId}/notes`, {
				method: "POST",
				body: formData
			});
			if (!response.ok) throw new Error("note");
			const data = await response.json();
			setNotes((current) => [data.note, ...current]);
			setNoteDraft("");
			noteAreaRef.current?.focus();
			showToast("Note added");
		} catch {
			showToast("Could not add note", "error");
		} finally {
			setSavingNote(false);
		}
	}
	async function saveNote(noteId) {
		const body = editingValue.trim();
		if (!body) return;
		setSavingNote(true);
		try {
			const formData = new FormData();
			formData.set("body", body);
			const response = await fetch(`/api/admin/lead-notes/${noteId}`, {
				method: "PATCH",
				body: formData
			});
			if (!response.ok) throw new Error("note");
			const data = await response.json();
			setNotes((current) => current.map((note) => note.id === noteId ? data.note : note));
			setEditingNoteId(null);
			showToast("Note updated");
		} catch {
			showToast("Could not update note", "error");
		} finally {
			setSavingNote(false);
		}
	}
	async function deleteNote(noteId) {
		setSavingNote(true);
		try {
			if (!(await fetch(`/api/admin/lead-notes/${noteId}`, { method: "DELETE" })).ok) throw new Error("note");
			setNotes((current) => current.filter((note) => note.id !== noteId));
			showToast("Note deleted");
		} catch {
			showToast("Could not delete note", "error");
		} finally {
			setSavingNote(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		className: admin_dashboard_module_default.selectionButton,
		type: "button",
		onClick: () => void handleOpen(),
		children: ["Open lead", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dialog", {
		className: admin_dashboard_module_default.choiceDialog,
		ref: dialogRef,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			method: "dialog",
			className: admin_dashboard_module_default.choiceDialogShell,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: admin_dashboard_module_default.choiceDialogHeader,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: admin_dashboard_module_default.choiceDialogEyebrow,
							children: "Lead overview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: leadName }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: admin_dashboard_module_default.choiceDialogSub,
							children: prettyStatus(status)
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: admin_dashboard_module_default.choiceDialogClose,
						type: "submit",
						"aria-label": "Close dialog",
						children: "×"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: admin_dashboard_module_default.choiceTimeline,
					children: choiceSections.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: admin_dashboard_module_default.choiceStep,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: admin_dashboard_module_default.choiceStepMarker,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.step }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: admin_dashboard_module_default.choiceStepBody,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: admin_dashboard_module_default.choiceDialogChips,
								children: item.values.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: admin_dashboard_module_default.choiceDialogChip,
									children: value
								}, value))
							})]
						})]
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: admin_dashboard_module_default.detailBlock,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: admin_dashboard_module_default.detailHeader,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: admin_dashboard_module_default.choiceDialogEyebrow,
							children: "Status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Update lead state" })] }), toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `${admin_dashboard_module_default.toast} ${toast.tone === "error" ? admin_dashboard_module_default.toastError : ""}`,
							children: toast.message
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: admin_dashboard_module_default.statusSelectWrap,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Current status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: admin_dashboard_module_default.statusSelect,
							value: status,
							onChange: (event) => void updateStatus(event.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "not_contacted",
								children: "Not contacted"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "contacted",
								children: "Contacted"
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: admin_dashboard_module_default.detailBlock,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: admin_dashboard_module_default.detailHeader,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: admin_dashboard_module_default.choiceDialogEyebrow,
								children: "Notes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Lead notes" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: admin_dashboard_module_default.choiceDialogMeta,
								children: [notes.length, " loaded"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: admin_dashboard_module_default.notesComposer,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								ref: noteAreaRef,
								className: admin_dashboard_module_default.noteInput,
								rows: 4,
								value: noteDraft,
								onChange: (event) => setNoteDraft(event.target.value),
								placeholder: "Add a private note..."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: admin_dashboard_module_default.noteAction,
								type: "button",
								onClick: () => void addNote(),
								disabled: savingNote,
								children: "Add note"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: admin_dashboard_module_default.notesPanel,
							ref: loadMoreRootRef,
							children: [
								notes.map((note) => {
									const isEditing = editingNoteId === note.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: admin_dashboard_module_default.noteCard,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: admin_dashboard_module_default.noteMeta,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: new Intl.DateTimeFormat("en-GB", {
												dateStyle: "medium",
												timeStyle: "short"
											}).format(new Date(note.createdAt)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: admin_dashboard_module_default.noteInlineButton,
												type: "button",
												onClick: () => {
													setEditingNoteId(note.id);
													setEditingValue(note.body);
												},
												children: "Edit"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: admin_dashboard_module_default.noteInlineButton,
												type: "button",
												onClick: () => void deleteNote(note.id),
												children: "Delete"
											})] })]
										}), isEditing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: admin_dashboard_module_default.notesComposer,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												className: admin_dashboard_module_default.noteInput,
												rows: 4,
												value: editingValue,
												onChange: (event) => setEditingValue(event.target.value)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: admin_dashboard_module_default.noteEditActions,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: admin_dashboard_module_default.noteAction,
													type: "button",
													onClick: () => void saveNote(note.id),
													disabled: savingNote,
													children: "Save note"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													className: admin_dashboard_module_default.noteInlineButton,
													type: "button",
													onClick: () => setEditingNoteId(null),
													children: "Cancel"
												})]
											})]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: admin_dashboard_module_default.noteBody,
											children: note.body
										})]
									}, note.id);
								}),
								notesCursor ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									ref: moreTriggerRef,
									className: admin_dashboard_module_default.notesSentinel
								}) : null,
								notesLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: admin_dashboard_module_default.choiceDialogMeta,
									children: "Loading more notes..."
								}) : null
							]
						})
					]
				})
			]
		})
	})] });
}
//#endregion
export { LeadDetailsDialog };
