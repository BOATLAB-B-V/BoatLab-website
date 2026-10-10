#!/usr/bin/env python3
"""Builds the BoatLab website from src/: every page in Dutch, German and English, each on its own URL.

  dist/    the website for normal hosting (clean URLs: /services, /nl/diensten, /de/leistungen ...),
           with sitemap.xml and robots.txt. Preview locally: cd dist && python3 -m http.server
  tilda/   body-only pages to paste into a Tilda HTML block (T123), one folder per language,
           plus PAGES.md: page address, SEO title, description and HEAD code for every Tilda page
  preview/ the same site as flat files with relative links (nl-diensten.html ...), for a
           shareable preview link; open preview/index.html directly in a browser

All text is written into the HTML at build time (search engines see it without running JavaScript).
  src/assets/site.js (T, T2)       shared site texts
  src/content/pages.json           service page labels, winter storage texts
  src/content/services/<id>.json   one file per service page (address, SEO, all copy in 3 languages)
Page addresses of the main pages live in SLUGS below, winter storage prices in STORAGE.

Run:  python3 build.py            (add --preview to show placeholder review cards)
"""
import html, json, os, re, shutil, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, "src")
SITE = "https://boatlabservice.nl"
PREVIEW = "--preview" in sys.argv

LANGS = ["nl", "de", "en"]     # main market first; also the order of the language switch
DEFAULT_LANG = "en"            # served at the site root and used as x-default
LOCALE = {"en": "en_GB", "nl": "nl_NL", "de": "de_DE"}

# Images: dist/ serves them from /img/. On Tilda, upload each photo and paste its Tilda URL here
# (file name -> URL); files not listed fall back to TILDA_IMG_BASE.
DIST_IMG_BASE = "/img/"
TILDA_IMG_BASE = "/img/"
TILDA_IMAGES = {}

# Page address per language. The same paths are used as Tilda page addresses.
# Service pages are added from src/content/services/*.json (below services: /nl/diensten/<slug>).
SLUGS = {
    "index":    {"en": "",               "nl": "nl",               "de": "de"},
    "services": {"en": "services",       "nl": "nl/diensten",      "de": "de/leistungen"},
    "storage":  {"en": "winter-storage", "nl": "nl/winterstalling", "de": "de/winterlager"},
    "results":  {"en": "results",        "nl": "nl/resultaten",    "de": "de/ergebnisse"},
    "about":    {"en": "about",          "nl": "nl/over-ons",      "de": "de/ueber-uns"},
    "facility": {"en": "facility",       "nl": "nl/werf",          "de": "de/werft"},
    "contact":  {"en": "contact",        "nl": "nl/contact",       "de": "de/kontakt"},
    "privacy":  {"en": "privacy",        "nl": "nl/privacy",       "de": "de/datenschutz"},
}

# page, nav id, sections in order ("@name" sections are generated below)
PAGES = [
    ("index",    "home",     ["hero", "home-services", "lift", "@storage-teaser", "results", "home-why", "reviews", "home-facility", "cta"]),
    ("services", "services", ["ph-services", "services", "process", "cta"]),
    ("storage",  "storage",  ["@storage-hero", "@storage-calc", "@storage-compare", "@storage-combo", "@storage-faq", "cta"]),
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
               "BoatLab Yacht Services in Wanssum (NL): antifouling, polishing, painting, osmosis treatment, gelcoat repair, refits, engine service and winter storage. Free lift with our 30-tonne crane on every service."),
        "nl": ("Jachtservice & botenonderhoud in Wanssum · BoatLab",
               "BoatLab Yacht Services in Wanssum (Limburg): antifouling, poetsen, schilderen, osmosebehandeling, gelcoatreparatie, refits, motoronderhoud en winterstalling. Gratis hijsen met onze 30-tons kraan bij elke dienst."),
        "de": ("Yacht- & Bootsservice an der Maas in Wanssum · BoatLab",
               "BoatLab Yacht Services in Wanssum (NL), nahe der deutschen Grenze: Antifouling, Polieren, Lackieren, Osmosebehandlung, Gelcoat-Reparatur, Refit, Motorservice und Winterlager. Kostenloses Kranen mit unserem 30-Tonnen-Kran."),
    },
    "services": {
        "en": ("Boat Services: Antifouling, Polishing, Osmosis · BoatLab",
               "All 13 BoatLab services: antifouling, painting, polishing, cleaning, coatings, osmosis treatment, lamination, gelcoat repair, inspections, refits, engine service and electronics."),
        "nl": ("Diensten: antifouling, poetsen, osmose & meer · BoatLab",
               "Alle 13 diensten van BoatLab: antifouling, schilderen, poetsen, reinigen, coatings, osmosebehandeling, lamineren, gelcoatreparatie, inspecties, refits, motoronderhoud en elektronica."),
        "de": ("Leistungen: Antifouling, Polieren, Osmose · BoatLab",
               "Alle 13 Leistungen von BoatLab: Antifouling, Lackieren, Polieren, Reinigung, Beschichtungen, Osmosebehandlung, Laminieren, Gelcoat-Reparatur, Inspektionen, Refit, Motorservice und Elektronik."),
    },
    "storage": {
        "en": ("Boat Winter Storage in Wanssum 2026–27 · BoatLab",
               "Winter storage for your boat on the Maas in Wanssum: afloat, outdoor, covered or indoor. From €4 per foot per month excl. VAT. Calculate your price online."),
        "nl": ("Winterstalling boot in Wanssum 2026–27 · BoatLab",
               "Winterstalling voor uw boot aan de Maas in Wanssum: in het water, buiten, overdekt of binnen. Vanaf € 4 per voet per maand excl. btw. Bereken direct uw prijs."),
        "de": ("Winterlager für Boote in Wanssum 2026/27 · BoatLab",
               "Winterlager für Ihr Boot an der Maas in Wanssum (NL), nahe der Grenze: im Wasser, im Freien, überdacht oder in der Halle. Ab 4 € pro Fuß und Monat zzgl. MwSt."),
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

# Winter storage 2026-27 (Focus Marine Center price list): euro per foot of length overall per month,
# EXCLUDING 21% VAT. Cleaning is NOT included (on request, from 5 euro per foot per chosen month; see pages.json).
STORAGE = [  # id, rate, icon, protection level 1-4
    ("afloat", 4, "i-wave", 1),
    ("outdoor", 8, "i-sun", 2),
    ("covered", 12, "i-roof", 3),
    ("indoor", 16, "i-hall", 4),
]
STORAGE_MONTHS = 6                     # minimum booking
STORAGE_LEN = (15, 65, 35)             # slider min, max, start (feet)
STORAGE_ROWS = [  # comparison table: text key, included per storage type (afloat, outdoor, covered, indoor)
    ("st.r1", (0, 1, 1, 1)), ("st.r2", (0, 1, 1, 1)), ("st.r3", (0, 1, 1, 1)),
    ("st.r4", (0, 0, 1, 1)), ("st.r5", (0, 0, 0, 1)), ("st.r6", (1, 1, 1, 1)), ("st.r7", (1, 1, 1, 1)),
]
STORAGE_COMBO = ["antifouling", "osmosis", "polishing", "engine", "gelcoat", "refit"]

# Photos used by generated pages: size and alt text per language
IMAGES = {
    "hero-crane-lift.jpg": (1200, 1600, {"en": "A white motor yacht in the slings of the 30-tonne crane at BoatLab",
                                         "nl": "Een wit motorjacht in de banden van de 30-tons kraan bij BoatLab",
                                         "de": "Eine weiße Motoryacht in den Gurten des 30-Tonnen-Krans bei BoatLab"}),
    "crane-quay.jpg": (1600, 1200, {"en": "A sports cruiser lifted out of the water by the crane on the quay",
                                    "nl": "Een sportcruiser wordt met de kraan op de kade uit het water gehesen",
                                    "de": "Ein Sportboot wird mit dem Kran am Kai aus dem Wasser gehoben"}),
    "yard-harbour-view.jpg": (1600, 1200, {"en": "The covered yard, the crane and the harbour in Wanssum",
                                           "nl": "De overdekte werf, de kraan en de haven in Wanssum",
                                           "de": "Die überdachte Werft, der Kran und der Hafen in Wanssum"}),
    "hall-motor-yacht.jpg": (1600, 1200, {"en": "A motor yacht indoors in the BoatLab service hall",
                                          "nl": "Een motorjacht binnen in de servicehal van BoatLab",
                                          "de": "Eine Motoryacht in der Servicehalle von BoatLab"}),
    "workshop.jpg": (1600, 1200, {"en": "The BoatLab workshop with a motor yacht and woodworking machines",
                                  "nl": "De werkplaats van BoatLab met een motorjacht en houtbewerkingsmachines",
                                  "de": "Die BoatLab-Werkstatt mit einer Motoryacht und Holzbearbeitungsmaschinen"}),
    "bow-fenders.jpg": (1600, 1200, {"en": "A freshly finished motor yacht on stands in front of the hall",
                                     "nl": "Een net afgewerkt motorjacht op bokken voor de hal",
                                     "de": "Eine frisch bearbeitete Motoryacht auf Böcken vor der Halle"}),
    "boat-mover.jpg": (1600, 1200, {"en": "The hydraulic boat mover on the quay",
                                    "nl": "De hydraulische botentransporter op de kade",
                                    "de": "Der hydraulische Bootstransporter am Kai"}),
}
YES_NO = {"en": ("Yes", "No"), "nl": ("Ja", "Nee"), "de": ("Ja", "Nein")}

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">\n'
         '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
         '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,500..900'
         '&family=Instrument+Sans:wght@400..700&family=IBM+Plex+Mono:wght@500;600&display=swap">')

FEATURED = ["antifouling", "polishing", "osmosis", "gelcoat", "engine", "refit"]   # same as site.js
LANG_NAME = {"en": "English", "nl": "Nederlands", "de": "Deutsch"}
ADDRESS = {"@type": "PostalAddress", "streetAddress": "Geijsterseweg 10", "postalCode": "5861 BL",
           "addressLocality": "Wanssum", "addressRegion": "Limburg", "addressCountry": "NL"}


def read(*p):
    with open(os.path.join(SRC, *p), encoding="utf-8") as f:
        return f.read()


def esc(s):
    return html.escape(s, quote=True)


# ---------- data ----------

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
    pages = json.loads(read("content", "pages.json"))
    for l in LANGS:
        tr[l].update(pages[l])
    services = to_json(js_literal(js, "SERVICES"))
    content = {s["id"]: json.loads(read("content", "services", s["id"] + ".json")) for s in services}
    for sid, c in content.items():
        for l in LANGS:
            if set(c[l]) != set(c["en"]):
                raise ValueError(f"{sid}: fields differ between en and {l}")
        SLUGS["svc-" + sid] = {l: f'{SLUGS["services"][l]}/{c["slug"][l]}' for l in LANGS}
        META["svc-" + sid] = {l: (c[l]["title"], c[l]["desc"]) for l in LANGS}
    return tr, to_json(js_literal(js, "CONFIG")), services, content, js_literal(js, "REVIEWS").strip() != "[]"


# ---------- URLs ----------

FLAT_LINKS = False   # True while building preview/: links point to flat files such as nl-diensten.html


def flat_name(page, lang):
    return (SLUGS[page][lang].replace("/", "-") or "index") + ".html"


def path(page, lang):
    return flat_name(page, lang) if FLAT_LINKS else "/" + SLUGS[page][lang]


def url(page, lang):
    return SITE + "/" + SLUGS[page][lang]


# ---------- formatting (matches Intl.NumberFormat in the browser) ----------

def fmt_eur(v, lang):
    n = f"{v:,.0f}"
    if lang == "en":
        return "€" + n
    n = n.replace(",", ".")
    return f"€ {n}" if lang == "nl" else f"{n} €"


def fmt_m(ft, lang):
    s = f"{ft * 0.3048:.1f}"
    return s if lang == "en" else s.replace(".", ",")


# ---------- generated sections ----------

def img_tag(name, lang, extra=""):
    w, h, alt = IMAGES[name]
    return f'<img src="img/{name}" alt="{esc(alt[lang])}" width="{w}" height="{h}"{extra}>'


def service_card(s, tr, as_link=True):
    tag = f'a href="svc-{s["id"]}.html"' if as_link else 'button type="button"'
    end = "a" if as_link else "button"
    return f'''
      <{tag} class="svc reveal" data-id="{s["id"]}" data-cat="{s["cat"]}">
        <span class="ic"><svg><use href="#s-{s["id"]}"/></svg></span>
        <h3>{esc(tr["s." + s["id"]])}</h3><p>{esc(tr["s." + s["id"] + ".d"])}</p>
        <span class="go">{esc(tr["svc.add"])}<svg><use href="#i-arrow"/></svg></span>
      </{end}>'''


def service_cards(services, tr, limit):
    return "".join(service_card(s, tr) for s in services if not limit or s["id"] in FEATURED)


def service_chips(services, tr):
    return "".join(f'''
      <label><input type="checkbox" name="services" value="{s["id"]}" id="svc-{s["id"]}"><span>{esc(tr["s." + s["id"]])}</span></label>'''
                   for s in services + [{"id": "storage"}])


def faq_list(items):
    return "".join(f'''
        <details class="faq reveal"><summary>{esc(q)}<span class="pm" aria-hidden="true"><svg><use href="#i-plus"/></svg></span></summary><p class="a">{esc(a)}</p></details>'''
                   for q, a in items)


def service_page(sid, lang, tr, services, content):
    s = next(x for x in services if x["id"] == sid)
    c, name = content[sid][lang], tr["s." + sid]
    by_id = {x["id"]: x for x in services}
    included = "".join(f'<li><svg><use href="#i-check"/></svg><span>{esc(i)}</span></li>' for i in c["included"])
    steps = "".join(f'''
        <li class="step reveal"><span class="n">{n}</span><h3>{esc(t)}</h3><p>{esc(p)}</p></li>''' for n, (t, p) in enumerate(c["steps"], 1))
    factors = "".join(f"<span>{esc(f)}</span>" for f in c["factors"])
    related = "".join(service_card(by_id[r], tr) for r in content[sid]["related"])
    return f'''<!-- SERVICE: {sid} -->
  <section class="page-hero svc-hero">
    <div class="wrap">
      <nav class="crumbs load" aria-label="Breadcrumb"><a href="index.html" data-i18n="nav.home">Home</a><span aria-hidden="true">/</span><a href="services.html" data-i18n="nav.services">Services</a><span aria-hidden="true">/</span><span aria-current="page">{esc(name)}</span></nav>
      <p class="eyebrow load" data-i18n="svc.{s["cat"]}">Services</p>
      <h1 class="load d1">{esc(c["h1"])}</h1>
      <p class="lede load d2">{esc(c["lede"])}</p>
      <div class="hero-cta load d3">
        <a class="btn" href="contact.html#book-{sid}"><span data-i18n="sp.quote">Request a quote</span><svg><use href="#i-arrow"/></svg></a>
        <a class="btn ghost" href="tel:+31611742272" data-i18n="cta.call">Call</a>
      </div>
    </div>
    <div class="page-hero-img bleed fade-all load d3">{img_tag(content[sid]["img"], lang, ' fetchpriority="high"')}</div>
  </section>

  <section class="sp-intro" aria-labelledby="introTitle">
    <div class="wrap">
      <div class="sp-text reveal">
        <span class="eyebrow">{esc(name)}</span>
        <h2 id="introTitle">{esc(c["intro_h"])}</h2>
        {"".join(f"<p>{esc(p)}</p>" for p in c["intro"])}
      </div>
      <aside class="sp-incl reveal">
        <h3 data-i18n="sp.included">What we do</h3>
        <ul>{included}</ul>
        <p class="lift-note"><svg><use href="#i-hook"/></svg><span data-i18n-html="sp.liftNote"></span></p>
      </aside>
    </div>
  </section>

  <section class="process" aria-labelledby="howTitle">
    <div class="wrap">
      <div class="section-head reveal">
        <span class="eyebrow" data-i18n="how.eyebrow">How it works</span>
        <h2 id="howTitle" data-i18n="sp.how">How we work</h2>
      </div>
      <ol class="steps">{steps}
      </ol>
    </div>
  </section>

  <section class="sp-price" aria-labelledby="priceTitle">
    <div class="wrap">
      <div class="price-card reveal">
        <div class="copy"><h2 id="priceTitle" data-i18n="sp.priceTitle"></h2><p data-i18n="sp.priceText"></p></div>
        <div class="factors">{factors}</div>
      </div>
    </div>
  </section>

  <section class="sp-faq" aria-labelledby="faqTitle">
    <div class="wrap">
      <div class="section-head reveal"><span class="eyebrow">{esc(name)}</span><h2 id="faqTitle" data-i18n="sp.faq"></h2></div>
      <div class="faq-list">{faq_list(c["faq"])}
      </div>
    </div>
  </section>

  <section class="sp-related" aria-labelledby="relTitle" style="padding-top:0">
    <div class="wrap">
      <div class="section-head reveal"><h2 id="relTitle" data-i18n="sp.related"></h2></div>
      <div class="svc-grid">{related}
      </div>
    </div>
  </section>'''


def snow():
    return '<div class="snow" aria-hidden="true">' + "<i></i>" * 7 + "</div>"


def storage_section(name, lang, tr, services):
    lo, hi, start = STORAGE_LEN
    if name == "storage-teaser":
        tiles = "".join(f'''
          <a href="storage.html#prices"><svg><use href="#{icon}"/></svg><b data-i18n="st.{sid}"></b><em>{fmt_eur(rate, lang)}</em><span data-i18n="stT.unit"></span></a>'''
                        for sid, rate, icon, _ in STORAGE)
        return f'''<!-- WINTER STORAGE TEASER -->
  <section class="st-teaser" aria-labelledby="stTTitle">
    <div class="wrap">
      <div class="st-panel reveal">
        {snow()}
        <div class="copy">
          <span class="eyebrow"><svg><use href="#i-snow"/></svg><span data-i18n="nav.storage"></span></span>
          <h2 id="stTTitle" data-i18n="stT.title"></h2>
          <p class="lede" data-i18n="stT.text"></p>
          <a class="btn" href="storage.html#prices"><span data-i18n="stT.cta"></span><svg><use href="#i-arrow"/></svg></a>
        </div>
        <div class="st-mini">{tiles}
        </div>
      </div>
    </div>
  </section>'''
    if name == "storage-hero":
        return f'''<!-- PAGE HERO -->
  <section class="page-hero">
    <div class="wrap">
      <p class="eyebrow load" data-i18n="st.eyebrow"></p>
      <h1 class="load d1" data-i18n="st.h1"></h1>
      <p class="lede load d2" data-i18n="st.lede"></p>
      <div class="hero-cta load d3">
        <a class="btn" href="#prices"><span data-i18n="st.calcTitle"></span><svg><use href="#i-arrow"/></svg></a>
        <a class="btn ghost" href="contact.html#book-storage" data-i18n="st.request"></a>
      </div>
    </div>
    <div class="page-hero-img bleed fade-all load d3">{img_tag("hall-motor-yacht.jpg", lang, ' fetchpriority="high"')}</div>
  </section>'''
    if name == "storage-calc":
        cards = ""
        for sid, rate, icon, level in STORAGE:
            best = level == 4
            bars = "".join(f'<i class="{"on" if i < level else ""}"></i>' for i in range(4))
            cards += f'''
        <article class="st-card reveal{" best" if best else ""}" data-rate="{rate}">
          {f'<span class="ribbon" data-i18n="st.best"></span>' if best else ""}
          <span class="ic"><svg><use href="#{icon}"/></svg></span>
          <h3 data-i18n="st.{sid}"></h3>
          <p class="desc" data-i18n="st.{sid}.d"></p>
          <div class="rate"><b>{fmt_eur(rate, lang)}</b><span data-i18n="st.perFt"></span></div>
          <div class="meter"><small data-i18n="st.protect"></small><div class="bars" role="img" aria-label="{level}/4">{bars}</div></div>
          <div class="st-calc">
            <small data-i18n="st.month"></small>
            <b class="st-month">{fmt_eur(rate * start, lang)}</b>
            <div class="season"><span data-i18n="st.season"></span><b class="st-season">{fmt_eur(rate * start * STORAGE_MONTHS, lang)}</b></div>
          </div>
        </article>'''
        fill = (start - lo) / (hi - lo) * 100
        return f'''<!-- WINTER STORAGE CALCULATOR -->
  <section class="storage" id="prices" aria-labelledby="calcTitle">
    <div class="wrap">
      <div class="st-panel" id="storageCalc" data-months="{STORAGE_MONTHS}">
        {snow()}
        <div class="st-head">
          <div class="section-head reveal">
            <span class="eyebrow" data-i18n="st.eyebrow"></span>
            <h2 id="calcTitle" data-i18n="st.calcTitle"></h2>
            <p class="lede" data-i18n="st.calcLede"></p>
          </div>
          <div class="st-len reveal">
            <label for="lenRange" data-i18n="st.len"></label>
            <div class="val" aria-live="polite"><b id="lenFt">{start}</b><small><span data-i18n="st.ft"></span> · <span id="lenM">{fmt_m(start, lang)}</span> m</small></div>
            <div class="st-ctrl">
              <button type="button" data-step="-1" aria-label="{esc(tr["st.less"])}"><svg><use href="#i-minus"/></svg></button>
              <input type="range" class="st-range" id="lenRange" min="{lo}" max="{hi}" step="1" value="{start}" style="--fill:{fill:.4g}%">
              <button type="button" data-step="1" aria-label="{esc(tr["st.more"])}"><svg><use href="#i-plus"/></svg></button>
            </div>
          </div>
        </div>
        <div class="st-grid">{cards}
        </div>
        <div class="st-foot"><span data-i18n="st.vat"></span><span class="extra"><svg><use href="#i-plus"/></svg><span data-i18n="st.cleaning"></span></span></div>
      </div>
    </div>
  </section>'''
    if name == "storage-compare":
        yes, no = YES_NO[lang]
        head = "".join(f'<th scope="col"><svg aria-hidden="true"><use href="#{icon}"/></svg><span data-i18n="st.{sid}"></span></th>' for sid, _, icon, _ in STORAGE)
        rows = "".join(
            f'\n            <tr><th scope="row" data-i18n="{key}"></th>' + "".join(
                f'<td class="yes"><svg role="img" aria-label="{yes}"><use href="#i-check"/></svg></td>' if inc
                else f'<td class="no"><span aria-hidden="true">–</span><span class="sr">{no}</span></td>' for inc in flags) + "</tr>"
            for key, flags in STORAGE_ROWS)
        prices = "".join(f"<td>{fmt_eur(rate, lang)}</td>" for _, rate, _, _ in STORAGE)
        notes = "".join(f'<li data-i18n="st.n{i}"></li>' for i in range(1, 7))
        return f'''<!-- WINTER STORAGE COMPARISON -->
  <section class="st-compare" aria-labelledby="cmpTitle">
    <div class="wrap">
      <div class="section-head reveal"><h2 id="cmpTitle" data-i18n="st.cmpTitle"></h2><p class="lede" data-i18n="st.cmpLede"></p></div>
      <div class="st-table-wrap reveal">
        <table class="st-table">
          <thead><tr><th scope="col" data-i18n="st.feature"></th>{head}</tr></thead>
          <tbody>{rows}
            <tr class="price"><th scope="row" data-i18n="st.rPrice"></th>{prices}</tr>
          </tbody>
        </table>
      </div>
      <ul class="st-notes reveal">{notes}</ul>
    </div>
  </section>'''
    if name == "storage-combo":
        by_id = {x["id"]: x for x in services}
        cards = "".join(service_card(by_id[i], tr) for i in STORAGE_COMBO)
        return f'''<!-- WINTER STORAGE + SERVICE -->
  <section class="st-combo" aria-labelledby="comboTitle">
    <div class="wrap">
      <div class="section-head reveal">
        <span class="eyebrow" data-i18n="st.comboEyebrow"></span>
        <h2 id="comboTitle" data-i18n="st.comboTitle"></h2>
        <p class="lede" data-i18n="st.comboText"></p>
      </div>
      <div class="svc-grid">{cards}
      </div>
    </div>
  </section>'''
    if name == "storage-faq":
        items = [(tr[f"st.q{i}"], tr[f"st.a{i}"]) for i in range(1, 5)]
        return f'''<!-- WINTER STORAGE FAQ -->
  <section class="sp-faq" aria-labelledby="faqTitle" style="padding-top:0">
    <div class="wrap">
      <div class="section-head reveal"><span class="eyebrow" data-i18n="nav.storage"></span><h2 id="faqTitle" data-i18n="sp.faq"></h2></div>
      <div class="faq-list">{faq_list(items)}
      </div>
    </div>
  </section>'''
    raise KeyError(name)


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


def localize_links(doc, lang):
    pages = "|".join(re.escape(p) for p in sorted(SLUGS, key=len, reverse=True))
    return re.sub(rf'href="({pages})\.html(#[^"]*)?"',
                  lambda m: f'href="{path(m.group(1), lang)}{m.group(2) or ""}"', doc)


def localize_images(doc, base, mapping):
    return re.sub(r'(src|data-full)="img/([^"]+)"',
                  lambda m: f'{m.group(1)}="{mapping.get(m.group(2), base + m.group(2))}"', doc)


def localize_images_js(js, base, mapping):
    return re.sub(r'"img/([^"]+)"', lambda m: '"' + mapping.get(m.group(1), base + m.group(1)) + '"', js)


def lang_links(page, lang):
    return "\n      ".join(
        f'<a href="{path(page, l)}" hreflang="{l}" lang="{l}" data-lang="{l}" aria-current="{str(l == lang).lower()}">{l.upper()}</a>'
        for l in LANGS)


def hreflang_tags(page):
    tags = [f'<link rel="alternate" hreflang="{l}" href="{url(page, l)}">' for l in LANGS]
    tags.append(f'<link rel="alternate" hreflang="x-default" href="{url(page, DEFAULT_LANG)}">')
    return "\n".join(tags)


def ld(data):
    return '<script type="application/ld+json">\n' + json.dumps(data, ensure_ascii=False, indent=2) + "\n</script>"


def provider(lang, cfg):
    return {"@type": "LocalBusiness", "name": "BoatLab Yacht Services", "url": url("index", lang),
            "telephone": "+31611742272", "email": cfg["email"], "address": ADDRESS}


def breadcrumbs(items):
    return {"@context": "https://schema.org", "@type": "BreadcrumbList",
            "itemListElement": [{"@type": "ListItem", "position": i, "name": n, "item": u} for i, (n, u) in enumerate(items, 1)]}


def structured_data(page, lang, cfg, tr):
    if page == "index":
        return ld({
            "@context": "https://schema.org", "@type": "LocalBusiness",
            "name": "BoatLab Yacht Services", "legalName": cfg["legalName"], "url": url("index", lang),
            "logo": SITE + "/img/logo-full.png", "image": SITE + "/img/hero-crane-lift.jpg",
            "email": cfg["email"], "telephone": "+31611742272", "vatID": cfg["vat"],
            "identifier": {"@type": "PropertyValue", "propertyID": "KvK", "value": cfg["kvk"]},
            "hasMap": cfg["maps"], "sameAs": [cfg["instagram"], cfg["tiktok"]], "foundingDate": "2026-04",
            "address": ADDRESS, "areaServed": ["NL", "DE", "BE"], "knowsLanguage": LANGS,
        })
    if page.startswith("svc-"):
        sid = page[4:]
        name = tr["s." + sid]
        return "\n".join([
            ld({"@context": "https://schema.org", "@type": "Service", "name": name, "serviceType": name,
                "description": META[page][lang][1], "url": url(page, lang), "provider": provider(lang, cfg),
                "areaServed": ["NL", "DE", "BE"]}),
            ld(breadcrumbs([(tr["nav.home"], url("index", lang)), (tr["nav.services"], url("services", lang)), (name, url(page, lang))])),
        ])
    if page == "storage":
        offers = [{"@type": "Offer", "name": tr[f"st.{sid}"], "priceCurrency": "EUR",
                   "priceSpecification": {"@type": "UnitPriceSpecification", "price": rate, "priceCurrency": "EUR",
                                          "unitText": tr["st.perFt"], "valueAddedTaxIncluded": False}}
                  for sid, rate, _, _ in STORAGE]
        return ld({"@context": "https://schema.org", "@type": "Service", "name": tr["nav.storage"],
                   "serviceType": tr["nav.storage"], "description": META[page][lang][1], "url": url(page, lang),
                   "provider": provider(lang, cfg), "offers": offers})
    return ""


def head_extra(page, lang, cfg, tr):
    """Tags that go into <head> (on Tilda: Page settings > Additional > HTML code for the HEAD section)."""
    sd = structured_data(page, lang, cfg, tr)
    return hreflang_tags(page) + ("\n" + sd if sd else "")


def render_body(page, nav_id, sections, lang, tr, cfg, services, content, has_reviews, img_base, img_map):
    header = read("partials", "header.html").replace(f'data-nav="{nav_id}"', f'data-nav="{nav_id}" aria-current="page"')
    parts = []
    for s in sections:
        if s.startswith("@service:"):
            parts.append(service_page(s[9:], lang, tr, services, content))
        elif s.startswith("@"):
            parts.append(storage_section(s[1:], lang, tr, services))
        else:
            parts.append(read("sections", s + ".html").strip())
    body = "\n\n".join("  " + p for p in parts)
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
    if not FLAT_LINKS and re.search(r'href="[a-z0-9-]+\.html', doc):
        raise ValueError("link to an unknown page: " + re.search(r'href="[a-z0-9-]+\.html[^"]*"', doc).group(0))
    return doc


def full_page(page, lang, cfg, tr, body, css_tag, js_tag):
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
{head_extra(page, lang, cfg, tr)}
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


def all_pages(services):
    """Main pages plus one page per service, in site order (service pages after the services overview)."""
    out = []
    for page, nav_id, sections in PAGES:
        out.append((page, nav_id, sections))
        if page == "services":
            out += [("svc-" + s["id"], "services", ["@service:" + s["id"], "cta"]) for s in services]
    return out


def sitemap(pages):
    rows = []
    for page, _, _ in pages:
        if page == "privacy":
            continue
        for l in LANGS:
            alts = "".join(f'\n    <xhtml:link rel="alternate" hreflang="{a}" href="{url(page, a)}"/>' for a in LANGS)
            alts += f'\n    <xhtml:link rel="alternate" hreflang="x-default" href="{url(page, DEFAULT_LANG)}"/>'
            rows.append(f"  <url>\n    <loc>{url(page, l)}</loc>{alts}\n  </url>")
    return ('<?xml version="1.0" encoding="UTF-8"?>\n'
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
            + "\n".join(rows) + "\n</urlset>\n")


def tilda_manifest(pages, cfg, tr):
    out = ["# Tilda pages",
           "",
           f"Generated by build.py: {len(pages) * len(LANGS)} pages. For each page: create it, set the page address,",
           "SEO title and description (Page settings > SEO), paste the HEAD code (Page settings > Additional >",
           "HTML code for the HEAD section), add one HTML block (T123) with the contents of the file, and publish.",
           "",
           "| Tilda page | Page address | Paste file | SEO title |",
           "|---|---|---|---|"]
    for page, _, _ in pages:
        for l in LANGS:
            out.append(f"| {page} ({l.upper()}) | `{path(page, l)}` | `tilda/{l}/{page}.html` | {META[page][l][0]} |")
    for page, _, _ in pages:
        for l in LANGS:
            title, desc = META[page][l]
            out += ["", f"## {page} ({l.upper()}): `{path(page, l)}`", "",
                    f"- SEO title: {title}", f"- Description: {desc}",
                    "- Page settings > SEO: " + ("forbid indexing (noindex)" if page == "privacy" else "allow indexing"),
                    "", "HEAD code:", "", "```html", head_extra(page, l, cfg, tr[l]), "```"]
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
    tr, cfg, services, content, has_reviews = load_data(js)
    pages = all_pages(services)

    dist, tilda = os.path.join(ROOT, "dist"), os.path.join(ROOT, "tilda")
    for d in (dist, tilda, os.path.join(ROOT, "inline")):     # inline/ is no longer built
        shutil.rmtree(d, ignore_errors=True)
    os.makedirs(dist)
    shutil.copytree(os.path.join(ROOT, "img"), os.path.join(dist, "img"))
    write(os.path.join(dist, "assets", "site.css"), css)
    write(os.path.join(dist, "assets", "site.js"), localize_images_js(js, DIST_IMG_BASE, {}))
    write(os.path.join(dist, "sitemap.xml"), sitemap(pages))
    write(os.path.join(dist, "robots.txt"), f"User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n")

    tilda_js = localize_images_js(js, TILDA_IMG_BASE, TILDA_IMAGES)
    count = 0
    for page, nav_id, sections in pages:
        for l in LANGS:
            args = (page, nav_id, sections, l, tr[l], cfg, services, content, has_reviews)
            body = render_body(*args, DIST_IMG_BASE, {})
            write(os.path.join(dist, SLUGS[page][l], "index.html"),
                  full_page(page, l, cfg, tr[l], body, '<link rel="stylesheet" href="/assets/site.css">',
                            '<script src="/assets/site.js"></script>'))
            tbody = render_body(*args, TILDA_IMG_BASE, TILDA_IMAGES)
            write(os.path.join(tilda, l, page + ".html"),
                  f"{FONTS}\n<style>{css}</style>\n\n{tbody}\n\n<script>{tilda_js}</script>\n")
            count += 1
    write(os.path.join(tilda, "PAGES.md"), tilda_manifest(pages, cfg, tr))
    build_preview(pages, css, js, tr, cfg, services, content, has_reviews)
    print(f"Built {count} pages ({len(pages)} pages x {len(LANGS)} languages) into dist/ and tilda/"
          + (" (preview mode)" if PREVIEW else ""))


def build_preview(pages, css, js, tr, cfg, services, content, has_reviews):
    """preview/: every page as a flat file with relative links. index.html (English home) is written
    without <html>/<head>/<body> so it can be published as the main page of a preview link."""
    global FLAT_LINKS
    out = os.path.join(ROOT, "preview")
    shutil.rmtree(out, ignore_errors=True)
    os.makedirs(out)
    shutil.copytree(os.path.join(ROOT, "img"), os.path.join(out, "img"))
    write(os.path.join(out, "assets", "site.css"), css)
    write(os.path.join(out, "assets", "site.js"), localize_images_js(js, "img/", {}))
    FLAT_LINKS = True
    try:
        for page, nav_id, sections in pages:
            for l in LANGS:
                body = render_body(page, nav_id, sections, l, tr[l], cfg, services, content, has_reviews, "img/", {})
                doc = full_page(page, l, cfg, tr[l], body, '<link rel="stylesheet" href="assets/site.css">',
                                '<script src="assets/site.js"></script>').replace('href="/img/', 'href="img/')
                if flat_name(page, l) == "index.html":
                    doc = re.sub(r"<!doctype html>\s*<html[^>]*>\s*<head>\s*(<meta charset[^>]*>\s*<meta name=\"viewport\"[^>]*>\s*)?", "", doc)
                    doc = doc.replace("</head>\n<body>\n", "").replace("</body>\n</html>\n", "")
                    doc = re.sub(r"<title>.*?</title>", "<title>BoatLab Yacht Services · Wanssum</title>", doc, count=1)
                write(os.path.join(out, flat_name(page, l)), doc)
    finally:
        FLAT_LINKS = False


if __name__ == "__main__":
    main()
