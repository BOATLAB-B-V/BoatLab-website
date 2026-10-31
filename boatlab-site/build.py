#!/usr/bin/env python3
"""Builds the BoatLab website from src/ into three outputs, in three languages.

  dist/     the website for normal hosting: /  (English), /nl/, /de/; shared assets/, img/, video/, fonts/
  inline/   the same pages with CSS and JS written into each page (no extra files needed)
  tilda/    body-only versions of inline/, ready to paste into a Tilda HTML block

Every page is written once per language with the texts filled in at build time (so Google sees Dutch and German
pages, not only English), with hreflang links, its own title and description, structured data, a sitemap and robots.txt.
The texts come from src/assets/site.js (dictionaries T, T2, T3, SVC_*, SP), read with node.

Run:  python3 build.py            (add --preview to show placeholder review cards)
"""
import html as htmlmod
import json, os, re, shutil, subprocess, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, "src")
SITE = "https://boatlabservice.nl/"
PREVIEW = "--preview" in sys.argv

# Tilda hosting (tilda/ output): one paste-ready HTML block per page; photos, videos, fonts, CSS and JS are loaded from
# TILDA_ASSETS (a public web folder that mirrors this directory, e.g. jsDelivr serving the GitHub repo, or any other host).
# Override with:  python3 build.py --tilda-assets=https://example.com/boatlab-site/
TILDA_ASSETS = next((a.split("=", 1)[1] for a in sys.argv if a.startswith("--tilda-assets=")),
                    "https://cdn.jsdelivr.net/gh/BOATLAB-B-V/BoatLab-website@main/boatlab-site/").rstrip("/") + "/"
TILDA_HOME = {"en": "/", "nl": "/nl", "de": "/de"}            # Tilda page address of the home page per language
TILDA_PREFIX = {"en": "", "nl": "nl/", "de": "de/"}           # prefix for every other page: /services, /nl/services, /de/services
TILDA_RENAME = {"en/antifouling": "antifouling-service"}      # addresses already taken by existing Tilda pages (/antifouling is the old home's)
LANGS = ["en", "nl", "de"]
FOLDER = {"en": "", "nl": "nl/", "de": "de/"}          # URL folder per language; English lives at the root
HREFLANG = {"en": "en", "nl": "nl-NL", "de": "de-DE"}

# page file, nav id, sections in order
PAGES = [
    ("index",    "home",     ["hero", "home-services", "lift", "results", "home-why", "partners", "brands", "reviews", "home-facility", "cta"]),
    ("services", "services", ["ph-services", "services", "svc-details", "process", "cta"]),
    ("results",  "results",  ["ph-results", "results", "results-more", "cta"]),
    ("about",    "about",    ["ph-about", "team", "why", "partners", "brands", "process", "cta"]),
    ("facility", "facility", ["ph-facility", "lift", "facility", "cta"]),
    ("contact",  "contact",  ["ph-contact", "booking", "contact"]),
    ("privacy",  "privacy",  ["privacy"]),
]
SERVICE_PAGES = ["antifouling", "polishing", "osmosis", "storage", "refit"]
SERVICE_PHOTO = {"antifouling": ("af-bow-after.jpg", "af.p3"), "polishing": ("done-polish-bow.jpg", "po.p3"),
                 "osmosis": ("osmosis-done.jpg", "os.p3"), "storage": ("aerial-hall.jpg", "sg.p1"), "refit": ("refit-hall.jpg", "re.p1")}

# title tag and meta description per language for the standard pages (50-60 / 140-155 characters)
META = {
 "en": {
  "index":    ("Yacht & boat service in Wanssum, Limburg · Free 30 t crane lift · BoatLab",
               "Antifouling, polishing, osmosis repair, refits and winter storage on the Maas in Wanssum (NL). Every service includes a free lift with our 30-tonne crane. Get an offer."),
  "services": ("Boat services in Limburg: antifouling, polishing, osmosis, refit · BoatLab",
               "15 yacht and boat services under one roof in Wanssum: antifouling with Hempel, polishing with Renskib, osmosis, gelcoat, teak, engine, electronics, refits. Free crane lift."),
  "results":  ("Before & after: antifouling and polishing results · BoatLab Wanssum",
               "Real boats from our yard in Wanssum: antifouling and polishing before and after, osmosis repair step by step, finished boats back on the Maas."),
  "about":    ("Why BoatLab: personal yacht service in Wanssum, Limburg · Partner of Focus",
               "Meet Oleh Shevchuk and the BoatLab team. Personal service, Hempel and Renskib products, fair fixed quotes and a free 30 t crane lift, at the Focus Marine Center in Wanssum."),
  "facility": ("Boatyard on the Maas: 30 t crane, indoor halls, quay · BoatLab Wanssum",
               "Our yard in Wanssum: indoor halls, workshop, harbour quay, remote-controlled boat mover and a 30-tonne crane, in partnership with Focus Marine Center."),
  "contact":  ("Get an offer · BoatLab Yacht Services Wanssum · +31 6 11742272",
               "Request a fixed quote for your boat, with photos, or call or WhatsApp +31 6 11742272. Geijsterseweg 10, 5861 BL Wanssum, on the Maas in Limburg."),
  "privacy":  ("Privacy policy · BoatLab", "Privacy policy of Boatlab BV, Wanssum."),
 },
 "nl": {
  "index":    ("Jachtservice & botenonderhoud Wanssum, Limburg · Gratis hijsen · BoatLab",
               "Antifouling, polijsten, osmosebehandeling, refit en winterstalling aan de Maas in Wanssum. Bij elke service hijsen we uw boot gratis met onze 30-tons kraan. Vraag een offerte aan."),
  "services": ("Botenservice Limburg: antifouling, polijsten, osmose, refit · BoatLab",
               "15 diensten voor jachten en boten onder één dak in Wanssum: antifouling met Hempel, polijsten met Renskib, osmose, gelcoat, teak, motor, elektronica, refits. Gratis hijsen."),
  "results":  ("Voor & na: antifouling en polijsten · BoatLab Wanssum",
               "Echte boten van onze werf in Wanssum: antifouling en polijsten voor en na, osmosebehandeling stap voor stap, afgewerkte boten terug op de Maas."),
  "about":    ("Waarom BoatLab: persoonlijke jachtservice in Wanssum · Partner van Focus",
               "Maak kennis met Oleh Shevchuk en het BoatLab-team. Persoonlijke service, Hempel- en Renskib-producten, eerlijke vaste offertes en gratis hijsen, bij Focus Marine Center in Wanssum."),
  "facility": ("Jachtwerf aan de Maas: 30-tons kraan, hallen, kade · BoatLab Wanssum",
               "Onze werf in Wanssum: binnenhallen, werkplaats, havenkade, op afstand bestuurbare botentransporter en een 30-tons kraan, in samenwerking met Focus Marine Center."),
  "contact":  ("Offerte aanvragen · BoatLab Yacht Services Wanssum · +31 6 11742272",
               "Vraag een vaste offerte aan voor uw boot, met foto's, of bel of WhatsApp +31 6 11742272. Geijsterseweg 10, 5861 BL Wanssum, aan de Maas in Limburg."),
  "privacy":  ("Privacyverklaring · BoatLab", "Privacyverklaring van Boatlab BV, Wanssum."),
 },
 "de": {
  "index":    ("Yacht- & Bootsservice Wanssum (NL), nahe der Grenze · Kranen kostenlos · BoatLab",
               "Antifouling, Politur, Osmose-Sanierung, Refit und Winterlager an der Maas in Wanssum, Niederlande. Bei jedem Service kranen wir Ihr Boot kostenlos mit unserem 30-Tonnen-Kran. Angebot anfragen."),
  "services": ("Bootsservice Niederlande: Antifouling, Politur, Osmose, Refit · BoatLab",
               "15 Leistungen für Yachten und Boote unter einem Dach in Wanssum: Antifouling mit Hempel, Politur mit Renskib, Osmose, Gelcoat, Teak, Motor, Elektronik, Refits. Kranen kostenlos."),
  "results":  ("Vorher & nachher: Antifouling und Politur · BoatLab Wanssum",
               "Echte Boote aus unserer Werft in Wanssum: Antifouling und Politur vorher-nachher, Osmose-Sanierung Schritt für Schritt, fertige Boote zurück auf der Maas."),
  "about":    ("Warum BoatLab: persönlicher Yachtservice in Wanssum · Partner von Focus",
               "Lernen Sie Oleh Shevchuk und das BoatLab-Team kennen. Persönlicher Service, Hempel- und Renskib-Produkte, faire Festpreise und kostenloses Kranen, im Focus Marine Center in Wanssum."),
  "facility": ("Bootswerft an der Maas: 30-t-Kran, Hallen, Kai · BoatLab Wanssum",
               "Unsere Werft in Wanssum: Hallen, Werkstatt, Hafenkai, ferngesteuerter Bootstransporter und ein 30-Tonnen-Kran, in Kooperation mit dem Focus Marine Center."),
  "contact":  ("Angebot anfragen · BoatLab Yacht Services Wanssum · +31 6 11742272",
               "Fordern Sie ein festes Angebot für Ihr Boot an, mit Fotos, oder rufen Sie an / WhatsApp +31 6 11742272. Geijsterseweg 10, 5861 BL Wanssum, an der Maas, 20 Minuten von der Grenze."),
  "privacy":  ("Datenschutzerklärung · BoatLab", "Datenschutzerklärung der Boatlab BV, Wanssum."),
 },
}
NAME = {"en": "BoatLab Yacht Services", "nl": "BoatLab Yacht Services", "de": "BoatLab Yacht Services"}


# ---------------------------------------------------------------- data from site.js
def load_data():
    """Evaluates the data part of site.js (everything before `let lang`) with node and returns it as a dict."""
    js = os.path.join(SRC, "assets", "site.js")
    script = r"""
const fs=require('fs'),vm=require('vm');const s=fs.readFileSync(process.argv[1],'utf8');
const code=s.slice(0,s.indexOf('let lang ='));const ctx={};vm.createContext(ctx);
vm.runInContext(code+';this.__out={T,SERVICES,SVC_INFO,BRANDS,SVC_TEXT,SVC_CAP,SP,SP_IDS,CONFIG}',ctx);
process.stdout.write(JSON.stringify(ctx.__out));"""
    out = subprocess.run(["node", "-e", script, js], capture_output=True, text=True, check=True).stdout
    return json.loads(out)


def read(*p):
    with open(os.path.join(SRC, *p), encoding="utf-8") as f:
        return f.read()


def esc(s):
    return htmlmod.escape(str(s), quote=True)


# ---------------------------------------------------------------- translation at build time
def tr(data, lang, key):
    T = data["T"]
    return T[lang].get(key, T["en"].get(key, key))


def translate(html, data, lang):
    """Fills every data-i18n / data-i18n-html element with the text of `lang` and keeps only that language's blocks."""
    def text(m):
        open_tag, tag, key = m.group(1), m.group(2), m.group(3)
        return f"{open_tag}{esc(tr(data, lang, key))}</{tag}>"
    html = re.sub(r'(<(\w+)[^>]*\sdata-i18n="([^"]+)"[^>]*>)(.*?)</\2>', text, html, flags=re.S)
    def raw(m):
        open_tag, tag, key = m.group(1), m.group(2), m.group(3)
        return f"{open_tag}{tr(data, lang, key)}</{tag}>"
    html = re.sub(r'(<(\w+)[^>]*\sdata-i18n-html="([^"]+)"[^>]*>)(.*?)</\2>', raw, html, flags=re.S)
    # language blocks (privacy page): keep the matching one, drop the others
    def block(m):
        return m.group(0) if m.group(1) == lang else ""
    html = re.sub(r'<article lang="(\w+)" data-lang-block="\w+"[^>]*>.*?</article>\s*', block, html, flags=re.S)
    html = html.replace(f'<article lang="{lang}" data-lang-block="{lang}" hidden>', f'<article lang="{lang}" data-lang-block="{lang}">')
    return html


# ---------------------------------------------------------------- pre-rendered service markup (same as site.js)
FEATURED = ["antifouling", "polishing", "osmosis", "gelcoat", "engine", "refit"]


def svc_card(data, lang, s, booking):
    label = tr(data, lang, "svc.add" if booking else "svc.how")
    return (f'<button type="button" class="svc reveal" data-id="{s["id"]}" data-cat="{s["cat"]}">'
            f'<span class="ic"><svg><use href="#s-{s["id"]}"/></svg></span>'
            f'<h3>{esc(tr(data, lang, "s."+s["id"]))}</h3><p>{esc(tr(data, lang, "s."+s["id"]+".d"))}</p>'
            f'<span class="go">{esc(label)}<svg><use href="#i-arrow"/></svg></span></button>')


def svc_link_card(data, lang, s):
    return (f'<a class="svc reveal" href="{s["id"]}.html" data-id="{s["id"]}" data-cat="{s["cat"]}">'
            f'<span class="ic"><svg><use href="#s-{s["id"]}"/></svg></span>'
            f'<h3>{esc(tr(data, lang, "s."+s["id"]))}</h3><p>{esc(tr(data, lang, "s."+s["id"]+".d"))}</p>'
            f'<span class="go">{esc(tr(data, lang, "sp.readmore"))}<svg><use href="#i-arrow"/></svg></span></a>')


def svc_detail(data, lang, s, n, only=False):
    info = data["SVC_INFO"].get(s["id"], {})
    tx = data["SVC_TEXT"][lang].get(s["id"]) or data["SVC_TEXT"]["en"][s["id"]]
    cap = lambda k: data["SVC_CAP"][lang].get(k, data["SVC_CAP"]["en"].get(k, ""))
    photos = info.get("photos", [])
    if photos:
        figs = "".join(f'<figure><img src="img/{src}" alt="{esc(cap(c))}" loading="lazy"><figcaption>{esc(cap(c))}</figcaption></figure>' for src, c in photos)
        media = f'<div class="sd-photos n{min(len(photos),3)}">{figs}</div>'
    else:
        media = f'<div class="sd-art" aria-hidden="true"><span class="r1"></span><span class="r2"></span><span class="r3"></span><svg><use href="#s-{s["id"]}"/></svg></div>'
    br = data["BRANDS"].get(info.get("brand", ""), None)
    brand = (f'<div class="sd-brand"><span>{esc(tr(data, lang, "sd.with"))}</span><img src="{br["logo"]}" alt="{br["name"]}" height="28">'
             f'{"<em>"+esc(tr(data, lang, "sd.official"))+"</em>" if br.get("official") else ""}</div>') if br else ""
    steps = "".join(f'<button type="button" role="tab" aria-selected="{"true" if i==0 else "false"}" aria-controls="sdp-{s["id"]}" data-step="{i}" title="{esc(st[0])}"><span>{i+1}</span></button>' for i, st in enumerate(tx["s"]))
    more = "" if only or s["id"] not in data["SP_IDS"] else f'<a class="btn ghost" href="{s["id"]}.html">{esc(tr(data, lang, "sp.readmore"))}</a>'
    return f'''<article class="sd{" flip" if n % 2 else ""}" id="svc-{s["id"]}" data-id="{s["id"]}">
      <div class="sd-media reveal">{media}</div>
      <div class="sd-body">
        <span class="eyebrow">{esc(tr(data, lang, "svc."+s["cat"]))}</span>
        <h3>{esc(tr(data, lang, "s."+s["id"]))}</h3>
        {brand}
        <p class="sd-intro">{esc(tx["i"])}</p>
        <p class="sd-label">{esc(tr(data, lang, "sd.steps"))}</p>
        <div class="sd-steps" role="tablist" style="--n:{len(tx["s"])}"><span class="sd-track" aria-hidden="true"><i></i></span>{steps}</div>
        <div class="sd-bubble" id="sdp-{s["id"]}" role="tabpanel" aria-live="polite"><small>{esc(tr(data, lang, "sd.step"))} 1/{len(tx["s"])}</small><b>{esc(tx["s"][0][0])}</b><p>{esc(tx["s"][0][1])}</p></div>
        <div class="sd-actions"><a class="btn" href="contact.html#book-{s["id"]}"><span>{esc(tr(data, lang, "sd.book"))}</span><svg><use href="#i-arrow"/></svg></a>{more}</div>
      </div>
    </article>'''


def prerender(html, data, lang):
    """Writes the services grid, booking chips and service details into the HTML so the texts are there without JavaScript."""
    S = data["SERVICES"]
    def grid(m):
        limit = 'data-limit="6"' in m.group(0)
        lst = [s for s in S if s["id"] in FEATURED] if limit else S
        return m.group(0) + "".join(svc_card(data, lang, s, False) for s in lst)
    html = re.sub(r'<div class="svc-grid" id="svcGrid"[^>]*>', grid, html)
    def chips(m):
        return m.group(0) + "".join(f'<label><input type="checkbox" name="services" value="{s["id"]}" id="svc-{s["id"]}"><span>{esc(tr(data, lang, "s."+s["id"]))}</span></label>' for s in S)
    html = re.sub(r'<div class="chips" id="svcChips">', chips, html)
    if 'id="svcDetails"></div>' in html:
        html = html.replace('<div id="svcDetails"></div>', '<div id="svcDetails">' + "".join(svc_detail(data, lang, s, n) for n, s in enumerate(S)) + "</div>")
    return html


# ---------------------------------------------------------------- service landing pages
def service_page_body(data, lang, sid):
    sp = data["SP"][lang][sid]
    S = {s["id"]: s for s in data["SERVICES"]}[sid]
    photo, capkey = SERVICE_PHOTO[sid]
    cap = data["SVC_CAP"][lang].get(capkey, data["SVC_CAP"]["en"].get(capkey, ""))
    faq = "".join(f'<details class="reveal"><summary>{esc(q)}</summary><p>{esc(a)}</p></details>' for q, a in sp["faq"])
    related = "".join(svc_link_card(data, lang, {"id": o["id"], "cat": o["cat"]}) for o in data["SERVICES"] if o["id"] in SERVICE_PAGES and o["id"] != sid)
    tpl = read("sections", "service-page.html")
    name = tr(data, lang, "s." + sid)
    fill = {
        "id": sid, "h1": esc(sp["h1"]), "lede": esc(sp["lede"]), "photo": photo, "photoAlt": esc(cap),
        "allServices": esc(tr(data, lang, "sp.all")), "category": esc(tr(data, lang, "svc." + S["cat"])),
        "offer": esc(tr(data, lang, "sp.offer")), "nameLower": esc(name if lang == "de" else name[0].lower() + name[1:]),
        "detail": svc_detail(data, lang, S, 0, only=True),
        "priceTitle": esc(tr(data, lang, "sp.price")), "priceText": esc(tr(data, lang, "sp.priceText")),
        "faqTitle": esc(tr(data, lang, "sp.faq")), "faq": faq, "relatedTitle": esc(tr(data, lang, "sp.related")), "related": related,
    }
    for k, v in fill.items():
        tpl = tpl.replace("{{" + k + "}}", v)
    return "  " + tpl.strip()


# ---------------------------------------------------------------- structured data
def jsonld_business(data, lang):
    desc = META[lang]["index"][1]
    services = [{"@type": "Offer", "itemOffered": {"@type": "Service", "name": tr(data, lang, "s." + s["id"]),
                 "url": f"{SITE}{FOLDER[lang]}{s['id']}.html" if s["id"] in SERVICE_PAGES else f"{SITE}{FOLDER[lang]}services.html#svc-{s['id']}"}}
                for s in data["SERVICES"]]
    d = {
        "@context": "https://schema.org", "@type": "LocalBusiness", "@id": SITE + "#business",
        "additionalType": ["https://schema.org/AutoRepair", "https://www.wikidata.org/wiki/Q190928"],
        "name": NAME[lang], "legalName": "Boatlab BV", "description": desc, "url": SITE + FOLDER[lang],
        "logo": SITE + "img/logo-full.png", "image": [SITE + "img/og-image.jpg", SITE + "img/hero-sunset.jpg"],
        "email": data["CONFIG"]["email"], "telephone": "+31611742272",
        "hasMap": data["CONFIG"]["maps"], "priceRange": "€€", "currenciesAccepted": "EUR",
        "sameAs": [data["CONFIG"]["instagram"], data["CONFIG"]["tiktok"]],
        "foundingDate": "2026-04",
        "address": {"@type": "PostalAddress", "streetAddress": "Geijsterseweg 10", "postalCode": "5861 BL",
                    "addressLocality": "Wanssum", "addressRegion": "Limburg", "addressCountry": "NL"},
        "geo": {"@type": "GeoCoordinates", "latitude": 51.5308, "longitude": 6.0714},   # TODO verify on Google Maps
        "areaServed": ["Limburg", "Noord-Brabant", "Gelderland", "Nordrhein-Westfalen"],
        "knowsLanguage": ["en", "nl", "de"],
        "hasOfferCatalog": {"@type": "OfferCatalog", "name": tr(data, lang, "nav.services"), "itemListElement": services},
    }
    if data["CONFIG"].get("kvk"):
        d["identifier"] = [{"@type": "PropertyValue", "propertyID": "KvK", "value": data["CONFIG"]["kvk"]}]
        if data["CONFIG"].get("branch"):
            d["identifier"].append({"@type": "PropertyValue", "propertyID": "Vestigingsnummer", "value": data["CONFIG"]["branch"]})
    if data["CONFIG"].get("vat"):
        d["vatID"] = data["CONFIG"]["vat"]
    return d


def jsonld_service(data, lang, sid):
    sp = data["SP"][lang][sid]
    url = f"{SITE}{FOLDER[lang]}{sid}.html"
    return [
        {"@context": "https://schema.org", "@type": "Service", "name": tr(data, lang, "s." + sid), "description": sp["desc"], "url": url,
         "serviceType": tr(data, lang, "s." + sid), "provider": {"@id": SITE + "#business"},
         "areaServed": ["Limburg", "Noord-Brabant", "Gelderland", "Nordrhein-Westfalen"],
         "image": f"{SITE}img/{SERVICE_PHOTO[sid][0]}"},
        {"@context": "https://schema.org", "@type": "FAQPage",
         "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in sp["faq"]]},
        {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": tr(data, lang, "nav.home"), "item": SITE + FOLDER[lang]},
            {"@type": "ListItem", "position": 2, "name": tr(data, lang, "nav.services"), "item": f"{SITE}{FOLDER[lang]}services.html"},
            {"@type": "ListItem", "position": 3, "name": tr(data, lang, "s." + sid), "item": url}]},
    ]


def ld(obj):
    objs = obj if isinstance(obj, list) else [obj]
    return "\n".join('<script type="application/ld+json">' + json.dumps(o, ensure_ascii=False) + "</script>" for o in objs)


# ---------------------------------------------------------------- page assembly
def page_url(lang, name):
    return SITE + FOLDER[lang] + ("" if name == "index" else name + ".html")


def lang_href(from_lang, to_lang, name):
    """Relative link from a page in one language folder to the same page in another."""
    file = "" if name == "index" else name + ".html"
    if from_lang == "en":
        return (FOLDER[to_lang] + file) or "./"
    if to_lang == "en":
        return "../" + (file or "")
    return "../" + FOLDER[to_lang] + file


def rebase(html, lang):
    """Pages in /nl/ and /de/ reach the shared folders one level up."""
    if FOLDER[lang] == "":
        return html
    html = re.sub(r'((?:src|href|poster|data-full|data-mp4)=")(img|assets|video|fonts)/', r'\1../\2/', html)
    html = re.sub(r'(srcset="[^"]*)', lambda m: m.group(1).replace("img/", "../img/"), html)
    return html


def tilda_path(lang, name):
    return TILDA_HOME[lang] if name == "index" else "/" + TILDA_PREFIX[lang] + TILDA_RENAME.get(lang + "/" + name, name)


def tilda_links(html, lang):
    """Rewrites the relative page links (services.html, nl/services.html, ../, ./) to Tilda page addresses."""
    def fix(m):
        href = m.group(1)
        if href == "" or href[0] in "#/" or ":" in href:
            return m.group(0)
        r = re.match(r"^(?:\./|(\.\./)?(?:(nl|de)/)?(?:([a-z0-9-]+)\.html)?)(#[\w-]*)?$", href)
        if not r:
            return m.group(0)
        to_lang = r.group(2) or ("en" if r.group(1) else lang)
        return f'href="{tilda_path(to_lang, r.group(3) or "index")}{r.group(4) or ""}"'
    return re.sub(r'href="([^"]*)"', fix, html)


def tilda_assets(html):
    """Points img/, assets/, video/ and fonts/ references at the asset host."""
    html = re.sub(r'((?:src|href|poster|data-full|data-mp4)=")(img|assets|video|fonts)/', r'\1' + TILDA_ASSETS + r'\2/', html)
    html = re.sub(r'(srcset="[^"]*)', lambda m: m.group(1).replace("img/", TILDA_ASSETS + "img/"), html)
    return html


def tilda_head(lang, name, title, desc, noindex):
    """Snippet for Tilda's per-page 'HTML code for head' field: canonical + language alternates (Tilda writes title/description itself)."""
    url = lambda l: SITE.rstrip("/") + tilda_path(l, name)   # Tilda addresses have no .html
    alts = "\n".join(f'<link rel="alternate" hreflang="{HREFLANG[l]}" href="{url(l)}">' for l in LANGS)
    return (f'<!-- {title} -->\n<link rel="canonical" href="{url(lang)}">\n{alts}\n'
            f'<link rel="alternate" hreflang="x-default" href="{url("en")}">\n')


def tilda_page(doc, lang, extra_ld):
    """Body-only page for a Tilda T123 (HTML code) block: settings script, stylesheet, content, structured data."""
    body = strip_head(doc)
    body = re.sub(r"<title>.*?</title>\n", "", body, count=1)
    boot = json.dumps({"lang": lang, "root": TILDA_ASSETS, "home": TILDA_HOME, "prefix": TILDA_PREFIX, "rename": TILDA_RENAME}, ensure_ascii=False)
    return (f"<!-- BoatLab page ({lang}); paste the whole file into one Tilda T123 block, padding 0, nothing else on the page -->\n"
            f"<script>window.BL_TILDA={boot};</script>\n<link rel=\"stylesheet\" href=\"{TILDA_ASSETS}assets/site.css\">\n"
            + tilda_assets(tilda_links(body, lang)).strip() + "\n" + (extra_ld.strip() + "\n" if extra_ld else ""))


def page_html(data, lang, name, nav_id, body, title, desc, css, js, extra_ld="", noindex=False):
    header = read("partials", "header.html").replace(f'data-nav="{nav_id}"', f'data-nav="{nav_id}" aria-current="page"')
    for l in LANGS:
        header = header.replace("{{lang:%s}}" % l, lang_href(lang, l, name))
    url = page_url(lang, name)
    robots = '<meta name="robots" content="noindex, follow">\n' if noindex else ""
    alts = "\n".join(f'<link rel="alternate" hreflang="{HREFLANG[l]}" href="{page_url(l, name)}">' for l in LANGS)
    alts += f'\n<link rel="alternate" hreflang="x-default" href="{page_url("en", name)}">'
    og_locale = {"en": "en_GB", "nl": "nl_NL", "de": "de_DE"}[lang]
    head = f"""<!--HEAD-ONLY-->
<!doctype html>
<html lang="{lang}" data-root="{'../' if FOLDER[lang] else ''}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="{esc(desc)}">
{robots}<meta property="og:type" content="website">
<meta property="og:site_name" content="BoatLab Yacht Services">
<meta property="og:locale" content="{og_locale}">
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:image" content="{SITE}img/og-image.jpg">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:url" content="{url}">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="{url}">
{alts}
<link rel="icon" type="image/png" href="img/favicon.png">
<link rel="apple-touch-icon" href="img/apple-touch-icon.png">
<meta name="theme-color" content="#0b1726">
{extra_ld}
</head>
<body>
<!--/HEAD-ONLY-->"""
    doc = f"""{head}
<title>{esc(title)}</title>
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
    doc = translate(doc, data, lang)
    doc = prerender(doc, data, lang)
    reg = " · ".join(x for x in [data["CONFIG"].get("kvk") and f'{tr(data, lang, "footer.kvk")} {data["CONFIG"]["kvk"]}', data["CONFIG"].get("vat") and f'{tr(data, lang, "footer.vat")} {data["CONFIG"]["vat"]}'] if x)
    doc = doc.replace('<span id="regIds"></span>', f'<span id="regIds">{reg}</span>')
    return doc


_WIDTHS = {}


def img_width(name):
    """Pixel width of img/NAME.jpg, for accurate srcset descriptors."""
    if name not in _WIDTHS:
        try:
            from PIL import Image
            with Image.open(os.path.join(ROOT, "img", name + ".jpg")) as im:
                _WIDTHS[name] = im.width
        except Exception:
            _WIDTHS[name] = 1600
    return _WIDTHS[name]


def responsive_images(html):
    """Adds the small (800 px) and WebP variants made by make_variants to every photo, and async decoding to every image."""
    def fix(m):
        tag, name = m.group(0), m.group(1)
        has_sm = os.path.exists(os.path.join(ROOT, "img", name + "-sm.jpg"))
        has_webp = os.path.exists(os.path.join(ROOT, "img", name + ".webp"))
        sizes = "100vw" if ("fetchpriority" in tag or "bleed" in tag) else "(max-width: 820px) 100vw, 50vw"
        w = img_width(name)
        if has_sm and "srcset=" not in tag:
            tag = tag.replace(f'src="img/{name}.jpg"', f'src="img/{name}.jpg" srcset="img/{name}-sm.jpg 800w, img/{name}.jpg {w}w" sizes="{sizes}"')
        if "decoding=" not in tag:
            tag = tag.replace("<img ", '<img decoding="async" ', 1)
        if has_webp:
            webp = f'img/{name}-sm.webp 800w, img/{name}.webp {w}w' if has_sm else f'img/{name}.webp'
            tag = f'<picture><source type="image/webp" srcset="{webp}"{(" sizes=" + chr(34) + sizes + chr(34)) if has_sm else ""}>{tag}</picture>'
        return tag
    return re.sub(r'<img [^>]*src="img/([a-z0-9-]+)\.jpg"[^>]*>', fix, html)


def make_variants():
    """Writes an 800 px copy and WebP versions of every photo (skipped when already there and newer)."""
    try:
        from PIL import Image
    except ImportError:
        return
    folder = os.path.join(ROOT, "img")
    for f in sorted(os.listdir(folder)):
        if not f.endswith(".jpg") or f.endswith("-sm.jpg") or f.startswith(("logo", "og-")):
            continue
        src = os.path.join(folder, f); base = f[:-4]
        targets = {"sm": os.path.join(folder, base + "-sm.jpg"), "webp": os.path.join(folder, base + ".webp"), "smwebp": os.path.join(folder, base + "-sm.webp")}
        if all(os.path.exists(t) and os.path.getmtime(t) >= os.path.getmtime(src) for t in targets.values()):
            continue
        im = Image.open(src).convert("RGB")
        im.save(targets["webp"], "WEBP", quality=78, method=6)
        im.thumbnail((800, 800), Image.LANCZOS)
        im.save(targets["sm"], quality=74, optimize=True, progressive=True)
        im.save(targets["smwebp"], "WEBP", quality=76, method=6)


def strip_head(html):
    return re.sub(r"<!--HEAD-ONLY-->.*?<!--/HEAD-ONLY-->\n?", "", html, flags=re.S)


def clean_markers(html):
    return html.replace("<!--HEAD-ONLY-->\n", "").replace("<!--/HEAD-ONLY-->\n", "").replace("<!--/HEAD-ONLY-->", "")


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)


def tilda_checklist(rows):
    """tilda/PAGES.md: every page with its Tilda address, title, description and the files to paste."""
    lines = ["# Tilda page checklist (generated by build.py)", "",
             f"Assets (photos, video, fonts, CSS, JS) are loaded from: `{TILDA_ASSETS}`  ",
             "Change it with `python3 build.py --tilda-assets=https://.../boatlab-site/` and rebuild.", "",
             "For every row: Tilda → Create new page → *Blank page* → add block **T123 (Other → HTML code)** → paste the whole body file → "
             "block settings: padding top/bottom 0 → Page settings: address, title, description (and *noindex* where marked), "
             "Additional → HTML code for head: paste the head file → Publish.", "",
             "| Language | Tilda address | Title (page settings) | Description (page settings) | Body file | Head file | Note |", "|---|---|---|---|---|---|---|"]
    for lang, name, title, desc, noindex in rows:
        f = (FOLDER[lang] + name)
        lines.append(f"| {lang.upper()} | `{tilda_path(lang, name)}` | {title} | {desc} | `tilda/{f}.html` | `tilda/{f}.head.html` | {'noindex' if noindex else ''} |")
    lines += ["", "Site-wide, once: Site settings → favicon `img/favicon.png`; set the EN home page as the site's main page; "
              "the old Tilda home page gets a different address (e.g. `/old-home`) beforehand; existing quiz pages stay untouched.", ""]
    return "\n".join(lines)


def main():
    make_variants()
    data = load_data()
    css = read("assets", "site.css")
    js = read("assets", "site.js")
    if PREVIEW:
        js = js.replace("reviewPlaceholders: false", "reviewPlaceholders: true")
    out = {d: os.path.join(ROOT, d) for d in ("dist", "inline", "tilda")}
    for d in out.values():
        shutil.rmtree(d, ignore_errors=True)
        os.makedirs(d)
    write(os.path.join(out["dist"], "assets", "site.css"), css)
    write(os.path.join(out["dist"], "assets", "site.js"), js)
    if not PREVIEW:   # committed copy next to img/, video/ and fonts/ so a CDN serving the repo can deliver all assets for the Tilda pages
        write(os.path.join(ROOT, "assets", "site.css"), css)
        write(os.path.join(ROOT, "assets", "site.js"), js)
    for extra in ("_redirects", "_headers"):          # host configuration files, copied as-is
        if os.path.exists(os.path.join(ROOT, extra)):
            shutil.copy(os.path.join(ROOT, extra), os.path.join(out["dist"], extra))
    for d in ("dist", "inline"):
        for folder in ("img", "video", "fonts"):
            if os.path.isdir(os.path.join(ROOT, folder)):
                shutil.copytree(os.path.join(ROOT, folder), os.path.join(out[d], folder))

    linked = ('<link rel="stylesheet" href="assets/site.css">', '<script src="assets/site.js"></script>')
    inline = (f"<style>{css}</style>", f"<script>{js}</script>")
    urls, tilda_rows = [], []
    for lang in LANGS:
        # standard pages
        pages = [(name, nav, "\n\n".join("  " + read("sections", s + ".html").strip() for s in sections), META[lang][name][0], META[lang][name][1],
                  ld(jsonld_business(data, lang)) if name == "index" else "", name == "privacy") for name, nav, sections in PAGES]
        # service landing pages
        for sid in SERVICE_PAGES:
            body = service_page_body(data, lang, sid) + "\n\n" + "\n\n".join("  " + read("sections", s + ".html").strip() for s in ("process", "cta"))
            pages.append((sid, "services", body, data["SP"][lang][sid]["title"], data["SP"][lang][sid]["desc"], ld(jsonld_service(data, lang, sid)), False))
        for name, nav, body, title, desc, extra, noindex in pages:
            for d, (c, j) in (("dist", linked), ("inline", inline)):
                doc = page_html(data, lang, name, nav, body, title, desc, c, j, extra, noindex)
                doc = rebase(responsive_images(doc), lang)
                write(os.path.join(out[d], FOLDER[lang], name + ".html"), clean_markers(doc))
            # Tilda: body only, assets from TILDA_ASSETS, links to Tilda addresses, plus a head snippet and a checklist row
            doc = page_html(data, lang, name, nav, body, title, desc, "", f'<script src="{TILDA_ASSETS}assets/site.js"></script>', "", noindex)
            write(os.path.join(out["tilda"], FOLDER[lang], name + ".html"), tilda_page(responsive_images(doc), lang, extra))
            write(os.path.join(out["tilda"], FOLDER[lang], name + ".head.html"), tilda_head(lang, name, title, desc, noindex))
            tilda_rows.append((lang, name, title, desc, noindex))
            if not noindex:
                urls.append((lang, name))

    write(os.path.join(out["tilda"], "PAGES.md"), tilda_checklist(tilda_rows))

    # sitemap with language alternates, robots.txt
    def entry(lang, name):
        alts = "".join(f'<xhtml:link rel="alternate" hreflang="{HREFLANG[l]}" href="{page_url(l, name)}"/>' for l in LANGS)
        alts += f'<xhtml:link rel="alternate" hreflang="x-default" href="{page_url("en", name)}"/>'
        return f"<url><loc>{page_url(lang, name)}</loc>{alts}</url>"
    sitemap = ('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
               + "\n".join(entry(l, n) for l, n in urls) + "\n</urlset>\n")
    write(os.path.join(out["dist"], "sitemap.xml"), sitemap)
    write(os.path.join(out["dist"], "robots.txt"), f"User-agent: *\nAllow: /\nDisallow: /privacy.html\nDisallow: /nl/privacy.html\nDisallow: /de/privacy.html\n\nSitemap: {SITE}sitemap.xml\n")
    print(f"Built {len(urls)} indexable pages ({len(PAGES)+len(SERVICE_PAGES)} per language × {len(LANGS)} languages) into dist/, inline/ and tilda/" + (" (preview mode)" if PREVIEW else ""))


if __name__ == "__main__":
    main()
