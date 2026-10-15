# Redesign validation

Checked locally on October 15, 2026 using Hugo 0.168.0 and Chromium through Playwright.

- Production build passes with `--panicOnWarning` and no warnings.
- All 336 internal links, asset references, and fragments resolve across 24 HTML pages.
- All 24 pages return HTTP 200 and contain one H1 at widths of 320, 390, 768, 1024, and 1440 pixels (120 layout checks). No horizontal page overflow.
- No browser JavaScript errors during those checks.
- Mobile navigation opens, follows section links, closes with Escape, and returns keyboard focus to the toggle.
- Publication search handles year, author, case, Polish diacritics, empty results, and clearing the query across 14 records.
- Navigation and publications remain available with JavaScript disabled.
- Reduced motion preference disables smooth scrolling and animation.
- Homepage images load, the canonical URL points to `https://kidzinski.com/`, and the page makes no third-party resource requests.
- The original six project and twelve publication routes remain; two verified publication pages are added. Historical homepage section anchors are retained.

The homepage, archive, and representative mobile layouts were also visually reviewed. Screenshots are in [previews](previews/). These checks do not verify the availability of every external link or remote image in the legacy research archive. No production deployment was performed.
