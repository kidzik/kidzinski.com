# Website validation

Checked locally on October 15, 2026 using Hugo 0.168.0 and Chromium through Playwright.

- Production build passes with `--panicOnWarning` and no warnings.
- All 800 internal links, asset references, and fragments resolve across 55 HTML pages.
- All 55 pages return HTTP 200 and contain one H1 at widths of 320, 768, and 1440 pixels (165 layout checks). No horizontal page overflow or browser JavaScript errors.
- The homepage shows five selected publications, including the Nature Medicine paper with Jessilyn Dunn and the published JCGS matrix-completion paper. Full publication search covers 45 distinct records, including authors inside collapsed lists. Author names, diacritics, year, empty results, and clearing the query pass.
- The Nature Medicine author list, 2021 date, equal-contribution note, DOI, and author-manuscript link are verified against the paper. The matrix-completion record uses the final title, JCGS 33(2), 551–566 (2024), DOI, and November 15, 2023 online-publication note.
- All 44 archive venue images load beside visible venue names. Journal, publisher, society, repository, and proceedings identifiers are documented in `journal-assets.md`; the historical EMOOCs conference entry retains a text venue. Larger source images are resized to small WebP derivatives during the Hugo build. The full venue component is shared by the homepage, archive, and publication pages.
- Author disclosures expand and collapse correctly without overflow at 320 pixels. Every paper retains its full author list on its detail page.
- The 45 records have unique titles, exactly one preferred display-name entry for Lukas, valid venue-image mappings where supplied, and paper or preprint links. Scholar coverage and citation sources are recorded in `publication-sources.md`.
- The homepage main content matches the previous deployment, including its five selected publication routes, their journal marks, biography, press, and contact content.
- Neither contact address appears in plaintext in generated HTML, feeds, or JavaScript. There are no mailto links in the initial homepage DOM.
- Both email-reveal buttons work by mouse or native keyboard activation; Enter and Space reveal the correct address, create the correct mailto link, and transfer focus to it. No email client opens merely from revealing an address.
- With JavaScript disabled, readable `[at]` / `[dot]` contact addresses are visible and the inactive reveal buttons remain hidden. Navigation and publications still work.
- The anti-harvesting measure is deliberately lightweight. Public source, older pages, and archived documents may still contain contact information; this does not claim to prevent determined scraping or stop existing spam.
- All 13 press logos remain near the bottom, with the Stanford email first and Gosset email second in the contact section.
- Homepage images load, the canonical URL points to `https://kidzinski.com/`, and images and scripts are served locally.
- The original six project and twelve publication routes remain; the publication archive now has 45 records. Historical homepage section anchors and the original CV URL are retained.

The homepage, archive, publication pages, and mobile layouts were visually reviewed. Screenshots are in [previews](previews/). External links and remote images in the legacy research archive have not all been revalidated.
