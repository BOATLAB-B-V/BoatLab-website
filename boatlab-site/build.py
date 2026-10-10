#!/usr/bin/env python3
"""Builds the BoatLab website from src/ into three outputs.

  dist/     the website for normal hosting: pages share assets/site.css and assets/site.js
  inline/   the same pages with CSS and JS written into each page (no extra files needed)
  tilda/    body-only versions of inline/, ready to paste into a Tilda HTML block

Run:  python3 build.py            (add --preview to show placeholder review cards)
"""
import os, re, shutil, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, "src")
SITE = "https://boatlabservice.nl/"
PREVIEW = "--preview" in sys.argv

# page file, nav id, sections in order, English meta description
PAGES = [
    ("index",    "home",     ["hero", "home-services", "lift", "results", "home-why", "reviews", "home-facility", "cta"],
     "BoatLab Yacht Services in Wanssum (NL): antifouling, polishing, painting, osmosis treatment, gelcoat repair, refits, engine service and electronics. Free lift with our 30-tonne crane on every service."),
    ("services", "services", ["ph-services", "services", "process", "cta"],
     "All 13 BoatLab services: antifouling, painting, polishing, cleaning, coatings, osmosis treatment, lamination, gelcoat repair, inspections, refits, engine service and electronics."),
    ("results",  "results",  ["ph-results", "results", "cta"],
     "Before and after: antifouling and polishing results from the BoatLab yard in Wanssum."),
    ("about",    "about",    ["ph-about", "why", "partner", "process", "cta"],
     "Why boat owners choose BoatLab: personal service, quality work, fair prices and a free 30-tonne crane lift, in partnership with Focus Marine Center."),
    ("facility", "facility", ["ph-facility", "lift", "facility", "cta"],
     "The BoatLab yard in Wanssum: indoor halls, a full workshop, a harbour quay, a 30-tonne crane and a hydraulic boat mover on the Maas."),
    ("contact",  "contact",  ["ph-contact", "booking", "contact"],
     "Book a yacht or boat service with BoatLab in Wanssum, or call +31 6 11742272. Geijsterseweg 10, 5861 BL Wanssum."),
    ("privacy",  "privacy",  ["privacy"],
     "Privacy policy of Boatlab BV."),
]
TITLES = {"home": "BoatLab Yacht Services · Wanssum", "services": "Services · BoatLab", "results": "Results · BoatLab",
          "about": "Why BoatLab · BoatLab", "facility": "Facility · BoatLab", "contact": "Contact · BoatLab", "privacy": "Privacy policy · BoatLab"}

JSONLD = """<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "additionalType": "https://schema.org/LocalBusiness",
  "name": "BoatLab Yacht Services",
  "legalName": "Boatlab BV",
  "url": "https://boatlabservice.nl/",
  "logo": "https://boatlabservice.nl/img/logo-full.png",
  "image": "https://boatlabservice.nl/img/hero-crane-lift.jpg",
  "email": "info@boatlabservice.nl",
  "telephone": "+31611742272",
  "hasMap": "https://maps.app.goo.gl/qaHuijy3DLmqtUjv5",
  "sameAs": ["https://www.instagram.com/boatlab.nl/", "https://www.tiktok.com/@boatlab.nl"],
  "foundingDate": "2026-04",
  "address": {"@type": "PostalAddress", "streetAddress": "Geijsterseweg 10", "postalCode": "5861 BL",
              "addressLocality": "Wanssum", "addressRegion": "Limburg", "addressCountry": "NL"},
  "areaServed": ["NL", "DE"],
  "knowsLanguage": ["en", "nl", "de"]
}
</script>"""

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">\n'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
         '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,500..900'
         '&family=Instrument+Sans:wght@400..700&family=IBM+Plex+Mono:wght@500;600&display=swap">')


def read(*p):
    with open(os.path.join(SRC, *p), encoding="utf-8") as f:
        return f.read()


def page_html(name, nav_id, sections, desc, css, js):
    """css/js are either tag strings linking files, or inline <style>/<script> blocks."""
    header = read("partials", "header.html").replace(f'data-nav="{nav_id}"', f'data-nav="{nav_id}" aria-current="page"')
    body = "\n\n".join("  " + read("sections", s + ".html").strip() for s in sections)
    url = SITE if name == "index" else f"{SITE}{name}.html"
    robots = '<meta name="robots" content="noindex, follow">\n' if name == "privacy" else ""
    head = f"""<!--HEAD-ONLY-->
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="{desc}">
{robots}<meta property="og:title" content="{TITLES[nav_id]}">
<meta property="og:description" content="{desc}">
<meta property="og:image" content="{SITE}img/hero-crane-lift.jpg">
<meta property="og:url" content="{url}">
<link rel="canonical" href="{url}">
<link rel="icon" type="image/png" href="img/favicon.png">
<link rel="apple-touch-icon" href="img/apple-touch-icon.png">
<meta name="theme-color" content="#ffffff">
{JSONLD if name == "index" else ""}
</head>
<body>
<!--/HEAD-ONLY-->"""
    return f"""{head}
<title>{TITLES[nav_id]}</title>
{FONTS}
{css}

{read("partials", "sprite.html").strip()}

{header.strip()}

<main id="top" data-page="{nav_id}">
{body}
</main>

{read("partials", "footer.html").strip()}

{js}
<!--HEAD-ONLY-->
</body>
</html>
<!--/HEAD-ONLY-->
"""


def strip_head(html):
    return re.sub(r"<!--HEAD-ONLY-->.*?<!--/HEAD-ONLY-->\n?", "", html, flags=re.S)


def clean_markers(html):
    return html.replace("<!--HEAD-ONLY-->\n", "").replace("<!--/HEAD-ONLY-->\n", "").replace("<!--/HEAD-ONLY-->", "")


def main():
    css = read("assets", "site.css")
    js = read("assets", "site.js")
    if PREVIEW:
        js = js.replace("reviewPlaceholders: false", "reviewPlaceholders: true")
    out = {d: os.path.join(ROOT, d) for d in ("dist", "inline", "tilda")}
    for d in out.values():
        shutil.rmtree(d, ignore_errors=True)
        os.makedirs(d)
    os.makedirs(os.path.join(out["dist"], "assets"))
    with open(os.path.join(out["dist"], "assets", "site.css"), "w", encoding="utf-8") as f:
        f.write(css)
    with open(os.path.join(out["dist"], "assets", "site.js"), "w", encoding="utf-8") as f:
        f.write(js)
    for d in ("dist", "inline"):
        shutil.copytree(os.path.join(ROOT, "img"), os.path.join(out[d], "img"))

    linked = ('<link rel="stylesheet" href="assets/site.css">', '<script src="assets/site.js"></script>')
    inline = (f"<style>{css}</style>", f"<script>{js}</script>")
    for name, nav_id, sections, desc in PAGES:
        for d, (c, j) in (("dist", linked), ("inline", inline)):
            html = page_html(name, nav_id, sections, desc, c, j)
            with open(os.path.join(out[d], name + ".html"), "w", encoding="utf-8") as f:
                f.write(clean_markers(html))
            if d == "inline":
                with open(os.path.join(out["tilda"], name + ".html"), "w", encoding="utf-8") as f:
                    f.write(strip_head(html))
    print("Built", len(PAGES), "pages into dist/, inline/ and tilda/" + (" (preview mode)" if PREVIEW else ""))


if __name__ == "__main__":
    main()
