# Nocturne Drive asset inventory

Google Drive is the source of truth. Files under `public/drive` and `app/fonts` are generated delivery derivatives; their stable identity is the Drive file ID recorded below and in `lib/drive-assets.ts`.

## Source folders

| Purpose | Drive folder ID | Status |
| --- | --- | --- |
| Website source of truth | `1J_E8PhUFAvRpUuIYrGL0XjwMU3c6V5uK` | Canonical |
| SODIC / Ahmed Elsheref project | `11gkeSNomh8jBKdBZKJ3Hed0k5tQViUlS` | Approved for this project presentation |
| People We Work With | `1_gXLthKMbOmODh3n7X5nel79B8EYaH2d` | Canonical logo source |
| Material Brands | `1Zxpk16-Um3Y9pDDq99vuabCQYmssTt6a` | Canonical logo source |
| Brand fonts | `10y34BF4Iqc6dUwpB92zTmuasIFz3Nh7` | Canonical font source |
| Brand/contact record | `1L3lX1LWIRbPi1MgWkrGhV0tJyG8FnCVc` | Canonical contact source |
| Brand narrative | `1FOtmkjvBnWF5ASWJ9vOQ4cLC0E04h_TX` | Source found; component remains unmounted |

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

## Identity and logo sources

- Ahmed Elsheref Designs: Drive ID `1-BcvpWLz8KUwOR7uwWLMf-gBMyBRNbXs`; approved collaborator mark; shown on the SODIC card, project detail and People We Work With.
- SODIC: no logo file was found in the supplied project folder or the searched Drive source. The UI uses accessible text attribution only. An image logo remains gated until an approved Drive file exists.
- Vento/Evento: source ID `1kkrKXJpd1K65oqPZ1UsAiT5pBqp2t-T1` is currently labelled “Vento Designs” in the catalog. Identity/spelling still needs owner confirmation.
- MYS and Amaken: retained with per-logo surface, padding and scale treatments rather than destructive filters.

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
2. Confirm Vento versus Evento naming.
3. Confirm the Ahmed Elsheref / Ahmad Elsherif spelling against the owner record.
4. Confirm commercial licensing for the Drive font files.
5. Approve localized Brand Story, Vision and Mission placement before mounting `BrandNarrative`.
