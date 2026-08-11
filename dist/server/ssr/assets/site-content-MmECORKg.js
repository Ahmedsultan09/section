//#region lib/drive-assets.ts
var SODIC_SOURCE_FOLDER_ID = "11gkeSNomh8jBKdBZKJ3Hed0k5tQViUlS";
var HYDE_PARK_SOURCE_FOLDER_ID = "1-P-ia4hCmDsLPVi_ilzt40IELPK6_S1t";
var MATERIAL_BRANDS_SOURCE_FOLDER_ID = "1Zxpk16-Um3Y9pDDq99vuabCQYmssTt6a";
[
	[
		"egger",
		"Egger",
		"17zkVnxD7b12afB4__TtrRkPLEzPwcIN1",
		"01",
		"ba74f930e36007b85d1cfa5c4de905f7f52471b73f7bc0a8d1b80eecce56b0cd",
		"light"
	],
	[
		"egypt-panel",
		"Egypt Panel",
		"1A1iPlQVbhfIn0BQ4AoRX2kmmg6aMltsU",
		"02",
		"fa4e0000aa4d429ecd1faef14c3a1bbff2466bea578767023c3c49d974e9223a",
		"light"
	],
	[
		"starwood",
		"Starwood",
		"1xS0yye2y21_7hWetvfjplEfUUbiD9Hdz",
		"03",
		"17fe07d2bcc7ad9ef51dddc66c9e3b280bde462f0c59b718be23a3f26e79f25f",
		"light"
	],
	[
		"kastamonu",
		"Kastamonu",
		"1Wz4F2syDGQIsEYSO3d9gBYbF18p98PS2",
		"04",
		"1a6ebd7cdaed117bb1492976af1c1ab1debeafae169d796335900b2690042cb4",
		"light"
	],
	[
		"gizir",
		"Gizir",
		"1v7gZJ2Zk8VdeagJWP4A-axZHfKb-h-Bl",
		"06",
		"7557d2f052e115352810d44533bff81700d08fe6831319c3e8ac010d65e0cd2f",
		"light"
	],
	[
		"salomil",
		"Salomil",
		"1qKfq6o8abkmM5FJU_hhGnmzvqAR_Blzt",
		"07",
		"6266e9987eb038b37e298d8cff62cba49f5fbe34d5f28aff4655f088e200fb5c",
		"light"
	],
	[
		"saviola",
		"Saviola",
		"1FiXNj8eA5ebTuoXVRr6i8G9NNH9bNG7D",
		"08",
		"832e86ef68f4b7490c5751829f0f344bcf7d22e5c80753dde6b004c0c1d2fdfb",
		"dark"
	],
	[
		"blum",
		"Blum",
		"1LAIjW26BAff8b_I-aiQu5_ti3ALz11BC",
		"09",
		"54ae10f7e0284511a4095fd32bf74148aeeff3ced24f185669206d547e7b6169",
		"light"
	],
	[
		"mesan",
		"Mesan Furniture Equipment",
		"1mEfssvpLyGIFKqXbfrhqIVDD4p8ZuT1w",
		"10",
		"3d08b59366ff360c03287d9439dda63698296afc4ed45b86ca32791a2fc4157e",
		"light"
	]
].map(([id, name, driveFileId, number, contentHash, preferredSurface]) => ({
	id,
	name,
	driveFileId,
	sourceFolderId: MATERIAL_BRANDS_SOURCE_FOLDER_ID,
	contentHash,
	approval: "approved",
	src: `/drive/material-brands/material-brand-${number}.png`,
	preferredSurface
}));
var sodicMediaAssets = [
	[
		"01",
		"IMG_0524.HEIC",
		"1m9P-Vt8V3n9Dsdn9II8ji_vMIbVULEl4",
		"e9399c50590f7dc114aaaf3db7f2da6ddf76549b6eb559c2a2c7ea9edf817aac",
		"A timber staircase with glass balustrade",
		"سلم خشبي بدرابزين زجاجي"
	],
	[
		"02",
		"IMG_0522.HEIC",
		"1DTphNqAJhJyoaf87DuInu05K3CDjUaDv",
		"6c668e993ae9b3f41381e00fe2f4244d200566fc354ca9731f32b1806322b362",
		"Integrated timber television wall and cabinetry",
		"حائط تلفزيون وخزائن خشبية مدمجة"
	],
	[
		"03",
		"IMG_0515.HEIC",
		"1zNP89LynCQ8VHwChuAkXivPWrW5FxS7R",
		"53efb928669677a55785bcf228695c790ad981b1a8f49e2e21d54f03f2bf5d07",
		"Compact fitted kitchen and timber door",
		"مطبخ مدمج وباب خشبي"
	],
	[
		"04",
		"IMG_0518.HEIC",
		"1YW_ppjuQ42-VJZaToohGLjNILcG_rJIL",
		"637cc6365370aa399e713fe411965cef09cfd054b42314a624b1265434766d10",
		"Timber feature wall in a residential interior",
		"حائط خشبي مميز في مساحة سكنية"
	],
	[
		"05",
		"IMG_0520.HEIC",
		"1wcwLoJX-gAEEt2gyX2Bvg4hHDiNvzrSc",
		"9a601a9e12215cd95553e15d166478b57d72e1dffe5cfc4ccd0592a0f8ea15d3",
		"Dining area with coordinated timber details",
		"منطقة طعام بتفاصيل خشبية منسقة"
	],
	[
		"06",
		"IMG_0517.HEIC",
		"1zV9r6xH02r-jWUyukvmsVN_UMzhaVjE_",
		"ecee9c88211c34fd2d211252f747192b7c1be1c9c8dacc75a4de6a9658f91c84",
		"Residential dining room with fitted timber work",
		"غرفة طعام سكنية بأعمال خشبية مدمجة"
	],
	[
		"07",
		"IMG_0523.HEIC",
		"1MgSdmRUjs8QavgC-NVFbIOJWssbxGCfU",
		"d8b4d1c9e21d5e80871a9c3c352564167b787ff91caf67466b33331227d599af",
		"Full-height timber shelving and display wall",
		"مكتبة وحائط عرض خشبي بارتفاع كامل"
	],
	[
		"08",
		"IMG_0525.HEIC",
		"1se5IiFty4Aq5gtpXLSWjBKmOM1gpvZsa",
		"fdc5c5eb763d45d35b70c5ce66d054149a2d47eab08951e0c365fc354a4ba403",
		"Timber wall cladding along a residential hall",
		"تكسية حائط خشبية في ممر سكني"
	],
	[
		"09",
		"IMG_0526.HEIC",
		"153Cn-ENFwIRjWxOM9c7LBhmlxcccJz6i",
		"7bdcb6d49406a888c26122966ecac47cb54fefafdf3d6923b0751c97475484fe",
		"Timber cladding detail beside a staircase",
		"تفصيل تكسية خشبية بجوار سلم"
	]
].map(([number, sourceName, driveFileId, contentHash, en, ar]) => ({
	id: `sodic-drive-${number}`,
	src: `/drive/projects/sodic-ahmed-elsheref/sodic-${number}.webp`,
	sourceFolder: "Sodic Ahmed elsheref",
	sourceFolderId: SODIC_SOURCE_FOLDER_ID,
	sourceName,
	projectSlug: "sodic-collaboration",
	sector: "residential-developments",
	capabilities: [
		"custom-units",
		"wall-cladding",
		"living-rooms"
	],
	stage: "finished",
	authenticity: "verified-real",
	rights: "approved",
	orientation: number === "06" ? "landscape" : "portrait",
	quality: number === "06" ? "hero" : "editorial",
	usage: "project",
	alt: {
		en,
		ar
	},
	driveFileId,
	originalMime: "image/heic",
	contentHash,
	derived: {
		webp: `/drive/projects/sodic-ahmed-elsheref/sodic-${number}.webp`,
		avif: `/drive/projects/sodic-ahmed-elsheref/sodic-${number}.avif`
	},
	publishStatus: "public"
}));
var hydeParkMediaAssets = [
	[
		"01",
		"IMG_6731.HEIC",
		"1aD2z7kpl5x0XU0x6mLqVbo0U-K1P_ZUY",
		"b7d4d3b446fa0769b2b31ee15d8f560f20f8bbf6b900ca038bf44934b63c7385",
		"Wide view of a glossy white kitchen with a walnut counter",
		"منظور واسع لمطبخ أبيض لامع مع سطح من خشب الجوز",
		"landscape"
	],
	[
		"02",
		"IMG_6722.HEIC",
		"1deym7-BZRB5HsvTLA9P0z9Hpt1csHZTK",
		"0555f201bee0c693184b7f849b4e19462ccbcd973edce03e164fcef8aed1580f",
		"White kitchen island beside the living area",
		"جزيرة مطبخ بيضاء بجوار مساحة المعيشة",
		"portrait"
	],
	[
		"03",
		"IMG_6717.HEIC",
		"1at1I3jvFVhaNtbA8-fvPAbTZDwdXCU6q",
		"88c5656d8e6e01b1f9404e33f80ed77469cebedc902bb7dc1191d502a6791e74",
		"Full-height white kitchen cabinetry with black integrated appliances",
		"خزائن مطبخ بيضاء بارتفاع كامل مع أجهزة سوداء مدمجة",
		"landscape"
	],
	[
		"04",
		"IMG_6726.HEIC",
		"1i9wuVQl9d0yDPtkpLiyv-dQSm55Txh2X",
		"68c75c112f01c2e0c5eb23b8cf44ec4d2e041fa8d67a2538c9b22c6c72c00c93",
		"White kitchen islands with walnut work surfaces",
		"جزر مطبخ بيضاء بأسطح عمل من خشب الجوز",
		"landscape"
	],
	[
		"05",
		"IMG_6712.HEIC",
		"1hXWLasXz302JmMDSwpMrWfdzsIyXrBS2",
		"74915028997dce8372e1256cc5a3a5c728b43411549c3b6d32cfa6964d8c6982",
		"Front view of the completed white island kitchen",
		"منظور أمامي للمطبخ الأبيض المكتمل ذي الجزيرة",
		"landscape"
	],
	[
		"06",
		"IMG_6715.HEIC",
		"1Stl8xxMkdlcP_dE2YU3SN5EmNHDjiYiB",
		"4d0021f569924edba096140b6c6fd2454fe590cfa9b62f3a37b2e8a2d5682be4",
		"Glossy white cabinetry framing a walnut breakfast counter",
		"خزائن بيضاء لامعة تحيط بسطح إفطار من خشب الجوز",
		"landscape"
	],
	[
		"07",
		"IMG_6713.HEIC",
		"1mh6bEWV1lcQbU6LNllM-gpEFEqZjQTp6",
		"d0c3a93e99e26d1e4026e7177e0ffb8b05f03ba51e41d2bf2271dbfb6edc51d5",
		"Walnut-edged cooking island facing integrated white cabinetry",
		"جزيرة طهي بحافة من خشب الجوز أمام خزائن بيضاء مدمجة",
		"portrait"
	]
].map(([number, sourceName, driveFileId, contentHash, en, ar, orientation]) => ({
	id: `white-island-kitchen-${number}`,
	src: `/drive/projects/white-island-kitchen/white-island-kitchen-${number}.webp`,
	sourceFolder: "Hyde Park",
	sourceFolderId: HYDE_PARK_SOURCE_FOLDER_ID,
	sourceName,
	projectSlug: "hyde-park",
	sector: "residential-developments",
	capabilities: ["kitchens", "custom-units"],
	stage: "finished",
	authenticity: "verified-real",
	rights: "approved",
	orientation,
	quality: number === "01" ? "hero" : "editorial",
	usage: "project",
	alt: {
		en,
		ar
	},
	driveFileId,
	originalMime: "image/heif",
	contentHash,
	derived: {
		webp: `/drive/projects/white-island-kitchen/white-island-kitchen-${number}.webp`,
		avif: `/drive/projects/white-island-kitchen/white-island-kitchen-${number}.avif`
	},
	publishStatus: "public"
}));
var sodicVideoPosters = [{
	id: "sodic-video-01",
	driveFileId: "1sXahXE3x6Me9n5NO0-43VzHvsmi1AsAa",
	sourceFolderId: SODIC_SOURCE_FOLDER_ID,
	contentHash: "720d49f7052a3c5f3de90da5facf20652281e6f8bf0139ea1cf0b420a073e971",
	approval: "approved",
	sourceName: "IMG_0168.MOV",
	poster: "/drive/projects/sodic-ahmed-elsheref/sodic-01-video-poster.webp"
}, {
	id: "sodic-video-02",
	driveFileId: "1Um3CARs8u0n3eeLvPx5TbWnpvFGbDln_",
	sourceFolderId: SODIC_SOURCE_FOLDER_ID,
	contentHash: "983380d2e21c3ffd476219ef5accea7b367e7807147e45d81b298d43c67bdc87",
	approval: "approved",
	sourceName: "IMG_0202.MOV",
	poster: "/drive/projects/sodic-ahmed-elsheref/sodic-02-video-poster.webp"
}];
//#endregion
//#region lib/generated-dressing-drive-assets.json
var generated_dressing_drive_assets_default = /* @__PURE__ */ JSON.parse("[{\"id\":\"dressing-01-01\",\"driveFileId\":\"1QDRFfD6h9xy80KEiDT8onwGTRZ5IlUw6\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1EBo-nIxqiEiQAK8r7VIkBqzaxqtH9v4w\",\"sourceFolderName\":\"Dressing 1 (sodic vilette)\",\"imageOrder\":1,\"sourceName\":\"IMG_0343.heif\",\"localSrc\":\"/drive/dressing/dressing-01-01.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"4ae85a30e5b5f5981d701a8cb95e654f9507accba90a1f833e93049374441bb3\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-01-02\",\"driveFileId\":\"1zasUfaNCnj2HYylnu2f8YqePtBxiG_hD\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1EBo-nIxqiEiQAK8r7VIkBqzaxqtH9v4w\",\"sourceFolderName\":\"Dressing 1 (sodic vilette)\",\"imageOrder\":2,\"sourceName\":\"IMG_0342.heif\",\"localSrc\":\"/drive/dressing/dressing-01-02.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ce84fc22befead4fe442c28f91ab1e68a9af33519aca1b3aa953d2148ae73976\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-01-03\",\"driveFileId\":\"1uQ5FGSolzgERdxpZJWGUNlbFJESQSuv7\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1EBo-nIxqiEiQAK8r7VIkBqzaxqtH9v4w\",\"sourceFolderName\":\"Dressing 1 (sodic vilette)\",\"imageOrder\":3,\"sourceName\":\"IMG_0287.heif\",\"localSrc\":\"/drive/dressing/dressing-01-03.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"7b77d152d8e0a5b45de4cfff138d7746c029bec643c9150d40b109b85ccf834e\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-01-04\",\"driveFileId\":\"1ubTjOGhrv6ovCuO2VyQ4ekqBFDlniAJH\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1EBo-nIxqiEiQAK8r7VIkBqzaxqtH9v4w\",\"sourceFolderName\":\"Dressing 1 (sodic vilette)\",\"imageOrder\":4,\"sourceName\":\"IMG_0340.heif\",\"localSrc\":\"/drive/dressing/dressing-01-04.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"e98d167f409f90e88dc9eb6627d7a3160d6ea168d3f4615548a1c9cef14d5a40\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-02-01\",\"driveFileId\":\"1eMqHxwTRBjJC7714kD8DxXJ_miW_ux29\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1OrhLiy6n10YaOcMErZBTVX_oVwP3b46-\",\"sourceFolderName\":\"Dressing 2 (Playa)\",\"imageOrder\":1,\"sourceName\":\"321c1d47-e7a4-472d-8101-438d81f6b601.jpg\",\"localSrc\":\"/drive/dressing/dressing-02-01.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"b9b764bd12008dd444379590c5a9739eea6f5eb355193b29ba16117ac497b4cf\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-02-02\",\"driveFileId\":\"18ConaFENfcvIHiZ_-tlT91RPzdtW2Lrm\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1OrhLiy6n10YaOcMErZBTVX_oVwP3b46-\",\"sourceFolderName\":\"Dressing 2 (Playa)\",\"imageOrder\":2,\"sourceName\":\"IMG_1291.PNG\",\"localSrc\":\"/drive/dressing/dressing-02-02.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"d2d1f41b2e8b1e098f04f565affe751b6fa03bdee3c56ce569d63249886bac84\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-02-03\",\"driveFileId\":\"1lg2SQ0ffqQhlgCEadbCROcZu5HAGQu-z\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1OrhLiy6n10YaOcMErZBTVX_oVwP3b46-\",\"sourceFolderName\":\"Dressing 2 (Playa)\",\"imageOrder\":3,\"sourceName\":\"30223268-a45c-4d92-8592-b4bbe584a906.jpg\",\"localSrc\":\"/drive/dressing/dressing-02-03.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"28820bf3512f5955e7728b06a3fe8e06bc3ea3abc26afacc30ca109259531cb2\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-03-01\",\"driveFileId\":\"1HjUBYyy5gAZtyhT89InRDgkb8braTSRf\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1ieWZ8B_wabeOZYpjtNZDvaZxvSDBSmnP\",\"sourceFolderName\":\"Dressing 3 (sodic)\",\"imageOrder\":1,\"sourceName\":\"IMG_0355.heif\",\"localSrc\":\"/drive/dressing/dressing-03-01.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"f4612315ad4516eec46c684ffcc63a319c72895cd79b5b54a9ba78cda2409ef5\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-03-02\",\"driveFileId\":\"1y4cBRPiOh0zKHZFv-0k3ZHJzrJZUvpTp\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1ieWZ8B_wabeOZYpjtNZDvaZxvSDBSmnP\",\"sourceFolderName\":\"Dressing 3 (sodic)\",\"imageOrder\":2,\"sourceName\":\"IMG_0352.heif\",\"localSrc\":\"/drive/dressing/dressing-03-02.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"8d4af249900952821f46623a96ed15eae369f8d50fd3caff275708c40c82b737\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-03-03\",\"driveFileId\":\"1KEdRJaSCYQZHXIytcssjkTVfG2yZMkAb\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1ieWZ8B_wabeOZYpjtNZDvaZxvSDBSmnP\",\"sourceFolderName\":\"Dressing 3 (sodic)\",\"imageOrder\":3,\"sourceName\":\"IMG_9547.heif\",\"localSrc\":\"/drive/dressing/dressing-03-03.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"c51723ca497641651295c189af330fbfe6d4a5f7005be93b6525ddca63ed2e35\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-03-04\",\"driveFileId\":\"1FFd31NBKrHyLO_izQ2sHhwjTv9ZzUvIM\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1ieWZ8B_wabeOZYpjtNZDvaZxvSDBSmnP\",\"sourceFolderName\":\"Dressing 3 (sodic)\",\"imageOrder\":4,\"sourceName\":\"IMG_0356.heif\",\"localSrc\":\"/drive/dressing/dressing-03-04.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"cedaf845b533213d55abd5f13021a3c41d0777748eeda1229e80a503bf5f0c08\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-03-05\",\"driveFileId\":\"1cDwIwEkp2PIKudiKPjJAZWlQgNuEEoKD\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1ieWZ8B_wabeOZYpjtNZDvaZxvSDBSmnP\",\"sourceFolderName\":\"Dressing 3 (sodic)\",\"imageOrder\":5,\"sourceName\":\"IMG_0357.heif\",\"localSrc\":\"/drive/dressing/dressing-03-05.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"8da0950e0fbc41998c4429a904611538482fffafaeb5a978665b8f8fdb033177\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-03-06\",\"driveFileId\":\"1d740lm_pxcIlJ1X98Nlsy0x9vMVLAjHL\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1ieWZ8B_wabeOZYpjtNZDvaZxvSDBSmnP\",\"sourceFolderName\":\"Dressing 3 (sodic)\",\"imageOrder\":6,\"sourceName\":\"IMG_0353.heif\",\"localSrc\":\"/drive/dressing/dressing-03-06.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"7cccc794f7630c32bf2a08e7894d918ebf3f2dd8e8f0eaaebfa83ed51d41cc44\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-04-01\",\"driveFileId\":\"1p-lgPa4M-ki-QOEBUqjBy_ZwpctKeIsj\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs\",\"sourceFolderName\":\"Dressing 4 (New Cairo)\",\"imageOrder\":1,\"sourceName\":\"IMG_0094.HEIC\",\"localSrc\":\"/drive/dressing/dressing-04-01.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"f308868c27aabadc86b7589255f2b45d8680cba185ffe769921bad7624aa882e\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-04-02\",\"driveFileId\":\"1R2UC1McUloTQipzbC8SMV15m76cnO5Kg\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs\",\"sourceFolderName\":\"Dressing 4 (New Cairo)\",\"imageOrder\":2,\"sourceName\":\"IMG_0099.HEIC\",\"localSrc\":\"/drive/dressing/dressing-04-02.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"4b9cac38a2d53f013673c99d374355bbc587af4f5a32ab9e62084fd84b212cad\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-04-03\",\"driveFileId\":\"1PbPqPF1x9onYURULDeDlyGwo2fD-Ji4-\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs\",\"sourceFolderName\":\"Dressing 4 (New Cairo)\",\"imageOrder\":3,\"sourceName\":\"IMG_0106.HEIC\",\"localSrc\":\"/drive/dressing/dressing-04-03.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"bd3fa8b40683134c9268afc931191a67511da86f90e544f5d3228b5ea566ca61\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-04-04\",\"driveFileId\":\"1-hUAucXArkQCW235CRMtu0cecDStCK_j\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs\",\"sourceFolderName\":\"Dressing 4 (New Cairo)\",\"imageOrder\":4,\"sourceName\":\"IMG_0105.HEIC\",\"localSrc\":\"/drive/dressing/dressing-04-04.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"b83d7b54b9c06259b8546601019003992aa4111bddb508ad5c2d9f016235ee69\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-04-05\",\"driveFileId\":\"1exIaFzKBp5mZnjLJRSIuEdXe7WzPLock\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs\",\"sourceFolderName\":\"Dressing 4 (New Cairo)\",\"imageOrder\":5,\"sourceName\":\"IMG_0104.HEIC\",\"localSrc\":\"/drive/dressing/dressing-04-05.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"03bfa1c696f80ae480be3cef007d070458d93a49b46306f06be620f8c099014d\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-04-06\",\"driveFileId\":\"1CXJtiEwFys7JeQmLPuHrZi2jEmJiJ3DE\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs\",\"sourceFolderName\":\"Dressing 4 (New Cairo)\",\"imageOrder\":6,\"sourceName\":\"IMG_0103.HEIC\",\"localSrc\":\"/drive/dressing/dressing-04-06.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"eacbff82bb7414861d66727fe269c52268cffa59cf1c70aa340714459a3302b0\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-04-07\",\"driveFileId\":\"1Pp5ueVbshw6hCSdxLGh-bfRcZW8IQZnd\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs\",\"sourceFolderName\":\"Dressing 4 (New Cairo)\",\"imageOrder\":7,\"sourceName\":\"IMG_0097.HEIC\",\"localSrc\":\"/drive/dressing/dressing-04-07.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"5fe8c015fef53296be2060bfe0fb675380504d99d3405abe60e1e2ee46376c83\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-04-08\",\"driveFileId\":\"1Lxl32tvU8jxnmTYRHXGfVvq5q0_XInD1\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-g0FiIg9LNYi5zazhjvJV1Gz-FP5sQBs\",\"sourceFolderName\":\"Dressing 4 (New Cairo)\",\"imageOrder\":8,\"sourceName\":\"IMG_0102.HEIC\",\"localSrc\":\"/drive/dressing/dressing-04-08.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"f122868f43fbf9b5ae60c0314f7bc7f62973a5dd481aa2c0916c28813743eacf\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-collection-01\",\"driveFileId\":\"1tvrKnJ5UViC8T6Zw48GarZ_eMyuCRBLj\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK\",\"sourceFolderName\":\"Collection\",\"imageOrder\":1,\"sourceName\":\"1.JPG\",\"localSrc\":\"/drive/dressing/dressing-collection-01.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"332d6436e3ff33a2b8ed85cd654e87f34c48293c45387c080ef75742347f186d\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-collection-02\",\"driveFileId\":\"1e_C2o8BDOb6UVjxGVAevxT5hxU85XC72\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK\",\"sourceFolderName\":\"Collection\",\"imageOrder\":2,\"sourceName\":\"2.HEIC\",\"localSrc\":\"/drive/dressing/dressing-collection-02.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"0b4ab89a386de4e92c58b95ae23d6558a898bfd4d8703d0cb9d588cb4c3cce0c\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-collection-03\",\"driveFileId\":\"1K-SCs6f-cHuTBpSnFNw89YaOma4yNS5g\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK\",\"sourceFolderName\":\"Collection\",\"imageOrder\":3,\"sourceName\":\"IMG_2476.HEIC\",\"localSrc\":\"/drive/dressing/dressing-collection-03.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"33fc34f2aa18f83d7cefe4ed53ad200f26d653bca7c997741b30b8d5aaa2040f\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-collection-04\",\"driveFileId\":\"1me5mEA1oZ-doSr79KTKKdyaM6lKeHV7C\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK\",\"sourceFolderName\":\"Collection\",\"imageOrder\":4,\"sourceName\":\"4.PNG\",\"localSrc\":\"/drive/dressing/dressing-collection-04.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"2dad176fd2241d2c3d9d23ebcdf6ef4c4ed333cecaaedc81f9fcd67e04aa7dc0\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-collection-05\",\"driveFileId\":\"1JhM0vR8NCrYFBLGcYd6OE7ZeF7-yqRd3\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK\",\"sourceFolderName\":\"Collection\",\"imageOrder\":5,\"sourceName\":\"5.PNG\",\"localSrc\":\"/drive/dressing/dressing-collection-05.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"3d743b1cf16524b57a399cb5a0e7f0de36451b9fefd2204eb34229916d60faee\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-collection-06\",\"driveFileId\":\"12wqYTl-5qbbDvqsbScC9UKYdgeTuZJ7e\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK\",\"sourceFolderName\":\"Collection\",\"imageOrder\":6,\"sourceName\":\"6.JPG\",\"localSrc\":\"/drive/dressing/dressing-collection-06.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"22bc812c0dd6dd66bb67e28c5aa91e71be95c4c4818dd6cbc888ec0a675ba074\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-collection-07\",\"driveFileId\":\"1XU6uO_3fDUoxKmn63FVN4Dp-WqwueN9h\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK\",\"sourceFolderName\":\"Collection\",\"imageOrder\":7,\"sourceName\":\"7.PNG\",\"localSrc\":\"/drive/dressing/dressing-collection-07.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"56f90342b96894cff7fc747661ba3d536a718b7bda822c0cd5e2b6beffefeece\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-collection-08\",\"driveFileId\":\"1FbKgQqfqnf4rT9q4W_-huN_mP2rA-3a8\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK\",\"sourceFolderName\":\"Collection\",\"imageOrder\":8,\"sourceName\":\"8.HEIC\",\"localSrc\":\"/drive/dressing/dressing-collection-08.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"506b446a135b6e7ccb3d7468a6264fe3622379a7571ae399c29ed6ab346950d6\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-collection-09\",\"driveFileId\":\"1ak4BimvcwFk0yNbJRJ2zNz7bPdUCr5PE\",\"sourceRootId\":\"1_dw0o8qNZHWkhPizdv5ss0NUS66S4LNS\",\"sourceFolderId\":\"1-bil17AsCgA4AnUybCnlR_OOBv22Z-uK\",\"sourceFolderName\":\"Collection\",\"imageOrder\":9,\"sourceName\":\"9.HEIC\",\"localSrc\":\"/drive/dressing/dressing-collection-09.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"572486bbfcf0bc15c11385c1fae1d605b870a123e6c23f5ea72df8a2f43b00ca\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"}]");
//#endregion
//#region lib/generated-category-drive-assets.json
var generated_category_drive_assets_default = /* @__PURE__ */ JSON.parse("[{\"id\":\"kitchen-obour-01\",\"driveFileId\":\"1tMnbWs7EX6BLe6jYqL-SiorGf9hjT7bh\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"IMG_9414.PNG\",\"localSrc\":\"/drive/kitchens/kitchen-obour-01.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"eedaec17cbaadf8b40b8fda6da7710c97b70c7814c689e56ee309457d8df5f38\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-02\",\"driveFileId\":\"1k-fM110ILq-3U1kWzjcMZ5ET--E5pa64\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"IMG_9411.PNG\",\"localSrc\":\"/drive/kitchens/kitchen-obour-02.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"caa0a5d9de7f8ff39805add6c8d805be5d94a73eab7d98351552a4a1fe9545e1\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-03\",\"driveFileId\":\"16m4KwKCXQ-pBQNRO5r0Y_EZGkPG47KiH\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"IMG_9410.PNG\",\"localSrc\":\"/drive/kitchens/kitchen-obour-03.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"55f1b9dbb71199cf339930ec85fb930afe9cf666e56af29b898896a08d350876\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-04\",\"driveFileId\":\"1RfYwap6fxUHrgWci3hG_hDJeu5XDckRm\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"IMG_9413.PNG\",\"localSrc\":\"/drive/kitchens/kitchen-obour-04.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"22ca3841de77c996439edd84ae2601db9b4d5df7e499175f7710bb77fc117157\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-05\",\"driveFileId\":\"14_OuicIfdjPpdck1w_VNZx1TEKfM8o-z\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"IMG_9409.PNG\",\"localSrc\":\"/drive/kitchens/kitchen-obour-05.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"5c0e8e9843ae4eec7798d8fc4738f24860e2a58ee818f0354c0fcd77bda6f784\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-06\",\"driveFileId\":\"12lIlgCbnizWOvdIzHzN2Mtj8CbMiUHbz\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"IMG_9400.PNG\",\"localSrc\":\"/drive/kitchens/kitchen-obour-06.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"8f280fd9a6c5f045e2beb98af2be46f43cb376a69845cd015cf77da992871245\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-07\",\"driveFileId\":\"1UBkEXu_ECV2NBF-gtlSOP1u03H8mMieR\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"IMG_2525.heic\",\"localSrc\":\"/drive/kitchens/kitchen-obour-07.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ef6f23f6cc8d43a3282ce14edd59fbbc6adb2198d1b6cc579a28e6183213e3ef\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-08\",\"driveFileId\":\"1RZrjcWUzVNrRZK2mMy3E9U_4wIdcH8nT\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"IMG_2522.heic\",\"localSrc\":\"/drive/kitchens/kitchen-obour-08.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"a134841037593b83df95c48681dd38448121ce0767528084ab028e4e802beadf\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-09\",\"driveFileId\":\"1gMO0A3lPxMk2IIPU8IF3KWsKS8zKx8jp\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"IMG_2524.heic\",\"localSrc\":\"/drive/kitchens/kitchen-obour-09.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"cb71c230e3b73ba6a732d2295421144e4de3467daf047c08d897ec27585549a9\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-10\",\"driveFileId\":\"1tYDk-675SLhRo0iwdAiJbFKbUhFhqcS_\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"IMG_2532.heic\",\"localSrc\":\"/drive/kitchens/kitchen-obour-10.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"dc880e86afe6b91a5fd84aecb50cd269c650f210a0c2d390507d284fba74e895\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-11\",\"driveFileId\":\"195BQnO_OpS6KEj2C5gi1JLT7shSB00D9\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"IMG_2531.heic\",\"localSrc\":\"/drive/kitchens/kitchen-obour-11.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"b6eadb3f6634453abde8703cd9d27b6c1e6042917861b6cfd2d4d2f4c7b9294c\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-12\",\"driveFileId\":\"1Ta34gmWsUtoPApQRT4PzwdFF3oJVK-Rf\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"IMG_2526.heic\",\"localSrc\":\"/drive/kitchens/kitchen-obour-12.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"bf1ea293c9dc2f6bf78861d9327824796c1f0409bcea1cdb3203b15c2b1d5d28\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-13\",\"driveFileId\":\"1L5_wFTNZvTfuNl-d2tM7-x7Sqk9VZUCb\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"11f7c376-2d2d-4a0b-a9e3-b7e685b9688f.jpg\",\"localSrc\":\"/drive/kitchens/kitchen-obour-13.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"d00bdab5363bfbea75bbee1eed6f2c0f2f44440dad194d98666a9e4d6dd6f1b0\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-14\",\"driveFileId\":\"1Jl7jhjE97vVrwdMBdjIActz4rnK_It_G\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"IMG_2523.heic\",\"localSrc\":\"/drive/kitchens/kitchen-obour-14.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"f4fe66f870c9d456778cb792fab583ebd0927e35a6a09b65753fc6367bb0e5c4\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-15\",\"driveFileId\":\"1CMR8A03y12QW0ybFSQNzUU8jNdYnoWXF\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"IMG_2533.heic\",\"localSrc\":\"/drive/kitchens/kitchen-obour-15.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"35384ee327aa17e469efcf21a9037b1159b4fb36a04881e8fe847832b57b00eb\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-16\",\"driveFileId\":\"1kvmsNriLZ6K7q_Xof0sZYAMk-XgejZju\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"IMG_2534.heic\",\"localSrc\":\"/drive/kitchens/kitchen-obour-16.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"d2c87071574c902f7bb81b750c1dc77078653199f122c3b35c49c03ca6d52682\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-17\",\"driveFileId\":\"1mE1OXV3EjXHcPEyO5vuwtarSh1cVO-Ak\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"0600d022-fec8-4d34-b89b-9821362f7945.jpg\",\"localSrc\":\"/drive/kitchens/kitchen-obour-17.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"e0a95a5e7c7ddfb697589920cf2542018a1da2d1323d9a253af24112c04e833d\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-18\",\"driveFileId\":\"14pisp5kNa9xxBtgSLILZIxjWjv0iW0hL\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"6924bfbf-de99-476c-a4a2-3e5d2729ba38.jpg\",\"localSrc\":\"/drive/kitchens/kitchen-obour-18.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"b6e5a2a52e417e10b3a743bacc1e6728f112c8d9b21ad7a81c33da8477dc2dbf\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-19\",\"driveFileId\":\"1hHt5VnWsKZF1JGQL11dIWSixRMxAZKHf\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"dcdf6165-ef8f-4cba-a053-44f1562ac869.jpg\",\"localSrc\":\"/drive/kitchens/kitchen-obour-19.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"5444e551d276aa95914d9d35da3345d677bad9009f610ee0aa53ea6890e08d58\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-20\",\"driveFileId\":\"1EryUvaxMekl1CMnzfnEM1W1ykSZ4yaJQ\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"4a6b2691-fc4b-4141-9f6f-78751c1ee2bb.jpg\",\"localSrc\":\"/drive/kitchens/kitchen-obour-20.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"1215c082934e6ba245bf4b9920e3c2e9ad72de4d692a873b62528c9f3cda81ea\",\"orientation\":\"square\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-obour-21\",\"driveFileId\":\"1o-93Rgn7qFVMHkGl7aG5tYbYToOMGqi_\",\"sourceFolderId\":\"1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv\",\"sourceName\":\"89ed5665-3724-473f-8cf5-077c9968768c.jpg\",\"localSrc\":\"/drive/kitchens/kitchen-obour-21.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"ac1227b07d1771ecd44ddd43417fc7caa487245e508368a7b51d2fafffc714d4\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-edited-01\",\"driveFileId\":\"1r3k6rUhOa32JJ41h8qYbkyn8SlSlITlp\",\"sourceFolderId\":\"16eduRBCVDCB-Efrl1vb-gyVyhqGMLU_M\",\"sourceName\":\"IMG_0958.PNG\",\"localSrc\":\"/drive/kitchens/kitchen-edited-01.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"65c3dfe69618f73488a89a6460e3871ef93f150912bc11666ca57d3c9b256af6\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-edited-02\",\"driveFileId\":\"18xePK2OLwR42VvpiCk8oTl1jryEPw-x8\",\"sourceFolderId\":\"16eduRBCVDCB-Efrl1vb-gyVyhqGMLU_M\",\"sourceName\":\"IMG_0959.PNG\",\"localSrc\":\"/drive/kitchens/kitchen-edited-02.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"ddb18ff7c047e1309b49cead59e741625378a091cfea2ffae854024a5ca9dffa\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-edited-03\",\"driveFileId\":\"1ak1pREO34BmtMntEBWo8cJ7jYn_RS7ki\",\"sourceFolderId\":\"16eduRBCVDCB-Efrl1vb-gyVyhqGMLU_M\",\"sourceName\":\"IMG_0960.PNG\",\"localSrc\":\"/drive/kitchens/kitchen-edited-03.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"b420853703f969b5ebef35b07767191b10d96a1437e9c244f8d5f0a82bc64ee3\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-edited-04\",\"driveFileId\":\"12pf2SpwL6R2k-j40NFvBSdUd_-nuKQHM\",\"sourceFolderId\":\"16eduRBCVDCB-Efrl1vb-gyVyhqGMLU_M\",\"sourceName\":\"IMG_0961.PNG\",\"localSrc\":\"/drive/kitchens/kitchen-edited-04.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"ea8d1a8964260ff1a7b417568c6066715cf2bdf468b81a23ac52485362b8b798\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-edited-05\",\"driveFileId\":\"15aa3bVnj0p_VubvwkPC3vlfkx4B6kCm0\",\"sourceFolderId\":\"16eduRBCVDCB-Efrl1vb-gyVyhqGMLU_M\",\"sourceName\":\"IMG_0962.PNG\",\"localSrc\":\"/drive/kitchens/kitchen-edited-05.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"fb4c98ebd6b0df84c7447b657f85110ee9911ab5ecfa15702a5b2c4cae06e1fe\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"kitchen-edited-06\",\"driveFileId\":\"1bMQ4Blod_mQAzzM-D6CtdJyN-hCY960h\",\"sourceFolderId\":\"16eduRBCVDCB-Efrl1vb-gyVyhqGMLU_M\",\"sourceName\":\"IMG_0956.PNG\",\"localSrc\":\"/drive/kitchens/kitchen-edited-06.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"f62a40ac08bdbd95addd52fa6d2c6f8e2815109eb9aa8efb7620217dc822ee85\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-a-01\",\"driveFileId\":\"1NG0WV2PJxIRdVeIp1wHucpBuyoUs6apo\",\"sourceFolderId\":\"10VuQK5YjEqxIqCGeOYJDB8Fcg6hRQ_2j\",\"sourceName\":\"IMG_5857.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-a-01.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"d1f5456360c32fc5b8e8effa637d9ce0a4b7a4ea03f8c56a4c7ab89e3e01f78c\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-a-02\",\"driveFileId\":\"1U_h0qkyaXtlh2TaOQ-r75VJZxUBb5c5P\",\"sourceFolderId\":\"10VuQK5YjEqxIqCGeOYJDB8Fcg6hRQ_2j\",\"sourceName\":\"IMG_5865.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-a-02.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"8bf6a7fc473f33986a21f85986217357e15ca9c5516a4af2d45ba2a514ff24aa\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-a-03\",\"driveFileId\":\"1tC94OTyxyhoKVbzK_5wqb63iWS6GINh2\",\"sourceFolderId\":\"10VuQK5YjEqxIqCGeOYJDB8Fcg6hRQ_2j\",\"sourceName\":\"IMG_5946.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-a-03.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"f58d15bdd09a8778880bdf8403d463b528d4279c0bfcefcff0384bc9146c8c9a\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-a-04\",\"driveFileId\":\"1v1JEOOaTdC4jEO6UoblkNMAIpIr4an-m\",\"sourceFolderId\":\"10VuQK5YjEqxIqCGeOYJDB8Fcg6hRQ_2j\",\"sourceName\":\"IMG_5886.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-a-04.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"60b56ce6bfed1b8539596237daf5060b721258490be38137a1f38350341f519e\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-a-05\",\"driveFileId\":\"1aGFBwa0OuazJrhNjw4yPzcGqN9CHo0zg\",\"sourceFolderId\":\"10VuQK5YjEqxIqCGeOYJDB8Fcg6hRQ_2j\",\"sourceName\":\"IMG_5876.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-a-05.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"df7674468d61bcab4206660c575e36e69adeb12e6d42a7d2bf0c4f4fde20e2ab\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-a-06\",\"driveFileId\":\"1RcTHaewzbp0v-7bImFygjMw1rp-zNN-o\",\"sourceFolderId\":\"10VuQK5YjEqxIqCGeOYJDB8Fcg6hRQ_2j\",\"sourceName\":\"IMG_5840.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-a-06.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"8bdee13ace39a2ef6058d35913a88e931e5135ce940e5f7bb73d5b953d130f88\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-a-07\",\"driveFileId\":\"1yYZC7zy5K0D6ohQYtGC5-cKPxgZyWaRj\",\"sourceFolderId\":\"10VuQK5YjEqxIqCGeOYJDB8Fcg6hRQ_2j\",\"sourceName\":\"IMG_5819.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-a-07.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"184cbacd27094dc39b627504e7ffd6e5fcd79c13782d27db72019a0dbc99a1f6\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-a-08\",\"driveFileId\":\"1O-CiDeedVPpBRuCy9CR1jpiIOb5cw0av\",\"sourceFolderId\":\"10VuQK5YjEqxIqCGeOYJDB8Fcg6hRQ_2j\",\"sourceName\":\"IMG_5864.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-a-08.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"057b0485cf5f8ccaa431083ae88c1618b43630332be1a8b37563a960414499c9\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-a-09\",\"driveFileId\":\"10iDqpYjALFu_ChL1tueYDowf0YZXIzWD\",\"sourceFolderId\":\"10VuQK5YjEqxIqCGeOYJDB8Fcg6hRQ_2j\",\"sourceName\":\"IMG_5843.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-a-09.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"7cc7841e54b838b9f7a39e3e3d47e60788ee52aa43e9c49da35202777badd519\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-a-10\",\"driveFileId\":\"1pS2s8sixoLmWWVKJKStwTuKcWHJb6IT2\",\"sourceFolderId\":\"10VuQK5YjEqxIqCGeOYJDB8Fcg6hRQ_2j\",\"sourceName\":\"IMG_5834.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-a-10.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"3918f48b7922eae788d7442b5558e53a193a1ee439300aefdb5cf1bc85fbdec9\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-a-11\",\"driveFileId\":\"1kT_1GQIbNzFlrMGLPanLyIPMsgJNzyT0\",\"sourceFolderId\":\"10VuQK5YjEqxIqCGeOYJDB8Fcg6hRQ_2j\",\"sourceName\":\"IMG_5849.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-a-11.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"db7944736b90c59432d5016eeb0c4d86b8a9db93e5bfed7869443120a95e28e1\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-b-01\",\"driveFileId\":\"19OMksMj2TT8yEO1Z8gIAicyX7YlqbTTa\",\"sourceFolderId\":\"10LIhHLVF6OQpszqlfyCV1Eui5RoVMKRp\",\"sourceName\":\"IMG_9719.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-b-01.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"807f6835a6bc479acce4f2e4f14b25d6a69f54d17c1774f715dde3d8c5acfb66\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-b-02\",\"driveFileId\":\"1zC4HCcavaED8EynrA0PShqFn9hPISHHU\",\"sourceFolderId\":\"10LIhHLVF6OQpszqlfyCV1Eui5RoVMKRp\",\"sourceName\":\"IMG_9727.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-b-02.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"74443111f86d2d9b1d8beeb0f8db22653c727a946f8d4e25edbdc6940448c6d9\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-b-03\",\"driveFileId\":\"1PsuKvdear5tmhzDoOx3MW0Zf2wa7gC3s\",\"sourceFolderId\":\"10LIhHLVF6OQpszqlfyCV1Eui5RoVMKRp\",\"sourceName\":\"IMG_9728.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-b-03.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"4df5ae860d292e0cb7ab9912a65c58a12f278a450cc87f2a162247f4783e70cb\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-b-04\",\"driveFileId\":\"1aDewiO2rMyFNMR3PqQZZmDTYblOJNw5j\",\"sourceFolderId\":\"10LIhHLVF6OQpszqlfyCV1Eui5RoVMKRp\",\"sourceName\":\"IMG_9733.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-b-04.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"0ce11db0b7af6691f7f3cb7328c973e44f67166c1782765e7e43f50be52aa7b2\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-b-05\",\"driveFileId\":\"1hf-CfG8vmm3pa-aZWujnmJg8CheG46w2\",\"sourceFolderId\":\"10LIhHLVF6OQpszqlfyCV1Eui5RoVMKRp\",\"sourceName\":\"IMG_9724.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-b-05.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"1a4da743123bac4e185517dc2e38ce627a9b94efb8c682ddc00617ade52989ba\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-b-06\",\"driveFileId\":\"1_j2VCplA2J16BfIMiPIqKXnKJGmtog67\",\"sourceFolderId\":\"10LIhHLVF6OQpszqlfyCV1Eui5RoVMKRp\",\"sourceName\":\"IMG_9738.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-b-06.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"de25ae5f269f336c7e403b81d00e0c8dce18ef85b8f0a2710a5344f651ad55fe\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-b-07\",\"driveFileId\":\"1atdXjTqlu19jcZ0nMaxQHcrn3HuIKFzM\",\"sourceFolderId\":\"10LIhHLVF6OQpszqlfyCV1Eui5RoVMKRp\",\"sourceName\":\"IMG_9717.HEIC\",\"localSrc\":\"/drive/bedrooms/bedroom-b-07.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"44fcb1b962451db323076fd08b6afd22ea8f1072b3296b42af64118459d24c2a\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-09\",\"driveFileId\":\"1fYRcH5w_Rs4CcAgBOoEO8jHTnZCEwRaI\",\"sourceFolderId\":\"1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X\",\"sourceName\":\"IMG_0340.HEIC\",\"localSrc\":\"/drive/dressing/dressing-09.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"e98d167f409f90e88dc9eb6627d7a3160d6ea168d3f4615548a1c9cef14d5a40\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-10\",\"driveFileId\":\"1lEw9I439xqdpOZf12Oo9fwYGOU5FXsmO\",\"sourceFolderId\":\"1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X\",\"sourceName\":\"IMG_0352.HEIC\",\"localSrc\":\"/drive/dressing/dressing-10.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"8d4af249900952821f46623a96ed15eae369f8d50fd3caff275708c40c82b737\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-11\",\"driveFileId\":\"1f1TfkOPFBjpOjY4dwlH4b07SbUtMhj4a\",\"sourceFolderId\":\"1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X\",\"sourceName\":\"IMG_0342.HEIC\",\"localSrc\":\"/drive/dressing/dressing-11.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ce84fc22befead4fe442c28f91ab1e68a9af33519aca1b3aa953d2148ae73976\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-12\",\"driveFileId\":\"1ZmLjpK_Ksj7ePAaaCt7AsoMlYujObwsJ\",\"sourceFolderId\":\"1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X\",\"sourceName\":\"IMG_0287.HEIC\",\"localSrc\":\"/drive/dressing/dressing-12.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"7b77d152d8e0a5b45de4cfff138d7746c029bec643c9150d40b109b85ccf834e\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"dressing-13\",\"driveFileId\":\"1bKRncA3QiCvOVaJJ8LdmIik4_w2tcAiG\",\"sourceFolderId\":\"1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X\",\"sourceName\":\"IMG_0353.HEIC\",\"localSrc\":\"/drive/dressing/dressing-13.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"7cccc794f7630c32bf2a08e7894d918ebf3f2dd8e8f0eaaebfa83ed51d41cc44\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"bedroom-kids-03\",\"driveFileId\":\"1N5iHK9y-ZCwHBY3KuyXw2XibvkJrhyiI\",\"sourceFolderId\":\"1BFZ2f318tyKJYvg-q31Sq8L1JW3dJlrz\",\"sourceName\":\"3.png\",\"localSrc\":\"/drive/bedrooms/bedroom-kids-03.webp\",\"originalMime\":\"image/png\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-cnc-01\",\"driveFileId\":\"1Agz6x9h41CQWD-UEGL3Q09fwH2USAInM\",\"sourceFolderId\":\"12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd\",\"sourceName\":\"IMG_2325.PNG\",\"localSrc\":\"/drive/cladding/cnc/cladding-cnc-01.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"9571363c854aaa9182f13d9fccef1ca5df43f82babe9a267cc1c1c006e5fde0b\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-cnc-02\",\"driveFileId\":\"1_tg92kR2qOHTrQFyAXfGF2ycs_J5_vXj\",\"sourceFolderId\":\"12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd\",\"sourceName\":\"IMG_2322.PNG\",\"localSrc\":\"/drive/cladding/cnc/cladding-cnc-02.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"afb4b3fe67b337a42d9d7ed552707c7e7f10914605befc8705a22e4e3f3ad3df\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-cnc-03\",\"driveFileId\":\"1BE28X5TQCOQd52DCnfLCxRJgarZkGx6O\",\"sourceFolderId\":\"12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd\",\"sourceName\":\"IMG_2320.PNG\",\"localSrc\":\"/drive/cladding/cnc/cladding-cnc-03.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"85de6cdd964cd47d60870fdcffd32cb2d0ee870813f15ce8950756db0797c244\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-cnc-04\",\"driveFileId\":\"1-IzL1L5Qa-JwNGe4DrCrFHvNmzQB0Gu-\",\"sourceFolderId\":\"12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd\",\"sourceName\":\"IMG_2318.PNG\",\"localSrc\":\"/drive/cladding/cnc/cladding-cnc-04.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"06a0d9b5f7467005794f1207d4587100a1636bc1c54252d842b0302a82adbeb3\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-cnc-05\",\"driveFileId\":\"1uE7zcAvG35zVvCR302WJqNdt_xML6KRI\",\"sourceFolderId\":\"12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd\",\"sourceName\":\"IMG_2316.PNG\",\"localSrc\":\"/drive/cladding/cnc/cladding-cnc-05.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"1adeebfbb52f8f7ff6683a33d6a1608b60540883b84c3db1a516515e63cad624\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-cnc-06\",\"driveFileId\":\"1_wSsFSC_kYA094WDyAD7HlPjuWRKEEbW\",\"sourceFolderId\":\"12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd\",\"sourceName\":\"IMG_2314.PNG\",\"localSrc\":\"/drive/cladding/cnc/cladding-cnc-06.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"8e5313e43bdd0adae4886f613fd65225cd8422dca0cfe1fced2f91eeb0e77f21\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-cnc-07\",\"driveFileId\":\"1wr3rWFxeeF6Iga3T9Q0OPSSfGqTcCIAj\",\"sourceFolderId\":\"12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd\",\"sourceName\":\"IMG_2312.PNG\",\"localSrc\":\"/drive/cladding/cnc/cladding-cnc-07.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"a69baa32304fdf17e262a6cf20bd92a9a9c634349b8825bb06a8978c5ab037ee\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-cnc-08\",\"driveFileId\":\"1vqnYhGbexAxktk-6ZCIjlyc6KNMgnKIg\",\"sourceFolderId\":\"12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd\",\"sourceName\":\"IMG_0113.heif\",\"localSrc\":\"/drive/cladding/cnc/cladding-cnc-08.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"dd785fc5fc3a65fe1dd22b113e2892885c877c9ec26083088e86ef1025e08f48\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-cnc-09\",\"driveFileId\":\"1-chxe8mQDoHAg2Rv_rgQPuwuxdkzfPbA\",\"sourceFolderId\":\"12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd\",\"sourceName\":\"IMG_1987.heif\",\"localSrc\":\"/drive/cladding/cnc/cladding-cnc-09.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"575f24902cc8f51d0b1ad9ae38077d99a2e6a1c318f3ab519058a0026b3b98a8\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-cnc-10\",\"driveFileId\":\"109ZKKCzHbP5kE8utTi3Ww0MqiNpyHVaD\",\"sourceFolderId\":\"12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd\",\"sourceName\":\"IMG_0805.heif\",\"localSrc\":\"/drive/cladding/cnc/cladding-cnc-10.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"e1415e5c51f23897943f9f935eb9e964f5dc959d5a8251b3100761464146dfb6\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-cnc-11\",\"driveFileId\":\"18wepOnxnaEE1TsXNK8rUbYkHtvlYneRH\",\"sourceFolderId\":\"12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd\",\"sourceName\":\"CAA6F07E-265E-4D21-9BA7-29E99D80E784.png\",\"localSrc\":\"/drive/cladding/cnc/cladding-cnc-11.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"291074d245562bac245ad2c114441d855366cc8d63b5b380dc4ccdd0d99680d0\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-cnc-12\",\"driveFileId\":\"1VR4NVuQHMzXEE7Ww8zmQwqsMaQy9Cdad\",\"sourceFolderId\":\"12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd\",\"sourceName\":\"7C5B9E60-6389-4053-B249-E325C7BADDDB.png\",\"localSrc\":\"/drive/cladding/cnc/cladding-cnc-12.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"d56d0333ad91d7652f15eb57d7a58f63c50e757ae14739f44e04f8a456563074\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-cnc-13\",\"driveFileId\":\"171gXuwod5BzvyV1pXDeGuAx-tVgNdqfV\",\"sourceFolderId\":\"12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd\",\"sourceName\":\"F3B33140-0026-4EE2-92F6-EE1E1CB382F1.png\",\"localSrc\":\"/drive/cladding/cnc/cladding-cnc-13.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"a333afc3be9223e2587be5634d8812c2b2c7be84e1c655eecf6a0f6f0b058dda\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-cnc-14\",\"driveFileId\":\"1oyBm-1BoM5r_3KshukuU7hinsGOwcmyz\",\"sourceFolderId\":\"12GCC4nvPIK0wf0mnT9_zpu9Hgmzt_cTd\",\"sourceName\":\"arabesque.png\",\"localSrc\":\"/drive/cladding/cnc/cladding-cnc-14.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"498b0184d1e67ff048eec8c095aa483ce17486d9dac5fd79f02488df13111868\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-melamine-01\",\"driveFileId\":\"1wgW8ffRjg_ITxbvVqL_5S18x1om1vYAE\",\"sourceFolderId\":\"1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0\",\"sourceName\":\"IMG_2329.PNG\",\"localSrc\":\"/drive/cladding/melamine/cladding-melamine-01.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"45545b7dc1b000051c8a665bba807d60adada5f11f858ddeacd3cb95a139c4ee\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-melamine-02\",\"driveFileId\":\"14Nmkp8qrJUqGDWg0VybduX9nsfu6NZUV\",\"sourceFolderId\":\"1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0\",\"sourceName\":\"IMG_0631.HEIC\",\"localSrc\":\"/drive/cladding/melamine/cladding-melamine-02.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"8aeadbb52bbc20cbd01d8725ae0edf779a427e687bf3c5375964c1017ae6273e\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-melamine-03\",\"driveFileId\":\"1GiFXnnNGOAoMdB6BForJg2LlH1W2jiUX\",\"sourceFolderId\":\"1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0\",\"sourceName\":\"IMG_2139.HEIC\",\"localSrc\":\"/drive/cladding/melamine/cladding-melamine-03.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"61e7e1624f6d6e7c6f11d9d7e8ccdd0a0b83fe2afb3d0b26f2db43cd2866b2ba\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-melamine-04\",\"driveFileId\":\"1QqQq0O57VA6CzARe1ZTIaemdO1SuUs4e\",\"sourceFolderId\":\"1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0\",\"sourceName\":\"AE0A724C-0C0C-44E4-BB50-F2E2B4423B60.PNG\",\"localSrc\":\"/drive/cladding/melamine/cladding-melamine-04.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"8eff3c799854415cefa05dadd9cb70ee2515b928face737479cdf860ff57d451\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-melamine-05\",\"driveFileId\":\"1yeFEeT_yk5hWXOkldanXd3BGUuvCIkgy\",\"sourceFolderId\":\"1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0\",\"sourceName\":\"IMG_0210.HEIC\",\"localSrc\":\"/drive/cladding/melamine/cladding-melamine-05.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"51bef5f62bf453b460bf5eb5fd2048ce3a85a877728ee43dc282a35bac98e6c5\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-melamine-06\",\"driveFileId\":\"1CT3NTecN0xjqbjHdxtJ6C9oHx08yJSoI\",\"sourceFolderId\":\"1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0\",\"sourceName\":\"IMG_7004.HEIC\",\"localSrc\":\"/drive/cladding/melamine/cladding-melamine-06.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"0f3238b4f9ef7f2aa8dbd3b44b70ea9645ecd5753cbf91ced16f866d95a38d8b\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-melamine-07\",\"driveFileId\":\"1zHWfZ1hfUr5YXQyyAO94lz4C9SZTyxef\",\"sourceFolderId\":\"1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0\",\"sourceName\":\"IMG_0479.HEIC\",\"localSrc\":\"/drive/cladding/melamine/cladding-melamine-07.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"16d99bcddfef1df79bf5ca00a8a61b22ac491ce7b1620c6396f6ea4f78585dc5\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-melamine-08\",\"driveFileId\":\"1bdN5olItc1Pshcu93qK-kUPTDZzeIS1y\",\"sourceFolderId\":\"1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0\",\"sourceName\":\"IMG_0525.HEIC\",\"localSrc\":\"/drive/cladding/melamine/cladding-melamine-08.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"fdc5c5eb763d45d35b70c5ce66d054149a2d47eab08951e0c365fc354a4ba403\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-melamine-09\",\"driveFileId\":\"1KpQgjQCo5TTPEcDKTCAMtnESgEWmeN0i\",\"sourceFolderId\":\"1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0\",\"sourceName\":\"IMG_0522.HEIC\",\"localSrc\":\"/drive/cladding/melamine/cladding-melamine-09.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"6c668e993ae9b3f41381e00fe2f4244d200566fc354ca9731f32b1806322b362\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-melamine-10\",\"driveFileId\":\"1jGRQwaQVKL-_KGsTuOf4u5cyAnSEZ9n7\",\"sourceFolderId\":\"1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0\",\"sourceName\":\"IMG_0526.HEIC\",\"localSrc\":\"/drive/cladding/melamine/cladding-melamine-10.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"7bdcb6d49406a888c26122966ecac47cb54fefafdf3d6923b0751c97475484fe\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-melamine-11\",\"driveFileId\":\"1X6FDr7Hho94o-v4zZ5NKgyeC3WOBVMqt\",\"sourceFolderId\":\"1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0\",\"sourceName\":\"IMG_0103.HEIC\",\"localSrc\":\"/drive/cladding/melamine/cladding-melamine-11.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"60fd32e6d4c14decba78bc57d9072c7f661563db81fbe27289187e541d24db3a\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-melamine-12\",\"driveFileId\":\"1QTj-GnmFPu5XQ5_h39Cn4dwZB3zsWDQ5\",\"sourceFolderId\":\"1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0\",\"sourceName\":\"IMG_6958.HEIC\",\"localSrc\":\"/drive/cladding/melamine/cladding-melamine-12.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"48a8d9db5a86e9cb490c00f89c70320341ebfe3629d764a3dfd312bfc6af999b\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-melamine-13\",\"driveFileId\":\"13vd-C7Ddyw8rR_abmnRUZwREuPVwYmQS\",\"sourceFolderId\":\"1-wXrzAXHPzMg5G_8ukcGoSFupIK048R0\",\"sourceName\":\"IMG_0786.HEIC\",\"localSrc\":\"/drive/cladding/melamine/cladding-melamine-13.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ac73a2eb0f2f309e3afe196d5be46b4801fbd2a08d0660b76c2ff8fcf77ef00f\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-01\",\"driveFileId\":\"19y1QqslNJpkXPC3bJ-z2cq4g-WZxtJ8v\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"IMG_2309.PNG\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-01.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"7dd51112e89e6c10e599103abdda141523c7ffddd7d1b6e062be294026da67b2\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-02\",\"driveFileId\":\"1DTZPbt_qnNwnqUG6tDJ_wJ-bViy2ytU8\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"IMG_2078.PNG\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-02.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"ea435b09c085fe90ae59da5ce49e0e9bf981440e809835f5cc782e05a12d243e\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-03\",\"driveFileId\":\"1Rq9Z7VfvlVf8fu9c0gIa_oHBEGAwqPp_\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"IMG_2011.HEIC\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-03.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"985181234d09680ec94bab962ef51b91c35d166b23f14de34328b0ba454946a1\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-04\",\"driveFileId\":\"1Sk9KGim8XEz_lvSvJrtNWjWI8UQs2YLY\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"IMG_1613.HEIC\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-04.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"f06246fac9dd2cd3c411f7bdc71e062eea1a305f5dd9d063650cd873d59481c9\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-05\",\"driveFileId\":\"1mCQNUl6CSDuw4_UWj5GWxH6ReixV65ks\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"IMG_6990.HEIC\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-05.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"5032c406196d9e60a7a214b05e809cc07f8dd5cffdc2ba608e284dd1eb379097\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-06\",\"driveFileId\":\"1afoM0WRr_j10uY9kNIHxjyyYhlZfpT5f\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"IMG_4404.heif\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-06.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"27df969c60754b6e2ae3ae116c8e09aa37213744b14abc4bc113e538323d556b\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-07\",\"driveFileId\":\"125Bf4CgA4xARoX0YwCw2RVJMEVwFIiI0\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"IMG_9152.heif\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-07.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"9605a62798f7f21304141bc1dc231c6f1390485bccb1400da11d4d0692f8eeeb\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-08\",\"driveFileId\":\"1A2jgGnFFck6_jYxzwuV2imzlOJYoM-z4\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"IMG_4189.heif\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-08.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"b402849d74162ecf1f348791a929bbf7182cdb3502e24816a402516b11c0cb9c\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-09\",\"driveFileId\":\"1s1l0o7OCy1z52sP2mtyeD_ZGxqFjqmIQ\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"IMG_4499.jpeg\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-09.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"a837e32745d9e643b8f6193cb4787aa96f24b8c3507a55d50bd76b542a05b265\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-10\",\"driveFileId\":\"1-Hn_ptQRHUET002c9z2BlebO53j4bolr\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"IMG_1284.heif\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-10.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"79b46cb34b024ea25a93425a830f57b3af1cab0d7d45bad967759751f5faacfa\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-11\",\"driveFileId\":\"1oGy4gKhxPw8fT2H5-0rjg3SgB8e08ojV\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"IMG_1253.heif\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-11.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ec694176078c321542ba81229d06e542834fdf5962021ef7c6eabc40cc160172\",\"orientation\":\"landscape\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-12\",\"driveFileId\":\"1TvS1mXx8veAuGQrZAyK5nQqzFALOHEsk\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"IMG_1244.heif\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-12.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"526eeead623fbf3527a806879c2da9fbb00756204bd74e4dd7dd58ebf6ed0273\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-13\",\"driveFileId\":\"1petY2eY7cdAiCkxcCXRu2Wk0xdHj_r8B\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"IMG_0655.heif\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-13.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"f066515c2f84cccfc0593146b92bf04d5e4bc456cc2763c5d6028f173f77a0a0\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-14\",\"driveFileId\":\"1lhShP17Xyk57RNETHFyBr7PwtBckWBf8\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"A8075502-5D0C-41A3-8FAC-0290486E5318.png\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-14.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"414bacf03e0073de31f656c949d97155a3b8588833db9d6f30bafe5cb5c915ea\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-15\",\"driveFileId\":\"1CyPTKe-PSqEH7_6HCcZr_IqsTppKMUpP\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"9E31F52C-2452-46A8-AF5A-DA5018346B00.png\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-15.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"4ba7b75c6cdc52944e0b75b379bf8b8c7e88efa6b538cbfa2afc1d45d619358f\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-16\",\"driveFileId\":\"1kQyLGOYJKl5YzPehGY5q0_ZCuJ0km_Uy\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"IMG_6261.heif\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-16.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"796e3d2b342cbf123c3be3072c9e746b71bdc8a18da36d2eba51681e362b213e\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"cladding-veneer-painting-17\",\"driveFileId\":\"1o0i00p_xglYRvHYdUYDN9UApJIBcNB4_\",\"sourceFolderId\":\"12IeUWn3lOdDAzcQsiZShQkIWZ00ekKYR\",\"sourceName\":\"IMG_0426.JPG\",\"localSrc\":\"/drive/cladding/veneer-painting/cladding-veneer-painting-17.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"6fe88444d6949501b5a6a08bafc797c07d9c4f01f48d4a027397c0029bc38b2f\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"}]");
//#endregion
//#region lib/generated-doors-drive-assets.json
var generated_doors_drive_assets_default = /* @__PURE__ */ JSON.parse("[{\"id\":\"door-01\",\"driveFileId\":\"1F8veHcJiD9xIQhx5PvaeDeadd-wicF2X\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":1,\"sourceName\":\"1.jpg\",\"localSrc\":\"/drive/doors/door-01.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"64134eef8d7df8f8b8beba8edb4ff3e8ffe6535af1acf2bdb1dc992ad92c2176\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-02\",\"driveFileId\":\"1CKMiAT70o4O7OGRFktBN1mbMi1psPMoQ\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":2,\"sourceName\":\"2.jpg\",\"localSrc\":\"/drive/doors/door-02.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"f6eb911461e24e5019ecba6c91a9c7a82c082221d5b4039e99d2fa557c0b402a\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-03\",\"driveFileId\":\"17MrmOy6T4pM5CJP0rtFrEgRjZJaZ7CO4\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":3,\"sourceName\":\"3.heif\",\"localSrc\":\"/drive/doors/door-03.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"fcfdd5c2ec2552e8b917fae9c0ef7da789d809be17231e7df0c3487e5e71eb77\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-04\",\"driveFileId\":\"1KEN1faX_E0_kq3oYSdBPAY4o9EjZnTfZ\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":4,\"sourceName\":\"4.jpg\",\"localSrc\":\"/drive/doors/door-04.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"b528afd4050ee56d85597114f578d25ba1c945f8c4f69eba33d39a41dba32946\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-05\",\"driveFileId\":\"13iwbIMeQoVZne3X9GGtjdOg_m4ftQaPZ\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":5,\"sourceName\":\"5.png\",\"localSrc\":\"/drive/doors/door-05.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"8c83ce8be7349498000609e302acf0fe78b705857ff0bda0a77f54ebee04dc92\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-06\",\"driveFileId\":\"1H22o4onyJlOAFgBDiv1ee7hHEeTbCiah\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":6,\"sourceName\":\"6.png\",\"localSrc\":\"/drive/doors/door-06.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"1393e2a2d2a14544cdc429323e089b1ba178eb63ebfa4bf5165763ca01fe5bac\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-07\",\"driveFileId\":\"1f7-PZtaLOZ9zcEG9TzpK7UqkH5vBtQRR\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":7,\"sourceName\":\"7.jpg\",\"localSrc\":\"/drive/doors/door-07.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"b2a9616ea71be1c38919d99f1b3aba56edc44acae132189bbb9ab1cf60c4fd04\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-08\",\"driveFileId\":\"1jcV6jlmq5LxNCl4mi1r8ZqITyXHGGW8j\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":8,\"sourceName\":\"8.jpg\",\"localSrc\":\"/drive/doors/door-08.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"9e2689201c6b47711b95b69b2cfdc15cd2283a3d4ebd16fb53eac4177b5e3190\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-09\",\"driveFileId\":\"1kvc13XiEF8rO5O3Rzg_8cOg3XUOrHz21\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":9,\"sourceName\":\"9.heif\",\"localSrc\":\"/drive/doors/door-09.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"df0ca6f527ba07dbd66390cd2f3e32b3d8c086a61d77d5fd327141775b41a7d4\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-10\",\"driveFileId\":\"17zfO76lNg3jsukIIzaYQzKmLg7e2kisJ\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":10,\"sourceName\":\"10.jpg\",\"localSrc\":\"/drive/doors/door-10.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"6caab28f34f8e976c759d0f83afb5994bfc1a812b00775d63b3a42a4ee75278d\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-11\",\"driveFileId\":\"1EXZqxZX2Dckl7kTbHxEIhFNF73h7_UYK\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":11,\"sourceName\":\"11.heif\",\"localSrc\":\"/drive/doors/door-11.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"f4b3b2f318306610f636f2b553be29ae4c15e0dbb272c0b402272d040035f554\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-12\",\"driveFileId\":\"1FBLmBirzm4-7VPQkJGNkezdVHXOGZ3BO\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":12,\"sourceName\":\"12.heif\",\"localSrc\":\"/drive/doors/door-12.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ff1a621771d2adec1a635258ec49350ba8708c4ddc4582871d0eaf42282c65a7\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-13\",\"driveFileId\":\"12mUFtM_GdsdDTxaA7PO6LYSATXwkuoE8\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":13,\"sourceName\":\"13.jpg\",\"localSrc\":\"/drive/doors/door-13.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"1af7eb5299f034662ae30dc6e9cd131080e82fd526aa605de93b5cf29c9cd6fe\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-14\",\"driveFileId\":\"1UXPy3VCpRbrcrva4UNHhoH5rjZUBU-Os\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":14,\"sourceName\":\"14.png\",\"localSrc\":\"/drive/doors/door-14.webp\",\"originalMime\":\"image/png\",\"contentHash\":\"4996675dd3784454a5218faf9393161d5948ce302da4e6d2674985a6e2831202\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-15\",\"driveFileId\":\"1pCk7GTvA6LgrQw6kEQkfMH_gQx5_a7-0\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":15,\"sourceName\":\"15.jpg\",\"localSrc\":\"/drive/doors/door-15.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"e1acb6915e8e24571a626308cd3903263f679ffe62b7e95d721103e34dd8c211\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-16\",\"driveFileId\":\"1ZT3W__-Fni-G0utTxXktIC0KFn1XcLzk\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":16,\"sourceName\":\"16.jpg\",\"localSrc\":\"/drive/doors/door-16.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"1b963c3b75c434fecaf9952c4d4342e2103eeb6beb4316dfaa0ae74172566331\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-17\",\"driveFileId\":\"1C6RqIZv4FE2r5b6byq_xxy5NEPmAW9DJ\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":17,\"sourceName\":\"17.JPG\",\"localSrc\":\"/drive/doors/door-17.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"6ca495bc011c943b453a8e8aee84449da976345a65e3a48544c222c4d26faec5\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"},{\"id\":\"door-18\",\"driveFileId\":\"12Rw2WNkOoEOxIIum2vXZME2j8dF9vFG-\",\"sourceRootId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderId\":\"1atlCJvilwpNVrXjZCZNT4RF0gbhc4QNh\",\"sourceFolderName\":\"Doors\",\"imageOrder\":18,\"sourceName\":\"18.heif\",\"localSrc\":\"/drive/doors/door-18.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"e1415e5c51f23897943f9f935eb9e964f5dc959d5a8251b3100761464146dfb6\",\"orientation\":\"portrait\",\"authenticity\":\"verified-real\",\"rights\":\"pending\",\"publishStatus\":\"preview\"}]");
//#endregion
//#region lib/generated-living-drive-assets.json
var generated_living_drive_assets_default = [
	{
		"id": "living-01-01",
		"driveFileId": "1IP5Y4nvH8wAc0Vd_Hogfn3CscVcEfplQ",
		"sourceRootId": "1hcTacHXfh_BDmOxIe_urkHQPa0HloEjx",
		"sourceFolderId": "1mMM-Qqo3Zd-FEntIDYLaGLPC1KQ7FQbx",
		"sourceFolderName": "Living space 01",
		"projectOrder": 1,
		"imageOrder": 1,
		"role": "gallery",
		"sourceName": "1.JPG",
		"localSrc": "/drive/living-spaces/living-01-01.webp",
		"originalMime": "image/jpeg",
		"contentHash": "fc7b613db8be2c0008d6d15acd2565c4f3ce238d97cb7431669be5fd4b081f0b",
		"orientation": "portrait",
		"authenticity": "verified-real",
		"rights": "pending",
		"publishStatus": "preview"
	},
	{
		"id": "living-01-02",
		"driveFileId": "1E0yk0GRI030nF2daSpY-IArDeJP611Dt",
		"sourceRootId": "1hcTacHXfh_BDmOxIe_urkHQPa0HloEjx",
		"sourceFolderId": "1mMM-Qqo3Zd-FEntIDYLaGLPC1KQ7FQbx",
		"sourceFolderName": "Living space 01",
		"projectOrder": 1,
		"imageOrder": 2,
		"role": "gallery",
		"sourceName": "2.heif",
		"localSrc": "/drive/living-spaces/living-01-02.webp",
		"originalMime": "image/heif",
		"contentHash": "b4647bc3ea5587defdbe5601e7170d639288f225a8fccb245dbf5efd7886465b",
		"orientation": "portrait",
		"authenticity": "verified-real",
		"rights": "pending",
		"publishStatus": "preview"
	},
	{
		"id": "living-01-03",
		"driveFileId": "1qOAB2Rml3nb7xUGSdwREW--wIftYBqvp",
		"sourceRootId": "1hcTacHXfh_BDmOxIe_urkHQPa0HloEjx",
		"sourceFolderId": "1mMM-Qqo3Zd-FEntIDYLaGLPC1KQ7FQbx",
		"sourceFolderName": "Living space 01",
		"projectOrder": 1,
		"imageOrder": 3,
		"role": "gallery",
		"sourceName": "3.jpg",
		"localSrc": "/drive/living-spaces/living-01-03.webp",
		"originalMime": "image/jpeg",
		"contentHash": "f5c1014280bd9a47e3d12e501829a64e5ffa4c34fda9acdf6176f9e2ecbc8422",
		"orientation": "portrait",
		"authenticity": "verified-real",
		"rights": "pending",
		"publishStatus": "preview"
	},
	{
		"id": "living-02-01",
		"driveFileId": "16upIs3e-HDgA2Rmx2-wfh6ej_hjQAy_b",
		"sourceRootId": "1hcTacHXfh_BDmOxIe_urkHQPa0HloEjx",
		"sourceFolderId": "1uhkdfxII741nyF3BIKKQod7XRBJC5727",
		"sourceFolderName": "Living space 02",
		"projectOrder": 2,
		"imageOrder": 1,
		"role": "gallery",
		"sourceName": "1.PNG",
		"localSrc": "/drive/living-spaces/living-02-01.webp",
		"originalMime": "image/png",
		"contentHash": "52e2adf07e52fe6a3427a4322a854dca2c88d69c7411c8fab4a75dce7cbb97eb",
		"orientation": "landscape",
		"authenticity": "verified-real",
		"rights": "pending",
		"publishStatus": "preview"
	},
	{
		"id": "living-02-02",
		"driveFileId": "1GrveEkHps803x7Cdr5JIDMlSJUY7NvP8",
		"sourceRootId": "1hcTacHXfh_BDmOxIe_urkHQPa0HloEjx",
		"sourceFolderId": "1uhkdfxII741nyF3BIKKQod7XRBJC5727",
		"sourceFolderName": "Living space 02",
		"projectOrder": 2,
		"imageOrder": 2,
		"role": "gallery",
		"sourceName": "2.PNG",
		"localSrc": "/drive/living-spaces/living-02-02.webp",
		"originalMime": "image/png",
		"contentHash": "6c8bdeebf5a1c9816a67373825b1dde005b1078c0a5e7b8a2dd7b61f1375df8e",
		"orientation": "landscape",
		"authenticity": "verified-real",
		"rights": "pending",
		"publishStatus": "preview"
	},
	{
		"id": "living-02-03",
		"driveFileId": "14NepbIonk82Oc_f2bV5cQkGboQ82KGkG",
		"sourceRootId": "1hcTacHXfh_BDmOxIe_urkHQPa0HloEjx",
		"sourceFolderId": "1uhkdfxII741nyF3BIKKQod7XRBJC5727",
		"sourceFolderName": "Living space 02",
		"projectOrder": 2,
		"imageOrder": 3,
		"role": "gallery",
		"sourceName": "3.PNG",
		"localSrc": "/drive/living-spaces/living-02-03.webp",
		"originalMime": "image/png",
		"contentHash": "07960505791549070f0ed6d4318016eeb4777b2dfb69ced1150cafebb07d097c",
		"orientation": "landscape",
		"authenticity": "verified-real",
		"rights": "pending",
		"publishStatus": "preview"
	},
	{
		"id": "living-03-01",
		"driveFileId": "1wwbeDroqYh03crfQtqq8plfB_kjWHOzC",
		"sourceRootId": "1hcTacHXfh_BDmOxIe_urkHQPa0HloEjx",
		"sourceFolderId": "1s4KOmIANFU9_hli-7KTaVSBdp4qJvEAS",
		"sourceFolderName": "Living space 03",
		"projectOrder": 3,
		"imageOrder": 1,
		"role": "gallery",
		"sourceName": "1.PNG",
		"localSrc": "/drive/living-spaces/living-03-01.webp",
		"originalMime": "image/png",
		"contentHash": "4b4be4185672623a915f61e142bd70688c90134de161022d8b6d2b2e0c829786",
		"orientation": "landscape",
		"authenticity": "verified-real",
		"rights": "pending",
		"publishStatus": "preview"
	},
	{
		"id": "living-03-02",
		"driveFileId": "1vJ_4CT-cFCTrnZBzSE2RBfI5ae6u0hJj",
		"sourceRootId": "1hcTacHXfh_BDmOxIe_urkHQPa0HloEjx",
		"sourceFolderId": "1s4KOmIANFU9_hli-7KTaVSBdp4qJvEAS",
		"sourceFolderName": "Living space 03",
		"projectOrder": 3,
		"imageOrder": 2,
		"role": "gallery",
		"sourceName": "2.PNG",
		"localSrc": "/drive/living-spaces/living-03-02.webp",
		"originalMime": "image/png",
		"contentHash": "4ee27de37cef8f472089bae798d5fefc57f1d1a7d3cd31c0738531cbaa3b2c77",
		"orientation": "portrait",
		"authenticity": "verified-real",
		"rights": "pending",
		"publishStatus": "preview"
	},
	{
		"id": "living-03-03",
		"driveFileId": "1EgW4-Cm_mbxgJxSqrMBPKJTCcfXVspJN",
		"sourceRootId": "1hcTacHXfh_BDmOxIe_urkHQPa0HloEjx",
		"sourceFolderId": "1s4KOmIANFU9_hli-7KTaVSBdp4qJvEAS",
		"sourceFolderName": "Living space 03",
		"projectOrder": 3,
		"imageOrder": 3,
		"role": "gallery",
		"sourceName": "3.png",
		"localSrc": "/drive/living-spaces/living-03-03.webp",
		"originalMime": "image/png",
		"contentHash": "224dec5f5b0517ed9ed33d2786a15e6342e6ad145368775934b44bb69db1b1ea",
		"orientation": "landscape",
		"authenticity": "verified-real",
		"rights": "pending",
		"publishStatus": "preview"
	},
	{
		"id": "living-03-04",
		"driveFileId": "1xqKqCQrFfBP5ugzFI5XLcnU9vDPbnvtC",
		"sourceRootId": "1hcTacHXfh_BDmOxIe_urkHQPa0HloEjx",
		"sourceFolderId": "1s4KOmIANFU9_hli-7KTaVSBdp4qJvEAS",
		"sourceFolderName": "Living space 03",
		"projectOrder": 3,
		"imageOrder": 4,
		"role": "gallery",
		"sourceName": "4.PNG",
		"localSrc": "/drive/living-spaces/living-03-04.webp",
		"originalMime": "image/png",
		"contentHash": "b2ec09ada2a7257f4033b8a6365606bbbee529b1972365e26426e5d30b014078",
		"orientation": "landscape",
		"authenticity": "verified-real",
		"rights": "pending",
		"publishStatus": "preview"
	},
	{
		"id": "living-cover",
		"driveFileId": "1BtrNEYLnedPJZH5SopBZAaT6T85AhuXw",
		"sourceRootId": "1hcTacHXfh_BDmOxIe_urkHQPa0HloEjx",
		"sourceFolderId": "1hcTacHXfh_BDmOxIe_urkHQPa0HloEjx",
		"sourceFolderName": "Living rooms",
		"role": "cover",
		"sourceName": "The main photo (to be shown outside).png",
		"localSrc": "/drive/living-spaces/living-cover.webp",
		"originalMime": "image/png",
		"contentHash": "3b768ac478344cd21714dd65245824009bf0bebe924cb9789b75c1284e2b063d",
		"orientation": "portrait",
		"authenticity": "verified-real",
		"rights": "pending",
		"publishStatus": "preview"
	}
];
var generated_unit_process_assets_default = {
	process: [
		{
			"id": "process-concept",
			"driveFileId": "1WORAAoLI5m_tVNDHNJ4IWtFnjiXss_V7",
			"sourceFolderId": "1RHx3xN5MmNIR1JYY1vPdKcJmOqJuvGbk",
			"sourceFolderTitle": "Four stages. One story.",
			"sourceName": "concept and briefing 2",
			"originalMime": "image/jpeg",
			"contentHash": "db1e98d83b4f9b65212acf46b35cb3a14b199b263b3f10383c505edf24d8c0a2",
			"orientation": "portrait",
			"localSrc": "/drive/process/process-concept.webp",
			"authenticity": "verified-real",
			"rights": "pending",
			"publishStatus": "preview"
		},
		{
			"id": "process-sketch",
			"driveFileId": "14UMxu_qjKewOzPvuhLV15lQe8ujy3hD1",
			"sourceFolderId": "1RHx3xN5MmNIR1JYY1vPdKcJmOqJuvGbk",
			"sourceFolderTitle": "Four stages. One story.",
			"sourceName": "Scetch",
			"originalMime": "image/jpeg",
			"contentHash": "d0eb412fbfa31c034ce436dcbe98d6bcaa61690cf536036daaec9fb724ca390c",
			"orientation": "portrait",
			"localSrc": "/drive/process/process-sketch.webp",
			"authenticity": "verified-real",
			"rights": "pending",
			"publishStatus": "preview"
		},
		{
			"id": "process-manufacturing",
			"driveFileId": "1tgHe10ph-zuWWvUd9auwNup2CW7nK7ja",
			"sourceFolderId": "1RHx3xN5MmNIR1JYY1vPdKcJmOqJuvGbk",
			"sourceFolderTitle": "Four stages. One story.",
			"sourceName": "Manufacturing 2",
			"originalMime": "image/jpeg",
			"contentHash": "7171562535525d40d6cfc8b4ea73e304ac9bc090e3c77025d2dfc03afaa4afa2",
			"orientation": "portrait",
			"localSrc": "/drive/process/process-manufacturing.webp",
			"authenticity": "verified-real",
			"rights": "pending",
			"publishStatus": "preview"
		},
		{
			"id": "process-installation",
			"driveFileId": "1sxBPCDnZsFKnMmjQKfsnd2naBW2wILOL",
			"sourceFolderId": "1RHx3xN5MmNIR1JYY1vPdKcJmOqJuvGbk",
			"sourceFolderTitle": "Four stages. One story.",
			"sourceName": "Installation 2",
			"originalMime": "image/jpeg",
			"contentHash": "15b1c781469dde1e6d767f00cf7c582c44c8914b7d90effc05572402e2057704",
			"orientation": "portrait",
			"localSrc": "/drive/process/process-installation.webp",
			"authenticity": "verified-real",
			"rights": "pending",
			"publishStatus": "preview"
		}
	],
	units: [
		{
			"id": "tv-unit",
			"title": "1-Tv unit",
			"sourceFolderId": "1U__0oOmH17VsUGlR5gSf2KgK_aHE5FAw",
			"files": [
				{
					"id": "tv-unit-01",
					"driveFileId": "1nn2MA2kZYeE7Or3vtG4maR7lPCj7Hehv",
					"sourceFolderTitle": "1-Tv unit",
					"sourceName": "1",
					"originalMime": "image/png",
					"contentHash": "2cbf35935d90ded22016070c20f19268bb0927065096a9dad0e2214b0b883f9d",
					"orientation": "portrait",
					"localSrc": "/drive/units/tv-unit/tv-unit-01.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "tv-unit-02",
					"driveFileId": "1MRCRtvXYvxxL55vF9LZpnRFpmuZn936p",
					"sourceFolderTitle": "1-Tv unit",
					"sourceName": "2",
					"originalMime": "image/png",
					"contentHash": "aad2030588744d04bd0300de24c222eabfa7b48716c80583d6a4e1cb337b7ccb",
					"orientation": "portrait",
					"localSrc": "/drive/units/tv-unit/tv-unit-02.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "tv-unit-03",
					"driveFileId": "1EA7Df-Qym1lCtrXYBV8S3TUxSQbMHzWK",
					"sourceFolderTitle": "1-Tv unit",
					"sourceName": "3",
					"originalMime": "image/jpeg",
					"contentHash": "939186d01683619f783d5395dfd11df5468b3ed9d9f1575056f4640d6842d775",
					"orientation": "portrait",
					"localSrc": "/drive/units/tv-unit/tv-unit-03.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "tv-unit-04",
					"driveFileId": "1zpSbJdSZIXDhmp57z-3eZKk7hHJSQeHd",
					"sourceFolderTitle": "1-Tv unit",
					"sourceName": "4",
					"originalMime": "image/png",
					"contentHash": "8005e57e1b96377139744021eee4022840ead31886d7d9fccf1404cbc8fd4d9b",
					"orientation": "portrait",
					"localSrc": "/drive/units/tv-unit/tv-unit-04.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "tv-unit-05",
					"driveFileId": "16C7-WDaA33icPwgmRYjPu6-J0rdkKHhT",
					"sourceFolderTitle": "1-Tv unit",
					"sourceName": "5",
					"originalMime": "image/png",
					"contentHash": "b8e7ae3b4fe8e0bdcc478574797d39426d2fd73fff9d7e873521a034caef9951",
					"orientation": "portrait",
					"localSrc": "/drive/units/tv-unit/tv-unit-05.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "tv-unit-06",
					"driveFileId": "1VgKZiyYyr_AyWJ4tELTQy7c32Bdfwtm3",
					"sourceFolderTitle": "1-Tv unit",
					"sourceName": "6",
					"originalMime": "image/png",
					"contentHash": "1f9f5d2b432828dc388725be7dc334631ac56bbdb932cbf7b84333c2d73a6139",
					"orientation": "portrait",
					"localSrc": "/drive/units/tv-unit/tv-unit-06.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "tv-unit-07",
					"driveFileId": "169J8zN5xV8ziuQr0r9Q8YUbpWRIfwCg_",
					"sourceFolderTitle": "1-Tv unit",
					"sourceName": "7",
					"originalMime": "image/png",
					"contentHash": "01ee261f5f202b7ee202c8c3f9d87ca377445b11aec32050e45b842793d84f2e",
					"orientation": "portrait",
					"localSrc": "/drive/units/tv-unit/tv-unit-07.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "tv-unit-08",
					"driveFileId": "1HDl-Cs770gt7YDTfnUQGlcBkWWZsrU-3",
					"sourceFolderTitle": "1-Tv unit",
					"sourceName": "8.png",
					"originalMime": "image/jpeg",
					"contentHash": "dfbbd9cddc313b152f150b0751907e19c16570469114934a261841a3b28ee273",
					"orientation": "portrait",
					"localSrc": "/drive/units/tv-unit/tv-unit-08.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "tv-unit-09",
					"driveFileId": "1RWg6aC2MIEk1mJ9KZB2DxxGsEFsp8JbJ",
					"sourceFolderTitle": "1-Tv unit",
					"sourceName": "9",
					"originalMime": "image/jpeg",
					"contentHash": "a111360409981d44a94fda6d0404e13703605bbd307b1a181a351f2396b1a2a2",
					"orientation": "portrait",
					"localSrc": "/drive/units/tv-unit/tv-unit-09.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "tv-unit-10",
					"driveFileId": "1fEwsLT16FLn1JLUgBNUJZUqqk-kOqLPE",
					"sourceFolderTitle": "1-Tv unit",
					"sourceName": "10",
					"originalMime": "image/heif",
					"contentHash": "ccd850cf5f5a682403f5bb3a8feae77d509fdaad01a8262e66fcbfa42b11684e",
					"orientation": "portrait",
					"localSrc": "/drive/units/tv-unit/tv-unit-10.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "tv-unit-11",
					"driveFileId": "1RLYGtDMMI1D3yeryzrwq57viCd1Uq4zo",
					"sourceFolderTitle": "1-Tv unit",
					"sourceName": "11",
					"originalMime": "image/png",
					"contentHash": "3e58c33ec340cb7d60673a6c009675d9610b101c06edce788d5df199ef43371e",
					"orientation": "portrait",
					"localSrc": "/drive/units/tv-unit/tv-unit-11.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "tv-unit-12",
					"driveFileId": "1Sr0oDF8aS5gLLbGGlsRDYwmlmpTFEC6C",
					"sourceFolderTitle": "1-Tv unit",
					"sourceName": "12",
					"originalMime": "image/jpeg",
					"contentHash": "5e079b997172c33c7a29b9e8360c2eefc3353ae9e69ebf002085d3a288bb1530",
					"orientation": "landscape",
					"localSrc": "/drive/units/tv-unit/tv-unit-12.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "tv-unit-13",
					"driveFileId": "1pEP4tce3YgIxRzWNLeY6IvOwuY3A4txm",
					"sourceFolderTitle": "1-Tv unit",
					"sourceName": "13",
					"originalMime": "image/jpeg",
					"contentHash": "619f3b4a6bc0a4d155285a8545ca578f253dd752a1aeb3be733e010e349b6489",
					"orientation": "portrait",
					"localSrc": "/drive/units/tv-unit/tv-unit-13.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "tv-unit-14",
					"driveFileId": "1fPk-g11XZJ8rrrDfYipsuliV7d_XXizt",
					"sourceFolderTitle": "1-Tv unit",
					"sourceName": "14",
					"originalMime": "image/jpeg",
					"contentHash": "8a7cad64ef9072c1e0e3ea4c918c635716322bedff1125e41360c9145ca1597f",
					"orientation": "landscape",
					"localSrc": "/drive/units/tv-unit/tv-unit-14.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				}
			]
		},
		{
			"id": "bathroom-units",
			"title": "2-Bathroom units",
			"sourceFolderId": "1aqQcX-H3lU9QyXTH2mbf0MR7wo7vhsTp",
			"files": [
				{
					"id": "bathroom-unit-01",
					"driveFileId": "186SFqvLLVQK_08kXDDIKlll9PTXwG8ZG",
					"sourceFolderTitle": "2-Bathroom units",
					"sourceName": "1",
					"originalMime": "image/jpeg",
					"contentHash": "312f93e4ce142cb0c625ee6902a8b3e3b67ef04a1eebe298a683a61941ad32d1",
					"orientation": "portrait",
					"localSrc": "/drive/units/bathroom-units/bathroom-unit-01.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "bathroom-unit-02",
					"driveFileId": "1sRyMDdm-WLyGChETriUhudWLCBtZOz4Z",
					"sourceFolderTitle": "2-Bathroom units",
					"sourceName": "2",
					"originalMime": "image/jpeg",
					"contentHash": "7d8d3f36369c8690efaa8675bd6e3e8b90ca2c6cf1d6b23de4052c8d8bfae8f1",
					"orientation": "portrait",
					"localSrc": "/drive/units/bathroom-units/bathroom-unit-02.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "bathroom-unit-03",
					"driveFileId": "16cOwziFcGViNxc-plshRvEckIifF7RoE",
					"sourceFolderTitle": "2-Bathroom units",
					"sourceName": "3",
					"originalMime": "image/jpeg",
					"contentHash": "28427a3491a0e0b37a3f64fbd88502221c5c942563fd138d214752939745547a",
					"orientation": "portrait",
					"localSrc": "/drive/units/bathroom-units/bathroom-unit-03.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "bathroom-unit-04",
					"driveFileId": "1w9lUqhNLOIZR0XTV7tluvlJ051HwxR9J",
					"sourceFolderTitle": "2-Bathroom units",
					"sourceName": "4",
					"originalMime": "image/jpeg",
					"contentHash": "7edc079e6ed6a7ab5a0f47140de5932914fa3c1f1ca45b47bb97e549ffabbc86",
					"orientation": "landscape",
					"localSrc": "/drive/units/bathroom-units/bathroom-unit-04.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "bathroom-unit-05",
					"driveFileId": "1e-dwZYzY9L9YNiwuC4Ai93Hjer3tpo-Y",
					"sourceFolderTitle": "2-Bathroom units",
					"sourceName": "5",
					"originalMime": "image/jpeg",
					"contentHash": "b4b711ad0c4fb469e5d8cac6a0252c48ef1cc5ca5994216234a7c5b6aba1c1ca",
					"orientation": "landscape",
					"localSrc": "/drive/units/bathroom-units/bathroom-unit-05.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "bathroom-unit-06",
					"driveFileId": "1AFA0UY_uyWJiV75CY3_ZFzOSIO7nYnYz",
					"sourceFolderTitle": "2-Bathroom units",
					"sourceName": "6",
					"originalMime": "image/png",
					"contentHash": "fc9df32ffa190f7f45478e55431d2205ce3ad6f702d84733e9aa4be5b8625f2c",
					"orientation": "portrait",
					"localSrc": "/drive/units/bathroom-units/bathroom-unit-06.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "bathroom-unit-07",
					"driveFileId": "15aWadvJbgzUrkN2v_Gm7rj4evmlXjnAE",
					"sourceFolderTitle": "2-Bathroom units",
					"sourceName": "7",
					"originalMime": "image/png",
					"contentHash": "c9021eed00fb131eca1acff4dce6dcc1d063873e54ef36bc1d670350857f64a5",
					"orientation": "portrait",
					"localSrc": "/drive/units/bathroom-units/bathroom-unit-07.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "bathroom-unit-08",
					"driveFileId": "1Tn34qTv8HZNOk_HDIt6tBUuZ6zefdGM_",
					"sourceFolderTitle": "2-Bathroom units",
					"sourceName": "8",
					"originalMime": "image/jpeg",
					"contentHash": "eae82bd42c2a3de5341fad74101e3ce9da88a8e381c30dac6a6fac5e2a8524ba",
					"orientation": "portrait",
					"localSrc": "/drive/units/bathroom-units/bathroom-unit-08.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "bathroom-unit-09",
					"driveFileId": "1KDQ8Z6TdBwyrjNhTgXuNTmecXCWg2MeB",
					"sourceFolderTitle": "2-Bathroom units",
					"sourceName": "9",
					"originalMime": "image/jpeg",
					"contentHash": "b8add06ae9ce8f7d1cf9bb11bf72f3e9d31a69151cfdc6d3f7cef768ee7b7d1e",
					"orientation": "landscape",
					"localSrc": "/drive/units/bathroom-units/bathroom-unit-09.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				}
			]
		},
		{
			"id": "custom-units",
			"title": "3-Custom units",
			"sourceFolderId": "1UxzmpZ93tswuw5XFFzWQmAiWJoXCR4g9",
			"files": [
				{
					"id": "custom-unit-01",
					"driveFileId": "14Lu1XQKHhj76PmYLt1j8QYG8KgHkbXwH",
					"sourceFolderTitle": "3-Custom units",
					"sourceName": "1",
					"originalMime": "image/jpeg",
					"contentHash": "ccd10e1948d2f8718b70ba6778e8df17e5c98468538e467e345dfdf444c4a9e3",
					"orientation": "portrait",
					"localSrc": "/drive/units/custom-units/custom-unit-01.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "custom-unit-02",
					"driveFileId": "15bG5-Gl4n4ahQwMVklOHZOxXUdosenvM",
					"sourceFolderTitle": "3-Custom units",
					"sourceName": "2",
					"originalMime": "image/jpeg",
					"contentHash": "e81877a62550723c1eb863fc63ef3dc4c9c88a9c874ad2e1e9a47d828297816c",
					"orientation": "landscape",
					"localSrc": "/drive/units/custom-units/custom-unit-02.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "custom-unit-03",
					"driveFileId": "1Pr1FKLXeEWQPzV1YtGy7KNcKQV9OYUNF",
					"sourceFolderTitle": "3-Custom units",
					"sourceName": "3",
					"originalMime": "image/png",
					"contentHash": "572e0144740620dd1de2cea23b533be4e141b90f2e0998a7fbd4e126db1252ff",
					"orientation": "portrait",
					"localSrc": "/drive/units/custom-units/custom-unit-03.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "custom-unit-04",
					"driveFileId": "1PCT88VOXH3rHuUg94fRkkrDRsWeAy1BY",
					"sourceFolderTitle": "3-Custom units",
					"sourceName": "4",
					"originalMime": "image/png",
					"contentHash": "7cfad55e5a6a4d060e7c84cb903b4db1aefa102467c06d16d9c268f5f49156cf",
					"orientation": "portrait",
					"localSrc": "/drive/units/custom-units/custom-unit-04.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "custom-unit-05",
					"driveFileId": "1W1LHHzJ0x0gL9aYxMZrAgptJZPILTDfB",
					"sourceFolderTitle": "3-Custom units",
					"sourceName": "4.1",
					"originalMime": "image/heif",
					"contentHash": "c029dc99dda9463a5ad94a3ac21e19a1c844b158d55514f628e0a431a81836a4",
					"orientation": "portrait",
					"localSrc": "/drive/units/custom-units/custom-unit-05.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "custom-unit-06",
					"driveFileId": "1MH-gNXdACcUNU6u_t38IIl6LLlN245m9",
					"sourceFolderTitle": "3-Custom units",
					"sourceName": "6.png",
					"originalMime": "image/jpeg",
					"contentHash": "2d834da3d28ecb64562ba6f60cf93ee6a4baec01c47a8e0694b5e0c1c70d4a65",
					"orientation": "portrait",
					"localSrc": "/drive/units/custom-units/custom-unit-06.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "custom-unit-07",
					"driveFileId": "1VulOYIeiRom2RLLGGeoxdS2LGyjTlWMZ",
					"sourceFolderTitle": "3-Custom units",
					"sourceName": "7",
					"originalMime": "image/png",
					"contentHash": "81430356cfdf250800bd33842f18c6233eff82f1b160cf14b5339ea56202d720",
					"orientation": "portrait",
					"localSrc": "/drive/units/custom-units/custom-unit-07.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "custom-unit-08",
					"driveFileId": "1MtXc-BHvBQ_PmwfXdJnn27RvrUXA8dHP",
					"sourceFolderTitle": "3-Custom units",
					"sourceName": "7.png",
					"originalMime": "image/png",
					"contentHash": "4e5c4fea23be504297f17aeedc3c3b178c50e9b1340e006b57838d2a033e6ae3",
					"orientation": "portrait",
					"localSrc": "/drive/units/custom-units/custom-unit-08.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "custom-unit-09",
					"driveFileId": "1B5AnaN4rd2Imls6k4I8np8vVClCNX-9j",
					"sourceFolderTitle": "3-Custom units",
					"sourceName": "8",
					"originalMime": "image/png",
					"contentHash": "ba06676d448cf22b217321b9b48a764567245d39c4040aab51b555baefbb0ce8",
					"orientation": "landscape",
					"localSrc": "/drive/units/custom-units/custom-unit-09.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "custom-unit-10",
					"driveFileId": "1gmXSpqAT0jI8-5Lk6QHUShcogYJpsMqm",
					"sourceFolderTitle": "3-Custom units",
					"sourceName": "9",
					"originalMime": "image/png",
					"contentHash": "215d30ccfba59640569980026e800b64d4acba2e4860c2a39102b7f2fdfd786a",
					"orientation": "landscape",
					"localSrc": "/drive/units/custom-units/custom-unit-10.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "custom-unit-11",
					"driveFileId": "17xVlt7WLuoei6BPYIWcCkBYYfEUgGpPu",
					"sourceFolderTitle": "3-Custom units",
					"sourceName": "10.png",
					"originalMime": "image/png",
					"contentHash": "ed5704b9c97a7cbcedc7a5371d5883b594e4eaa8bf63104a3a2d571b759e424d",
					"orientation": "portrait",
					"localSrc": "/drive/units/custom-units/custom-unit-11.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "custom-unit-12",
					"driveFileId": "1vKOJ5OrOVDUJ_87qc9eIiSsBkSlmg1ii",
					"sourceFolderTitle": "3-Custom units",
					"sourceName": "11",
					"originalMime": "image/jpeg",
					"contentHash": "c23adcd52921df67fc9816e4638a9a6194f6236300e5bc67e4a53a9556142404",
					"orientation": "portrait",
					"localSrc": "/drive/units/custom-units/custom-unit-12.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "custom-unit-13",
					"driveFileId": "1OMNcWtFkAPrKzSl649rZXm7MDad31f1u",
					"sourceFolderTitle": "3-Custom units",
					"sourceName": "12",
					"originalMime": "image/png",
					"contentHash": "61a01686ddb79ee25a51dce06849c39f49485fbf2b145a0609ea34b8e6240f17",
					"orientation": "portrait",
					"localSrc": "/drive/units/custom-units/custom-unit-13.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "custom-unit-14",
					"driveFileId": "1G20aldA5ioD9oTbf2d14LncQdTDN5IC0",
					"sourceFolderTitle": "3-Custom units",
					"sourceName": "13",
					"originalMime": "image/png",
					"contentHash": "925037f1539b5950f0359265220c45990e8b27922a2619b0803dd2eac37eee43",
					"orientation": "landscape",
					"localSrc": "/drive/units/custom-units/custom-unit-14.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				},
				{
					"id": "custom-unit-15",
					"driveFileId": "1LDGRri21TKt1ON3hrQ23VIswLI8XFxac",
					"sourceFolderTitle": "3-Custom units",
					"sourceName": "14",
					"originalMime": "image/heif",
					"contentHash": "b4b5517938be411d14d3a6e8b02ce6e6f8db1eca1db58d8148b80f1aed803b9e",
					"orientation": "portrait",
					"localSrc": "/drive/units/custom-units/custom-unit-15.webp",
					"authenticity": "verified-real",
					"rights": "pending",
					"publishStatus": "preview"
				}
			]
		}
	]
};
//#endregion
//#region lib/generated-selected-project-assets.json
var generated_selected_project_assets_default = /* @__PURE__ */ JSON.parse("[{\"id\":\"cfc-office-01\",\"projectSlug\":\"cfc-office\",\"area\":\"wall\",\"driveFileId\":\"1Ttb8b0kNPTcopDfySTAiss7GKEt-4fdW\",\"sourceFolderId\":\"1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y\",\"sourceName\":\"IMG_4192.HEIC\",\"localSrc\":\"/drive/projects/selected/cfc-office/cfc-office-01.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"388e07a09420342711a43cca4cef3f38cc3dec201dd5686f7fcc7258c27a0f96\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Timber wall and workstation detail in the CFC office\",\"ar\":\"تفصيل جدار خشبي ومكتب في مكتب CFC\"},\"derived\":{\"webp\":\"/drive/projects/selected/cfc-office/cfc-office-01.webp\",\"avif\":\"/drive/projects/selected/cfc-office/cfc-office-01.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"cfc-office-02\",\"projectSlug\":\"cfc-office\",\"area\":\"cover\",\"driveFileId\":\"172xbRcLKiigQuyNc7ctm-yx-w7JTrm3L\",\"sourceFolderId\":\"1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y\",\"sourceName\":\"IMG_4189.HEIC\",\"localSrc\":\"/drive/projects/selected/cfc-office/cfc-office-02.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"b402849d74162ecf1f348791a929bbf7182cdb3502e24816a402516b11c0cb9c\",\"orientation\":\"landscape\",\"quality\":\"hero\",\"alt\":{\"en\":\"CFC office reception and conference space\",\"ar\":\"منطقة استقبال واجتماعات في مكتب CFC\"},\"derived\":{\"webp\":\"/drive/projects/selected/cfc-office/cfc-office-02.webp\",\"avif\":\"/drive/projects/selected/cfc-office/cfc-office-02.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"cfc-office-03\",\"projectSlug\":\"cfc-office\",\"area\":\"detail\",\"driveFileId\":\"1YgzFugyzqSjC8XKIoWRDIU8OZP7cp9YR\",\"sourceFolderId\":\"1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y\",\"sourceName\":\"IMG_4193.HEIC\",\"localSrc\":\"/drive/projects/selected/cfc-office/cfc-office-03.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"06a228597880882c251dc156f2a107d1c2d87ecd7ff04c73e5c5a5579c80a77c\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Lighting and seating detail in the CFC office\",\"ar\":\"تفصيل إضاءة ومقاعد في مكتب CFC\"},\"derived\":{\"webp\":\"/drive/projects/selected/cfc-office/cfc-office-03.webp\",\"avif\":\"/drive/projects/selected/cfc-office/cfc-office-03.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"cfc-office-drive-004\",\"projectSlug\":\"cfc-office\",\"area\":\"other\",\"driveFileId\":\"1LmXcfXRBdvqB2jLZqibvpNOpJXMcG2mb\",\"sourceFolderId\":\"1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y\",\"sourceName\":\"IMG_4196.HEIC\",\"localSrc\":\"/drive/projects/selected/cfc-office/cfc-office-drive-004.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"df7507dc4a0363aea42ddc195ab1b1ba1578ecac2fca2c7bbe45e45372d62187\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close study of crafted surfaces, hardware and architectural light.\",\"ar\":\"دراسة قريبة للأسطح المصنوعة بعناية والتجهيزات والضوء المعماري.\"},\"derived\":{\"webp\":\"/drive/projects/selected/cfc-office/cfc-office-drive-004.webp\",\"avif\":\"/drive/projects/selected/cfc-office/cfc-office-drive-004.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"cfc-office-drive-005\",\"projectSlug\":\"cfc-office\",\"area\":\"other\",\"driveFileId\":\"1-kU5NOITTO4_mVuV7lz5YgFI_K1OyBak\",\"sourceFolderId\":\"1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y\",\"sourceName\":\"IMG_4188.HEIC\",\"localSrc\":\"/drive/projects/selected/cfc-office/cfc-office-drive-005.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"513af17fdadf55a783f3f90b639b62000c959c9e9c50c45a4376ed1996349890\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A finished workplace vignette with measured storage and warm materiality.\",\"ar\":\"لقطة من مساحة عمل مكتملة بتخزين مدروس وخامات دافئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/cfc-office/cfc-office-drive-005.webp\",\"avif\":\"/drive/projects/selected/cfc-office/cfc-office-drive-005.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"cfc-office-drive-006\",\"projectSlug\":\"cfc-office\",\"area\":\"other\",\"driveFileId\":\"1_S5f6TWLovajDhBDotISvMFblCjVjTAz\",\"sourceFolderId\":\"1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y\",\"sourceName\":\"IMG_4185.HEIC\",\"localSrc\":\"/drive/projects/selected/cfc-office/cfc-office-drive-006.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ca9012bc00520ea855afa5014627a0d147d2fa63f1de05325e499d06d660e80c\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Timber details and layered lighting define this CFC office setting.\",\"ar\":\"تفاصيل خشبية وإضاءة متعددة الطبقات تميز هذه المساحة المكتبية في CFC.\"},\"derived\":{\"webp\":\"/drive/projects/selected/cfc-office/cfc-office-drive-006.webp\",\"avif\":\"/drive/projects/selected/cfc-office/cfc-office-drive-006.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"cfc-office-drive-007\",\"projectSlug\":\"cfc-office\",\"area\":\"other\",\"driveFileId\":\"13UBEWEE2fosoH_v5pjTApmVu6K0dZgTC\",\"sourceFolderId\":\"1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y\",\"sourceName\":\"IMG_4203.HEIC\",\"localSrc\":\"/drive/projects/selected/cfc-office/cfc-office-drive-007.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"907437596eb3f8bab95ed0c70639698586fd351efe3cab4f558978571700abae\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A considered CFC office interior where warm timber meets soft light.\",\"ar\":\"مساحة مكتبية متكاملة في CFC يلتقي فيها الخشب الدافئ مع الضوء الهادئ.\"},\"derived\":{\"webp\":\"/drive/projects/selected/cfc-office/cfc-office-drive-007.webp\",\"avif\":\"/drive/projects/selected/cfc-office/cfc-office-drive-007.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"cfc-office-drive-008\",\"projectSlug\":\"cfc-office\",\"area\":\"other\",\"driveFileId\":\"1fu-sJWrIHBOCnBCcmCv7d8ObMt1PT89A\",\"sourceFolderId\":\"1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y\",\"sourceName\":\"IMG_4187.HEIC\",\"localSrc\":\"/drive/projects/selected/cfc-office/cfc-office-drive-008.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"cba578b3d0997fbc35e56528292861fa73f9e0b755dc627b0028da83ab4a1295\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A tailored reception scene shaped by timber, glass and clean lines.\",\"ar\":\"مشهد استقبال مصمم بعناية من الخشب والزجاج والخطوط النظيفة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/cfc-office/cfc-office-drive-008.webp\",\"avif\":\"/drive/projects/selected/cfc-office/cfc-office-drive-008.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"cfc-office-drive-009\",\"projectSlug\":\"cfc-office\",\"area\":\"other\",\"driveFileId\":\"12o48P1Z2RzyUxTO_cTxGLqzZD0SMRQ7q\",\"sourceFolderId\":\"1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y\",\"sourceName\":\"IMG_4199.HEIC\",\"localSrc\":\"/drive/projects/selected/cfc-office/cfc-office-drive-009.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"84be9f025a3426658fd738b81e5a2068bbd49ee4c76f7fcd07b640a0b221c0e8\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Integrated wall joinery and workstations bring order to the office.\",\"ar\":\"تجمع وحدات الحائط ومحطات العمل المدمجة بين الوظيفة والنظام.\"},\"derived\":{\"webp\":\"/drive/projects/selected/cfc-office/cfc-office-drive-009.webp\",\"avif\":\"/drive/projects/selected/cfc-office/cfc-office-drive-009.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-04\",\"projectSlug\":\"swan-lake\",\"area\":\"detail\",\"driveFileId\":\"1NrcWiwS5pGhQYMiQit-cqFTxsDWDL-QB\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"IMG_1253.HEIC\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-04.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ec694176078c321542ba81229d06e542834fdf5962021ef7c6eabc40cc160172\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Illuminated timber bedhead detail\",\"ar\":\"تفصيل لوح رأسي خشبي مضاء\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-04.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-04.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-drive-002\",\"projectSlug\":\"swan-lake\",\"area\":\"other\",\"driveFileId\":\"1B3n6iPXxgibylooL6vcfJERlFcKFx2Qu\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"IMG_1296.HEIC\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-drive-002.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ab1d60fe92a40b6b77c36dd4b023dc67e7616be252cac94e5f1d6ffc5199fd3b\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A quiet bedroom composition with crafted timber and softened light.\",\"ar\":\"تكوين هادئ لغرفة نوم من الخشب المصنوع بعناية وضوء ناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-drive-002.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-drive-002.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-drive-003\",\"projectSlug\":\"swan-lake\",\"area\":\"other\",\"driveFileId\":\"1hv1UzgBDjL8PuI_ZIk0pLXjxKVUoNO3E\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"IMG_1341.HEIC\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-drive-003.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"9e1ff062f520b59a6778b3eb249bed9b17b68704d229a434dacb8ee068b80745\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Marble, walnut and built-in storage meet in a refined interior detail.\",\"ar\":\"يلتقي الرخام والجوز والتخزين المدمج في تفصيلة داخلية راقية.\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-drive-003.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-drive-003.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-01\",\"projectSlug\":\"swan-lake\",\"area\":\"cover\",\"driveFileId\":\"1mCbHAsQx9Ij_npKE69JYXNCKt80p7j4T\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"IMG_4498.JPG\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-01.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"54e89c031f4a1084950dc0a5a24a6c90b0afb5bbbaae002a580cbf0df007b69e\",\"orientation\":\"landscape\",\"quality\":\"hero\",\"alt\":{\"en\":\"Living room with timber slat wall and integrated media joinery\",\"ar\":\"غرفة معيشة بجدار شرائح خشبية ونجارة وسائط مدمجة\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-01.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-01.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-02\",\"projectSlug\":\"swan-lake\",\"area\":\"wall\",\"driveFileId\":\"1vJDzYESn7P4rS7QU8urLydoC7rSjc4ix\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"IMG_4499.JPG\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-02.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"a837e32745d9e643b8f6193cb4787aa96f24b8c3507a55d50bd76b542a05b265\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Marble vanity framed by timber wall panels\",\"ar\":\"وحدة مغسلة رخامية محاطة بألواح جدارية خشبية\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-02.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-02.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-03\",\"projectSlug\":\"swan-lake\",\"area\":\"bedroom\",\"driveFileId\":\"1N2pphLlYyLglGkvBcQzaKhKl6wvOFys8\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"IMG_4497.JPG\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-03.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"3308deaad3ea070c767facc06a284e43432a533ca2700da8e3fb4b9090c409e9\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Bedroom with a full-height timber headboard wall\",\"ar\":\"غرفة نوم بجدار لوح رأسي خشبي كامل الارتفاع\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-03.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-03.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-08\",\"projectSlug\":\"swan-lake\",\"area\":\"reception\",\"driveFileId\":\"1rHJeeeWNXbq-9ldFdyjdw-bWQ_Z0DN09\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"IMG_4496.JPG\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-08.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"d95ced7fbd47712e0b75186b418a5d4e3f07e18078696098ff59b65f3cdf59f4\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Dining room framed by timber, marble and a continuous built-in wall\",\"ar\":\"غرفة طعام يحيط بها الخشب والرخام وحائط مدمج متصل\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-08.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-08.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-06\",\"projectSlug\":\"swan-lake\",\"area\":\"reception\",\"driveFileId\":\"1-CR_lCzIWUnnR_uUVLO-Kq5O6fZSx-X-\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"IMG_4494.JPG\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-06.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"1320ce282fa89cefdd28233f2d7ec8b02b3323b42ef1c9accbea44a8d2ccb21f\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Dining room with walnut wall panels, artwork and a crystal pendant\",\"ar\":\"غرفة طعام بألواح جدارية من الجوز ولوحة فنية وثريا كريستالية\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-06.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-06.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-07\",\"projectSlug\":\"swan-lake\",\"area\":\"wall\",\"driveFileId\":\"1S4RMfXTbVK_iAXWRSEb-sY_t8IpcfydY\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"IMG_4495.JPG\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-07.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"a1209ef633d3d8c1095d4117fd4d6f3459bd9e3369ef2ec3e92ed5e10aa3ce6c\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Living room with timber ceiling beams, brickwork and integrated media joinery\",\"ar\":\"غرفة معيشة بعوارض سقف خشبية وطوب ونجارة وسائط مدمجة\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-07.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-07.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-drive-010\",\"projectSlug\":\"swan-lake\",\"area\":\"other\",\"driveFileId\":\"1xd7Bq5dwkSJJNfnbulBKdBcmd9axdusV\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"IMG_1244.HEIC\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-drive-010.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"526eeead623fbf3527a806879c2da9fbb00756204bd74e4dd7dd58ebf6ed0273\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A dining setting carried by continuous timber lines and considered proportion.\",\"ar\":\"منطقة طعام تقودها خطوط خشبية متصلة ونسب مدروسة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-drive-010.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-drive-010.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-drive-011\",\"projectSlug\":\"swan-lake\",\"area\":\"other\",\"driveFileId\":\"1M_75S0x6uD0dwv7Ojd_GORtRAkSiU9xs\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"IMG_1241.HEIC\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-drive-011.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"9ff8f6155d9c891eb852004f90890d1ce93d8ff753f4700f8d41a1abf22de9fd\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Layered joinery and architectural light shape this Swan Lake interior.\",\"ar\":\"تشكّل النجارة متعددة الطبقات والضوء المعماري هذا الجزء من مشروع Swan Lake.\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-drive-011.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-drive-011.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-drive-012\",\"projectSlug\":\"swan-lake\",\"area\":\"other\",\"driveFileId\":\"1SHMRlqmib_RzYBDdcCpef2sdhqaYoUiR\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"IMG_0957.HEIC\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-drive-012.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"df0ca6f527ba07dbd66390cd2f3e32b3d8c086a61d77d5fd327141775b41a7d4\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A crafted residential vignette balancing storage, texture and calm.\",\"ar\":\"لقطة سكنية مصنوعة بعناية توازن بين التخزين والخامة والهدوء.\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-drive-012.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-drive-012.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-drive-013\",\"projectSlug\":\"swan-lake\",\"area\":\"other\",\"driveFileId\":\"1Lx_ahSbrb7Hv4YZsD7ZU6klPW4wkmMuy\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"IMG_1278.HEIC\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-drive-013.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"f916c3347e63486841f6f00fbfa09176dc63101af9f65c721ad31f4be2498b4b\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A warm living space framed by timber walls and integrated joinery.\",\"ar\":\"مساحة معيشة دافئة تحيط بها حوائط خشبية ووحدات مدمجة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-drive-013.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-drive-013.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-drive-014\",\"projectSlug\":\"swan-lake\",\"area\":\"other\",\"driveFileId\":\"1oyNu0baeMZfG7dC5ZekPAav4LcFESwCu\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"909A61FC-2C55-47DB-87E3-6D9D10423FF5.JPG\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-drive-014.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"e906b3bc03ee22df6aedef8c797941cb73eee40ded982f58724f0c0576d968e4\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A quiet bedroom composition with crafted timber and softened light.\",\"ar\":\"تكوين هادئ لغرفة نوم من الخشب المصنوع بعناية وضوء ناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-drive-014.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-drive-014.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-05\",\"projectSlug\":\"swan-lake\",\"area\":\"rooms\",\"driveFileId\":\"1Ycd4DyHYiruethdrGJ1xY1HhvnDJmb-5\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"IMG_4493.JPG\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-05.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"1af93416c255ce610babaa88b04e30a2c78cdebe196b206e2bc734fdba60bd09\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Living room with a dark media wall, timber slats and layered lighting\",\"ar\":\"غرفة معيشة بجدار وسائط داكن وشرائح خشبية وإضاءة متعددة الطبقات\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-05.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-05.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"swan-lake-drive-016\",\"projectSlug\":\"swan-lake\",\"area\":\"other\",\"driveFileId\":\"1Dt84KV_0Gqe4FW3f8OqfbiRA26GpBMe4\",\"sourceFolderId\":\"1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR\",\"sourceName\":\"D2E7CF64-DEAB-41FE-8FF6-FA1F085F8C3E.JPG\",\"localSrc\":\"/drive/projects/selected/swan-lake/swan-lake-drive-016.webp\",\"originalMime\":\"image/jpeg\",\"contentHash\":\"72dc80901a3af98c067b46e78a2b9a279d6f88347aee110041162da15c5df1bd\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A dining setting carried by continuous timber lines and considered proportion.\",\"ar\":\"منطقة طعام تقودها خطوط خشبية متصلة ونسب مدروسة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/swan-lake/swan-lake-drive-016.webp\",\"avif\":\"/drive/projects/selected/swan-lake/swan-lake-drive-016.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"villette-01\",\"projectSlug\":\"sodic-villette\",\"area\":\"wall\",\"driveFileId\":\"19-Zg-F9LiIU_OGYSCO_4sQzVxLDJj7KX\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0278.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/villette-01.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"97cab5dd4e5f2263b18b05cd35b1715d2182c21911edc30e16278b21040fcde9\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fluted timber wall with integrated desk and shelving\",\"ar\":\"جدار خشبي مخدد مع مكتب ورفوف مدمجة\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/villette-01.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/villette-01.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"villette-02\",\"projectSlug\":\"sodic-villette\",\"area\":\"dressing\",\"driveFileId\":\"1m4SZkP2KRYSVO4e6Ly2xZb918KVotXUF\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0343.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/villette-02.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"4ae85a30e5b5f5981d701a8cb95e654f9507accba90a1f833e93049374441bb3\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Walnut wardrobe interior with pull-down rail\",\"ar\":\"خزانة ملابس من الجوز مع قضيب قابل للسحب\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/villette-02.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/villette-02.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"villette-03\",\"projectSlug\":\"sodic-villette\",\"area\":\"bedroom\",\"driveFileId\":\"1ahJxQRZM6nYlmrOJ5hT6ZdAGVYVxWGJL\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0359.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/villette-03.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"29a5adad12c0c3551ee68ac0b2cb030913bbee7a46ee21bfdf3c001ece69421f\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Bedroom with a fluted timber feature wall\",\"ar\":\"غرفة نوم بجدار خشبي مخدد مميز\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/villette-03.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/villette-03.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-004\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1PzFfP-y6YTHSFPcoQnNqfBE0OsfaMMOJ\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0355.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-004.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"f4612315ad4516eec46c684ffcc63a319c72895cd79b5b54a9ba78cda2409ef5\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Continuous wall treatment connects storage, doors and living spaces.\",\"ar\":\"تربط معالجة الحائط المستمرة بين التخزين والأبواب ومساحات المعيشة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-004.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-004.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-005\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1G9NqHA0PffJ3_1N7GM2fpqxevh9aScyT\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0351.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-005.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"67990b38c8192d96b1c66878a14a246232e8c47f72e87e42d3199c5916f5d0bd\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close view of crafted surfaces and hardware across the Villette package.\",\"ar\":\"لقطة قريبة للأسطح والتجهيزات المصنوعة بعناية ضمن حزمة Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-005.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-005.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-006\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1uNI36SN4etS0gFWgoPLF8sc5g4Ux-oJC\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0407.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-006.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"aedf0f69b43621fbf785ce6228e3eedf2c2b217ea8b211823648679c2405639c\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Residential joinery shaped around everyday movement and calm rooms.\",\"ar\":\"نجارة سكنية مصممة حول الحركة اليومية وغرف هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-006.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-006.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-007\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"10hyLqmwNWifQ-_aaoeRCY7o5nwmXY869\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0352.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-007.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"8d4af249900952821f46623a96ed15eae369f8d50fd3caff275708c40c82b737\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fluted timber walls bring rhythm and warmth to the SODIC Villette home.\",\"ar\":\"تمنح الحوائط الخشبية المخددة إيقاعاً ودفئاً لمنزل SODIC Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-007.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-007.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-008\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1TTQaR_JGYbm2YSAW168NQhA4RTyWfWTM\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0400.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-008.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"52c1f34db92752b029e641670aed938cfac114e860e0e764732b64e50e20a8df\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A dressing storage detail resolved with precise joinery and quiet texture.\",\"ar\":\"تفصيلة تخزين لغرفة الملابس بحلول نجارة دقيقة وخامة هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-008.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-008.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-009\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1XhFekbr6Q0jVFMYN11aR0buZBm9t1Fea\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0363.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-009.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"5cea8e19997892d0b7943b879007e05e343917e64273057acd30b5999806f130\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A bedroom interior where timber, proportion and soft light work together.\",\"ar\":\"مساحة نوم يلتقي فيها الخشب والنسب والضوء الناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-009.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-009.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-010\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1l2lXz60641QaLJeH1hVU8Eacc8UOLf98\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0350.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-010.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"1a8610f87b38c14937493a1313e9bcf955a84ce373e940935b65326a5e90dd73\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Continuous wall treatment connects storage, doors and living spaces.\",\"ar\":\"تربط معالجة الحائط المستمرة بين التخزين والأبواب ومساحات المعيشة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-010.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-010.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-011\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1JKODL2BZq2EVAdQC1T0uqL0WAyA5ebr4\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0342.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-011.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ce84fc22befead4fe442c28f91ab1e68a9af33519aca1b3aa953d2148ae73976\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close view of crafted surfaces and hardware across the Villette package.\",\"ar\":\"لقطة قريبة للأسطح والتجهيزات المصنوعة بعناية ضمن حزمة Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-011.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-011.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-012\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1hEgHq0xcen8L1pkDPBzzk4HIlVgXua6G\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0356.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-012.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"cedaf845b533213d55abd5f13021a3c41d0777748eeda1229e80a503bf5f0c08\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Residential joinery shaped around everyday movement and calm rooms.\",\"ar\":\"نجارة سكنية مصممة حول الحركة اليومية وغرف هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-012.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-012.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-013\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1R5U_hog0gjAT-os7kyrxTpp_0rRiA8KA\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0357.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-013.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"8da0950e0fbc41998c4429a904611538482fffafaeb5a978665b8f8fdb033177\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fluted timber walls bring rhythm and warmth to the SODIC Villette home.\",\"ar\":\"تمنح الحوائط الخشبية المخددة إيقاعاً ودفئاً لمنزل SODIC Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-013.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-013.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-014\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1S5NhqSLi2VVr0c0VU6wr8_8NvDlw2sGh\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0354.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-014.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"b080f65fd37c6f37df13824e668cc11ea50058bee0707eeaa0aad77fe372a72a\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A dressing storage detail resolved with precise joinery and quiet texture.\",\"ar\":\"تفصيلة تخزين لغرفة الملابس بحلول نجارة دقيقة وخامة هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-014.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-014.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-015\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"12StwrLTCALvSnLUs6NA--9gptK9s6qet\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0353.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-015.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"7cccc794f7630c32bf2a08e7894d918ebf3f2dd8e8f0eaaebfa83ed51d41cc44\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A bedroom interior where timber, proportion and soft light work together.\",\"ar\":\"مساحة نوم يلتقي فيها الخشب والنسب والضوء الناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-015.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-015.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-016\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1EqleKPKAz9ZtUjVEGro7PNtSdEjCLLrP\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0360.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-016.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"9f6b088240616ef1c480922c41437552a8977899b9084135d859a8cf26fb73ec\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Continuous wall treatment connects storage, doors and living spaces.\",\"ar\":\"تربط معالجة الحائط المستمرة بين التخزين والأبواب ومساحات المعيشة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-016.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-016.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-017\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"16B2ESCTDaPXOhk_qxGa5Cq2aWuY9Ibbx\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0343.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-017.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"4ae85a30e5b5f5981d701a8cb95e654f9507accba90a1f833e93049374441bb3\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close view of crafted surfaces and hardware across the Villette package.\",\"ar\":\"لقطة قريبة للأسطح والتجهيزات المصنوعة بعناية ضمن حزمة Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-017.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-017.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-018\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1M44cMKz7qIRtB646RQT00OynkqN84gtd\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0355.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-018.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"f4612315ad4516eec46c684ffcc63a319c72895cd79b5b54a9ba78cda2409ef5\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Residential joinery shaped around everyday movement and calm rooms.\",\"ar\":\"نجارة سكنية مصممة حول الحركة اليومية وغرف هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-018.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-018.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-019\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1DUll3fmzFybYIiJuXOecU8uD-uPwKvDX\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0371.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-019.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"2c227d55387b0b5f1abb6d3040e732d5b555fab95b485da44e45ad8aaa88fb03\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fluted timber walls bring rhythm and warmth to the SODIC Villette home.\",\"ar\":\"تمنح الحوائط الخشبية المخددة إيقاعاً ودفئاً لمنزل SODIC Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-019.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-019.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-020\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1Z5l1bfdmex-MJbX7yjKHOUDqa7VBBr7x\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0351.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-020.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"67990b38c8192d96b1c66878a14a246232e8c47f72e87e42d3199c5916f5d0bd\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A dressing storage detail resolved with precise joinery and quiet texture.\",\"ar\":\"تفصيلة تخزين لغرفة الملابس بحلول نجارة دقيقة وخامة هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-020.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-020.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-021\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"12202JU8Wd1rOqngOXZVgJYxMEIxGfFCm\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0374.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-021.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"b474fe0b887f109fa021a74c3daca1c108605a56eeba677ac13da64887dc8a5c\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A bedroom interior where timber, proportion and soft light work together.\",\"ar\":\"مساحة نوم يلتقي فيها الخشب والنسب والضوء الناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-021.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-021.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-022\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1PWlVhaTw8ne5vCuT7PTBzFfSb2yzZ-vN\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0372.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-022.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"bdbfd4bb7acc07ea1cf8017d43985596ecec49ae8a9e25e6bb5ef89c6cc9ec18\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Continuous wall treatment connects storage, doors and living spaces.\",\"ar\":\"تربط معالجة الحائط المستمرة بين التخزين والأبواب ومساحات المعيشة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-022.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-022.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-023\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1raCBnnEngnjLku7ExPKT24fEDv8OUUDK\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0368.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-023.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"f282a3b5d0f8d43516a004a8b01182936b0ef328d6df44b014ce567d60236df4\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close view of crafted surfaces and hardware across the Villette package.\",\"ar\":\"لقطة قريبة للأسطح والتجهيزات المصنوعة بعناية ضمن حزمة Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-023.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-023.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-024\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1pXOhVkzLFYr7UFMWc9vuZU2E3vPXeEuf\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0370.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-024.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"fa59dc7dcbf2aefe1f3a8a6cbdf0dbeede84c1171807ad521fe2da588a9658f2\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Residential joinery shaped around everyday movement and calm rooms.\",\"ar\":\"نجارة سكنية مصممة حول الحركة اليومية وغرف هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-024.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-024.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-025\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"111qalaWbKGuh9Utmqh2kl2yrAP9vtHnE\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0352.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-025.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"8d4af249900952821f46623a96ed15eae369f8d50fd3caff275708c40c82b737\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fluted timber walls bring rhythm and warmth to the SODIC Villette home.\",\"ar\":\"تمنح الحوائط الخشبية المخددة إيقاعاً ودفئاً لمنزل SODIC Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-025.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-025.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-026\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1gdTwurehWwYjh_QeayntXWTUd5m5VN9U\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0366.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-026.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"fcf7307fd975101e66093bf9de0360970fe5082ecc26f8cdddc6211307fdd335\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A dressing storage detail resolved with precise joinery and quiet texture.\",\"ar\":\"تفصيلة تخزين لغرفة الملابس بحلول نجارة دقيقة وخامة هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-026.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-026.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-027\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1olgeC4Au-8y5Q5RHbVJ_ovpG7wtdzxR-\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0363.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-027.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"5cea8e19997892d0b7943b879007e05e343917e64273057acd30b5999806f130\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A bedroom interior where timber, proportion and soft light work together.\",\"ar\":\"مساحة نوم يلتقي فيها الخشب والنسب والضوء الناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-027.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-027.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-028\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1e7RX_rhAvQ6jXu2_qXsmq6f4SMcvycXl\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0350.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-028.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"1a8610f87b38c14937493a1313e9bcf955a84ce373e940935b65326a5e90dd73\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Continuous wall treatment connects storage, doors and living spaces.\",\"ar\":\"تربط معالجة الحائط المستمرة بين التخزين والأبواب ومساحات المعيشة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-028.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-028.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-029\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1zU3EkF3-VrQrvIla_WsALFxzKw2OWm3E\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0342.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-029.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ce84fc22befead4fe442c28f91ab1e68a9af33519aca1b3aa953d2148ae73976\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close view of crafted surfaces and hardware across the Villette package.\",\"ar\":\"لقطة قريبة للأسطح والتجهيزات المصنوعة بعناية ضمن حزمة Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-029.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-029.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-030\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1dbePPtTRSLlqAXf2LDSlI-zXCIfWXuDc\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0356.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-030.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"cedaf845b533213d55abd5f13021a3c41d0777748eeda1229e80a503bf5f0c08\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Residential joinery shaped around everyday movement and calm rooms.\",\"ar\":\"نجارة سكنية مصممة حول الحركة اليومية وغرف هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-030.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-030.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-031\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"13fBPrv7iCSt9jNp2u-hoilQZXkKg8jbp\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0358.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-031.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"d64e37f5997490d710acd6ec37c2e8a4848089fc6d1f7275a50ec1ada4ec503d\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fluted timber walls bring rhythm and warmth to the SODIC Villette home.\",\"ar\":\"تمنح الحوائط الخشبية المخددة إيقاعاً ودفئاً لمنزل SODIC Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-031.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-031.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-032\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1bO8U_yLNyvQ4QMuB8NUPzufxag4Xe3nO\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0357.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-032.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"8da0950e0fbc41998c4429a904611538482fffafaeb5a978665b8f8fdb033177\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A dressing storage detail resolved with precise joinery and quiet texture.\",\"ar\":\"تفصيلة تخزين لغرفة الملابس بحلول نجارة دقيقة وخامة هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-032.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-032.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-033\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1mkB25MbwuUdWjNR5s_5OA8qEA-Jbc4oc\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0354.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-033.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"b080f65fd37c6f37df13824e668cc11ea50058bee0707eeaa0aad77fe372a72a\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A bedroom interior where timber, proportion and soft light work together.\",\"ar\":\"مساحة نوم يلتقي فيها الخشب والنسب والضوء الناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-033.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-033.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-034\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"15pgQ4RV8ws7b3nIwDSF16ROWFzEVWnGI\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0353.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-034.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"7cccc794f7630c32bf2a08e7894d918ebf3f2dd8e8f0eaaebfa83ed51d41cc44\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Continuous wall treatment connects storage, doors and living spaces.\",\"ar\":\"تربط معالجة الحائط المستمرة بين التخزين والأبواب ومساحات المعيشة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-034.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-034.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-035\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1OTfEB9kynCWNJ6otkuTzGkEDE0w1Tuzg\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0360.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-035.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"9f6b088240616ef1c480922c41437552a8977899b9084135d859a8cf26fb73ec\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close view of crafted surfaces and hardware across the Villette package.\",\"ar\":\"لقطة قريبة للأسطح والتجهيزات المصنوعة بعناية ضمن حزمة Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-035.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-035.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-036\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1hQ3pwixKzQy4LPmBkB61g7OMVkHhgs8I\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0340.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-036.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"e98d167f409f90e88dc9eb6627d7a3160d6ea168d3f4615548a1c9cef14d5a40\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Residential joinery shaped around everyday movement and calm rooms.\",\"ar\":\"نجارة سكنية مصممة حول الحركة اليومية وغرف هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-036.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-036.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-037\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1nTZzCumJX8-ENwQFvB86DjZHC5TTf7Yr\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0369.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-037.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"a13a29e626f7f1b02753743c254c1d952a9b5650d432521ece2792ca47776c1a\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fluted timber walls bring rhythm and warmth to the SODIC Villette home.\",\"ar\":\"تمنح الحوائط الخشبية المخددة إيقاعاً ودفئاً لمنزل SODIC Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-037.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-037.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"villette-04\",\"projectSlug\":\"sodic-villette\",\"area\":\"reception\",\"driveFileId\":\"1zNAyw53pQvIU1jxqbnOAhe4JCQRPUdlt\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_9536.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/villette-04.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"4b7a11661e4ca2e0f032bbfab189f0721909b7f5e4bca3ed7983fc7ef8a62e8f\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Living room seating and media wall\",\"ar\":\"جلسة معيشة وجدار وسائط\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/villette-04.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/villette-04.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"villette-05\",\"projectSlug\":\"sodic-villette\",\"area\":\"reception-detail\",\"driveFileId\":\"1J99sGjk07y4oXtuqTby82_wNsY2NZoU3\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_9532.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/villette-05.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"28d58ece04e80dc1b584158da6e9424aa7707e636d28b6b6ade1c7a537414c6a\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Sofa and timber wall detail\",\"ar\":\"تفصيل أريكة وجدار خشبي\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/villette-05.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/villette-05.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"villette-06\",\"projectSlug\":\"sodic-villette\",\"area\":\"cover\",\"driveFileId\":\"1jG0MQlpnD5gVbXogi4WLp_5Dho4TKqYu\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_9539.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/villette-06.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"e51b0f1d8b82ec7f74f6e181831ede4e871ef92ec042663db4f36508da634763\",\"orientation\":\"portrait\",\"quality\":\"hero\",\"alt\":{\"en\":\"Wide living room with a dark media wall\",\"ar\":\"غرفة معيشة واسعة بجدار وسائط داكن\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/villette-06.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/villette-06.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-041\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1ssFmaqUvVEEwAEGEEvXp36mW3IqaghEL\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_9534.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-041.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"4eaa0aa287081abfe758449110c4d2b1bb9f4a6c83e9378ab1a726a00857cb5a\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close view of crafted surfaces and hardware across the Villette package.\",\"ar\":\"لقطة قريبة للأسطح والتجهيزات المصنوعة بعناية ضمن حزمة Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-041.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-041.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-042\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1CkDktkkTy-3IASnJxYKGh-4TFs8vl4RM\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_9537.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-042.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"d0cb2bffbe6d1f94d9d685d835b6af79e6ac848d3aee69512c551488a93ec9f5\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Residential joinery shaped around everyday movement and calm rooms.\",\"ar\":\"نجارة سكنية مصممة حول الحركة اليومية وغرف هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-042.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-042.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-043\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1I-OWZDIN3OHZnbW3tWT7ITKBuwEwLN1J\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0114.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-043.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"5510ea246e3f8bd45a13856c0b66499c9b5603314224c8612f41fc603eeef40e\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fluted timber walls bring rhythm and warmth to the SODIC Villette home.\",\"ar\":\"تمنح الحوائط الخشبية المخددة إيقاعاً ودفئاً لمنزل SODIC Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-043.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-043.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-044\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1hNR_o-8LCGZvx9wQISp_Oj0kaaGYWM_j\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0282.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-044.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"262871bf27eb79937e21d579b0606103d31c7325004b9fee2405e7a7147a326f\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A dressing storage detail resolved with precise joinery and quiet texture.\",\"ar\":\"تفصيلة تخزين لغرفة الملابس بحلول نجارة دقيقة وخامة هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-044.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-044.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-045\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1J49VeHUMtS4c8mf9yHpAGtQqfk4XgjEp\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0278.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-045.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"97cab5dd4e5f2263b18b05cd35b1715d2182c21911edc30e16278b21040fcde9\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A bedroom interior where timber, proportion and soft light work together.\",\"ar\":\"مساحة نوم يلتقي فيها الخشب والنسب والضوء الناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-045.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-045.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-046\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1LUKZ1FeOocALcRrina4msmUWLvlcxIjy\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0107.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-046.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ae37cffef07c0536b09f0e24fba7934bde5a98a2d48ba921bdcf0c7ab1621258\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Continuous wall treatment connects storage, doors and living spaces.\",\"ar\":\"تربط معالجة الحائط المستمرة بين التخزين والأبواب ومساحات المعيشة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-046.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-046.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-047\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1YUmoxe8Qr4_vD3o9_qHhxhEVMdid6yLu\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0103.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-047.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"60fd32e6d4c14decba78bc57d9072c7f661563db81fbe27289187e541d24db3a\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close view of crafted surfaces and hardware across the Villette package.\",\"ar\":\"لقطة قريبة للأسطح والتجهيزات المصنوعة بعناية ضمن حزمة Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-047.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-047.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-048\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"17EPhkkQqP22oHnwXmZh7k7Od5EaIwUmd\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0108.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-048.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ee64ab994ca3f0f07cebe1e80b940f184bc145e16755b5ed39879a945ec8f34e\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Residential joinery shaped around everyday movement and calm rooms.\",\"ar\":\"نجارة سكنية مصممة حول الحركة اليومية وغرف هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-048.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-048.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-049\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1K7hGtot4NHmikiIg3WL87TzCMMLiODXs\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0283.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-049.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"89094506572931063665e947406daac3eab77646a42b2109081519981e9b72c5\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fluted timber walls bring rhythm and warmth to the SODIC Villette home.\",\"ar\":\"تمنح الحوائط الخشبية المخددة إيقاعاً ودفئاً لمنزل SODIC Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-049.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-049.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-050\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"19r3QaH06pkrFRPzUTXVdzGruyLj4gzeh\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0276.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-050.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"f135f620cea25fdea849644ebcb1a3518939943511ceaa805fe7467a7d62431a\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A dressing storage detail resolved with precise joinery and quiet texture.\",\"ar\":\"تفصيلة تخزين لغرفة الملابس بحلول نجارة دقيقة وخامة هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-050.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-050.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-051\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"15WLFIbBY8Oy2ZLJrR8WRrBMuq186Jxii\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0300.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-051.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"c81b6fb9f96fd3b30296d14effcaef227451de41fd4486135b785f181a7041e6\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A bedroom interior where timber, proportion and soft light work together.\",\"ar\":\"مساحة نوم يلتقي فيها الخشب والنسب والضوء الناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-051.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-051.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-052\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1dlS2lWFmOyIYmUFAvS4M5JJgUM7fnvR8\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0293.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-052.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ec3025ea53537b975907b84709e7312e4202a01ca5b6111241d2eda7dad57506\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Continuous wall treatment connects storage, doors and living spaces.\",\"ar\":\"تربط معالجة الحائط المستمرة بين التخزين والأبواب ومساحات المعيشة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-052.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-052.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-053\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1V4SDkRd2vG8O1b_QSVnrlQmIlu72nsfZ\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0105.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-053.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"b07670a2e977e6c5f24648704668876c94f9fc74326c6933e6f18aebbf813961\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close view of crafted surfaces and hardware across the Villette package.\",\"ar\":\"لقطة قريبة للأسطح والتجهيزات المصنوعة بعناية ضمن حزمة Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-053.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-053.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-054\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"1OfZkbDOd_JEztBpFPPbmSGFj6ubzMzLq\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0287.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-054.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"7b77d152d8e0a5b45de4cfff138d7746c029bec643c9150d40b109b85ccf834e\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Residential joinery shaped around everyday movement and calm rooms.\",\"ar\":\"نجارة سكنية مصممة حول الحركة اليومية وغرف هادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-054.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-054.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"sodic-villette-drive-055\",\"projectSlug\":\"sodic-villette\",\"area\":\"other\",\"driveFileId\":\"16KsljsM2fM_uzIP2i23u5qfhTG6NwPbk\",\"sourceFolderId\":\"11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv\",\"sourceName\":\"IMG_0286.HEIC\",\"localSrc\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-055.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"c21738dfb4c72fb1edc6cc810768c34c1c9ef53fa46485fd218955fd2457d05e\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fluted timber walls bring rhythm and warmth to the SODIC Villette home.\",\"ar\":\"تمنح الحوائط الخشبية المخددة إيقاعاً ودفئاً لمنزل SODIC Villette.\"},\"derived\":{\"webp\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-055.webp\",\"avif\":\"/drive/projects/selected/sodic-villette/sodic-villette-drive-055.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-01\",\"projectSlug\":\"playa\",\"area\":\"dressing\",\"driveFileId\":\"1wlZGDtxjTMgd4SoadLO0bNN9sRJ7Vfsu\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2581.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-01.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"662bc96cc930421901e2472b556bd38f2d3935318c76b74f2ad0fdcdc3de3342\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"White fitted wardrobe with open storage\",\"ar\":\"خزانة ملابس بيضاء بوحدات تخزين مفتوحة\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-01.webp\",\"avif\":\"/drive/projects/selected/playa/playa-01.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-02\",\"projectSlug\":\"playa\",\"area\":\"dressing-detail\",\"driveFileId\":\"1eH-YHNlaviqw9q-XotblZduEypFd9Op8\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2582.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-02.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"e6c7611eda4a352c6f838408ec6e9b6636d02c86b216969a82ec80eee6f750b9\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Close detail of wardrobe internals\",\"ar\":\"تفصيل داخلي لخزانة ملابس\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-02.webp\",\"avif\":\"/drive/projects/selected/playa/playa-02.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-03\",\"projectSlug\":\"playa\",\"area\":\"dressing-detail\",\"driveFileId\":\"1gyf-n7KyLBRVmMxyyGnX9KDgpxNoInZ6\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2546.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-03.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"feef08d1169d8abfddcafe06263d5e1a0827cf8573304eda3e52dd7d42b0715b\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Wardrobe hardware and drawer detail\",\"ar\":\"تفصيل إكسسوارات وأدراج خزانة\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-03.webp\",\"avif\":\"/drive/projects/selected/playa/playa-03.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-04\",\"projectSlug\":\"playa\",\"area\":\"doors\",\"driveFileId\":\"1SRyB5YdCyX3ZlwpVAKtW2yRyggoZFTgp\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2607.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-04.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"32c5d7c1cfcfda8619880ee5e21a67441accc9c9cb7f9e1e0bb4028ede608146\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Oak double doors with perforated timber detail\",\"ar\":\"بابان من البلوط بتفصيل خشبي مثقب\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-04.webp\",\"avif\":\"/drive/projects/selected/playa/playa-04.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-005\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1Walr9xOjbHhhLExBZMixmLQ3rpIfDnQG\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2554.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-005.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"6aef4391ed06a1b8770608e14736ef42e619149e5971baa34cdda44712ec5e52\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A considered interior view of timber surfaces, storage and soft natural light.\",\"ar\":\"منظور داخلي مدروس لأسطح خشبية وتخزين وضوء طبيعي ناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-005.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-005.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-05\",\"projectSlug\":\"playa\",\"area\":\"stairs\",\"driveFileId\":\"1vrdIsa6opQz-8XOTCUv1czDph4GxHGgF\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2601.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-05.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"be80a6d77b228b758f3d704b5eadfd64b30414e10f56c3d354cd8ec5c9a168a2\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Illuminated entry steps and timber doorway\",\"ar\":\"درجات مدخل مضاءة وباب خشبي\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-05.webp\",\"avif\":\"/drive/projects/selected/playa/playa-05.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-007\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1NL0MU_1r8KMsamt-oCooADVQv5UTLuqJ\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2545.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-007.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"7401f2b1abca128ac874b4ed5c1f6194eac589723a76e467d7fe53e911f5d279\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close study of the thresholds, doors and fitted pieces that complete the room.\",\"ar\":\"دراسة قريبة للانتقالات والأبواب والعناصر المدمجة التي تكمل المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-007.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-007.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-008\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"17tEeqQHgEgwNBHDrzzOxu0_XYZOKt6MV\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2600.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-008.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ae5faa44171dab482ded9f0e88599a735cc49ce9c781089fda5ad70711bae0f1\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Warm joinery and measured storage carry one continuous language through the space.\",\"ar\":\"تحمل النجارة الدافئة والتخزين المدروس لغة واحدة متصلة عبر المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-008.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-008.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-009\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1Qyee45z0ZYzIpXUJAoYePgR-kclDE-sH\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2555.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-009.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"29aa7a3b731eeb07af6275e645087569130bee6a3c54669e300c5844756cb99d\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A Playa joinery detail with warm timber, clean lines and precise hardware.\",\"ar\":\"تفصيلة نجارة من Playa بخشب دافئ وخطوط نظيفة وتجهيزات دقيقة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-009.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-009.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-010\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1sIEpA9S6ufq236nl8piPVsfbtrioFa9o\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2606.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-010.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"1dda9d86821dc8d56e743e30118b50cdfb54fe649aa69d84b36019cc6c1bbb69\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A tailored storage composition showing the quiet precision of the Playa package.\",\"ar\":\"تكوين تخزين مصمم بعناية يظهر دقة حزمة Playa الهادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-010.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-010.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-011\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1RPM8AZVF2WhFS7JfcgMGk6m5KD-8wDEe\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2556.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-011.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"9693f32db327f8fc3bd156fe87e9569920f01ed75daaac13f0ea611ccd9d3ae2\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A crafted doorway where material, proportion and movement meet.\",\"ar\":\"مدخل مصنوع بعناية تلتقي فيه الخامة والنسب والحركة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-011.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-011.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-012\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1d9uggaaVcUVGZqCJfucJsd1r5kDGisNn\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2560.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-012.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"118e2d38a5e0bd5255d67e30d6e1a86d8a75cc59b0d70dcaf7f7da1ee16f466b\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A stair and joinery study built around clean thresholds and durable detail.\",\"ar\":\"دراسة للسلم والنجارة مبنية حول انتقالات نظيفة وتفاصيل متينة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-012.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-012.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-013\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1vQYD1Jh2_rLc01dzqEb6oxTWzHtNe9yS\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2605.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-013.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"45e8fceb79049cef317f4ec316361efe88a9e8c4ed6f71296749be2fe9e7676e\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A considered interior view of timber surfaces, storage and soft natural light.\",\"ar\":\"منظور داخلي مدروس لأسطح خشبية وتخزين وضوء طبيعي ناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-013.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-013.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-014\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1fJQp2j6ZVlPSZ-ES0oxWSZAZn4zUGF6P\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2602.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-014.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"18b93da037828fedcfc0a8a3e89feff3194aaeb3d0b5cdd8b2d204fba52165d2\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fine hardware and aligned panels give this Playa interior its quiet character.\",\"ar\":\"تمنح التجهيزات الدقيقة والألواح المتراصة هذا الجزء من Playa طابعه الهادئ.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-014.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-014.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-015\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1q9tlHyIOyp8IW7XU2ZqQ4zLSXoh_8G0p\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2603.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-015.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"fbd819211bf411e0ac44ef9c70a670ec2829d126e84584f15270b24cdb1f6a53\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close study of the thresholds, doors and fitted pieces that complete the room.\",\"ar\":\"دراسة قريبة للانتقالات والأبواب والعناصر المدمجة التي تكمل المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-015.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-015.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-016\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1xGVwS43aRTotCFJIYqVXqQ1v-jv0OoVc\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2561.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-016.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"1f34181a005a333e32414e3194e7df3328c5c5563eb2a422b43c988183499d7b\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Warm joinery and measured storage carry one continuous language through the space.\",\"ar\":\"تحمل النجارة الدافئة والتخزين المدروس لغة واحدة متصلة عبر المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-016.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-016.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-017\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1dYkoRdA6CsWZ7mKMNtFDnFU18UwBKTUN\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2604.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-017.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"346f866cb4c9cd55f1685999b62e7f90574c7c8a4e78095677fab98456c252c8\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A Playa joinery detail with warm timber, clean lines and precise hardware.\",\"ar\":\"تفصيلة نجارة من Playa بخشب دافئ وخطوط نظيفة وتجهيزات دقيقة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-017.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-017.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-018\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"11tjt3zpeU4rSAnEvosg8JpZXt-Lvp6JI\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2544.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-018.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"db91ae441f33e583621d8922ce5fba0fe7c9ee719db22c62ac91059ecb228699\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A tailored storage composition showing the quiet precision of the Playa package.\",\"ar\":\"تكوين تخزين مصمم بعناية يظهر دقة حزمة Playa الهادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-018.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-018.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-019\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1UF7ND2TBIAB1fLH5rX0DSmgpco1B11pm\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2549.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-019.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"471e35104f40c1b1a03183f519d0af9d4d2b5c20a35944cd9cfb827b3d143cfa\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A crafted doorway where material, proportion and movement meet.\",\"ar\":\"مدخل مصنوع بعناية تلتقي فيه الخامة والنسب والحركة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-019.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-019.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-020\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1CF5NcvLodyIFNHWCi671x9HSq9COgC_y\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2550.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-020.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"1e9ece8c411152f2cf2d8b947302a939c2646da167923ed59ded915f67b0cb7e\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A stair and joinery study built around clean thresholds and durable detail.\",\"ar\":\"دراسة للسلم والنجارة مبنية حول انتقالات نظيفة وتفاصيل متينة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-020.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-020.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-021\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1i2ZVadPwuFNZTUiHDtWKsJxaB20FxQ17\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2535.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-021.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"e3daa00ff4db5c3b606cf75c0ad8c7561606742f67dd81fe4fcd617442aa87c6\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A considered interior view of timber surfaces, storage and soft natural light.\",\"ar\":\"منظور داخلي مدروس لأسطح خشبية وتخزين وضوء طبيعي ناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-021.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-021.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-022\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1fCVKV0M7jp-HFG_cETdgBO_dsCL0gu8i\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2572.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-022.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"f55b4cae92c4b0b9bb5e06861e0b32ca6e0b2a35fce57864069475f072137fa1\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fine hardware and aligned panels give this Playa interior its quiet character.\",\"ar\":\"تمنح التجهيزات الدقيقة والألواح المتراصة هذا الجزء من Playa طابعه الهادئ.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-022.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-022.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-023\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1v61LUtbsD2eZymrt8PXUbfHUBzKHFUSg\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2534.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-023.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"743bf03f4d9d1ebfacb9555559f2e7a0df579a60a2214643cf897fa60d226624\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close study of the thresholds, doors and fitted pieces that complete the room.\",\"ar\":\"دراسة قريبة للانتقالات والأبواب والعناصر المدمجة التي تكمل المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-023.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-023.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-024\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1mI3vWdIhX0Gua-4Re1hYU2aSQybtO62W\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2542.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-024.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ac599082550104250349367d06ca71fdb49fb761b72077314db9c6f71659346c\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Warm joinery and measured storage carry one continuous language through the space.\",\"ar\":\"تحمل النجارة الدافئة والتخزين المدروس لغة واحدة متصلة عبر المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-024.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-024.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-025\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1bP6xqVHczDxAA34wKftMKiQhF7TWGJLd\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2531.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-025.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"6ff29d2467fa6aa3132974fa3ddcd2513d816c462b71ad59b80dd1ab9d5d19d6\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A Playa joinery detail with warm timber, clean lines and precise hardware.\",\"ar\":\"تفصيلة نجارة من Playa بخشب دافئ وخطوط نظيفة وتجهيزات دقيقة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-025.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-025.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-026\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1N4bWwbCwxqlS0qU9Cag6Itq4s9cWGMg_\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2571.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-026.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"dbdb053a38151cc1c1db5d22cc5177cfa007692ec6cb129682e7e970f86d1239\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A tailored storage composition showing the quiet precision of the Playa package.\",\"ar\":\"تكوين تخزين مصمم بعناية يظهر دقة حزمة Playa الهادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-026.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-026.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-027\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1ZAwZAkhRFcc-QobNLk2j1Zj8MqbitzoG\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2574.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-027.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"7f17cce6ee670cb4b0d00448a5788c7f8ab98eacf24e682ea19739c47ff8ea5a\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A crafted doorway where material, proportion and movement meet.\",\"ar\":\"مدخل مصنوع بعناية تلتقي فيه الخامة والنسب والحركة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-027.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-027.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-028\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1d2U_Fp4J5zL-XjnZ1nTU-oM66bZ_EsbF\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2580.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-028.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"6ba041537de12ea557d9abe4611da60050e41eca6da7da7ea28a009725bacb81\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A stair and joinery study built around clean thresholds and durable detail.\",\"ar\":\"دراسة للسلم والنجارة مبنية حول انتقالات نظيفة وتفاصيل متينة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-028.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-028.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-029\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1uQpmalWFaf3PMvG-QYLD10CxfTGFmjPT\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2579.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-029.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"bdbe37105ad0a414462e17ea8d61c77e57ef14168481c719bb09318c3a7dfd4b\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A considered interior view of timber surfaces, storage and soft natural light.\",\"ar\":\"منظور داخلي مدروس لأسطح خشبية وتخزين وضوء طبيعي ناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-029.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-029.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-030\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1OQoCmPCezfC16GeMltTKDZ_7X1g9-rTL\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2597.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-030.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"5deed7e58af6a27f49f33cd972f82f872057c2cc638dd130fcfd0a20e7e83674\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fine hardware and aligned panels give this Playa interior its quiet character.\",\"ar\":\"تمنح التجهيزات الدقيقة والألواح المتراصة هذا الجزء من Playa طابعه الهادئ.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-030.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-030.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-031\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1_JjXW4ZDqQzbZLX021hKPzD7nSnHJ2Rb\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2530.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-031.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"a83f641dc32a1ebd8b9ddd7062bc93f67aa224c94d67f7c123c7b27354a79d94\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close study of the thresholds, doors and fitted pieces that complete the room.\",\"ar\":\"دراسة قريبة للانتقالات والأبواب والعناصر المدمجة التي تكمل المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-031.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-031.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-032\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"16nM8n5Kkfl2RL6t8fqGzJXVZqGgTuxC9\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2541.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-032.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"e9183317f0ff603873bed93caedb81796a089db34250428dc7708c2c0eb0508c\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Warm joinery and measured storage carry one continuous language through the space.\",\"ar\":\"تحمل النجارة الدافئة والتخزين المدروس لغة واحدة متصلة عبر المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-032.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-032.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-033\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1B7hOYVK4z6SUqKxIR0i1088fN7Qf4gq8\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2575.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-033.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"f551cfeb9cf0341b5186c8cbf77937fad050bab898ce25574fcd1b702dff2872\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A Playa joinery detail with warm timber, clean lines and precise hardware.\",\"ar\":\"تفصيلة نجارة من Playa بخشب دافئ وخطوط نظيفة وتجهيزات دقيقة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-033.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-033.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-034\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"173BKgIed_QBLhCZRBEZfIy6HtFE2gZkw\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2583.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-034.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"0c4710f71c679a590862f6d69df8970cb2594b5f1c527bfa4f44427dfcde6efb\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A tailored storage composition showing the quiet precision of the Playa package.\",\"ar\":\"تكوين تخزين مصمم بعناية يظهر دقة حزمة Playa الهادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-034.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-034.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-035\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1j9qLfWixq9CZ6YFXQAouPATP4ktQHY82\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2584.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-035.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"d7c43120681331caf6e2f7546ab933336096ac6a5a5fff1f3ebbff21b1b32f03\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A crafted doorway where material, proportion and movement meet.\",\"ar\":\"مدخل مصنوع بعناية تلتقي فيه الخامة والنسب والحركة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-035.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-035.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-036\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1zIsOh8CR2La4KsbR4gZSWflmKFdAt4PO\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2559.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-036.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"c6ee56f75ce928e30222e2c77f735ff7dd63776caef8ccb0a23d5bafb33ea5af\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A stair and joinery study built around clean thresholds and durable detail.\",\"ar\":\"دراسة للسلم والنجارة مبنية حول انتقالات نظيفة وتفاصيل متينة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-036.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-036.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-037\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1p62RHUNFUG3t2bXuqSFQVpIed1I1--M7\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2608.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-037.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"1b20a4afdd8b74c44ff65356e4fd9f06650ebc5c487ca30baba25e85b933e030\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A considered interior view of timber surfaces, storage and soft natural light.\",\"ar\":\"منظور داخلي مدروس لأسطح خشبية وتخزين وضوء طبيعي ناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-037.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-037.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-038\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1Hr8XgWp8hc2qXqqbxIHmddoQ_KQWMxqh\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2588.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-038.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"e1c0220bc0b577c1bc825f67a60d0ccd2c142a7e03fb110cc5dc8a4687c2b0c1\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fine hardware and aligned panels give this Playa interior its quiet character.\",\"ar\":\"تمنح التجهيزات الدقيقة والألواح المتراصة هذا الجزء من Playa طابعه الهادئ.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-038.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-038.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-039\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1VBQNRp0cHC8-o-oBG6GgMRVV_k_Mb2MK\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2590.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-039.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"2bdbddff469f4a8c4578bba6fcca29f35aec9bfb5a96e08458dfced5236c1f0c\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close study of the thresholds, doors and fitted pieces that complete the room.\",\"ar\":\"دراسة قريبة للانتقالات والأبواب والعناصر المدمجة التي تكمل المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-039.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-039.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-040\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1Pn_eezdKR1UQYWRgwrFlgovtd3B0Jv2u\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2589.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-040.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"11215249047f3fe5e0ab8e990e739dbb71326f7a76ca6fc917d5cd0509d566a0\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Warm joinery and measured storage carry one continuous language through the space.\",\"ar\":\"تحمل النجارة الدافئة والتخزين المدروس لغة واحدة متصلة عبر المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-040.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-040.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-041\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1UnnY_tjn75JJaCnMLkYRsLkwi_ImT75M\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2578.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-041.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"e01b9bf276265ec3f47e21368200e24bfb0e32653733dceec3f2d78351085dc2\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A Playa joinery detail with warm timber, clean lines and precise hardware.\",\"ar\":\"تفصيلة نجارة من Playa بخشب دافئ وخطوط نظيفة وتجهيزات دقيقة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-041.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-041.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-042\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1Uu-px8JUr83tnFR3x_VlyNgpXG3bp8so\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2558.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-042.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"aed7bdf914eb120362f1fb27ccf10a862ad48a83083cf0a0be7cc849bc33601c\",\"orientation\":\"landscape\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A tailored storage composition showing the quiet precision of the Playa package.\",\"ar\":\"تكوين تخزين مصمم بعناية يظهر دقة حزمة Playa الهادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-042.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-042.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-043\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1CW2SnViJtR3xceLAx5uJvmcXO-Jk1vEU\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2577.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-043.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"666afc3b295873401ef74c776970cd7ec47564f4721ab7ea7b0761f48f4b7422\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A crafted doorway where material, proportion and movement meet.\",\"ar\":\"مدخل مصنوع بعناية تلتقي فيه الخامة والنسب والحركة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-043.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-043.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-044\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1f3yvwLU9a9d6S75OM59VF6Vpzl4XYVXe\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2587.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-044.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"b7a73318593ced78aa0584651748b78b5310f053e6275631411347763cc7a8a7\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A stair and joinery study built around clean thresholds and durable detail.\",\"ar\":\"دراسة للسلم والنجارة مبنية حول انتقالات نظيفة وتفاصيل متينة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-044.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-044.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-045\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1zWpQzNFpQJ7VDNQEoLkXuFV23bAhK7ps\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2586.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-045.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"5ef3209e689d27c3f2e96ff96472cff9a827d36ab278230926dc04d34d59449c\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A considered interior view of timber surfaces, storage and soft natural light.\",\"ar\":\"منظور داخلي مدروس لأسطح خشبية وتخزين وضوء طبيعي ناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-045.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-045.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-046\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1TSz9TmIF_D_2ICzdOvxWN-Mb13KstKnk\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2566.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-046.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"bac3b04d68a3b8bfc145d409816876bc88d3caaa00d39285f28d0f6f613a2606\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fine hardware and aligned panels give this Playa interior its quiet character.\",\"ar\":\"تمنح التجهيزات الدقيقة والألواح المتراصة هذا الجزء من Playa طابعه الهادئ.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-046.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-046.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-047\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1fhRoC03LRj4QRiyxvSlBRNO-Er8mkU5r\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2585.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-047.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"5425a81480daaabbd1e00b8f59bd609055c9c6dc80c7b7285f1f57dfd83b0d6b\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close study of the thresholds, doors and fitted pieces that complete the room.\",\"ar\":\"دراسة قريبة للانتقالات والأبواب والعناصر المدمجة التي تكمل المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-047.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-047.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-048\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1l9OQ9FLdnThJzjAkJaYMdO0J9ODbB76z\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2567.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-048.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"e4edce96cc189ca77eee1c901ae1c901d071fe2a4afc16788a7bc7353dc5a2e4\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Warm joinery and measured storage carry one continuous language through the space.\",\"ar\":\"تحمل النجارة الدافئة والتخزين المدروس لغة واحدة متصلة عبر المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-048.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-048.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-049\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1lg5hDQQabdKxHjRrGR7bwUjeSvtfr4W_\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2543.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-049.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"c49c848d49f0750e3d797a6d3f314e863a0273835c8722352c13415b4defc199\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A Playa joinery detail with warm timber, clean lines and precise hardware.\",\"ar\":\"تفصيلة نجارة من Playa بخشب دافئ وخطوط نظيفة وتجهيزات دقيقة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-049.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-049.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-050\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1IdEihXAGs7-6pLzomYdzlDXC058RWu1r\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2539.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-050.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"adb37077e0b1b3c8feac10e8355897b8b338652b359ddfc8b3764d2fd46783d5\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A tailored storage composition showing the quiet precision of the Playa package.\",\"ar\":\"تكوين تخزين مصمم بعناية يظهر دقة حزمة Playa الهادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-050.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-050.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-051\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1uNx1Og8LmTsz5yOzgB3UHvTi-VFs97wG\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2564.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-051.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"256de71fb5c31133d1a57e97aa5bdc0f8abc6c81fbbb76da9f7546587f78ab83\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A crafted doorway where material, proportion and movement meet.\",\"ar\":\"مدخل مصنوع بعناية تلتقي فيه الخامة والنسب والحركة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-051.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-051.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-052\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1VMP6_NRbotRvZOIFmfswWLpUoPdFC22k\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2568.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-052.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"b229de6e23f0b6c3d5b92c1dad6d2e58d72b5a6aaefb78d87b60ce6c64761c35\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A stair and joinery study built around clean thresholds and durable detail.\",\"ar\":\"دراسة للسلم والنجارة مبنية حول انتقالات نظيفة وتفاصيل متينة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-052.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-052.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-053\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1kI1akc9zHEu8oWT_3FwBk_4KrGvLUnYr\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2565.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-053.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"bf9c19f34a223e7d3f432b37887406032f92e432ff759664570b39f4ac59da72\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A considered interior view of timber surfaces, storage and soft natural light.\",\"ar\":\"منظور داخلي مدروس لأسطح خشبية وتخزين وضوء طبيعي ناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-053.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-053.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-054\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1k-F3c-4f1BUXCw4bIp5EY4eXQs2LMnHP\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2563.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-054.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"893ceb1d989f33e60d2e661746af9f8ce31d689ada06f6afe55792559069d55f\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fine hardware and aligned panels give this Playa interior its quiet character.\",\"ar\":\"تمنح التجهيزات الدقيقة والألواح المتراصة هذا الجزء من Playa طابعه الهادئ.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-054.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-054.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-055\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"11kB2vzr1VZ4gsrPB5Aif-kXsC3LyxBG0\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2562.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-055.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"558b5b002b7bb055e869789b39c919f57397f35d164a0ba39c34d56867e4ee3e\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close study of the thresholds, doors and fitted pieces that complete the room.\",\"ar\":\"دراسة قريبة للانتقالات والأبواب والعناصر المدمجة التي تكمل المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-055.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-055.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-056\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1_6-ZctvZyQwawsGbDmkjraBPvcY8Gdgj\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2570.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-056.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"20a52746d6c42630acde2d0e58ab911d0f6742af4a2cd41aa3c0fa114fac75d4\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Warm joinery and measured storage carry one continuous language through the space.\",\"ar\":\"تحمل النجارة الدافئة والتخزين المدروس لغة واحدة متصلة عبر المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-056.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-056.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-057\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1HnhqKwAYe_gpXIQXwijVfHG9L7ufhpHW\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2569.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-057.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"d00e0e58b3ec62f48046191e1dfe4fe66ba07ef6186b5b15e7c008243abd9c0b\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A Playa joinery detail with warm timber, clean lines and precise hardware.\",\"ar\":\"تفصيلة نجارة من Playa بخشب دافئ وخطوط نظيفة وتجهيزات دقيقة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-057.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-057.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-058\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1XkhTx-HRcuIjJ1uJ00OoGhx61sjQTgEs\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2598.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-058.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"fda6d3bd0bdeeb3ab80ba25334f9bb007785e6cba6fcc9b1fb43dd3aaa1b7040\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A tailored storage composition showing the quiet precision of the Playa package.\",\"ar\":\"تكوين تخزين مصمم بعناية يظهر دقة حزمة Playa الهادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-058.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-058.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-059\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1v64DAcDOUp7riz_Ia1y2gFTUkoOh-G0G\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2599.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-059.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"3efb822624922c69a231f06800bc604985a30eee769165e4dd4d2978c3d9a249\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A crafted doorway where material, proportion and movement meet.\",\"ar\":\"مدخل مصنوع بعناية تلتقي فيه الخامة والنسب والحركة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-059.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-059.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-060\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1k0MpbAnfTHfFlsELz_1Ke0qqn79YEOhC\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2495.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-060.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"4c7d13d23401ff065ef8e08b75751b066d239671edf504897ab3fa34d2a0f64e\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A stair and joinery study built around clean thresholds and durable detail.\",\"ar\":\"دراسة للسلم والنجارة مبنية حول انتقالات نظيفة وتفاصيل متينة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-060.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-060.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-061\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1mTb17vhx0edJTRqBMy9hTpo_7vJWWE5r\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2492.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-061.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"b6e1a8e3982138cf37edb56e5632a04d0618a8a1e7d8bd47c4528af599001b2e\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A considered interior view of timber surfaces, storage and soft natural light.\",\"ar\":\"منظور داخلي مدروس لأسطح خشبية وتخزين وضوء طبيعي ناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-061.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-061.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-062\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1K-SCs6f-cHuTBpSnFNw89YaOma4yNS5g\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2476.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-062.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"33fc34f2aa18f83d7cefe4ed53ad200f26d653bca7c997741b30b8d5aaa2040f\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fine hardware and aligned panels give this Playa interior its quiet character.\",\"ar\":\"تمنح التجهيزات الدقيقة والألواح المتراصة هذا الجزء من Playa طابعه الهادئ.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-062.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-062.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-063\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1K4RVxNvIcD_hKVhlF8H6FRn6iUljay70\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2490.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-063.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"cf7a3f52d6710346876e32050070922608d0727d3d9caf731d6a98d9ac48851c\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close study of the thresholds, doors and fitted pieces that complete the room.\",\"ar\":\"دراسة قريبة للانتقالات والأبواب والعناصر المدمجة التي تكمل المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-063.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-063.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-064\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"17hc0hK8MNmoI5l4j0IiLq7Mk9qXD6Y6b\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2489.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-064.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"0d11319e66f0606dac57e7e911faee6b0af18f18991be06166991263d07ac455\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Warm joinery and measured storage carry one continuous language through the space.\",\"ar\":\"تحمل النجارة الدافئة والتخزين المدروس لغة واحدة متصلة عبر المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-064.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-064.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-065\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1RGluHrxkK8qFT-ZUySCLmto7kVVKMn2H\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2483.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-065.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"7adc270064c416a0c0bce420e86aeaded2a1e22cd51282492e575bd34505e771\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A Playa joinery detail with warm timber, clean lines and precise hardware.\",\"ar\":\"تفصيلة نجارة من Playa بخشب دافئ وخطوط نظيفة وتجهيزات دقيقة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-065.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-065.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-066\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1QJwZnkmFSmD9FrgEdeqyOqTMgKU_LyW8\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2482.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-066.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"4dc25605fc904ef351360fd45960fa7f3b7c6d3891edbb4857c275a68f52f02b\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A tailored storage composition showing the quiet precision of the Playa package.\",\"ar\":\"تكوين تخزين مصمم بعناية يظهر دقة حزمة Playa الهادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-066.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-066.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-067\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1qzIrulPAJ_13_-WB8_ISsk_X9cjNwWh5\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2496.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-067.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"d1016805adccd8196c0ccd29e769bf586b2183877aba90fc2eb392327afec51f\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A crafted doorway where material, proportion and movement meet.\",\"ar\":\"مدخل مصنوع بعناية تلتقي فيه الخامة والنسب والحركة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-067.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-067.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-068\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1rhJHSxSGN4DruuQps9dd19Lgw3mkJm7H\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2500.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-068.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"15ad05e60c3bc84e1de0b73282126af6cfa83f0095a04b4fea8d53296f3f5ce5\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A stair and joinery study built around clean thresholds and durable detail.\",\"ar\":\"دراسة للسلم والنجارة مبنية حول انتقالات نظيفة وتفاصيل متينة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-068.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-068.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-069\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1MtrcgFmHsMvf2vUCMk4wHz55I0E0sG4t\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2499.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-069.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"c720fdaffddb786786e3eb1a79658c6f37d15dfa9b6380aa6a08e5b987de74bb\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A considered interior view of timber surfaces, storage and soft natural light.\",\"ar\":\"منظور داخلي مدروس لأسطح خشبية وتخزين وضوء طبيعي ناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-069.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-069.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-070\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1YU3WPZ9Sgz1jW3ldgYdDe_ho5av77ToA\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2475.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-070.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"a8f56cf21ddf3b159cf4bf8740d4ad56685a2224308ce5255db50e13ed149048\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fine hardware and aligned panels give this Playa interior its quiet character.\",\"ar\":\"تمنح التجهيزات الدقيقة والألواح المتراصة هذا الجزء من Playa طابعه الهادئ.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-070.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-070.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-071\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1PVhZKKyZuj5uix1icTqsj5Wui6_SJYra\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2485.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-071.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"2e5fe5bf2005fc63eda4dae0b73ab2d330cb3f471189baf21d33393f6715715b\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close study of the thresholds, doors and fitted pieces that complete the room.\",\"ar\":\"دراسة قريبة للانتقالات والأبواب والعناصر المدمجة التي تكمل المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-071.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-071.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-072\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1OWDfk-B7_QLDyEOM8tyY9x1X0rxV3uUp\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2484.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-072.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"be5632acc81f7849d334d6886a47ebb19afa5bcbddf604d8e4bdc7c9b66f55f7\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Warm joinery and measured storage carry one continuous language through the space.\",\"ar\":\"تحمل النجارة الدافئة والتخزين المدروس لغة واحدة متصلة عبر المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-072.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-072.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-073\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"13mj0sIl-c6GveKja2r7gCIRma82hrjfk\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2487.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-073.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"001353e2d9f929ba8cf64f08c87d62b314bceea9549a8053eb5312c739ce6673\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A Playa joinery detail with warm timber, clean lines and precise hardware.\",\"ar\":\"تفصيلة نجارة من Playa بخشب دافئ وخطوط نظيفة وتجهيزات دقيقة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-073.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-073.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-074\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"15fIElreRZ5xLIJ7VEmbgY_DH9pgOHWVz\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2488.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-074.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"9d9dc33c2325d23c5aba49cc712b71541422ffe400a0f6fbf2c4a4d12934e0ee\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A tailored storage composition showing the quiet precision of the Playa package.\",\"ar\":\"تكوين تخزين مصمم بعناية يظهر دقة حزمة Playa الهادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-074.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-074.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-075\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1toan_HTguZcW2elUQrrfmPEkWoMrjLUr\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2477.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-075.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"17b2ea2b403eebf73328d04bffbb0dacbd842d8946d6d39941b1b9c1d8521e3c\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A crafted doorway where material, proportion and movement meet.\",\"ar\":\"مدخل مصنوع بعناية تلتقي فيه الخامة والنسب والحركة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-075.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-075.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-076\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1AL80LXqQyc9pLxQNUvjIvLMSyQLcHI4Z\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2481.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-076.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"d8ca7d37fefda93f15f6f9fe79ad43bacae5244d61596fa8c397fda8a2cfe2c6\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A stair and joinery study built around clean thresholds and durable detail.\",\"ar\":\"دراسة للسلم والنجارة مبنية حول انتقالات نظيفة وتفاصيل متينة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-076.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-076.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-077\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1aYUcU1sIYBZlwb1xmKGN57Z2b7q8jYeZ\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2480.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-077.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"125c8c86cf7554eefadcf89eccfee38a504461276e2cb5b898b80018e1f7d494\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A considered interior view of timber surfaces, storage and soft natural light.\",\"ar\":\"منظور داخلي مدروس لأسطح خشبية وتخزين وضوء طبيعي ناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-077.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-077.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-078\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1PyfwlGzqKR4qZB9VbbMLCGHuHsU94BMM\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2493.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-078.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"1d00d336eb46127d343ee0cfafe3a97701b26dcddd693326f072c23e7e03aab1\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Fine hardware and aligned panels give this Playa interior its quiet character.\",\"ar\":\"تمنح التجهيزات الدقيقة والألواح المتراصة هذا الجزء من Playa طابعه الهادئ.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-078.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-078.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-079\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1um740zKECPMKClwrB2pTlTKejVP5E_d6\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_2494.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-079.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"ae455dee1a4a1bbc6fd0277aed50b0704e944c5e402814e69ceb90574a39fde1\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A close study of the thresholds, doors and fitted pieces that complete the room.\",\"ar\":\"دراسة قريبة للانتقالات والأبواب والعناصر المدمجة التي تكمل المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-079.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-079.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-080\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1I8imJUBeBxsR88w4i3M3JuNL0-vtCsU5\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_6520.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-080.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"37f48f47e8fbad6a5a22794eb18fd9efba05ab3ee61c4232de5c495544879024\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"Warm joinery and measured storage carry one continuous language through the space.\",\"ar\":\"تحمل النجارة الدافئة والتخزين المدروس لغة واحدة متصلة عبر المكان.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-080.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-080.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-081\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"16h7H0WUPuwOR9dE5H6u6WtUNDWdylKl1\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_6519.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-081.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"6502e0c5400ec59b8db817f24af4b2a36141c16b49937b280bfa9c787995d793\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A Playa joinery detail with warm timber, clean lines and precise hardware.\",\"ar\":\"تفصيلة نجارة من Playa بخشب دافئ وخطوط نظيفة وتجهيزات دقيقة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-081.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-081.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-082\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1LFkRkDFL5c4Z5oC-JrEAc1FLw_BpNk3p\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_6516.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-082.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"a9bed239cef2c53a6ffe2a3e8f1ca8b29b4be5a9806d26a52758f4b916771eb9\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A tailored storage composition showing the quiet precision of the Playa package.\",\"ar\":\"تكوين تخزين مصمم بعناية يظهر دقة حزمة Playa الهادئة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-082.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-082.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-083\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1YL7cehdrLsO-ulMG1nsyV3E3QDBf2L1_\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_6521.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-083.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"3a0e36a8da6171da5d3934800c046315398bd8cd46c5f79e0a70a7562a3cc730\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A crafted doorway where material, proportion and movement meet.\",\"ar\":\"مدخل مصنوع بعناية تلتقي فيه الخامة والنسب والحركة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-083.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-083.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-084\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1Ua-aLabtJakv9D3m5HsC9zylRgj8ciwa\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_6504.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-084.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"8dbb07b61cbd110bc69b02ad39a15c48504e6b8149a4b9d2528f0c1923714723\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A stair and joinery study built around clean thresholds and durable detail.\",\"ar\":\"دراسة للسلم والنجارة مبنية حول انتقالات نظيفة وتفاصيل متينة.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-084.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-084.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"},{\"id\":\"playa-drive-085\",\"projectSlug\":\"playa\",\"area\":\"other\",\"driveFileId\":\"1Zhe7WKarPMdcZ52XIS4x1-u7vGBFRafp\",\"sourceFolderId\":\"1256mAU_FoUKShxofhCe8-pQEYja11tMr\",\"sourceName\":\"IMG_6502.HEIC\",\"localSrc\":\"/drive/projects/selected/playa/playa-drive-085.webp\",\"originalMime\":\"image/heif\",\"contentHash\":\"a42130e231f5ec28151c6bf1167bf873d8509029993661a4563f342a2c3b9866\",\"orientation\":\"portrait\",\"quality\":\"editorial\",\"alt\":{\"en\":\"A considered interior view of timber surfaces, storage and soft natural light.\",\"ar\":\"منظور داخلي مدروس لأسطح خشبية وتخزين وضوء طبيعي ناعم.\"},\"derived\":{\"webp\":\"/drive/projects/selected/playa/playa-drive-085.webp\",\"avif\":\"/drive/projects/selected/playa/playa-drive-085.avif\"},\"authenticity\":\"verified-real\",\"rights\":\"approved\",\"publishStatus\":\"public\"}]");
//#endregion
//#region lib/selected-projects.ts
var selectedProjectSourceFolders = [
	{
		order: 1,
		slug: "sodic-collaboration",
		title: "1-SODIC ahmed el sherif",
		sourceFolderId: "11gkeSNomh8jBKdBZKJ3Hed0k5tQViUlS",
		publishStatus: "public"
	},
	{
		order: 2,
		slug: "swan-lake",
		title: "2-SWANLAKE",
		sourceFolderId: "1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR",
		publishStatus: "public"
	},
	{
		order: 3,
		slug: "sodic-villette",
		title: "3-SODIC VILETTE with Mai saad",
		sourceFolderId: "11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv",
		publishStatus: "public"
	},
	{
		order: 4,
		slug: "new-giza",
		title: "4-NEW GIZA mai saad",
		sourceFolderId: "1NmaXGLx8SRXereWz90DmS8YRh2I5J5cd",
		publishStatus: "pending"
	},
	{
		order: 5,
		slug: "playa",
		title: "5-PLAYA with Amaken",
		sourceFolderId: "1256mAU_FoUKShxofhCe8-pQEYja11tMr",
		publishStatus: "public"
	},
	{
		order: 6,
		slug: "cfc-office",
		title: "6-CFC office. (Commercial)",
		sourceFolderId: "1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y",
		publishStatus: "public"
	}
];
var selectedProjectSlugs = selectedProjectSourceFolders.map((folder) => folder.slug);
var sourceFolderNames = {
	"swan-lake": "SWANLAKE",
	"sodic-villette": "SODIC VILETTE",
	playa: "PLAYA",
	"cfc-office": "CFC office"
};
function capabilitiesFor(projectSlug, area) {
	if (area === "bedroom") return ["bedrooms", "custom-units"];
	if (area === "dressing" || area === "dressing-detail") return ["dressing-rooms", "custom-units"];
	if (area === "doors") return ["doors", "wall-cladding"];
	if (area === "stairs" || area === "wall") return ["wall-cladding", "custom-units"];
	if (projectSlug === "cfc-office") return ["custom-units", "wall-cladding"];
	return ["living-rooms", "custom-units"];
}
var selectedProjectMedia = generated_selected_project_assets_default.map((asset) => {
	const area = asset.area;
	return {
		id: asset.id,
		src: asset.localSrc,
		sourceFolder: sourceFolderNames[asset.projectSlug] ?? asset.sourceFolderId,
		sourceFolderId: asset.sourceFolderId,
		sourceName: asset.sourceName,
		projectSlug: asset.projectSlug,
		sector: asset.projectSlug === "cfc-office" ? "workplace" : "residential-developments",
		capabilities: capabilitiesFor(asset.projectSlug, area),
		stage: "finished",
		authenticity: asset.authenticity,
		rights: asset.rights,
		orientation: asset.orientation,
		quality: asset.quality,
		usage: "project",
		alt: asset.alt,
		driveFileId: asset.driveFileId,
		originalMime: asset.originalMime,
		contentHash: asset.contentHash,
		derived: asset.derived,
		publishStatus: asset.publishStatus,
		area
	};
});
var selectedProjectMediaIds = (projectSlug) => {
	return selectedProjectMedia.filter((asset) => asset.projectSlug === projectSlug).sort((a, b) => a.area === "cover" ? -1 : b.area === "cover" ? 1 : 0).map((asset) => asset.id);
};
var selectedProjectAreas = (projectSlug) => Object.fromEntries(selectedProjectMedia.filter((asset) => asset.projectSlug === projectSlug && asset.area).map((asset) => [asset.id, asset.area]));
var selectedProjectRecords = [
	{
		slug: "swan-lake",
		title: {
			en: "Swan Lake",
			ar: "سوان ليك"
		},
		sector: "residential-developments",
		sectorLabel: {
			en: "Residential developments",
			ar: "المشروعات السكنية"
		},
		location: {
			en: "Egypt",
			ar: "مصر"
		},
		year: "—",
		client: {
			en: "SWANLAKE",
			ar: "سوان ليك"
		},
		clientVisibility: "approved",
		verificationStatus: "verified",
		summary: {
			en: "A residential interior package where warm timber walls, media joinery and furniture carry one continuous language.",
			ar: "حزمة داخلية سكنية تجمع الجدران الخشبية الدافئة ونجارة الوسائط والأثاث في لغة واحدة."
		},
		scope: {
			en: "Complete living, wall and bedroom photography from the Swan Lake Drive source folder, organized by room and detail.",
			ar: "كامل صور المعيشة والجدران وغرف النوم من مجلد سوان ليك على Drive، مرتبة حسب الغرفة والتفصيل."
		},
		responsibilities: [
			{
				en: "Interior joinery",
				ar: "النجارة الداخلية"
			},
			{
				en: "Wall cladding",
				ar: "تكسية الجدران"
			},
			{
				en: "Furniture coordination",
				ar: "تنسيق الأثاث"
			}
		],
		materials: [{
			en: "Timber veneer",
			ar: "قشرة خشبية"
		}, {
			en: "Marble",
			ar: "رخام"
		}],
		outcome: {
			en: "A calm, coordinated interior package documented through selected areas.",
			ar: "حزمة داخلية هادئة ومنسقة موثقة عبر مناطق مختارة."
		},
		capabilities: [
			"living-rooms",
			"wall-cladding",
			"bedrooms",
			"custom-units"
		],
		elements: {
			en: "Cladding and doors",
			ar: "التكسية والأبواب"
		},
		media: selectedProjectMediaIds("swan-lake"),
		mediaAreas: selectedProjectAreas("swan-lake"),
		sourceFolderId: "1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR",
		sourceFolderTitle: "2-SWANLAKE"
	},
	{
		slug: "sodic-villette",
		title: {
			en: "SODIC Villette",
			ar: "سوديك فيليت"
		},
		sector: "residential-developments",
		sectorLabel: {
			en: "Residential developments",
			ar: "المشروعات السكنية"
		},
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
		verificationStatus: "verified",
		summary: {
			en: "A room-by-room study of fluted wall rhythms, dressing storage, and quiet bedroom joinery throughout the SODIC Villette home.",
			ar: "دراسة مساحة تلو الأخرى لإيقاع الجدران المخددة وتخزين غرف الملابس ونجارة غرف النوم الهادئة في منزل سوديك فيليت."
		},
		scope: {
			en: "Complete living, bedroom, dressing and wall photography from the SODIC Villette Drive folder, arranged to show how storage and surface meet.",
			ar: "كامل صور المعيشة وغرف النوم وغرف الملابس والجدران من مجلد سوديك فيليت على Drive، مرتبة لتوضح التقاء التخزين بالسطح."
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
		materials: [{
			en: "Timber veneer",
			ar: "قشرة خشبية"
		}, {
			en: "Fluted timber",
			ar: "خشب مخدد"
		}],
		outcome: {
			en: "A selected record of the completed residential spaces.",
			ar: "سجل مختار للمساحات السكنية المكتملة."
		},
		capabilities: [
			"wall-cladding",
			"dressing-rooms",
			"bedrooms",
			"living-rooms",
			"custom-units"
		],
		elements: {
			en: "Cladding & furniture",
			ar: "التكسية والأثاث"
		},
		media: selectedProjectMediaIds("sodic-villette"),
		mediaAreas: selectedProjectAreas("sodic-villette"),
		sourceFolderId: "11Di9Elw9kYMcZ6SmVwvhjTBVPVK3zHJv",
		sourceFolderTitle: "3-SODIC VILETTE with Mai saad",
		collaboratorIds: ["mai-saad"]
	},
	{
		slug: "new-giza",
		title: {
			en: "New Giza",
			ar: "نيو جيزة"
		},
		sector: "residential-developments",
		sectorLabel: {
			en: "Residential developments",
			ar: "المشروعات السكنية"
		},
		location: {
			en: "Egypt",
			ar: "مصر"
		},
		year: "—",
		client: {
			en: "NEW GIZA",
			ar: "نيو جيزة"
		},
		clientVisibility: "pending",
		verificationStatus: "pending",
		publication: "pending",
		verificationNote: {
			en: "The Drive folder is currently empty. The project is registered but remains gated until photography is uploaded and reviewed.",
			ar: "مجلد Drive فارغ حالياً. تم تسجيل المشروع لكنه محجوب حتى رفع الصور ومراجعتها."
		},
		summary: {
			en: "Selected project photography pending upload.",
			ar: "صور المشروع المختارة بانتظار الرفع."
		},
		scope: {
			en: "No media has been supplied yet.",
			ar: "لم يتم توفير أي وسائط بعد."
		},
		responsibilities: [],
		materials: [],
		outcome: {
			en: "Publication will begin after the Drive source receives reviewed photography.",
			ar: "سيبدأ النشر بعد إضافة صور مراجعة إلى مصدر Drive."
		},
		capabilities: [],
		media: [],
		sourceFolderId: "1NmaXGLx8SRXereWz90DmS8YRh2I5J5cd",
		sourceFolderTitle: "4-NEW GIZA mai saad",
		collaboratorIds: ["mai-saad"]
	},
	{
		slug: "playa",
		title: {
			en: "Playa",
			ar: "بلايا"
		},
		sector: "residential-developments",
		sectorLabel: {
			en: "Residential developments",
			ar: "المشروعات السكنية"
		},
		location: {
			en: "Egypt",
			ar: "مصر"
		},
		year: "—",
		client: {
			en: "PLAYA",
			ar: "بلايا"
		},
		clientVisibility: "approved",
		verificationStatus: "verified",
		summary: {
			en: "A layered residential sequence where dressing-room storage, door sets and stair details carry the same measured rhythm from entry to private rooms.",
			ar: "تسلسل سكني متعدد الطبقات تحمل فيه تخزين غرف الملابس ومجموعات الأبواب وتفاصيل السلم الإيقاع نفسه من المدخل إلى الغرف الخاصة."
		},
		scope: {
			en: "Complete dressing, door and stair photography from the Playa Drive folder, with each frame focused on storage, thresholds and joinery detail.",
			ar: "كامل صور غرف الملابس والأبواب والسلالم من مجلد بلايا على Drive، تركز كل صورة على التخزين والعتبات وتفاصيل النجارة."
		},
		responsibilities: [
			{
				en: "Dressing-room joinery",
				ar: "نجارة غرف الملابس"
			},
			{
				en: "Door sets",
				ar: "مجموعات الأبواب"
			},
			{
				en: "Entry detailing",
				ar: "تفاصيل المداخل"
			}
		],
		materials: [{
			en: "Painted timber",
			ar: "خشب مطلي"
		}, {
			en: "Oak veneer",
			ar: "قشرة بلوط"
		}],
		outcome: {
			en: "A concise visual record of storage, door and entry work.",
			ar: "سجل بصري مختصر لأعمال التخزين والأبواب والمداخل."
		},
		capabilities: [
			"dressing-rooms",
			"doors",
			"wall-cladding",
			"custom-units"
		],
		media: selectedProjectMediaIds("playa"),
		mediaAreas: selectedProjectAreas("playa"),
		sourceFolderId: "1256mAU_FoUKShxofhCe8-pQEYja11tMr",
		sourceFolderTitle: "5-PLAYA with Amaken",
		collaboratorIds: ["amaken"]
	},
	{
		slug: "cfc-office",
		title: {
			en: "CFC Office",
			ar: "مكتب CFC"
		},
		sector: "workplace",
		sectorLabel: {
			en: "Workplace",
			ar: "مساحات العمل"
		},
		location: {
			en: "Cairo",
			ar: "القاهرة"
		},
		year: "—",
		client: {
			en: "CFC",
			ar: "CFC"
		},
		clientVisibility: "approved",
		verificationStatus: "verified",
		summary: {
			en: "A workplace interior shaped by timber walls, reception joinery and precise lighting details that make arrival feel considered.",
			ar: "مساحة عمل تشكلها الجدران الخشبية ونجارة الاستقبال وتفاصيل الإضاءة الدقيقة التي تمنح لحظة الوصول عناية واضحة."
		},
		scope: {
			en: "Complete wall, reception and detail photography from the CFC Office Drive folder, following the package from first impression to close finish.",
			ar: "كامل صور الجدران والاستقبال والتفاصيل من مجلد مكتب CFC على Drive، تتتبع الحزمة من الانطباع الأول إلى التشطيب الدقيق."
		},
		responsibilities: [
			{
				en: "Commercial joinery",
				ar: "نجارة تجارية"
			},
			{
				en: "Reception elements",
				ar: "عناصر الاستقبال"
			},
			{
				en: "Site delivery",
				ar: "التنفيذ بالموقع"
			}
		],
		materials: [{
			en: "Timber veneer",
			ar: "قشرة خشبية"
		}, {
			en: "Painted panels",
			ar: "ألواح مطلية"
		}],
		outcome: {
			en: "A focused record of the workplace package.",
			ar: "سجل مركز لحزمة مساحة العمل."
		},
		capabilities: [
			"wall-cladding",
			"custom-units",
			"living-rooms"
		],
		elements: {
			en: "Cladding only",
			ar: "التكسية فقط"
		},
		media: selectedProjectMediaIds("cfc-office"),
		mediaAreas: selectedProjectAreas("cfc-office"),
		sourceFolderId: "1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y",
		sourceFolderTitle: "6-CFC office. (Commercial)"
	}
];
selectedProjectSourceFolders.map((folder) => ({
	...folder,
	media: folder.slug === "sodic-collaboration" ? [
		"sodic-drive-06",
		"sodic-drive-08",
		"sodic-drive-03",
		"sodic-drive-01",
		"sodic-drive-02"
	] : selectedProjectRecords.find((project) => project.slug === folder.slug)?.media ?? []
}));
//#endregion
//#region lib/kitchen-media.ts
var kitchenFiles = [
	{
		set: "01",
		locationEn: "Azad Compound",
		locationAr: "كمبوند آزاد",
		folderId: "1r-JCLypKDimXW-zivG9hhAuduFL8N3vZ",
		sourceFolder: "Kitchens / Kitchen 1 (Azad Compound)",
		number: 1,
		id: "kitchen-01-01",
		driveFileId: "12pf2SpwL6R2k-j40NFvBSdUd_-nuKQHM",
		sourceName: "1.PNG",
		originalMime: "image/jpeg",
		orientation: "landscape"
	},
	{
		set: "01",
		locationEn: "Azad Compound",
		locationAr: "كمبوند آزاد",
		folderId: "1r-JCLypKDimXW-zivG9hhAuduFL8N3vZ",
		sourceFolder: "Kitchens / Kitchen 1 (Azad Compound)",
		number: 2,
		id: "kitchen-01-02",
		driveFileId: "1ak1pREO34BmtMntEBWo8cJ7jYn_RS7ki",
		sourceName: "2.PNG",
		originalMime: "image/png",
		orientation: "portrait"
	},
	{
		set: "01",
		locationEn: "Azad Compound",
		locationAr: "كمبوند آزاد",
		folderId: "1r-JCLypKDimXW-zivG9hhAuduFL8N3vZ",
		sourceFolder: "Kitchens / Kitchen 1 (Azad Compound)",
		number: 3,
		id: "kitchen-01-03",
		driveFileId: "1bMQ4Blod_mQAzzM-D6CtdJyN-hCY960h",
		sourceName: "3.PNG",
		originalMime: "image/png",
		orientation: "portrait"
	},
	{
		set: "01",
		locationEn: "Azad Compound",
		locationAr: "كمبوند آزاد",
		folderId: "1r-JCLypKDimXW-zivG9hhAuduFL8N3vZ",
		sourceFolder: "Kitchens / Kitchen 1 (Azad Compound)",
		number: 4,
		id: "kitchen-01-04",
		driveFileId: "1r3k6rUhOa32JJ41h8qYbkyn8SlSlITlp",
		sourceName: "4.PNG",
		originalMime: "image/png",
		orientation: "portrait"
	},
	{
		set: "01",
		locationEn: "Azad Compound",
		locationAr: "كمبوند آزاد",
		folderId: "1r-JCLypKDimXW-zivG9hhAuduFL8N3vZ",
		sourceFolder: "Kitchens / Kitchen 1 (Azad Compound)",
		number: 5,
		id: "kitchen-01-05",
		driveFileId: "18xePK2OLwR42VvpiCk8oTl1jryEPw-x8",
		sourceName: "5.PNG",
		originalMime: "image/png",
		orientation: "portrait"
	},
	{
		set: "01",
		locationEn: "Azad Compound",
		locationAr: "كمبوند آزاد",
		folderId: "1r-JCLypKDimXW-zivG9hhAuduFL8N3vZ",
		sourceFolder: "Kitchens / Kitchen 1 (Azad Compound)",
		number: 6,
		id: "kitchen-01-06",
		driveFileId: "15aa3bVnj0p_VubvwkPC3vlfkx4B6kCm0",
		sourceName: "6.PNG",
		originalMime: "image/png",
		orientation: "portrait"
	},
	{
		set: "01",
		locationEn: "Azad Compound",
		locationAr: "كمبوند آزاد",
		folderId: "1839f-h-jyJkuZCKvRmUt2KgaE7GDBxWP",
		sourceFolder: "Kitchens / Kitchen 1 (Azad Compound) / 3d",
		number: 1,
		id: "kitchen-01-ref-01",
		driveFileId: "1lUK_NphKtp-tou2G70C7JscxJtLA4Ksx",
		sourceName: "8983a9b4-701f-4aa1-808f-12e6f7ea15ef.jpg",
		originalMime: "image/jpeg",
		orientation: "portrait",
		reference: true
	},
	{
		set: "01",
		locationEn: "Azad Compound",
		locationAr: "كمبوند آزاد",
		folderId: "1839f-h-jyJkuZCKvRmUt2KgaE7GDBxWP",
		sourceFolder: "Kitchens / Kitchen 1 (Azad Compound) / 3d",
		number: 2,
		id: "kitchen-01-ref-02",
		driveFileId: "1nCNk10O6KnFVGuLt45SukxlKOlkfZZqJ",
		sourceName: "abb3fe2b-facf-4b22-b615-002f67568363.jpg",
		originalMime: "image/jpeg",
		orientation: "landscape",
		reference: true
	},
	{
		set: "01",
		locationEn: "Azad Compound",
		locationAr: "كمبوند آزاد",
		folderId: "1839f-h-jyJkuZCKvRmUt2KgaE7GDBxWP",
		sourceFolder: "Kitchens / Kitchen 1 (Azad Compound) / 3d",
		number: 3,
		id: "kitchen-01-ref-03",
		driveFileId: "1eFsy7oLVplnz0SV3Gm75joBXRbq65sF7",
		sourceName: "dc1a5bb6-a088-4f25-bf07-524c36e8c73d.jpg",
		originalMime: "image/jpeg",
		orientation: "landscape",
		reference: true
	},
	{
		set: "02",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw",
		sourceFolder: "Kitchens / Kitchen 2 (New Cairo)",
		number: 1,
		id: "kitchen-02-01",
		driveFileId: "1v6izcMj2uzniinAbdyiYPRhMSKJeG2Au",
		sourceName: "1.png",
		originalMime: "image/png",
		orientation: "portrait"
	},
	{
		set: "02",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw",
		sourceFolder: "Kitchens / Kitchen 2 (New Cairo)",
		number: 2,
		id: "kitchen-02-02",
		driveFileId: "1kmc8OOs0sC6JwIk3qEq3YmV8EWayMVmf",
		sourceName: "2.png",
		originalMime: "image/png",
		orientation: "portrait"
	},
	{
		set: "02",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw",
		sourceFolder: "Kitchens / Kitchen 2 (New Cairo)",
		number: 3,
		id: "kitchen-02-03",
		driveFileId: "10TDx4VQXqzPVXAX49YrWpvgzEJBVICN_",
		sourceName: "3.png",
		originalMime: "image/png",
		orientation: "portrait"
	},
	{
		set: "02",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw",
		sourceFolder: "Kitchens / Kitchen 2 (New Cairo)",
		number: 4,
		id: "kitchen-02-04",
		driveFileId: "1uXNXtZT8Ce7f2O_BhY6CQgHH1vRTAHf1",
		sourceName: "4.png",
		originalMime: "image/png",
		orientation: "portrait"
	},
	{
		set: "02",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw",
		sourceFolder: "Kitchens / Kitchen 2 (New Cairo)",
		number: 5,
		id: "kitchen-02-05",
		driveFileId: "1_HcWBfAGHv84a4G0lis9l4mkwMPU2P4a",
		sourceName: "5.png",
		originalMime: "image/png",
		orientation: "portrait"
	},
	{
		set: "02",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw",
		sourceFolder: "Kitchens / Kitchen 2 (New Cairo)",
		number: 1,
		id: "kitchen-02-ref-01",
		driveFileId: "1rO8WGy4WubHyOjyWGD0WofIRCfB8VayI",
		sourceName: "Design 3d 01.jpg",
		originalMime: "image/jpeg",
		orientation: "landscape",
		reference: true
	},
	{
		set: "02",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw",
		sourceFolder: "Kitchens / Kitchen 2 (New Cairo)",
		number: 2,
		id: "kitchen-02-ref-02",
		driveFileId: "10819BvNKzsMfxkPho7FiGZMskyOFnxaT",
		sourceName: "Design 3d 02.jpg",
		originalMime: "image/jpeg",
		orientation: "landscape",
		reference: true
	},
	{
		set: "02",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1ag8bx9wjuYjZK3XTuUdTpSR4oPIZAVsw",
		sourceFolder: "Kitchens / Kitchen 2 (New Cairo)",
		number: 3,
		id: "kitchen-02-ref-03",
		driveFileId: "11yb5QCp9uONppPgxANDBLSWvCOS8MT0C",
		sourceName: "Design 3d 03.jpg",
		originalMime: "image/jpeg",
		orientation: "landscape",
		reference: true
	},
	{
		set: "03",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU",
		sourceFolder: "Kitchens / Kitchen 3 (New Cairo)",
		number: 1,
		id: "kitchen-03-01",
		driveFileId: "1unJIg7XCihv18r1NRtyo_xmoRb-Z2SMh",
		sourceName: "1.heif",
		originalMime: "image/heif",
		orientation: "portrait"
	},
	{
		set: "03",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU",
		sourceFolder: "Kitchens / Kitchen 3 (New Cairo)",
		number: 2,
		id: "kitchen-03-02",
		driveFileId: "1AxQ-G15MQBDKXYKymMl45LHAYyGnHoD3",
		sourceName: "2.heif",
		originalMime: "image/heif",
		orientation: "portrait"
	},
	{
		set: "03",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU",
		sourceFolder: "Kitchens / Kitchen 3 (New Cairo)",
		number: 3,
		id: "kitchen-03-03",
		driveFileId: "1JlOGsxhMJmGn663psM6ElTybOcZGtl1J",
		sourceName: "3.heif",
		originalMime: "image/heif",
		orientation: "portrait"
	},
	{
		set: "03",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU",
		sourceFolder: "Kitchens / Kitchen 3 (New Cairo)",
		number: 4,
		id: "kitchen-03-04",
		driveFileId: "1wSL7gH1SBlnQDguOhfJqk2RdFsYws5eO",
		sourceName: "4.heif",
		originalMime: "image/heif",
		orientation: "portrait"
	},
	{
		set: "03",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU",
		sourceFolder: "Kitchens / Kitchen 3 (New Cairo)",
		number: 5,
		id: "kitchen-03-05",
		driveFileId: "1GD4S5-GUeU4SHeBW40KLmi-gJm7mGjd5",
		sourceName: "5.heif",
		originalMime: "image/heif",
		orientation: "portrait"
	},
	{
		set: "03",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU",
		sourceFolder: "Kitchens / Kitchen 3 (New Cairo)",
		number: 6,
		id: "kitchen-03-06",
		driveFileId: "1fm9thsUactR3BmEXKxZC7SuDsJ44eImx",
		sourceName: "6.heif",
		originalMime: "image/heif",
		orientation: "portrait"
	},
	{
		set: "03",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU",
		sourceFolder: "Kitchens / Kitchen 3 (New Cairo)",
		number: 7,
		id: "kitchen-03-07",
		driveFileId: "1yZ_Hh6iBOD_V-iahLabsybTNL6g6XYT7",
		sourceName: "7.heif",
		originalMime: "image/heif",
		orientation: "portrait"
	},
	{
		set: "03",
		locationEn: "New Cairo",
		locationAr: "القاهرة الجديدة",
		folderId: "1tMOmunoBYRxhlvs-rTsll-B7ZLDLPghU",
		sourceFolder: "Kitchens / Kitchen 3 (New Cairo)",
		number: 8,
		id: "kitchen-03-08",
		driveFileId: "1MiqzILdZIhAYIichI46uxTMb5vOBPL3m",
		sourceName: "8.heif",
		originalMime: "image/heif",
		orientation: "portrait"
	},
	{
		set: "04",
		locationEn: "Hyde Park",
		locationAr: "هايد بارك",
		folderId: "1-P-ia4hCmDsLPVi_ilzt40IELPK6_S1t",
		sourceFolder: "Kitchens / Kitchen 4 (Hyde Park)",
		number: 1,
		id: "kitchen-04-01",
		driveFileId: "18uQ4HdpAkohOCsIvMCae9HcHuc6ZYqfL",
		sourceName: "1.png",
		originalMime: "image/png",
		orientation: "landscape"
	},
	{
		set: "04",
		locationEn: "Hyde Park",
		locationAr: "هايد بارك",
		folderId: "1-P-ia4hCmDsLPVi_ilzt40IELPK6_S1t",
		sourceFolder: "Kitchens / Kitchen 4 (Hyde Park)",
		number: 2,
		id: "kitchen-04-02",
		driveFileId: "1AwBEowwtSv51_gResny_wItqqWTqpTEw",
		sourceName: "2.png",
		originalMime: "image/png",
		orientation: "landscape"
	},
	{
		set: "04",
		locationEn: "Hyde Park",
		locationAr: "هايد بارك",
		folderId: "1-P-ia4hCmDsLPVi_ilzt40IELPK6_S1t",
		sourceFolder: "Kitchens / Kitchen 4 (Hyde Park)",
		number: 3,
		id: "kitchen-04-03",
		driveFileId: "1deym7-BZRB5HsvTLA9P0z9Hpt1csHZTK",
		sourceName: "3.heif",
		originalMime: "image/heif",
		orientation: "portrait"
	},
	{
		set: "04",
		locationEn: "Hyde Park",
		locationAr: "هايد بارك",
		folderId: "1-P-ia4hCmDsLPVi_ilzt40IELPK6_S1t",
		sourceFolder: "Kitchens / Kitchen 4 (Hyde Park)",
		number: 4,
		id: "kitchen-04-04",
		driveFileId: "1at1I3jvFVhaNtbA8-fvPAbTZDwdXCU6q",
		sourceName: "4.heif",
		originalMime: "image/heif",
		orientation: "landscape"
	},
	{
		set: "04",
		locationEn: "Hyde Park",
		locationAr: "هايد بارك",
		folderId: "1-P-ia4hCmDsLPVi_ilzt40IELPK6_S1t",
		sourceFolder: "Kitchens / Kitchen 4 (Hyde Park)",
		number: 5,
		id: "kitchen-04-05",
		driveFileId: "1mh6bEWV1lcQbU6LNllM-gpEFEqZjQTp6",
		sourceName: "5.heif",
		originalMime: "image/heif",
		orientation: "portrait"
	},
	{
		set: "05",
		locationEn: "Obour City",
		locationAr: "مدينة العبور",
		folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf",
		sourceFolder: "Kitchens / Kitchen 5 (Obour City)",
		number: 1,
		id: "kitchen-05-01",
		driveFileId: "1E5hOa3jS7kZrc9KL-O7WSBEIn_yW9dRS",
		sourceName: "1.png",
		originalMime: "image/png",
		orientation: "portrait"
	},
	{
		set: "05",
		locationEn: "Obour City",
		locationAr: "مدينة العبور",
		folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf",
		sourceFolder: "Kitchens / Kitchen 5 (Obour City)",
		number: 2,
		id: "kitchen-05-02",
		driveFileId: "1404XIGLSEfR10-8HZyI1omrsVKCF0jM6",
		sourceName: "2.png",
		originalMime: "image/png",
		orientation: "portrait"
	},
	{
		set: "05",
		locationEn: "Obour City",
		locationAr: "مدينة العبور",
		folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf",
		sourceFolder: "Kitchens / Kitchen 5 (Obour City)",
		number: 3,
		id: "kitchen-05-03",
		driveFileId: "15PX6xQLTHHcwgw-a_p9uviBgz7ZCf-8w",
		sourceName: "3.png",
		originalMime: "image/png",
		orientation: "landscape"
	},
	{
		set: "05",
		locationEn: "Obour City",
		locationAr: "مدينة العبور",
		folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf",
		sourceFolder: "Kitchens / Kitchen 5 (Obour City)",
		number: 4,
		id: "kitchen-05-04",
		driveFileId: "1y5OA8MBhG1Y-W1V7Dt3_qkNQjiAAxuit",
		sourceName: "4.png",
		originalMime: "image/png",
		orientation: "landscape"
	},
	{
		set: "05",
		locationEn: "Obour City",
		locationAr: "مدينة العبور",
		folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf",
		sourceFolder: "Kitchens / Kitchen 5 (Obour City)",
		number: 5,
		id: "kitchen-05-05",
		driveFileId: "1ns1lkp1G3f2nQrT1Mbydl0-M_galEATA",
		sourceName: "5.png",
		originalMime: "image/png",
		orientation: "landscape"
	},
	{
		set: "05",
		locationEn: "Obour City",
		locationAr: "مدينة العبور",
		folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf",
		sourceFolder: "Kitchens / Kitchen 5 (Obour City)",
		number: 1,
		id: "kitchen-05-ref-01",
		driveFileId: "1UWAIYhLbV-bVgDKxJrVksyWtGBcoNooa",
		sourceName: "Design 3d 01.jpg",
		originalMime: "image/jpeg",
		orientation: "landscape",
		reference: true
	},
	{
		set: "05",
		locationEn: "Obour City",
		locationAr: "مدينة العبور",
		folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf",
		sourceFolder: "Kitchens / Kitchen 5 (Obour City)",
		number: 2,
		id: "kitchen-05-ref-02",
		driveFileId: "1qsZC4zzyb9JK3r-HIm6K1G8HtYt9bBiD",
		sourceName: "Design 3d 02.jpg",
		originalMime: "image/jpeg",
		orientation: "landscape",
		reference: true
	},
	{
		set: "05",
		locationEn: "Obour City",
		locationAr: "مدينة العبور",
		folderId: "1FDvpmYk-p-zNaDXyRSM1Q9CMO1cqfBpf",
		sourceFolder: "Kitchens / Kitchen 5 (Obour City)",
		number: 3,
		id: "kitchen-05-ref-03",
		driveFileId: "14i-MedS-zcdHCunt_QIoWywD7i3VrLqc",
		sourceName: "Design 3d 03.jpg",
		originalMime: "image/jpeg",
		orientation: "landscape",
		reference: true
	}
];
function arabicDigits(value) {
	return String(value).replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)]);
}
var kitchenMediaAssets = kitchenFiles.map((file) => {
	const label = file.reference ? `3D reference ${file.number}` : `photo ${file.number}`;
	const arabicLabel = file.reference ? `مرجع ثلاثي الأبعاد ${arabicDigits(file.number)}` : `الصورة ${arabicDigits(file.number)}`;
	return {
		id: file.id,
		src: `/drive/kitchens/${file.id}.webp`,
		sourceFolder: file.sourceFolder,
		sourceFolderId: file.folderId,
		sourceName: file.sourceName,
		projectSlug: `kitchen-${file.set}`,
		capabilities: ["kitchens"],
		stage: file.reference ? "detail" : "finished",
		authenticity: file.reference ? "unknown" : "verified-real",
		rights: "pending",
		orientation: file.orientation,
		quality: file.reference ? "reference" : "editorial",
		usage: "project",
		alt: {
			en: `Kitchen ${file.set} — ${file.locationEn} — ${label}`,
			ar: `المطبخ ${file.set.replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[Number(digit)])} — ${file.locationAr} — ${arabicLabel}`
		},
		driveFileId: file.driveFileId,
		originalMime: file.originalMime,
		derived: { webp: `/drive/kitchens/${file.id}.webp` },
		publishStatus: "preview",
		area: "kitchen"
	};
});
//#endregion
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
var categoryMediaAssets = [
	...generated_doors_drive_assets_default,
	...generated_living_drive_assets_default,
	...generated_dressing_drive_assets_default,
	...generated_category_drive_assets_default
].map((asset) => {
	const capability = asset.id.startsWith("door-") ? "doors" : asset.id.startsWith("living-") ? "living-rooms" : asset.id.startsWith("kitchen") ? "kitchens" : asset.id.startsWith("bedroom") ? "bedrooms" : asset.id.startsWith("cladding-") ? "wall-cladding" : "dressing-rooms";
	return {
		id: asset.id,
		src: asset.localSrc,
		sourceFolder: asset.sourceFolderId,
		sourceFolderId: asset.sourceFolderId,
		sourceName: asset.sourceName,
		capabilities: [capability],
		stage: "finished",
		authenticity: asset.authenticity,
		rights: asset.rights,
		orientation: asset.orientation,
		quality: asset.id.endsWith("-01") ? "hero" : "editorial",
		usage: asset.id.endsWith("-01") ? "capability" : "project",
		alt: {
			kitchens: {
				en: "Drive-supplied kitchen project photograph",
				ar: "صورة مشروع مطبخ موردة من Drive"
			},
			bedrooms: {
				en: "Drive-supplied bedroom project photograph",
				ar: "صورة مشروع غرفة نوم موردة من Drive"
			},
			"dressing-rooms": {
				en: "Drive-supplied dressing room photograph",
				ar: "صورة غرفة ملابس موردة من Drive"
			},
			"living-rooms": {
				en: "Living space",
				ar: "مساحة معيشة"
			},
			"custom-units": {
				en: "Custom unit",
				ar: "وحدة مخصصة"
			},
			doors: {
				en: "Architectural door",
				ar: "باب معماري"
			},
			"wall-cladding": {
				en: "Wall cladding",
				ar: "تكسية حائط"
			},
			"materials-finishes": {
				en: "Material finish",
				ar: "تشطيب خامة"
			}
		}[capability],
		driveFileId: asset.driveFileId,
		originalMime: asset.originalMime,
		contentHash: asset.contentHash,
		derived: { webp: asset.localSrc },
		publishStatus: asset.publishStatus
	};
});
var processMediaLabels = {
	"process-concept": {
		en: "Concept and briefing reference photograph",
		ar: "صورة مرجعية لمرحلة الفكرة والمتطلبات"
	},
	"process-sketch": {
		en: "Design sketch reference photograph",
		ar: "صورة مرجعية لمرحلة التصميم والرسم"
	},
	"process-manufacturing": {
		en: "Manufacturing reference photograph",
		ar: "صورة مرجعية لمرحلة التصنيع"
	},
	"process-installation": {
		en: "Installation reference photograph",
		ar: "صورة مرجعية لمرحلة التركيب"
	}
};
var processMediaAssets = generated_unit_process_assets_default.process.map((asset) => ({
	id: asset.id,
	src: asset.localSrc,
	sourceFolder: asset.sourceFolderTitle,
	sourceFolderId: asset.sourceFolderId,
	sourceName: asset.sourceName,
	capabilities: ["materials-finishes"],
	stage: "process",
	authenticity: asset.authenticity,
	rights: asset.rights,
	orientation: asset.orientation,
	quality: "editorial",
	usage: "process",
	alt: processMediaLabels[asset.id],
	driveFileId: asset.driveFileId,
	originalMime: asset.originalMime,
	contentHash: asset.contentHash,
	derived: { webp: asset.localSrc },
	publishStatus: asset.publishStatus
}));
var kitchenCoverAsset = {
	id: "kitchens-cover-white",
	src: "/drive/kitchens/kitchens-cover-white.webp",
	sourceFolder: "Client-supplied WhatsApp reference",
	sourceName: "WhatsApp Image 2026-08-11 at 1.05.07 AM.jpeg",
	capabilities: ["kitchens"],
	stage: "finished",
	authenticity: "unknown",
	rights: "pending",
	orientation: "landscape",
	quality: "hero",
	usage: "capability",
	alt: {
		en: "White kitchen with a walnut breakfast counter",
		ar: "مطبخ أبيض مع سطح إفطار من خشب الجوز"
	},
	derived: { webp: "/drive/kitchens/kitchens-cover-white.webp" },
	publishStatus: "preview"
};
var customUnitsCoverAsset = {
	id: "custom-unit-04",
	src: "/drive/units/custom-units/custom-unit-04.webp",
	sourceFolder: "3-Custom units",
	sourceFolderId: "1UxzmpZ93tswuw5XFFzWQmAiWJoXCR4g9",
	sourceName: "4",
	capabilities: ["custom-units"],
	stage: "finished",
	authenticity: "verified-real",
	rights: "pending",
	orientation: "portrait",
	quality: "hero",
	usage: "capability",
	alt: {
		en: "Custom TV unit with mirror and built-in storage",
		ar: "وحدة تلفزيون مخصصة مع مرآة وتخزين مدمج"
	},
	driveFileId: "1PCT88VOXH3rHuUg94fRkkrDRsWeAy1BY",
	originalMime: "image/png",
	contentHash: "7cfad55e5a6a4d060e7c84cb903b4db1aefa102467c06d16d9c268f5f49156cf",
	derived: { webp: "/drive/units/custom-units/custom-unit-04.webp" },
	publishStatus: "preview"
};
var mediaAssets = [
	...sodicMediaAssets,
	...hydeParkMediaAssets,
	...categoryMediaAssets,
	...kitchenMediaAssets,
	...processMediaAssets,
	...selectedProjectMedia,
	kitchenCoverAsset,
	customUnitsCoverAsset,
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
var capabilityCatalog = [
	{
		slug: "kitchens",
		number: "02",
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
		image: "kitchens-cover-white"
	},
	{
		slug: "dressing-rooms",
		number: "03",
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
		image: "dressing-collection-01"
	},
	{
		slug: "living-rooms",
		number: "07",
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
		image: "living-cover"
	},
	{
		slug: "custom-units",
		number: "05",
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
		image: "custom-unit-04"
	},
	{
		slug: "bedrooms",
		number: "06",
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
		image: "bedroom-a-01"
	},
	{
		slug: "wall-cladding",
		number: "01",
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
		number: "04",
		title: {
			en: "Doors",
			ar: "الأبواب"
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
		image: "door-01"
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
var capabilityOrder = [
	"wall-cladding",
	"kitchens",
	"dressing-rooms",
	"doors",
	"custom-units",
	"bedrooms",
	"living-rooms",
	"materials-finishes"
];
var capabilities = [...capabilityCatalog].sort((a, b) => {
	const aIndex = capabilityOrder.indexOf(a.slug);
	const bIndex = capabilityOrder.indexOf(b.slug);
	return (aIndex === -1 ? capabilityOrder.length : aIndex) - (bIndex === -1 ? capabilityOrder.length : bIndex);
});
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
			en: "A residential joinery package that moves from fluted walls and concealed storage to stair, kitchen and living details in one timber-led language.",
			ar: "حزمة نجارة سكنية تمتد من الجدران المخددة والتخزين المخفي إلى تفاصيل السلم والمطبخ والمعيشة ضمن لغة واحدة تقودها الخامة الخشبية."
		},
		scope: {
			en: "Selected wall, stair, kitchen and joinery photography from the SODIC Drive folder; quantities, locations and programme remain intentionally unlisted.",
			ar: "صور مختارة للجدران والسلم والمطبخ وتفاصيل النجارة من مجلد سوديك على Drive؛ لم تُدرج الكميات والمواقع والبرنامج الزمني عمداً."
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
		elements: {
			en: "Cladding only",
			ar: "التكسية فقط"
		},
		capabilities: [
			"custom-units",
			"wall-cladding",
			"living-rooms"
		],
		media: [
			"sodic-drive-06",
			"sodic-drive-02",
			"sodic-drive-01",
			"sodic-drive-04",
			"sodic-drive-08",
			"sodic-drive-07",
			"sodic-drive-03",
			"sodic-drive-05",
			"sodic-drive-09"
		],
		collaboratorIds: ["ahmed-elsheref"],
		sourceFolderId: "11gkeSNomh8jBKdBZKJ3Hed0k5tQViUlS",
		sourceFolderTitle: "1-SODIC ahmed el sherif",
		mediaAreas: {
			"sodic-drive-06": "cover",
			"sodic-drive-02": "wall",
			"sodic-drive-01": "stairs",
			"sodic-drive-03": "kitchen",
			"sodic-drive-08": "wall"
		}
	},
	{
		slug: "hyde-park",
		title: {
			en: "Hyde Park",
			ar: "هايد بارك"
		},
		sector: "residential-developments",
		sectorLabel: sectors[0].label,
		location: {
			en: "Egypt",
			ar: "مصر"
		},
		year: "—",
		client: {
			en: "HYDE PARK",
			ar: "هايد بارك"
		},
		clientVisibility: "approved",
		verificationStatus: "partial",
		summary: {
			en: "A light-filled kitchen organized around a pair of islands, full-height storage and a quiet contrast between white fronts and dark timber.",
			ar: "مطبخ مضيء يتمحور حول جزيرتين وتخزين بارتفاع كامل وتباين هادئ بين الواجهات البيضاء والخشب الداكن."
		},
		scope: {
			en: "The Drive selection follows the kitchen from integrated appliance walls to island work surfaces and close joinery details.",
			ar: "تتبع صور Drive المطبخ من جدران الأجهزة المدمجة إلى أسطح الجزر وتفاصيل النجارة القريبة."
		},
		responsibilities: [
			{
				en: "Kitchen cabinetry",
				ar: "خزائن المطبخ"
			},
			{
				en: "Integrated appliance housings",
				ar: "وحدات الأجهزة المدمجة"
			},
			{
				en: "Island work surfaces",
				ar: "أسطح عمل الجزر"
			}
		],
		materials: [
			{
				en: "High-gloss white fronts",
				ar: "واجهات بيضاء عالية اللمعان"
			},
			{
				en: "Dark timber worktops",
				ar: "أسطح عمل خشبية داكنة"
			},
			{
				en: "White work surfaces",
				ar: "أسطح عمل بيضاء"
			}
		],
		outcome: {
			en: "A composed kitchen where storage, preparation and cooking zones read as one continuous interior.",
			ar: "مطبخ متناسق تتصل فيه مناطق التخزين والتحضير والطهي ضمن مساحة داخلية واحدة."
		},
		capabilities: ["kitchens", "custom-units"],
		media: [
			"white-island-kitchen-01",
			"white-island-kitchen-02",
			"white-island-kitchen-03",
			"white-island-kitchen-04",
			"white-island-kitchen-05",
			"white-island-kitchen-06",
			"white-island-kitchen-07"
		]
	},
	...selectedProjectRecords,
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
		image: "process-concept"
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
		image: "process-sketch"
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
		image: "process-manufacturing"
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
		image: "process-installation"
	}
];
var manufacturingSteps = [
	{
		number: "01",
		topic: {
			en: "Material direction",
			ar: "توجيه الخامة"
		},
		title: {
			en: "Select",
			ar: "الاختيار"
		},
		text: {
			en: "Boards, veneers and hardware are aligned to the approved brief.",
			ar: "نطابق الألواح والقشرة والإكسسوارات مع الموجز المعتمد."
		},
		image: "/drive/materials/material-03.webp",
		imageAlt: {
			en: "A fan of timber and stone finish samples",
			ar: "عينات متدرجة من الخشب والحجر والتشطيبات"
		}
	},
	{
		number: "02",
		topic: {
			en: "Production set-up",
			ar: "إعداد الإنتاج"
		},
		title: {
			en: "Cut",
			ar: "القص"
		},
		text: {
			en: "Panels are cut, edged and machined to the production drawings.",
			ar: "تُقص الألواح وتُشطب وتُشغل وفق رسومات الإنتاج."
		},
		image: "/drive/materials/material-02.webp",
		imageAlt: {
			en: "Layered board and veneer samples prepared for production",
			ar: "عينات متراكبة من الألواح والقشرة جاهزة للإنتاج"
		}
	},
	{
		number: "03",
		topic: {
			en: "Assembly check",
			ar: "مراجعة التجميع"
		},
		title: {
			en: "Assemble",
			ar: "التجميع"
		},
		text: {
			en: "Parts are dry-fitted and checked before the finish is applied.",
			ar: "تُركب الأجزاء تجريبياً وتُراجع قبل تنفيذ التشطيب."
		},
		image: "/drive/materials/material-04.webp",
		imageAlt: {
			en: "Tagged timber samples being checked as a set",
			ar: "عينات خشبية معلّمة تُراجع كمجموعة واحدة"
		}
	},
	{
		number: "04",
		topic: {
			en: "Finish matching",
			ar: "مطابقة التشطيب"
		},
		title: {
			en: "Finish",
			ar: "التشطيب"
		},
		text: {
			en: "Colour, texture and hardware are tuned by hand against the samples.",
			ar: "نضبط اللون والملمس والإكسسوارات يدوياً مقارنة بالعينات."
		},
		image: "/drive/materials/material-06.webp",
		imageAlt: {
			en: "Hands comparing finish samples on a work table",
			ar: "أيدٍ تقارن عينات التشطيب على طاولة العمل"
		}
	},
	{
		number: "05",
		topic: {
			en: "Quality gate",
			ar: "بوابة الجودة"
		},
		title: {
			en: "Check",
			ar: "الفحص"
		},
		text: {
			en: "Every piece is inspected, protected and prepared for site.",
			ar: "نفحص كل قطعة ونحميها ونجهزها للموقع."
		},
		image: "/drive/materials/material-01.webp",
		imageAlt: {
			en: "A SECTION material sample under a final quality review",
			ar: "عينة من خامة SECTION أثناء مراجعة الجودة النهائية"
		}
	}
];
var publishedProjects = projects.filter((project) => project.publication !== "pending" && project.media.length > 0);
var selectedProjects = selectedProjectSlugs.map((slug) => projects.find((project) => project.slug === slug)).filter((project) => Boolean(project && project.publication !== "pending" && project.media.length > 0));
//#endregion
export { sodicMediaAssets as _, publishedProjects as a, kitchenMediaAssets as c, generated_living_drive_assets_default as d, generated_doors_drive_assets_default as f, hydeParkMediaAssets as g, SODIC_SOURCE_FOLDER_ID as h, processSteps as i, selectedProjectMedia as l, generated_dressing_drive_assets_default as m, getMedia as n, sectors as o, generated_category_drive_assets_default as p, manufacturingSteps as r, selectedProjects as s, capabilities as t, generated_unit_process_assets_default as u, sodicVideoPosters as v };
