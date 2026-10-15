"""Check generated local links, images, and fragments; no dependencies needed."""

import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.links = []
        self.ids = set()
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            self.ids.add(attrs["id"])
        for key in ("href", "src"):
            if attrs.get(key):
                self.links.append(attrs[key])


def main():
    root = Path(sys.argv[1] if len(sys.argv) > 1 else "public").resolve()
    pages = {path: Page(path.read_text()) for path in root.rglob("*.html")}
    if not pages or root / "index.html" not in pages:
        sys.exit("Build the site first: hugo --gc --minify")
    errors = []
    checked = 0
    for path, page in pages.items():
        for link in page.links:
            url = urlsplit(link)
            if url.scheme and url.scheme not in ("http", "https"):
                continue
            if url.netloc and url.netloc not in ("kidzinski.com", "www.kidzinski.com"):
                continue
            checked += 1
            if url.path.startswith("/") or url.netloc:
                target = root / unquote(url.path).lstrip("/")
            elif url.path:
                target = path.parent / unquote(url.path)
            else:
                target = path
            if target.is_dir():
                target = target / "index.html"
            target = target.resolve()
            if not target.exists():
                errors.append(f"{path.relative_to(root)} → {link}: missing file")
            elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
                errors.append(f"{path.relative_to(root)} → {link}: missing anchor")
    for error in errors:
        print(error)
    print(f"Checked {checked} local references across {len(pages)} HTML pages; {len(errors)} errors.")
    return bool(errors)


if __name__ == "__main__":
    sys.exit(main())
