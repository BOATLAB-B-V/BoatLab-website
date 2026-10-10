#!/usr/bin/env python3
"""Builds the BoatLab website from src/: every page in English, Dutch and German, each on its own URL.

  dist/    the website for normal hosting (clean URLs: /services, /nl/diensten, /de/leistungen ...),
           with sitemap.xml and robots.txt. Preview locally: cd dist && python3 -m http.server
  tilda/   body-only pages to paste into a Tilda HTML block (T123), one folder per language,
           plus PAGES.md: page address, SEO title, description and HEAD code for every Tilda page

All text is written into the HTML at build time (search engines see it without running JavaScript).
Texts live in src/assets/site.js (T, T2) and META below. Page addresses live in SLUGS below.

Run:  python3 build.py            (add --preview to show placeholder review cards)
"""
import html, json, os, re, shutil, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, "src")
SITE = "https://boatlabservice.nl"
PREVIEW = "--preview" in sys.argv

LANGS = ["en", "nl", "de"]
DEFAULT_LANG = "en"            # served at the site root and used as x-default
LOCALE = {"en": "en_GB", "nl": "nl_NL", "de": "de_DE"}

# Images: dist/ serves them from /img/. On Tilda, upload each photo and paste its Tilda URL here
# (file name -> URL); files not listed fall back to TILDA_IMG_BASE.
DIST_IMG_BASE = "/img/"
TILDA_IMG_BASE = "/img/"
TILDA_IMAGES = {}

# Page address per language. The same paths are used as Tilda page addresses.
SLUGS = {
    "index":    {"en": "",         "nl": "nl",            "de": "de"},
    "services": {"en": "services", "nl": "nl/diensten",   "de": "de/leistungen"},
    "results":  {"en": "results",  "nl": "nl/resultaten", "de": "de/ergebnisse"},
    "about":    {"en": "about",    "nl": "nl/over-ons",   "de": "de/ueber-uns"},
    "facility": {"en": "facility", "nl": "nl/werf",       "de": "de/werft"},
    "contact":  {"en": "contact",  "nl": "nl/contact",    "de": "de/kontakt"},
    "privacy":  {"en": "privacy",  "nl": "nl/privacy",    "de": "de/datenschutz"},
}

# page, nav id, sections in order
PAGES = [
    ("index",    "home",     ["hero", "home-services", "lift", "results", "home-why", "reviews", "home-facility", "cta"]),
    ("services", "services", ["ph-services", "services", "process", "cta"]),
    ("results",  "results",  ["ph-results", "results", "cta"]),
    ("about",    "about",    ["ph-about", "why", "partner", "process", "cta"]),
    ("facility", "facility", ["ph-facility", "lift", "facility", "cta"]),
    ("contact",  "contact",  ["ph-contact", "booking", "contact"]),
    ("privacy",  "privacy",  ["privacy"]),
]

# SEO title (keep under ~60 characters) and meta description (~150) per page and language
META = {
    "index": {
        "en": ("Yacht & Boat Service in Wanssum, Limburg · BoatLab",
               "BoatLab Yacht Services in Wanssum (NL): antifouling, polishing, painting, osmosis treatment, gelcoat repair, refits, engine service and electronics. Free lift with our 30-tonne crane on every service."),
        "nl": ("Jachtservice & botenonderhoud in Wanssum · BoatLab",
               "BoatLab Yacht Services in Wanssum (Limburg): antifouling, poetsen, schilderen, osmosebehandeling, gelcoatreparatie, refits, motoronderhoud en elektronica. Gratis hijsen met onze 30-tons kraan bij elke dienst."),
        "de": ("Yacht- & Bootsservice an der Maas in Wanssum · BoatLab",
               "BoatLab Yacht Services in Wanssum (NL), nahe der deutschen Grenze: Antifouling, Polieren, Lackieren, Osmosebehandlung, Gelcoat-Reparatur, Refit, Motorservice und Elektronik. Kostenloses Kranen mit unserem 30-Tonnen-Kran."),
    },
    "services": {
        "en": ("Boat Services: Antifouling, Polishing, Osmosis · BoatLab",
               "All 13 BoatLab services: antifouling, painting, polishing, cleaning, coatings, osmosis treatment, lamination, gelcoat repair, inspections, refits, engine service and electronics."),
        "nl": ("Diensten: antifouling, poetsen, osmose & meer · BoatLab",
               "Alle 13 diensten van BoatLab: antifouling, schilderen, poetsen, reinigen, coatings, osmosebehandeling, lamineren, gelcoatreparatie, inspecties, refits, motoronderhoud en elektronica."),
        "de": ("Leistungen: Antifouling, Polieren, Osmose · BoatLab",
               "Alle 13 Leistungen von BoatLab: Antifouling, Lackieren, Polieren, Reinigung, Beschichtungen, Osmosebehandlung, Laminieren, Gelcoat-Reparatur, Inspektionen, Refit, Motorservice und Elektronik."),
    },
    "results": {
        "en": ("Before & After: Antifouling and Polishing · BoatLab",
               "Before and after: antifouling and polishing results from the BoatLab yard in Wanssum."),
        "nl": ("Voor & na: antifouling en poetsen · BoatLab",
               "Voor en na: resultaten van antifouling en poetswerk op de werf van BoatLab in Wanssum."),
        "de": ("Vorher & nachher: Antifouling und Polieren · BoatLab",
               "Vorher und nachher: Ergebnisse von Antifouling und Polierarbeiten in der BoatLab-Werft in Wanssum."),
    },
    "about": {
        "en": ("Why BoatLab · Yacht Service in Wanssum",
               "Why boat owners choose BoatLab: personal service, quality work, fair prices and a free 30-tonne crane lift, in partnership with Focus Marine Center."),
        "nl": ("Waarom BoatLab · Jachtservice in Wanssum",
               "Waarom booteigenaren voor BoatLab kiezen: persoonlijke service, vakwerk, eerlijke prijzen en gratis hijsen met de 30-tons kraan, in samenwerking met Focus Marine Center."),
        "de": ("Warum BoatLab · Yachtservice in Wanssum",
               "Warum Bootseigner BoatLab wählen: persönlicher Service, sorgfältige Arbeit, faire Preise und kostenloses Kranen mit dem 30-Tonnen-Kran, in Kooperation mit dem Focus Marine Center."),
    },
    "facility": {
        "en": ("Our Yard: 30 t Crane & Indoor Halls · BoatLab",
               "The BoatLab yard in Wanssum: indoor halls, a full workshop, a harbour quay, a 30-tonne crane and a hydraulic boat mover on the Maas."),
        "nl": ("Onze werf: 30-tons kraan & binnenhallen · BoatLab",
               "De werf van BoatLab in Wanssum: binnenhallen, een complete werkplaats, een havenkade, een 30-tons kraan en een hydraulische botentransporter aan de Maas."),
        "de": ("Unsere Werft: 30-t-Kran & Hallen · BoatLab",
               "Die BoatLab-Werft in Wanssum: Hallen, eine komplette Werkstatt, ein Hafenkai, ein 30-Tonnen-Kran und ein hydraulischer Bootstransporter an der Maas."),
    },
    "contact": {
        "en": ("Book a Boat Service · BoatLab Wanssum",
               "Book a yacht or boat service with BoatLab in Wanssum, or call +31 6 11742272. Geijsterseweg 10, 5861 BL Wanssum."),
        "nl": ("Boot service boeken · BoatLab Wanssum",
               "Boek een jacht- of botenservice bij BoatLab in Wanssum, of bel +31 6 11742272. Geijsterseweg 10, 5861 BL Wanssum."),
        "de": ("Bootsservice buchen · BoatLab Wanssum",
               "Buchen Sie einen Yacht- oder Bootsservice bei BoatLab in Wanssum, oder rufen Sie an: +31 6 11742272. Geijsterseweg 10, 5861 BL Wanssum (NL)."),
    },
    "privacy": {
        "en": ("Privacy Policy · BoatLab", "Privacy policy of Boatlab B.V."),
        "nl": ("Privacyverklaring · BoatLab", "Privacyverklaring van Boatlab B.V."),
        "de": ("Datenschutzerklärung · BoatLab", "Datenschutzerklärung der Boatlab B.V."),
    },
}

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">\n'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
         '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,500..900'
         '&family=Instrument+Sans:wght@400..700&family=IBM+Plex+Mono:wght@500;600&display=swap">')

FEATURED = ["antifouling", "polishing", "osmosis", "gelcoat", "engine", "refit"]   # same as site.js
LANG_NAME = {"en": "English", "nl": "Nederlands", "de": "Deutsch"}


def read(*p):
    with open(os.path.join(SRC, *p), encoding="utf-8") as f:
        return f.read()


def esc(s):
    return html.escape(s, quote=True)


# ---------- data from site.js ----------

def js_literal(js, name):
    """Returns the source of `const NAME = {...}` / `[...]` from site.js (balanced, string-aware)."""
    start = js.index(f"const {name} = ") + len(f"const {name} = ")
    pairs = {"{": "}", "[": "]"}
    close, depth, quote, i = pairs[js[start]], 0, None, start
    while True:
        c = js[i]
        if quote:
            if c == "\\":
                i += 1
            elif c == quote:
                quote = None
        elif c in "\"'`":
            quote = c
        elif c == js[start]:
            depth += 1
        elif c == close:
            depth -= 1
            if depth == 0:
                return js[start:i + 1]
        i += 1


def load_data(js):
    def to_json(src):
        src = re.sub(r"/\*.*?\*/", "", src, flags=re.S)
        src = re.sub(r"(?m)\s+//[^\n]*$", "", src)                              # line comments (not "https://")
        src = re.sub(r'(?m)(^|[{,]\s*)([A-Za-z_]\w*)\s*:', r'\1"\2":', src)   # quote bare keys
        return json.loads(src)
    tr = to_json(js_literal(js, "T"))
    for l, extra in to_json(js_literal(js, "T2")).items():
        tr[l].update(extra)
    return tr, to_json(js_literal(js, "CONFIG")), to_json(js_literal(js, "SERVICES")), js_literal(js, "REVIEWS").strip() != "[]"


# ---------- URLs ----------

def path(page, lang):
    return "/" + SLUGS[page][lang]


def url(page, lang):
    return SITE + path(page, lang)


# ---------- rendering ----------

def apply_i18n(doc, tr):
    """Writes the translations into elements marked data-i18n (text) and data-i18n-html (HTML)."""
    opening = re.compile(r'<([a-zA-Z][a-zA-Z0-9]*)\b[^>]*?\sdata-i18n(-html)?="([^"]+)"[^>]*>')
    pos = 0
    while True:
        m = opening.search(doc, pos)
        if not m:
            return doc
        tag, is_html, key = m.group(1), m.group(2), m.group(3)
        if key not in tr:
            raise KeyError(f"missing translation: {key}")
        depth, inner_start, end = 1, m.end(), None
        for t in re.finditer(rf"<(/?){tag}\b[^>]*>", doc[inner_start:]):
            depth += -1 if t.group(1) else 1
            if depth == 0:
                end = inner_start + t.start()
                break
        value = tr[key] if is_html else html.escape(tr[key], quote=False)
        doc = doc[:inner_start] + value + doc[end:]
        pos = inner_start


def service_cards(services, tr, limit):
    items = [s for s in services if not limit or s["id"] in FEATURED]
    return "".join(f'''
      <button type="button" class="svc reveal" data-id="{s["id"]}" data-cat="{s["cat"]}">
        <span class="ic"><svg><use href="#s-{s["id"]}"/></svg></span>
        <h3>{esc(tr["s." + s["id"]])}</h3><p>{esc(tr["s." + s["id"] + ".d"])}</p>
        <span class="go">{esc(tr["svc.add"])}<svg><use href="#i-arrow"/></svg></span>
      </button>''' for s in items)


def service_chips(services, tr):
    return "".join(f'''
      <label><input type="checkbox" name="services" value="{s["id"]}" id="svc-{s["id"]}"><span>{esc(tr["s." + s["id"]])}</span></label>'''
                   for s in services)


def localize_links(doc, lang):
    pages = "|".join(SLUGS)
    return re.sub(rf'href="({pages})\.html(#[^"]*)?"',
                  lambda m: f'href="{path(m.group(1), lang)}{m.group(2) or ""}"', doc)


def localize_images(doc, base, mapping):
    return re.sub(r'(src|data-full)="img/([^"]+)"',
                  lambda m: f'{m.group(1)}="{mapping.get(m.group(2), base + m.group(2))}"', doc)


def lang_links(page, lang):
    return "\n      ".join(
        f'<a href="{path(page, l)}" hreflang="{l}" lang="{l}" data-lang="{l}" aria-current="{str(l == lang).lower()}">{l.upper()}</a>'
        for l in LANGS)


def hreflang_tags(page):
    tags = [f'<link rel="alternate" hreflang="{l}" href="{url(page, l)}">' for l in LANGS]
    tags.append(f'<link rel="alternate" hreflang="x-default" href="{url(page, DEFAULT_LANG)}">')
    return "\n".join(tags)


def json_ld(lang, cfg):
    data = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "BoatLab Yacht Services",
        "legalName": cfg["legalName"],
        "url": url("index", lang),
        "logo": SITE + "/img/logo-full.png",
        "image": SITE + "/img/hero-crane-lift.jpg",
        "email": cfg["email"],
        "telephone": "+31611742272",
        "vatID": cfg["vat"],
        "identifier": {"@type": "PropertyValue", "propertyID": "KvK", "value": cfg["kvk"]},
        "hasMap": cfg["maps"],
        "sameAs": [cfg["instagram"], cfg["tiktok"]],
        "foundingDate": "2026-04",
        "address": {"@type": "PostalAddress", "streetAddress": "Geijsterseweg 10", "postalCode": "5861 BL",
                    "addressLocality": "Wanssum", "addressRegion": "Limburg", "addressCountry": "NL"},
        "areaServed": ["NL", "DE", "BE"],
        "knowsLanguage": LANGS,
    }
    return '<script type="application/ld+json">\n' + json.dumps(data, ensure_ascii=False, indent=2) + "\n</script>"


def head_extra(page, lang, cfg):
    """Tags that go into <head> (on Tilda: Page settings > Additional > HTML code for the HEAD section)."""
    return hreflang_tags(page) + ("\n" + json_ld(lang, cfg) if page == "index" else "")


def render_body(page, nav_id, sections, lang, tr, cfg, services, has_reviews, img_base, img_map):
    header = read("partials", "header.html").replace(f'data-nav="{nav_id}"', f'data-nav="{nav_id}" aria-current="page"')
    body = "\n\n".join("  " + read("sections", s + ".html").strip() for s in sections)
    reg = [f'{tr["footer.kvk"]} {cfg["kvk"]}', f'{tr["footer.vat"]} {cfg["vat"]}']
    doc = f"""{read("partials", "sprite.html").strip()}

{header.strip()}

<main id="top" data-page="{nav_id}" data-lang="{lang}" data-contact="{path("contact", lang)}">
{body}
</main>

{read("partials", "footer.html").strip()}"""
    for k, v in {"email": cfg["email"], "salesEmail": cfg["salesEmail"], "legalName": cfg["legalName"],
                 "regIds": " · ".join(reg), "regIdsBr": "<br>".join(reg), "langLinks": lang_links(page, lang)}.items():
        doc = doc.replace("{{" + k + "}}", v)

    # privacy page: keep only this language's article
    for l in LANGS:
        block = re.compile(rf'<!-- =+ [A-Z]+ =+ -->\s*<article lang="{l}" data-lang-block="{l}"( hidden)?>.*?</article>\s*', re.S)
        if l != lang:
            doc = block.sub("", doc)
    doc = doc.replace(f'data-lang-block="{lang}" hidden>', f'data-lang-block="{lang}">')

    doc = re.sub(r'(<div class="svc-grid" id="svcGrid"( data-limit="\d+")?>)</div>',
                 lambda m: m.group(1) + service_cards(services, tr, m.group(2)) + "\n      </div>", doc)
    doc = doc.replace('<div class="chips" id="svcChips"></div>', f'<div class="chips" id="svcChips">{service_chips(services, tr)}\n      </div>')
    doc = doc.replace(f'<option value="{LANG_NAME[lang]}">', f'<option value="{LANG_NAME[lang]}" selected>')
    if not has_reviews and not PREVIEW:
        doc = doc.replace('<section class="reviews" id="reviews"', '<section class="reviews" id="reviews" hidden')

    doc = apply_i18n(doc, tr)
    doc = localize_links(doc, lang)
    doc = localize_images(doc, img_base, img_map)
    if "{{" in doc:
        raise ValueError("unfilled placeholder: " + doc[doc.index("{{"):doc.index("{{") + 40])
    return doc


def full_page(page, lang, cfg, body, css_tag, js_tag):
    title, desc = META[page][lang]
    robots = '<meta name="robots" content="noindex, follow">\n' if page == "privacy" else ""
    alternates = "\n".join(f'<meta property="og:locale:alternate" content="{LOCALE[l]}">' for l in LANGS if l != lang)
    return f"""<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
{robots}<link rel="canonical" href="{url(page, lang)}">
{head_extra(page, lang, cfg)}
<meta property="og:type" content="website">
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:image" content="{SITE}/img/hero-crane-lift.jpg">
<meta property="og:url" content="{url(page, lang)}">
<meta property="og:locale" content="{LOCALE[lang]}">
{alternates}
<link rel="icon" type="image/png" href="/img/favicon.png">
<link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
<meta name="theme-color" content="#ffffff">
{FONTS}
{css_tag}
</head>
<body>
{body}

{js_tag}
</body>
</html>
"""


def sitemap():
    rows = []
    for page, _, _ in PAGES:
        if page == "privacy":
            continue
        for l in LANGS:
            alts = "".join(f'\n    <xhtml:link rel="alternate" hreflang="{a}" href="{url(page, a)}"/>' for a in LANGS)
            alts += f'\n    <xhtml:link rel="alternate" hreflang="x-default" href="{url(page, DEFAULT_LANG)}"/>'
            rows.append(f"  <url>\n    <loc>{url(page, l)}</loc>{alts}\n  </url>")
    return ('<?xml version="1.0" encoding="UTF-8"?>\n'
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
            + "\n".join(rows) + "\n</urlset>\n")


def tilda_manifest(cfg):
    out = ["# Tilda pages",
           "",
           "Generated by build.py. One Tilda page per row. For each page: create it, set the page address,",
           "SEO title and description (Page settings > SEO), paste the HEAD code (Page settings > Additional >",
           "HTML code for the HEAD section), add one HTML block (T123) with the contents of the file, and publish.",
           "",
           "| Tilda page | Page address | Paste file | SEO title |",
           "|---|---|---|---|"]
    for page, _, _ in PAGES:
        for l in LANGS:
            out.append(f"| {page} ({l.upper()}) | `{path(page, l)}` | `tilda/{l}/{page}.html` | {META[page][l][0]} |")
    for page, _, _ in PAGES:
        for l in LANGS:
            title, desc = META[page][l]
            out += ["", f"## {page} ({l.upper()}): `{path(page, l)}`", "",
                    f"- SEO title: {title}", f"- Description: {desc}",
                    "- Page settings > SEO: " + ("forbid indexing (noindex)" if page == "privacy" else "allow indexing"),
                    "", "HEAD code:", "", "```html", head_extra(page, l, cfg), "```"]
    return "\n".join(out) + "\n"


def write(p, text):
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, "w", encoding="utf-8") as f:
        f.write(text)


def main():
    css = read("assets", "site.css")
    js = read("assets", "site.js")
    if PREVIEW:
        js = js.replace("reviewPlaceholders: false", "reviewPlaceholders: true")
    tr, cfg, services, has_reviews = load_data(js)

    dist, tilda = os.path.join(ROOT, "dist"), os.path.join(ROOT, "tilda")
    for d in (dist, tilda, os.path.join(ROOT, "inline")):     # inline/ is no longer built
        shutil.rmtree(d, ignore_errors=True)
    os.makedirs(dist)
    shutil.copytree(os.path.join(ROOT, "img"), os.path.join(dist, "img"))
    write(os.path.join(dist, "assets", "site.css"), css)
    write(os.path.join(dist, "assets", "site.js"), localize_images_js(js, DIST_IMG_BASE, {}))
    write(os.path.join(dist, "sitemap.xml"), sitemap())
    write(os.path.join(dist, "robots.txt"), f"User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n")

    tilda_js = localize_images_js(js, TILDA_IMG_BASE, TILDA_IMAGES)
    count = 0
    for page, nav_id, sections in PAGES:
        for l in LANGS:
            body = render_body(page, nav_id, sections, l, tr[l], cfg, services, has_reviews, DIST_IMG_BASE, {})
            out = os.path.join(dist, SLUGS[page][l], "index.html")
            write(out, full_page(page, l, cfg, body, '<link rel="stylesheet" href="/assets/site.css">',
                                 '<script src="/assets/site.js"></script>'))
            tbody = render_body(page, nav_id, sections, l, tr[l], cfg, services, has_reviews, TILDA_IMG_BASE, TILDA_IMAGES)
            write(os.path.join(tilda, l, page + ".html"),
                  f"{FONTS}\n<style>{css}</style>\n\n{tbody}\n\n<script>{tilda_js}</script>\n")
            count += 1
    write(os.path.join(tilda, "PAGES.md"), tilda_manifest(cfg))
    print(f"Built {count} pages ({len(PAGES)} pages x {len(LANGS)} languages) into dist/ and tilda/"
          + (" (preview mode)" if PREVIEW else ""))


def localize_images_js(js, base, mapping):
    return re.sub(r'"img/([^"]+)"', lambda m: '"' + mapping.get(m.group(1), base + m.group(1)) + '"', js)


if __name__ == "__main__":
    main()
