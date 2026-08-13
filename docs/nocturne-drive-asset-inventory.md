# Nocturne Drive asset inventory

Google Drive is the source of truth. Files under `public/drive` and `app/fonts` are generated delivery derivatives; their stable identity is the Drive file ID recorded below and in `lib/drive-assets.ts`.

## Source folders

| Purpose | Drive folder ID | Status |
| --- | --- | --- |
| Website source of truth | `1J_E8PhUFAvRpUuIYrGL0XjwMU3c6V5uK` | Canonical |
| SODIC / Ahmed Elsheref project | `11gkeSNomh8jBKdBZKJ3Hed0k5tQViUlS` | Approved for this project presentation |
| Hyde Park project | `1-P-ia4hCmDsLPVi_ilzt40IELPK6_S1t` | Seven stills approved for presentation with Hyde Park text attribution |
| People We Work With | `1_gXLthKMbOmODh3n7X5nel79B8EYaH2d` | Canonical logo source |
| Material Brands | `1Zxpk16-Um3Y9pDDq99vuabCQYmssTt6a` | Canonical logo source |
| Brand fonts | `10y34BF4Iqc6dUwpB92zTmuasIFz3Nh7` | Canonical font source |
| Brand/contact record | `1L3lX1LWIRbPi1MgWkrGhV0tJyG8FnCVc` | Canonical contact source |
| Brand narrative | `1FOtmkjvBnWF5ASWJ9vOQ4cLC0E04h_TX` | Source found; component remains unmounted |
| Kitchens — supplied set A | `1-ga5fA7B3E2jjOb1ln51Xox1Qtok3wsv` | 21 stills imported; videos excluded from this photo update |
| Kitchens — supplied set B | `16eduRBCVDCB-Efrl1vb-gyVyhqGMLU_M` | Six stills imported from the `Edited photos` child folder |
| Bedrooms — supplied set A | `10VuQK5YjEqxIqCGeOYJDB8Fcg6hRQ_2j` | 11 stills imported; videos excluded from this photo update |
| Bedrooms — supplied set B | `10LIhHLVF6OQpszqlfyCV1Eui5RoVMKRp` | Seven stills imported |
| Dressing | `1-1au0sX3ciSYnzZ-HYwa3OzE9D-q0q4X` | Existing eight stills retained and five additional stills imported |

## Category gallery media

The generated manifest at `lib/generated-category-drive-assets.json` records the Drive file ID, source folder ID, original name and MIME type, SHA-256 hash, orientation and optimized WebP derivative for every new still.

| Category | Imported stills | Presentation |
| --- | ---: | --- |
| Kitchens | 27 | Three visually verified project galleries: Obour Kitchen, Kitchen Study 07 and Kitchen Study 06 |
| Bedrooms | 18 | Two distinct project galleries matching the two supplied folders |
| Dressing Rooms | 5 new / 13 total | Existing two dressing presentations expanded with the remaining unique stills |

The Kitchen folder also contains four videos, the first Bedroom folder contains six videos, and the Dressing folder contains six videos. They were inventoried but not published because this request specified photos. ORA attribution and its placeholder project were removed after the owner confirmed there was no collaboration.

## SODIC project media

All nine photographs have WebP and AVIF derivatives. The two MOV files have poster derivatives. Source dimensions and transparency are not supplied by Drive metadata; the generated assets were visually reviewed after conversion.

| Source | Drive file ID | SHA-256 / delivery hash | Intended usage |
| --- | --- | --- | --- |
| `IMG_0524.HEIC` | `1m9P-Vt8V3n9Dsdn9II8ji_vMIbVULEl4` | `e9399c50590f7dc114aaaf3db7f2da6ddf76549b6eb559c2a2c7ea9edf817aac` | Stair detail / gallery |
| `IMG_0522.HEIC` | `1DTphNqAJhJyoaf87DuInu05K3CDjUaDv` | `6c668e993ae9b3f41381e00fe2f4244d200566fc354ca9731f32b1806322b362` | TV wall / gallery |
| `IMG_0515.HEIC` | `1zNP89LynCQ8VHwChuAkXivPWrW5FxS7R` | `53efb928669677a55785bcf228695c790ad981b1a8f49e2e21d54f03f2bf5d07` | Kitchen / gallery |
| `IMG_0518.HEIC` | `1YW_ppjuQ42-VJZaToohGLjNILcG_rJIL` | `637cc6365370aa399e713fe411965cef09cfd054b42314a624b1265434766d10` | Feature wall / gallery |
| `IMG_0520.HEIC` | `1wcwLoJX-gAEEt2gyX2Bvg4hHDiNvzrSc` | `9a601a9e12215cd95553e15d166478b57d72e1dffe5cfc4ccd0592a0f8ea15d3` | Dining detail / gallery |
| `IMG_0517.HEIC` | `1zV9r6xH02r-jWUyukvmsVN_UMzhaVjE_` | `ecee9c88211c34fd2d211252f747192b7c1be1c9c8dacc75a4de6a9658f91c84` | Project cover / hero |
| `IMG_0523.HEIC` | `1MgSdmRUjs8QavgC-NVFbIOJWssbxGCfU` | `d8b4d1c9e21d5e80871a9c3c352564167b787ff91caf67466b33331227d599af` | Shelving / gallery |
| `IMG_0525.HEIC` | `1se5IiFty4Aq5gtpXLSWjBKmOM1gpvZsa` | `fdc5c5eb763d45d35b70c5ce66d054149a2d47eab08951e0c365fc354a4ba403` | Hall cladding / gallery |
| `IMG_0526.HEIC` | `153Cn-ENFwIRjWxOM9c7LBhmlxcccJz6i` | `7bdcb6d49406a888c26122966ecac47cb54fefafdf3d6923b0751c97475484fe` | Stair cladding / gallery |
| `IMG_0168.MOV` | `1sXahXE3x6Me9n5NO0-43VzHvsmi1AsAa` | `720d49f7052a3c5f3de90da5facf20652281e6f8bf0139ea1cf0b420a073e971` | Video poster |
| `IMG_0202.MOV` | `1Um3CARs8u0n3eeLvPx5TbWnpvFGbDln_` | `983380d2e21c3ffd476219ef5accea7b367e7807147e45d81b298d43c67bdc87` | Video poster |

## Hyde Park project media

The seven supplied HEIC photographs were visually verified as one completed kitchen set and remain available in the broader project catalog. The numbered selected-project rail now follows the newer Drive root documented below. Each source has optimized WebP and AVIF derivatives. The approved client name is shown as HYDE PARK, matching SODIC's text-attribution treatment. The folder contains no Hyde Park logo file, so no untraceable logo is shown.

| Source | Drive file ID | SHA-256 | Intended usage |
| --- | --- | --- | --- |
| `IMG_6731.HEIC` | `1aD2z7kpl5x0XU0x6mLqVbo0U-K1P_ZUY` | `b7d4d3b446fa0769b2b31ee15d8f560f20f8bbf6b900ca038bf44934b63c7385` | Project cover / gallery |
| `IMG_6722.HEIC` | `1deym7-BZRB5HsvTLA9P0z9Hpt1csHZTK` | `0555f201bee0c693184b7f849b4e19462ccbcd973edce03e164fcef8aed1580f` | Island detail / gallery |
| `IMG_6717.HEIC` | `1at1I3jvFVhaNtbA8-fvPAbTZDwdXCU6q` | `88c5656d8e6e01b1f9404e33f80ed77469cebedc902bb7dc1191d502a6791e74` | Full-height cabinetry / gallery |
| `IMG_6726.HEIC` | `1i9wuVQl9d0yDPtkpLiyv-dQSm55Txh2X` | `68c75c112f01c2e0c5eb23b8cf44ec4d2e041fa8d67a2538c9b22c6c72c00c93` | Twin-island view / gallery |
| `IMG_6712.HEIC` | `1hXWLasXz302JmMDSwpMrWfdzsIyXrBS2` | `74915028997dce8372e1256cc5a3a5c728b43411549c3b6d32cfa6964d8c6982` | Front view / gallery |
| `IMG_6715.HEIC` | `1Stl8xxMkdlcP_dE2YU3SN5EmNHDjiYiB` | `4d0021f569924edba096140b6c6fd2454fe590cfa9b62f3a37b2e8a2d5682be4` | Breakfast counter / gallery |
| `IMG_6713.HEIC` | `1mh6bEWV1lcQbU6LNllM-gpEFEqZjQTp6` | `d0c3a93e99e26d1e4026e7177e0ffb8b05f03ba51e41d2bf2271dbfb6edc51d5` | Cooking island / gallery |

## Identity and logo sources

- Ahmed Elsheref Designs: Drive ID `1-BcvpWLz8KUwOR7uwWLMf-gBMyBRNbXs`; approved collaborator mark; shown on the SODIC card, project detail and People We Work With.
- SODIC: no logo file was found in the supplied project folder or the searched Drive source. The UI uses accessible text attribution only. An image logo remains gated until an approved Drive file exists.
- Evento Designs: source ID `1kkrKXJpd1K65oqPZ1UsAiT5pBqp2t-T1`; the existing Drive-derived partner mark is attached to the CFC Office collaboration record.
- MYS and Amaken: retained with per-logo scale treatments rather than destructive filters.
- People We Work With and project attribution render the transparent delivery derivatives tied to these Drive IDs directly; collaborator wrappers have no artificial black tile or border, with only per-mark sizing used to preserve readability.
- Circular Drive exports (MYS, Nawara and Amaken) are matte-cleaned and delivered on their true square bounds so their transparent edges do not render as black canvases.

## Material brands

The approved marquee maps Drive IDs in `lib/drive-assets.ts` to Egger, Egypt Panel, Starwood, Kastamonu, Gizir, Salomil, Saviola, Blum and Mesan. Drive IDs `1w-5dH30bjImJV4vR6gSAnVC69w5bIYuq` and `1FiXNj8eA5ebTuoXVRr6i8G9NNH9bNG7D` are two Saviola variants; only the dark-surface variant is mounted to avoid duplication.

## Fonts and contact data

- Bold font: `12mQ2Iwd7jHEYgwjkYelprdjPxqyn4FtI`
- Variable font: `1KWhExAs6gHVfknoISJzu4UTBb058J2iw`
- Light font: `1n8yqPscjsgqpDnJCjSTcJjLVkB8X0pXc`
- The source filenames contain “Trial”; production licensing should be confirmed before final commercial release.
- Contact PDF: `1HL3SQbun2QJ0WpNLVdtYYcKxenSLyMJS`
- Approved contact values used: `+20 127 233 3832`, `@sectionfurniture`, Silver Star Downtown Mall showroom, and Trolly Street factory.
- No approved WhatsApp or map URL was found, so neither is published.

## Open release gates

1. Supply and approve a SODIC logo in Drive.
2. Confirm the final spelling of the remaining partner names.
3. Confirm the Ahmed Elsheref / Ahmad Elsherif spelling against the owner record.
4. Confirm commercial licensing for the Drive font files.
5. Approve localized Brand Story, Vision and Mission placement before mounting `BrandNarrative`.
6. Supply and approve a Hyde Park logo in Drive if logo attribution is required.

## Selected projects source of truth (August 2026)

The selected-project root is [Selected projects](https://drive.google.com/drive/folders/1Dh1mQCh7iWs3Txayc20AaFgdPbYvY-Mh), Drive folder ID `1Dh1mQCh7iWs3Txayc20AaFgdPbYvY-Mh`. The numeric prefixes are the presentation order. `lib/selected-projects.ts` is the typed catalog; `lib/generated-selected-project-assets.json` retains the source file ID, source folder ID, SHA-256 and optimized delivery paths for every imported still.

| Order | Project / Drive folder | Canonical source folder ID | Published media | Notes |
| ---: | --- | --- | ---: | --- |
| 1 | SODIC / Ahmed Elsheref | `11gkeSNomh8jBKdBZKJ3Hed0k5tQViUlS` | 9 existing stills | SODIC text attribution and approved Ahmed Elsheref collaborator mark; stairs, wall, kitchen and cover are represented |
| 2 | Swan Lake | `1-oc9ebNo-k9DqaK_aozdB9HQTZyek8kR` | 16 stills | Every approved photo in the Drive folder is published, with the first frame retained as cover and the remaining frames available in the project gallery |
| 3 | SODIC Villette / Mai Saad ([supplied folder](https://drive.google.com/drive/folders/1bX0LcksoN1DGEKnkmpm8NHk0opmyhNlH)) | `1bX0LcksoN1DGEKnkmpm8NHk0opmyhNlH` | 22 stills | Only the 22 numbered photos in `Sodic vilette mai saad new folder` are published; no older SODIC Villette photos are mixed in |
| 4 | New Giza / Mai Saad | `1NmaXGLx8SRXereWz90DmS8YRh2I5J5cd` | 0 | Folder is empty; registered in the manifest but gated from the rail and routes until media is uploaded and reviewed |
| 5 | Playa / Amaken ([replacement folder](https://drive.google.com/drive/folders/1El0Bbk_JEOUvyfy6iDgc-7XmMyT5GgUZ)) | `1El0Bbk_JEOUvyfy6iDgc-7XmMyT5GgUZ` | 17 stills | The previous Playa source was replaced with the 17 numbered images in the supplied folder; source order is preserved |
| 6 | CFC office (Commercial) | `1-oivASCnYHYzWsmsEAsSxHZO0LgT_s_Y` | 9 stills | Every approved photo in the Drive folder is published, covering wall, reception and finish details |

The selected-project rail publishes the four folders with reviewed photography in this order. New Giza remains visible to the content team through the manifest but does not render an empty placeholder. Hyde Park remains available in the broader project catalog and is not silently mixed into this six-folder selection. The generated manifest contains 64 stills from these four Drive folders, retaining each source file ID and SHA-256 hash.
