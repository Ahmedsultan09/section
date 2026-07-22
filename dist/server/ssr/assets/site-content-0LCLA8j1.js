//#region lib/site-content.ts
var sectors = [
	{
		slug: "residential-developments",
		label: {
			en: "Residential developments",
			ar: "المشروعات السكنية"
		}
	},
	{
		slug: "hospitality",
		label: {
			en: "Hospitality",
			ar: "الضيافة"
		}
	},
	{
		slug: "workplace",
		label: {
			en: "Workplace",
			ar: "مساحات العمل"
		}
	},
	{
		slug: "retail-public",
		label: {
			en: "Retail & public spaces",
			ar: "التجزئة والمساحات العامة"
		}
	}
];
var mediaAssets = [
	{
		id: "asset-living-01",
		src: "/assets/141202_527604.jpeg",
		sourceFolder: "Legacy site",
		sourceName: "141202_527604.jpeg",
		projectSlug: "residential-joinery-study",
		sector: "residential-developments",
		capabilities: ["living-rooms", "custom-units"],
		stage: "finished",
		authenticity: "unknown",
		rights: "pending",
		orientation: "landscape",
		quality: "hero",
		usage: "hero",
		alt: {
			en: "Warm residential interior with custom wood elements",
			ar: "مساحة سكنية دافئة بعناصر خشبية مصممة خصيصاً"
		}
	},
	{
		id: "asset-wall-01",
		src: "/assets/171467_688502.jpeg",
		sourceFolder: "Legacy site",
		sourceName: "171467_688502.jpeg",
		projectSlug: "residential-joinery-study",
		sector: "residential-developments",
		capabilities: ["wall-cladding", "living-rooms"],
		stage: "finished",
		authenticity: "unknown",
		rights: "pending",
		orientation: "landscape",
		quality: "hero",
		usage: "project",
		alt: {
			en: "Integrated wall cladding and media joinery",
			ar: "تكسية حائط ووحدة وسائط مدمجة"
		}
	},
	{
		id: "asset-unit-01",
		src: "/assets/217375_739589.jpeg",
		sourceFolder: "Legacy site",
		sourceName: "217375_739589.jpeg",
		projectSlug: "residential-joinery-study",
		sector: "residential-developments",
		capabilities: ["custom-units", "dressing-rooms"],
		stage: "detail",
		authenticity: "unknown",
		rights: "pending",
		orientation: "portrait",
		quality: "editorial",
		usage: "project",
		alt: {
			en: "Detail of a fitted storage system",
			ar: "تفصيلة من نظام تخزين مدمج"
		}
	},
	{
		id: "asset-door-01",
		src: "/assets/412078_605141.jpeg",
		sourceFolder: "Legacy site",
		sourceName: "412078_605141.jpeg",
		projectSlug: "architectural-doors-study",
		sector: "workplace",
		capabilities: ["doors", "wall-cladding"],
		stage: "finished",
		authenticity: "unknown",
		rights: "pending",
		orientation: "portrait",
		quality: "hero",
		usage: "project",
		alt: {
			en: "Architectural timber door and wall treatment",
			ar: "باب خشبي معماري ومعالجة متكاملة للحائط"
		}
	},
	{
		id: "asset-bedroom-01",
		src: "/assets/474743_155959.jpg",
		sourceFolder: "Legacy site",
		sourceName: "474743_155959.jpg",
		projectSlug: "hospitality-room-study",
		sector: "hospitality",
		capabilities: [
			"bedrooms",
			"custom-units",
			"dressing-rooms"
		],
		stage: "finished",
		authenticity: "unknown",
		rights: "pending",
		orientation: "landscape",
		quality: "hero",
		usage: "project",
		alt: {
			en: "Bedroom package with coordinated timber furniture",
			ar: "غرفة نوم بحزمة أثاث خشبي متناسقة"
		}
	},
	{
		id: "asset-process-01",
		src: "/assets/805180_442982.jpeg",
		sourceFolder: "Legacy site",
		sourceName: "805180_442982.jpeg",
		projectSlug: "workplace-joinery-study",
		sector: "workplace",
		capabilities: ["custom-units", "materials-finishes"],
		stage: "process",
		authenticity: "unknown",
		rights: "pending",
		orientation: "landscape",
		quality: "editorial",
		usage: "process",
		alt: {
			en: "Joinery work during fabrication",
			ar: "أعمال النجارة خلال التصنيع"
		}
	},
	{
		id: "asset-detail-01",
		src: "/assets/891416_45535.jpg",
		sourceFolder: "Legacy site",
		sourceName: "891416_45535.jpg",
		projectSlug: "hospitality-room-study",
		sector: "hospitality",
		capabilities: ["materials-finishes", "bedrooms"],
		stage: "detail",
		authenticity: "unknown",
		rights: "pending",
		orientation: "landscape",
		quality: "editorial",
		usage: "project",
		alt: {
			en: "Material and furniture detail",
			ar: "تفصيلة خامات وأثاث"
		}
	}
];
function getMedia(id) {
	return mediaAssets.find((asset) => asset.id === id) ?? mediaAssets[0];
}
var capabilities = [
	{
		slug: "kitchens",
		number: "01",
		title: {
			en: "Kitchens",
			ar: "المطابخ"
		},
		short: {
			en: "Made-to-fit kitchens planned for everyday use and demanding project schedules.",
			ar: "مطابخ مصممة للمقاس تجمع الاستخدام اليومي مع متطلبات برامج المشاريع."
		},
		intro: {
			en: "Complete kitchen environments coordinated with appliances, services, worktops and site conditions before production begins.",
			ar: "بيئات مطابخ متكاملة تُنسق مع الأجهزة والخدمات وأسطح العمل وظروف الموقع قبل بدء التصنيع."
		},
		applications: [
			{
				en: "Residential developments",
				ar: "المشروعات السكنية"
			},
			{
				en: "Serviced residences",
				ar: "الوحدات الفندقية"
			},
			{
				en: "Hospitality",
				ar: "الضيافة"
			}
		],
		materials: [
			{
				en: "Moisture-resistant boards",
				ar: "ألواح مقاومة للرطوبة"
			},
			{
				en: "Natural veneers",
				ar: "القشرة الطبيعية"
			},
			{
				en: "Durable hardware",
				ar: "إكسسوارات عالية التحمل"
			}
		],
		process: [
			{
				en: "Layout coordination",
				ar: "تنسيق المخطط"
			},
			{
				en: "Sample approval",
				ar: "اعتماد العينة"
			},
			{
				en: "Sequenced installation",
				ar: "التركيب المرحلي"
			}
		],
		image: "asset-unit-01"
	},
	{
		slug: "dressing-rooms",
		number: "02",
		title: {
			en: "Dressing Rooms",
			ar: "غرف الملابس"
		},
		short: {
			en: "Storage systems shaped around people, unit types and daily routines.",
			ar: "أنظمة تخزين تتشكل حول المستخدم ونمط الوحدة وروتين الحياة اليومي."
		},
		intro: {
			en: "Wardrobes and dressing rooms developed as complete systems with considered internals, finishes, hardware and lighting.",
			ar: "خزائن وغرف ملابس تُطوّر كنظم متكاملة تشمل التقسيمات والتشطيبات والإكسسوارات والإضاءة."
		},
		applications: [
			{
				en: "Walk-in rooms",
				ar: "غرف ملابس داخلية"
			},
			{
				en: "Built-in wardrobes",
				ar: "خزائن مدمجة"
			},
			{
				en: "Hospitality storage",
				ar: "تخزين الضيافة"
			}
		],
		materials: [
			{
				en: "Textured laminates",
				ar: "لامينيت محبب"
			},
			{
				en: "Painted finishes",
				ar: "تشطيبات دهان"
			},
			{
				en: "Glass and metal details",
				ar: "تفاصيل زجاج ومعدن"
			}
		],
		process: [
			{
				en: "Internal planning",
				ar: "تخطيط التقسيمات"
			},
			{
				en: "Hardware selection",
				ar: "اختيار الإكسسوارات"
			},
			{
				en: "Quality inspection",
				ar: "فحص الجودة"
			}
		],
		image: "asset-unit-01"
	},
	{
		slug: "living-rooms",
		number: "03",
		title: {
			en: "Living Spaces",
			ar: "مساحات المعيشة"
		},
		short: {
			en: "Wall features, storage and furniture composed as one interior language.",
			ar: "حوائط مميزة وتخزين وأثاث تتكوّن كلغة داخلية واحدة."
		},
		intro: {
			en: "Living spaces bring fitted joinery, wall treatments and custom furniture together in one calm, coordinated composition.",
			ar: "تجمع مساحات المعيشة النجارة المدمجة ومعالجات الحوائط والأثاث المخصص في تكوين هادئ ومتناغم."
		},
		applications: [
			{
				en: "Residential lounges",
				ar: "صالات المعيشة"
			},
			{
				en: "Reception spaces",
				ar: "مساحات الاستقبال"
			},
			{
				en: "Hospitality suites",
				ar: "الأجنحة الفندقية"
			}
		],
		materials: [
			{
				en: "Natural veneer",
				ar: "قشرة طبيعية"
			},
			{
				en: "Painted timber",
				ar: "خشب مدهون"
			},
			{
				en: "Metal and upholstery details",
				ar: "تفاصيل معدن وتنجيد"
			}
		],
		process: [
			{
				en: "Composition study",
				ar: "دراسة التكوين"
			},
			{
				en: "Detail coordination",
				ar: "تنسيق التفاصيل"
			},
			{
				en: "Final installation",
				ar: "التركيب النهائي"
			}
		],
		image: "asset-living-01"
	},
	{
		slug: "custom-units",
		number: "04",
		title: {
			en: "Custom Units",
			ar: "الوحدات المخصصة"
		},
		short: {
			en: "Purpose-built pieces engineered once and produced with consistency.",
			ar: "قطع مصممة لغرض محدد تُهندس مرة وتُنتج بجودة متسقة."
		},
		intro: {
			en: "Media units, storage, reception pieces and fitted elements developed around drawings, services and real site tolerances.",
			ar: "وحدات وسائط وتخزين واستقبال وعناصر مدمجة تُطوّر وفق الرسومات والخدمات وسماحات الموقع الفعلية."
		},
		applications: [
			{
				en: "Media units",
				ar: "وحدات الوسائط"
			},
			{
				en: "Integrated storage",
				ar: "التخزين المدمج"
			},
			{
				en: "Reception joinery",
				ar: "نجارة الاستقبال"
			}
		],
		materials: [
			{
				en: "Plywood and MDF",
				ar: "الأبلكاش وMDF"
			},
			{
				en: "Veneers and laminates",
				ar: "القشرة واللامينيت"
			},
			{
				en: "Integrated hardware",
				ar: "الإكسسوارات المدمجة"
			}
		],
		process: [
			{
				en: "Site verification",
				ar: "مراجعة الموقع"
			},
			{
				en: "Prototype and sample",
				ar: "النموذج والعينة"
			},
			{
				en: "Controlled production",
				ar: "الإنتاج المنضبط"
			}
		],
		image: "asset-wall-01"
	},
	{
		slug: "bedrooms",
		number: "05",
		title: {
			en: "Bedrooms",
			ar: "غرف النوم"
		},
		short: {
			en: "Coordinated room packages with storage, furniture and crafted details.",
			ar: "حزم غرف متناسقة تجمع التخزين والأثاث والتفاصيل المصنوعة بعناية."
		},
		intro: {
			en: "Beds, night units, wardrobes and wall details developed together for repeatable residential and hospitality rooms.",
			ar: "أسرة ووحدات جانبية وخزائن وتفاصيل حوائط تُطوّر معاً لغرف سكنية وفندقية قابلة للتكرار."
		},
		applications: [
			{
				en: "Residential bedrooms",
				ar: "غرف النوم السكنية"
			},
			{
				en: "Hotel rooms",
				ar: "الغرف الفندقية"
			},
			{
				en: "Serviced apartments",
				ar: "الشقق الفندقية"
			}
		],
		materials: [
			{
				en: "Timber veneer",
				ar: "قشرة خشبية"
			},
			{
				en: "Upholstery",
				ar: "التنجيد"
			},
			{
				en: "Integrated lighting details",
				ar: "تفاصيل إضاءة مدمجة"
			}
		],
		process: [
			{
				en: "Room-type study",
				ar: "دراسة نموذج الغرفة"
			},
			{
				en: "Prototype review",
				ar: "مراجعة النموذج"
			},
			{
				en: "Package installation",
				ar: "تركيب الحزمة"
			}
		],
		image: "asset-bedroom-01"
	},
	{
		slug: "wall-cladding",
		number: "06",
		title: {
			en: "Wall cladding",
			ar: "تكسية الحوائط"
		},
		short: {
			en: "Integrated timber surfaces that conceal, protect and define space.",
			ar: "أسطح خشبية متكاملة تخفي وتحمي وتحدد هوية المكان."
		},
		intro: {
			en: "Feature walls, service panels and coordinated cladding designed around joints, access, acoustics and adjacent finishes.",
			ar: "حوائط مميزة وألواح خدمات وتكسيات منسقة وفق الفواصل وفتحات الصيانة والصوتيات والتشطيبات المجاورة."
		},
		applications: [
			{
				en: "Lobbies",
				ar: "الردهات"
			},
			{
				en: "Media walls",
				ar: "حوائط الوسائط"
			},
			{
				en: "Circulation areas",
				ar: "مسارات الحركة"
			}
		],
		materials: [
			{
				en: "Veneered panels",
				ar: "ألواح مكسوة بالقشرة"
			},
			{
				en: "Fluted profiles",
				ar: "قطاعات مخددة"
			},
			{
				en: "Acoustic substrates",
				ar: "طبقات صوتية"
			}
		],
		process: [
			{
				en: "Setting-out",
				ar: "تحديد المحاور"
			},
			{
				en: "Panel coordination",
				ar: "تنسيق الألواح"
			},
			{
				en: "Protected installation",
				ar: "التركيب والحماية"
			}
		],
		image: "asset-wall-01"
	},
	{
		slug: "doors",
		number: "07",
		title: {
			en: "Architectural Doors",
			ar: "الأبواب المعمارية"
		},
		short: {
			en: "Complete door sets coordinated with walls, hardware and site tolerances.",
			ar: "مجموعات أبواب متكاملة ومنسقة مع الحوائط والإكسسوارات وسماحات الموقع."
		},
		intro: {
			en: "Each door is developed as a complete assembly: leaf, frame, architrave, hardware preparation, finish and installation sequence.",
			ar: "يُطوّر كل باب كمجموعة متكاملة تشمل الضلفة والحلق والحليات وتجهيز الإكسسوارات والتشطيب وتسلسل التركيب."
		},
		applications: [
			{
				en: "Apartment entrances",
				ar: "مداخل الوحدات"
			},
			{
				en: "Internal doors",
				ar: "الأبواب الداخلية"
			},
			{
				en: "Concealed doors",
				ar: "الأبواب المخفية"
			}
		],
		materials: [
			{
				en: "Natural veneer",
				ar: "قشرة طبيعية"
			},
			{
				en: "Painted timber",
				ar: "خشب مدهون"
			},
			{
				en: "Specified door cores",
				ar: "قلوب أبواب حسب المواصفات"
			}
		],
		process: [
			{
				en: "Opening review",
				ar: "مراجعة الفتحات"
			},
			{
				en: "Hardware coordination",
				ar: "تنسيق الإكسسوارات"
			},
			{
				en: "Final adjustment",
				ar: "الضبط النهائي"
			}
		],
		image: "asset-door-01"
	},
	{
		slug: "materials-finishes",
		number: "08",
		title: {
			en: "Materials & Finishes",
			ar: "الخامات والتشطيبات"
		},
		short: {
			en: "A working finish library refined through samples, approvals and quality checks.",
			ar: "مكتبة تشطيبات عملية تتطور عبر العينات والاعتمادات وفحوص الجودة."
		},
		intro: {
			en: "Boards, veneers, laminates, paints and hardware are selected for the way each space will look, work and age.",
			ar: "تُختار الألواح والقشرة واللامينيت والدهانات والإكسسوارات وفق شكل المساحة واستخدامها وكيف ستتطور مع الزمن."
		},
		applications: [
			{
				en: "Finish schedules",
				ar: "جداول التشطيبات"
			},
			{
				en: "Material boards",
				ar: "لوحات الخامات"
			},
			{
				en: "Project mock-ups",
				ar: "نماذج المشروع"
			}
		],
		materials: [
			{
				en: "Natural veneers",
				ar: "القشرة الطبيعية"
			},
			{
				en: "Technical laminates",
				ar: "اللامينيت التقني"
			},
			{
				en: "Paint and hardware systems",
				ar: "أنظمة الدهان والإكسسوارات"
			}
		],
		process: [
			{
				en: "Material shortlist",
				ar: "قائمة الخامات"
			},
			{
				en: "Sample approval",
				ar: "اعتماد العينة"
			},
			{
				en: "Finish control",
				ar: "ضبط التشطيب"
			}
		],
		image: "asset-detail-01"
	}
];
var projects = [
	{
		slug: "sodic-collaboration",
		title: {
			en: "SODIC Collaboration",
			ar: "تعاون مع سوديك"
		},
		sector: "residential-developments",
		sectorLabel: sectors[0].label,
		location: {
			en: "Egypt",
			ar: "مصر"
		},
		year: "—",
		client: {
			en: "SODIC",
			ar: "سوديك"
		},
		clientVisibility: "approved",
		verificationStatus: "partial",
		verificationNote: {
			en: "The client name and broad work categories are approved for this preview; detailed project facts remain under review.",
			ar: "اسم العميل وفئات العمل العامة معتمدة لهذه المعاينة، بينما تظل تفاصيل المشروع قيد المراجعة."
		},
		summary: {
			en: "Interior work, custom woodwork and furniture delivered as a coordinated project package.",
			ar: "أعمال داخلية ونجارة مخصصة وأثاث ضمن حزمة مشروع منسقة."
		},
		scope: {
			en: "Interior work, woodwork and furniture. Quantities, locations and programme are intentionally omitted until verified.",
			ar: "أعمال داخلية ونجارة وأثاث. تم استبعاد الكميات والمواقع والبرنامج الزمني حتى التحقق منها."
		},
		responsibilities: [
			{
				en: "Interior work",
				ar: "أعمال داخلية"
			},
			{
				en: "Custom woodwork",
				ar: "نجارة مخصصة"
			},
			{
				en: "Furniture",
				ar: "أثاث"
			}
		],
		materials: [],
		outcome: {
			en: "Selected collaboration shown without unsupported metrics or claims.",
			ar: "تعاون مختار معروض دون أرقام أو ادعاءات غير موثقة."
		},
		capabilities: [
			"custom-units",
			"wall-cladding",
			"bedrooms"
		],
		media: [
			"asset-wall-01",
			"asset-living-01",
			"asset-unit-01"
		],
		collaboratorIds: []
	},
	{
		slug: "ora-collaboration",
		title: {
			en: "ORA Collaboration",
			ar: "تعاون مع أورا"
		},
		sector: "residential-developments",
		sectorLabel: sectors[0].label,
		location: {
			en: "Egypt",
			ar: "مصر"
		},
		year: "—",
		client: {
			en: "ORA",
			ar: "أورا"
		},
		clientVisibility: "approved",
		verificationStatus: "pending",
		verificationNote: {
			en: "The client name is approved for this preview. Scope details are pending confirmation.",
			ar: "اسم العميل معتمد لهذه المعاينة، وتفاصيل نطاق العمل في انتظار التأكيد."
		},
		summary: {
			en: "A selected collaboration presented while the detailed project record is being organized.",
			ar: "تعاون مختار يُعرض بينما يجري تنظيم سجل المشروع التفصيلي."
		},
		scope: {
			en: "Selected collaboration. Detailed scope, locations, quantities and outcomes are not yet published.",
			ar: "تعاون مختار. لم يتم بعد نشر النطاق التفصيلي أو المواقع أو الكميات أو النتائج."
		},
		responsibilities: [],
		materials: [],
		outcome: {
			en: "Project information will expand as verified material is approved.",
			ar: "ستتوسع معلومات المشروع مع اعتماد المواد الموثقة."
		},
		capabilities: [
			"kitchens",
			"dressing-rooms",
			"custom-units"
		],
		media: [
			"asset-bedroom-01",
			"asset-door-01",
			"asset-detail-01"
		],
		collaboratorIds: []
	},
	{
		slug: "residential-joinery-study",
		title: {
			en: "Residential Joinery Study",
			ar: "دراسة نجارة لمشروع سكني"
		},
		sector: "residential-developments",
		sectorLabel: sectors[0].label,
		location: {
			en: "Greater Cairo",
			ar: "القاهرة الكبرى"
		},
		year: "—",
		client: {
			en: "Confidential developer",
			ar: "مطور عقاري — سري"
		},
		clientVisibility: "pending",
		verificationNote: {
			en: "Editorial study. Client attribution and project facts are pending approval.",
			ar: "دراسة تحريرية. اسم العميل وبيانات المشروع في انتظار الاعتماد."
		},
		summary: {
			en: "A coordinated language of wall cladding, integrated storage and furniture for repeatable residential interiors.",
			ar: "لغة متناسقة من تكسيات الحوائط والتخزين المدمج والأثاث للمساحات السكنية القابلة للتكرار."
		},
		scope: {
			en: "Design coordination, detailed joinery development, manufacturing and installation planning.",
			ar: "تنسيق التصميم وتطوير تفاصيل النجارة والتصنيع وتخطيط التركيب."
		},
		responsibilities: [
			{
				en: "Technical development",
				ar: "التطوير الفني"
			},
			{
				en: "Joinery manufacturing",
				ar: "تصنيع النجارة"
			},
			{
				en: "Installation coordination",
				ar: "تنسيق التركيب"
			}
		],
		materials: [{
			en: "Natural veneer",
			ar: "قشرة طبيعية"
		}, {
			en: "Moisture-resistant MDF",
			ar: "MDF مقاوم للرطوبة"
		}],
		outcome: {
			en: "A coherent package designed to move from approved sample to controlled production.",
			ar: "حزمة متماسكة مصممة للانتقال من العينة المعتمدة إلى إنتاج مضبوط."
		},
		capabilities: [
			"wall-cladding",
			"custom-units",
			"living-rooms"
		],
		media: [
			"asset-wall-01",
			"asset-unit-01",
			"asset-living-01"
		]
	},
	{
		slug: "hospitality-room-study",
		title: {
			en: "Hospitality Room Package",
			ar: "حزمة غرفة ضيافة"
		},
		sector: "hospitality",
		sectorLabel: sectors[1].label,
		location: {
			en: "Egypt",
			ar: "مصر"
		},
		year: "—",
		client: {
			en: "Confidential hospitality client",
			ar: "عميل ضيافة — سري"
		},
		clientVisibility: "pending",
		verificationNote: {
			en: "Editorial study. Scope and photography require final verification.",
			ar: "دراسة تحريرية. النطاق والصور يحتاجان إلى مراجعة نهائية."
		},
		summary: {
			en: "A room-level package aligning bed, storage, surfaces and details under one manufacturing logic.",
			ar: "حزمة متكاملة للغرفة توحد السرير والتخزين والأسطح والتفاصيل ضمن منطق تصنيع واحد."
		},
		scope: {
			en: "Prototype-led development for coordinated room furniture and fitted joinery.",
			ar: "تطوير قائم على النموذج الأولي لأثاث الغرف والنجارة المدمجة."
		},
		responsibilities: [
			{
				en: "Prototype development",
				ar: "تطوير النموذج"
			},
			{
				en: "Furniture manufacturing",
				ar: "تصنيع الأثاث"
			},
			{
				en: "Finish control",
				ar: "ضبط التشطيبات"
			}
		],
		materials: [{
			en: "Timber veneer",
			ar: "قشرة خشبية"
		}, {
			en: "Upholstery coordination",
			ar: "تنسيق التنجيد"
		}],
		outcome: {
			en: "A repeatable room language ready for sample review and production planning.",
			ar: "لغة غرف قابلة للتكرار وجاهزة لمراجعة العينة وتخطيط الإنتاج."
		},
		capabilities: [
			"bedrooms",
			"custom-units",
			"dressing-rooms"
		],
		media: ["asset-bedroom-01", "asset-detail-01"]
	},
	{
		slug: "workplace-joinery-study",
		title: {
			en: "Workplace Joinery Study",
			ar: "دراسة نجارة لمساحة عمل"
		},
		sector: "workplace",
		sectorLabel: sectors[2].label,
		location: {
			en: "Cairo",
			ar: "القاهرة"
		},
		year: "—",
		client: {
			en: "Confidential workplace client",
			ar: "عميل مساحات عمل — سري"
		},
		clientVisibility: "pending",
		verificationNote: {
			en: "Editorial study. Project details are intentionally anonymized.",
			ar: "دراسة تحريرية. تم إخفاء بيانات المشروع عمداً."
		},
		summary: {
			en: "Architectural timber elements developed around daily use, services and site sequencing.",
			ar: "عناصر خشبية معمارية مطورة وفق الاستخدام اليومي والخدمات وتسلسل أعمال الموقع."
		},
		scope: {
			en: "Technical review, fabrication planning and coordination with adjacent trades.",
			ar: "مراجعة فنية وتخطيط التصنيع والتنسيق مع التخصصات المجاورة."
		},
		responsibilities: [
			{
				en: "Technical review",
				ar: "المراجعة الفنية"
			},
			{
				en: "Fabrication planning",
				ar: "تخطيط التصنيع"
			},
			{
				en: "Site coordination",
				ar: "تنسيق الموقع"
			}
		],
		materials: [{
			en: "Engineered timber",
			ar: "أخشاب مُصنّعة"
		}, {
			en: "Durable laminate",
			ar: "لامينيت عالي التحمل"
		}],
		outcome: {
			en: "A buildable joinery package organized for clearer approvals and site delivery.",
			ar: "حزمة نجارة قابلة للتنفيذ ومنظمة لاعتمادات وتسليم أوضح."
		},
		capabilities: ["custom-units", "doors"],
		media: ["asset-process-01", "asset-door-01"]
	},
	{
		slug: "architectural-doors-study",
		title: {
			en: "Architectural Doors Study",
			ar: "دراسة أبواب معمارية"
		},
		sector: "retail-public",
		sectorLabel: sectors[3].label,
		location: {
			en: "Egypt",
			ar: "مصر"
		},
		year: "—",
		client: {
			en: "Confidential project",
			ar: "مشروع سري"
		},
		clientVisibility: "pending",
		verificationNote: {
			en: "Editorial study. Final door specifications are pending confirmation.",
			ar: "دراسة تحريرية. مواصفات الأبواب النهائية في انتظار التأكيد."
		},
		summary: {
			en: "Door assemblies and adjacent timber surfaces considered as one architectural system.",
			ar: "مجموعات الأبواب والأسطح الخشبية المجاورة كنظام معماري واحد."
		},
		scope: {
			en: "Opening review, frame and leaf development, finish coordination and installation sequencing.",
			ar: "مراجعة الفتحات وتطوير الحلق والضلفة وتنسيق التشطيب وتسلسل التركيب."
		},
		responsibilities: [
			{
				en: "Door-set development",
				ar: "تطوير مجموعة الباب"
			},
			{
				en: "Hardware coordination",
				ar: "تنسيق الإكسسوارات"
			},
			{
				en: "Installation",
				ar: "التركيب"
			}
		],
		materials: [{
			en: "Veneered timber",
			ar: "خشب مكسو بالقشرة"
		}, {
			en: "Metal hardware",
			ar: "إكسسوارات معدنية"
		}],
		outcome: {
			en: "A coordinated assembly intended to reduce late site adjustments.",
			ar: "مجموعة منسقة تهدف إلى تقليل التعديلات المتأخرة في الموقع."
		},
		capabilities: ["doors", "wall-cladding"],
		media: ["asset-door-01", "asset-wall-01"]
	}
];
var processSteps = [
	{
		number: "01",
		title: {
			en: "Concept & briefing",
			ar: "الفكرة والمتطلبات"
		},
		text: {
			en: "We define the ambition, scope, quantities, programme and site realities in one decisive working brief.",
			ar: "نحدد الطموح والنطاق والكميات والبرنامج وواقع الموقع في موجز عمل واضح وحاسم."
		},
		image: "asset-living-01"
	},
	{
		number: "02",
		title: {
			en: "Design & sketching",
			ar: "التصميم والرسم"
		},
		text: {
			en: "Sketches, materials and technical decisions turn the brief into a buildable direction ready for approval.",
			ar: "تحول الرسومات والخامات والقرارات الفنية المتطلبات إلى اتجاه قابل للتنفيذ وجاهز للاعتماد."
		},
		image: "asset-wall-01"
	},
	{
		number: "03",
		title: {
			en: "Manufacturing",
			ar: "التصنيع"
		},
		text: {
			en: "Approved information moves through fabrication, assembly, finish control and documented quality checks.",
			ar: "تنتقل المعلومات المعتمدة عبر التصنيع والتجميع وضبط التشطيب وفحوص الجودة الموثقة."
		},
		image: "asset-process-01"
	},
	{
		number: "04",
		title: {
			en: "Installation",
			ar: "التركيب"
		},
		text: {
			en: "Protected delivery and sequenced site installation bring every coordinated element into its final position.",
			ar: "يجمع التسليم المحمي والتركيب المتسلسل في الموقع كل عنصر منسق في موضعه النهائي."
		},
		image: "asset-door-01"
	}
];
//#endregion
export { sectors as a, projects as i, getMedia as n, processSteps as r, capabilities as t };
