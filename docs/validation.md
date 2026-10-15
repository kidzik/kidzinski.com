# Redesign validation

Checked locally on October 15, 2026 using Hugo 0.168.0 and Chromium through Playwright.

- Production build passes with `--panicOnWarning` and no warnings.
- All 317 internal links, asset references, and fragments resolve across 24 HTML pages.
- All 24 pages return HTTP 200 and contain one H1 at widths of 320, 390, 768, 1024, and 1440 pixels (120 layout checks). No horizontal page overflow.
- No browser JavaScript errors during those checks.
- Navigation is always visible on mobile. The Press link navigates to the coverage section, and the native “More coverage” disclosure opens and closes with the keyboard.
- Publication search handles year, author, case, Polish diacritics, empty results, and clearing the query across 14 records.
- Navigation, the press disclosure, and publications remain available with JavaScript disabled.
- The interface has no animated effects or smooth scrolling.
- Homepage images load, the canonical URL points to `https://kidzinski.com/`, and the page makes no third-party resource requests.
- The original six project and twelve publication routes remain; two verified publication pages are added. Historical homepage section anchors are retained.

The homepage leads with a personal introduction and press coverage; Gosset appears as a single inline mention. All 13 original coverage links are retained, with six featured and seven in the native disclosure. The homepage, archive, and representative mobile layouts were also visually reviewed. Screenshots are in [previews](previews/). These checks do not verify the availability of every external link or remote image in the legacy research archive. No production deployment was performed.
