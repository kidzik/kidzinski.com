# kidzinski.com

Personal website for Lukas Kidzinski, built with Hugo and a small, local template system. No theme checkout, npm packages, web fonts, analytics scripts, or runtime framework are required.

## Preview and build

Install **Hugo 0.168.0** (the standard edition is sufficient), then:

```sh
hugo server --bind 127.0.0.1 --disableFastRender
```

Open the local URL printed by Hugo. To produce and check the static site:

```sh
hugo --gc --minify --panicOnWarning
python3 scripts/check_links.py
node --check static/js/site.js
```

Output goes to `public/`, inside this repository. Builds no longer write into a sibling checkout.

## Editing

- `data/home.toml`: personal introduction and featured research projects.
- `data/press.toml`: all 13 press outlets, their original logos, and coverage links.
- `data/journals.toml`: local journal marks, publisher marks, and proceedings cover badges displayed beside venue names.
- `layouts/home.html`: biography, press, research, education, contact, and featured publication selection.
- `content/project/`: original research pages, with their existing URLs.
- `content/publication/`: publication records, authors, abstracts, and paper/code links.
- `config.toml`: canonical URL, contact address, and social profiles.
- `static/css/site.css` and `static/js/site.js`: responsive styling, mobile navigation, and publication search.
- `static/img/modern/`: WebP versions of existing site imagery; originals remain in `static/img/`.
- `assets/img/journals/`: larger journal assets, resized by Hugo into small WebP derivatives.
- `docs/publication-sources.md`: Scholar coverage and citation sources for the expanded archive.

The older Academic homepage widgets, theme tutorials, and sample talks remain on disk for reference and are excluded from the new build. The original CV remains available at `/Lukasz-Kidzinski-CV.pdf`; it is not advertised as a current CV. Existing homepage anchors for projects, publications, about, teaching, and contact remain available.

The homepage uses a plain introduction, a small portrait, and compact research and publication lists. The biography opens with a single mention of Gosset, then describes the research background. All 13 press logos appear near the bottom, after education and before the contact section. Each email address is revealed only after activating its labeled button; the initial generated HTML has neither the plaintext address nor its mailto link. With JavaScript disabled or unavailable, a readable `[at]` / `[dot]` version is shown. This is lightweight obfuscation for basic harvesting, not a barrier to scrapers that decode public source or interact with the page. Navigation is always visible, including on mobile, and works without JavaScript. Publication search progressively enhances the archive. Project videos link to YouTube without loading third-party embeds.

## Publishing

**This is the source repository.** As verified on October 15, 2026, the live `https://kidzinski.com/` domain is served by GitHub Pages from **`kidzik/kidzik.github.io`**, which uses a separate publishing workflow. The `gh-pages` branch of this repository is not the live personal homepage.

A ready-to-install validation workflow is included at `docs/workflows/validate.yml`. Copy it to `.github/workflows/validate.yml` using GitHub credentials with workflow permission to enable builds, local link checks, and a downloadable `kidzinski-site` artifact. The connected token used for this change cannot create workflow files. This proposed workflow does **not** deploy the live site. Publishing requires updating the generated website in the actual publishing repository. Review its existing files and workflow before copying the build, preserving any separately maintained pages there.

## Content sources

The research archive, education, original portrait, project imagery, publication logos, and Stanford contact address come from the existing site. The second contact address, `lukasz@gosset.ai`, was supplied by the user. The refreshed biography presents past affiliations as past roles and removes the obsolete office location and office hours from the homepage.

- [Gosset](https://gosset.ai/): current co-founder role, previous Director of AI role at Clario, and current platform description.
- [OpenCap, PLOS Computational Biology (2023)](https://doi.org/10.1371/journal.pcbi.1011462): publication details and equal contribution note.
- [Single-camera movement analysis, Nature Communications (2020)](https://www.nature.com/articles/s41467-020-17807-z): publication details and equal contribution note.
- [Wearable sensors, Nature Medicine (2021)](https://doi.org/10.1038/s41591-021-01339-0) and [author manuscript](https://pmc.ncbi.nlm.nih.gov/articles/PMC8293303/): authors, equal contribution, and publication details.
- [Matrix completion, JCGS 33(2), 551–566 (2024)](https://doi.org/10.1080/10618600.2023.2257257) and [Crossref metadata](https://api.crossref.org/works/10.1080/10618600.2023.2257257): final title and DOI, November 15, 2023 online publication, and April 2, 2024 issue date. The existing `/publication/fcomplete/` URL is preserved.
- [Journal asset sources](docs/journal-assets.md): official marks and society-provided cover badges stored locally.

The publications archive contains 45 distinct records checked against Google Scholar and primary publication metadata. Duplicate citations and superseded preprints are consolidated into published versions where available; the Street View record now links to its published journal article. The homepage retains its five-paper selection. See [publication sources](docs/publication-sources.md) for the coverage criteria and full citations. The archive is maintained manually, with Google Scholar linked for the full record.
