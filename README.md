# kidzinski.com

Personal website for Łukasz Kidziński, built with Hugo and a small, local template system. No theme checkout, npm packages, web fonts, analytics scripts, or runtime framework are required.

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
- `layouts/home.html`: biography, press, research, education, contact, and featured publication selection.
- `content/project/`: original research pages, with their existing URLs.
- `content/publication/`: publication records, authors, abstracts, and paper/code links.
- `config.toml`: canonical URL, contact address, and social profiles.
- `static/css/site.css` and `static/js/site.js`: responsive styling, mobile navigation, and publication search.
- `static/img/modern/`: WebP versions of existing site imagery; originals remain in `static/img/`.

The older Academic homepage widgets, theme tutorials, and sample talks remain on disk for reference and are excluded from the new build. The original CV remains available at `/Lukasz-Kidzinski-CV.pdf`; it is not advertised as a current CV. Existing homepage anchors for projects, publications, about, teaching, and contact remain available.

The homepage uses a plain introduction, a small portrait, and compact research and publication lists. The biography opens with a single mention of Gosset, then describes the research background. All 13 press logos appear near the bottom, after education and before the two contact email addresses. Navigation is always visible, including on mobile, and works without JavaScript. Publication search progressively enhances the archive. Project videos link to YouTube without loading third-party embeds.

## Publishing

**This is the source repository.** As verified on October 15, 2026, the live `https://kidzinski.com/` domain is served by GitHub Pages from **`kidzik/kidzik.github.io`**, which uses a separate publishing workflow. The `gh-pages` branch of this repository is not the live personal homepage.

A ready-to-install validation workflow is included at `docs/workflows/validate.yml`. Copy it to `.github/workflows/validate.yml` using GitHub credentials with workflow permission to enable builds, local link checks, and a downloadable `kidzinski-site` artifact. The connected token used for this change cannot create workflow files. This proposed workflow does **not** deploy the live site. Publishing requires updating the generated website in the actual publishing repository. Review its existing files and workflow before copying the build, preserving any separately maintained pages there.

## Content sources

The research archive, education, original portrait, project imagery, publication logos, and Stanford contact address come from the existing site. The second contact address, `lukasz@gosset.ai`, was supplied by the user. The refreshed biography presents past affiliations as past roles and removes the obsolete office location and office hours from the homepage.

- [Gosset](https://gosset.ai/): current co-founder role, previous Director of AI role at Clario, and current platform description.
- [OpenCap, PLOS Computational Biology (2023)](https://doi.org/10.1371/journal.pcbi.1011462): publication details and equal contribution note.
- [Single-camera movement analysis, Nature Communications (2020)](https://www.nature.com/articles/s41467-020-17807-z): publication details and equal contribution note.

Older publication records are retained; a historical “Under review” label is displayed as “Preprint” where the source already links to a preprint. This is a selected archive, not a complete or automatically synchronized bibliography; Google Scholar is linked for the full record.
