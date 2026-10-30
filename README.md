# BoatLab website (boatlabservice.nl)

Website for **Boatlab B.V. / BoatLab Yacht Services** (KvK 42025956, BTW NL869361193B01), Geijsterseweg 10, 5861 BL Wanssum (NL),
in partnership with Focus Marine Center. Phone +31 6 11742272. Instagram and TikTok: @boatlab.nl.

- Languages: English at `/`, Dutch at `/nl/`, German at `/de/`. Every page exists three times with the texts written into the HTML
  (so search engines index all three), linked with `hreflang`. The language switcher links to the sibling page.
- Style: white content pages with deep-navy bands, logo blue `#0b8fd6` as accent, photos and videos in rounded frames (no edge fades), at most one video per screen.
- Preview link (current): https://claude.ai/artifact/GNe96iomnHhgrWhos7mqSj · older preview: https://claude.ai/artifact/DNrMyNRKgsKyXCE7mQN8yH
- Plan and to-do list: `PLAN.md`
- Hosting: the site lives in **Tilda**, next to the existing marketing quiz pages. Each page is one T123 HTML block pasted from `boatlab-site/tilda/` (checklist: `tilda/PAGES.md`); photos, video, fonts, CSS and JS are loaded from a CDN that serves this repo (`boatlab-site/assets/`, `img/`, `video/`, `fonts/`). See the go-live runbook in `PLAN.md`. Fallback: Cloudflare Pages from `boatlab-site/dist/` (`requirements.txt`, `_redirects`, `_headers` are ready).

## Pages

| File | Tab | Contents |
|---|---|---|
| `index.html` | Home | Hero, 6 featured services, free 30 t crane lift, before/after slider, reasons, Focus main-partner block, partner logo strip, reviews band, facility teaser, booking call to action |
| `services.html` | Services | All 14 services with category tabs, then a detail block per service (photos, partner brand, animated step-by-step), "How it works" |
| `results.html` | Results | Before/after slider (3 antifouling pairs), polishing before/after, osmosis and antifouling-prep stories, finished boats |
| `about.html` | Why BoatLab | Oleh Shevchuk (managing director), 6 reasons, Focus main-partner block, supplier logos (Hempel, Renskib, U-Dek), "How it works" |
| `facility.html` | Facility | 30 t crane, full-width photo slider (yard, crane, refit hall, Focus yachts, boat mover) |
| `contact.html` | Contact | Booking form (with GDPR checkbox), address, phone, email, socials |
| `privacy.html` | Privacy | Privacy policy (one language per version) |
| `antifouling.html`, `polishing.html`, `osmosis.html`, `storage.html`, `refit.html` | (from Services) | Service landing pages: keyword title, intro, photos, step-by-step, price note, FAQ (with FAQ schema), related services |

## Project layout

```
boatlab-site/
  build.py            builds every page in 3 languages from src/ (run: python3 build.py); also sitemap.xml, robots.txt, WebP/800 px image variants
  _redirects, _headers host configuration for Cloudflare Pages (copied into dist/)
  requirements.txt    Python dependency for the build (Pillow)
  src/assets/site.css all styles
  src/assets/site.js  settings (CONFIG: email, KvK, BTW, WhatsApp, form endpoint, GTM id), services list, all texts in 3 languages (T, T2, T3),
                      service details (SVC_INFO photos/brand, SVC_TEXT steps, SVC_CAP captions), service pages (SP: title, H1, FAQ), partner logos (BRANDS), reviews (REVIEWS), page behaviour
  src/partials/       shared header, footer, icon sprite
  src/sections/       one file per page section; build.py lists which sections each page uses
  img/                web-ready photos (max 1600 px) and partner logos; build.py adds `-sm.jpg` (800 px) and `.webp` copies
  fonts/              self-hosted Archivo, Instrument Sans, IBM Plex Mono (OFL), no Google Fonts request
  video/              short muted MP4 loops for the background videos (poster images live in img/)
  dist/   (generated) site for normal hosting, shared CSS/JS files
  inline/ (generated) same pages with CSS/JS inside each page
  tilda/  (generated) body-only pages to paste into a Tilda HTML block, .head.html snippets, PAGES.md checklist
  assets/ (generated, committed) CSS and JS copy served by the CDN to the Tilda pages
```

Generated folders are not stored in git. Rebuild them with `cd boatlab-site && python3 build.py`
(add `--preview` to show grey placeholder review cards for a design preview).

To change text: edit the dictionaries in `src/assets/site.js` (keep EN, NL and DE in step), then rebuild.

## Still to do

- [ ] **Booking delivery**: set `CONFIG.formEndpoint` (Formspree with file uploads, or a Make/Zapier webhook) or rebuild as a Tilda form with a file field. Until then the form shows the request for the visitor to email.
- [ ] **Measurement**: create a Google Tag Manager container and put its id in `CONFIG.gtmId`; the consent banner and conversion events (`lead_form`, `contact_call`, `contact_whatsapp`) are already in place.
- [ ] **Reviews**: paste real Google reviews into `REVIEWS` in `site.js`; the home page band stays hidden while it is empty.
- [ ] **Focus Marine Center**: confirm whether customer data is shared with them; if yes, name them in the privacy policy.
- [ ] **Go-live in Tilda**: follow the runbook in `PLAN.md` (make the repo public for the CDN, paste the 36 pages, set the main page); sign data processing agreements with Formspree and Google.
- [ ] Have the privacy policy checked by a legal/privacy professional before going live.
