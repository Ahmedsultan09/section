type InquiryStatus = "received" | "notified" | "notification_pending" | "attachment_failed";

export type InquiryRecord = {
  id: string;
  createdAt: Date;
  status: InquiryStatus;
  locale: "en" | "ar";
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  preferredContact: string;
  sector: string;
  projectName: string;
  location: string;
  projectStage: string;
  capabilities: string;
  serviceScope: string;
  scale: string;
  drawingsStatus: string;
  roleDetail?: string | null;
  targetDelivery: string;
  budgetBand: string;
  procurementStatus: string;
  decisionTimeline: string;
  brief: string;
  consent: boolean;
  sourceIp?: string | null;
  userAgent?: string | null;
  notificationError?: string | null;
};

export type InquiryAttachmentRecord = {
  id: string;
  inquiryId: string;
  storageKey: string;
  originalName: string;
  mimeType: string;
  bytes: number;
  createdAt: Date;
  file: File;
};

type InquiryStore = {
  inquiries: Map<string, InquiryRecord>;
  attachments: Map<string, InquiryAttachmentRecord>;
};

function getStore(): InquiryStore {
  const globalScope = globalThis as typeof globalThis & { __sectionInquiryStore?: InquiryStore };
  globalScope.__sectionInquiryStore ??= {
    inquiries: new Map<string, InquiryRecord>(),
    attachments: new Map<string, InquiryAttachmentRecord>(),
  };
  return globalScope.__sectionInquiryStore;
}

export function saveInquiry(record: InquiryRecord) {
  getStore().inquiries.set(record.id, record);
  return record;
}

export function patchInquiry(id: string, patch: Partial<InquiryRecord>) {
  const store = getStore();
  const existing = store.inquiries.get(id);
  if (!existing) return undefined;
  const updated = { ...existing, ...patch };
  store.inquiries.set(id, updated);
  return updated;
}

export function saveInquiryAttachment(record: InquiryAttachmentRecord) {
  getStore().attachments.set(record.storageKey, record);
  return record;
}

export function getInquiryAttachment(storageKey: string) {
  return getStore().attachments.get(storageKey);
}
