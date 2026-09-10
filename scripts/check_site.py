"""Validate static assets, internal anchors and identity before publication."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

root = Path(__file__).resolve().parents[1] / "public"


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            assert attrs["id"] not in self.ids, f"Duplicate id: {attrs['id']}"
            self.ids.add(attrs["id"])
        for key in ("href", "src"):
            if key in attrs:
                self.links.append(attrs[key])


for file in root.rglob("*.html"):
    page = Page()
    text = file.read_text()
    page.feed(text)
    for link in page.links:
        url = urlsplit(link)
        if url.scheme or url.netloc:
            continue
        if url.path:
            target = root / unquote(url.path).lstrip("/") if url.path.startswith("/") else file.parent / unquote(url.path)
            assert target.exists(), f"Missing asset in {file.name}: {link}"
        elif url.fragment:
            assert url.fragment in page.ids, f"Missing anchor in {file.name}: {link}"
    assert "simon.gravelle@" not in text
    assert "9fD2JlYAAAAJ" not in text
    assert "CNRS research scientist" not in text

home = (root / "index.html").read_text()
assert "livereload.js" not in home
assert "localhost" not in home
for required in ("Abhijit Das", "L3Rf6kkAAAAJ", "abhijit2k01", "b91220233", "tesseract"):
    assert required in home, f"Missing identity/content: {required}"
assert (root / "media/abhijit-das-cv.pdf").read_bytes().startswith(b"%PDF-")
print("PASS: identity, local links, anchors, unique IDs, CV, and no upstream demo identity")
