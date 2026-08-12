import type { MediaAsset, ProjectArea } from "./site-types";

const sourceFolderId = "1bX0LcksoN1DGEKnkmpm8NHk0opmyhNlH";

const linkedPhotoNames = [
  "1st.heif",
  "2nd.heif",
  "3rd.heif",
  "4th.heif",
  "5th.heif",
  "6th.heif",
  "7th.heif",
  "8th.heif",
  "9th.heif",
  "10th.JPG",
  "11th.heif",
  "12.heif",
  "13.heif",
  "14.heif",
  "15.heif",
  "16.heif",
  "17.heif",
  "18.heif",
  "19.heif",
  "20.heif",
  "21.heif",
  "22.jpeg",
] as const;

const linkedPhotoDriveIds = [
  "1xPeTXFg-xcJ1GkdexvfdfoqK-WnYqvKf",
  "1Dj6-62XiZ9dxnD7uApIMlstCFsffKwpj",
  "1td7HICem8_FqBtefI83X4pI7eR3yR7er",
  "1VlU6fmb8NyNiheFve9cA5yb9beUaAyZs",
  "1owwTF_Hm0tEiq9vRPCut3OolgUUYB6jF",
  "1nQVIs0HrUZocbK_kAFP4Pzv6_5A7z93b",
  "16xqlTylg7YN1cQadibz65YxU6Hwlw2KK",
  "1s5H0J7xM8PFNsQCvb2B3bWW67ntZeBDK",
  "1Mx1q9SIefnRY4z0hT6TErI2oBc_JuJfO",
  "14AkfwafXdz-KWHyeQDv5pKTnSc31tFg0",
  "1V_9BaObbG-cfPlRSFzAm9PZccNmqhoG_",
  "1j7lrWjtSJxwMnwFSRD9p7VrWmmt2mvN2",
  "1cIMxg18Lc6mEkxCoTJ2NXzTOF89T5WPP",
  "1A0VFg0Ku6m-boIBBq3Ma0o8jroRyFQty",
  "17pvhp9DFC3UP5iqfB8c5ysszqBkDS_jI",
  "12CIWUaVrRhmjdobnMfbSya6ydnNWPL71",
  "1CGnRvy2lHLM2uJLrE5O2leAIU4ZcL19t",
  "1QLEos8q2g3TwDo6A9CrQ_zH_f2Eb2U2G",
  "1Wj2UlTJdw1pMxJq8TPo9pcW2T7qDc7YZ",
  "1rdEM67i9SjOeMVT2ZLpcz-EzYODOqkGy",
  "1VtNimUkqMW69Nap3VbiTzb1o_IeqmyLV",
  "1RtFvDb9xpdAq-pm_2IlFO0ZY-fEV1K6U",
] as const;

const linkedPhotoAreas: ProjectArea[] = [
  "cover",
  "rooms",
  "units",
  "bedroom",
  "detail",
  "wall",
  "bedroom",
  "detail",
  "detail",
  "dressing",
  "dressing-detail",
  "dressing-detail",
  "bedroom",
  "bedroom",
  "dressing",
  "dressing-detail",
  "dressing-detail",
  "dressing-detail",
  "dressing-detail",
  "dressing-detail",
  "doors",
  "other",
];

const captionSets = [
  {
    en: "A warm Playa living room where soft light meets a precise timber wall.",
    ar: "مساحة معيشة دافئة في بلايا يلتقي فيها الضوء الناعم بحائط خشبي دقيق.",
  },
  {
    en: "A second view of the living package, composed around shadow, texture and line.",
    ar: "منظور ثانٍ لحزمة المعيشة يتكوّن حول الظل والخامة والخط.",
  },
  {
    en: "Media joinery and storage are resolved as one quiet architectural plane.",
    ar: "تتجمع نجارة الوسائط والتخزين في سطح معماري هادئ واحد.",
  },
  {
    en: "A bedroom composition balancing timber, upholstered forms and controlled light.",
    ar: "تكوين لغرفة نوم يوازن بين الخشب والأشكال المنجدة والضوء المنضبط.",
  },
  {
    en: "A close study of the crafted surface language carried through the room.",
    ar: "دراسة قريبة للغة الأسطح المصنوعة بعناية والممتدة عبر الغرفة.",
  },
  {
    en: "Fine wall detailing brings function and warmth to the Playa interior.",
    ar: "تمنح تفاصيل الحائط الدقيقة الوظيفة والدفء لداخل بلايا.",
  },
  {
    en: "Built-in furniture and bedside details align into one continuous rhythm.",
    ar: "تنتظم قطع الأثاث المدمجة وتفاصيل السرير في إيقاع واحد متصل.",
  },
  {
    en: "A threshold between spaces, held together by light, proportion and joinery.",
    ar: "عتبة بين المساحات تجمعها الإضاءة والنسب والنجارة.",
  },
  {
    en: "A close view of Playa’s fitted pieces, hardware and considered edges.",
    ar: "لقطة قريبة للعناصر المدمجة والتجهيزات والحواف المدروسة في بلايا.",
  },
  {
    en: "Dressing storage is treated as a complete room rather than a collection of units.",
    ar: "تُعامل غرفة الملابس كمساحة متكاملة لا كمجموعة من الوحدات فقط.",
  },
  {
    en: "Timber internals and hardware are organized for daily use and easy access.",
    ar: "تُنظم التقسيمات الداخلية الخشبية والتجهيزات للاستخدام اليومي وسهولة الوصول.",
  },
  {
    en: "A drawer and shelf detail showing the precision behind the finished room.",
    ar: "تفصيلة درج ورف توضح الدقة خلف الغرفة المكتملة.",
  },
  {
    en: "The bedroom package continues the same measured language through colour and light.",
    ar: "تواصل حزمة غرفة النوم اللغة المدروسة نفسها عبر اللون والضوء.",
  },
  {
    en: "A quiet headboard composition with integrated detail and softened material contrast.",
    ar: "تكوين هادئ لرأس السرير بتفاصيل مدمجة وتباين خامات ناعم.",
  },
  {
    en: "Glass-fronted storage turns the dressing room into a carefully lit display.",
    ar: "يحوّل التخزين ذو الواجهات الزجاجية غرفة الملابس إلى عرض مضاء بعناية.",
  },
  {
    en: "Internal planning keeps every shelf, rail and drawer legible at a glance.",
    ar: "يجعل التخطيط الداخلي كل رف وقضيب ودرج واضحاً من النظرة الأولى.",
  },
  {
    en: "A wardrobe interior where the detail is designed for both order and touch.",
    ar: "داخل خزانة صُممت تفاصيله للنظام وللاستخدام باللمس.",
  },
  {
    en: "Materials, lighting and storage meet in a calm dressing-room vignette.",
    ar: "تلتقي الخامات والإضاءة والتخزين في لقطة هادئة لغرفة الملابس.",
  },
  {
    en: "A final look at the dressing package before the sequence returns to the room.",
    ar: "نظرة أخيرة على حزمة غرفة الملابس قبل عودة التسلسل إلى الغرفة.",
  },
  {
    en: "A measured wardrobe rhythm carries the Playa language across the private rooms.",
    ar: "يحمل إيقاع الخزانة المدروس لغة بلايا عبر الغرف الخاصة.",
  },
  {
    en: "An entry detail where the door, frame and surrounding finish read as one set.",
    ar: "تفصيلة مدخل يقرأ فيها الباب والحلق والتشطيب المحيط كمجموعة واحدة.",
  },
  {
    en: "The exterior threshold closes the sequence with a quiet, crafted arrival.",
    ar: "تغلق العتبة الخارجية التسلسل بوصول هادئ ومصنوع بعناية.",
  },
] as const;

const capabilitiesFor = (area: ProjectArea) => {
  if (area === "dressing" || area === "dressing-detail") return ["dressing-rooms", "custom-units"] as const;
  if (area === "bedroom") return ["bedrooms", "custom-units"] as const;
  if (area === "doors") return ["doors", "wall-cladding"] as const;
  if (area === "wall") return ["wall-cladding", "custom-units"] as const;
  return ["living-rooms", "custom-units"] as const;
};

export const playaLinkedMedia: MediaAsset[] = linkedPhotoNames.map((sourceName, index) => {
  const number = String(index + 1).padStart(2, "0");
  const id = `playa-linked-${number}`;
  const area = linkedPhotoAreas[index];
  const caption = captionSets[index];

  return {
    id,
    src: `/drive/projects/selected/playa-linked/playa-linked-${number}.webp`,
    sourceFolder: "PLAYA / linked photo set",
    sourceFolderId,
    sourceName,
    projectSlug: "playa",
    sector: "residential-developments",
    capabilities: [...capabilitiesFor(area)],
    stage: "finished",
    authenticity: "verified-real",
    rights: "approved",
    orientation: "portrait",
    quality: area === "cover" ? "hero" : "editorial",
    usage: "project",
    alt: caption,
    driveFileId: linkedPhotoDriveIds[index],
    originalMime: sourceName.toLowerCase().endsWith(".jpeg") || sourceName.toLowerCase().endsWith(".jpg") ? "image/jpeg" : "image/heif",
    derived: { webp: `/drive/projects/selected/playa-linked/playa-linked-${number}.webp` },
    publishStatus: "public",
    area,
  } satisfies MediaAsset;
});
