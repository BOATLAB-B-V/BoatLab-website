# BoatLab website (boatlabservice.nl)

Website for **Boatlab B.V. / BoatLab Yacht Services**, Geijsterseweg 10, 5861 BL Wanssum (NL),
in partnership with Focus Marine Center. Phone +31 6 11742272. Instagram and TikTok: @boatlab.nl.

- Email: info@boatlabservice.nl (general questions), sales@boatlabservice.nl (quote and service requests; the booking form sends here)
- KvK 42025956 · BTW NL869361193B01
- Languages: Dutch (main market, `/nl/...`), German (`/de/...`) and English (site root, so every visitor
  can read the home page). Every page exists once per language on its own URL, with the text written into
  the HTML, translated SEO title and description, and `hreflang` links between the language versions.
- 21 pages x 3 languages = 63 pages, including one landing page per service (for SEO and Google Ads)
  and a winter storage page with a price calculator.
- Style: bright white, logo blue `#0b8fd6` as accent only, full-width photos that fade into the page.
- Preview link (shared, anyone with the link): https://claude.ai/artifact/DNrMyNRKgsKyXCE7mQN8yH
  (all 63 pages; built from `boatlab-site/preview/`, where pages are flat files such as `nl-diensten.html`)
- Plan: host on **Tilda** (paste-ready pages in `boatlab-site/tilda/`), or any static host (`boatlab-site/dist/`).

## Pages and addresses

| Page | EN | NL | DE | Contents |
|---|---|---|---|---|
| Home | `/` | `/nl` | `/de` | Hero, 6 featured services, free 30 t crane lift, before/after slider, 3 reasons, reviews band, facility teaser, booking call to action |
| Services | `/services` | `/nl/diensten` | `/de/leistungen` | All 13 services with category tabs, "How it works" |
| 13 service pages | `/services/<slug>` | `/nl/diensten/<slug>` | `/de/leistungen/<slug>` | Per service: intro, what we do, 4 steps, what determines the price, FAQ, related services |
| Winter storage | `/winter-storage` | `/nl/winterstalling` | `/de/winterlager` | Price calculator by boat length, comparison table, conditions, combine with service, FAQ |
| Results | `/results` | `/nl/resultaten` | `/de/ergebnisse` | Before/after slider (antifouling, polishing) |
| Why BoatLab | `/about` | `/nl/over-ons` | `/de/ueber-uns` | 6 reasons, Focus Marine Center partnership, "How it works" |
| Facility | `/facility` | `/nl/werf` | `/de/werft` | 30 t crane, full-width photo slider |
| Contact | `/contact` | `/nl/contact` | `/de/kontakt` | Booking form (with GDPR checkbox), address, phone, emails, socials |
| Privacy | `/privacy` | `/nl/privacy` | `/de/datenschutz` | Privacy policy (not indexed) |

Addresses, SEO titles and descriptions of the main pages are set in `SLUGS` and `META` at the top of
`boatlab-site/build.py`; each service page has its own address, SEO title and copy in
`src/content/services/<id>.json`. Winter storage rates are in `STORAGE` in `build.py`.

## Project layout

```
boatlab-site/
  build.py            builds every page in every language from src/ (run: python3 build.py)
  src/assets/site.css all styles
  src/assets/site.js  settings (CONFIG), services list, shared texts in 3 languages (T, T2), reviews (REVIEWS), page behaviour
  src/content/        pages.json (service page labels, winter storage texts), services/<id>.json (one per service page)
  src/partials/       shared header, footer, icon sprite
  src/sections/       one file per page section; build.py lists which sections each page uses
  img/                web-ready photos
  dist/   (generated) the site for normal hosting, plus sitemap.xml and robots.txt
  preview/ (generated) the same site as flat files with relative links, for the preview link;
                      open preview/index.html in a browser to view it without a server
  tilda/  (generated) body-only pages per language to paste into a Tilda HTML block (T123),
                      and PAGES.md: page address, SEO title, description and HEAD code for each Tilda page
```

Generated folders are not stored in git. Rebuild them with `cd boatlab-site && python3 build.py`
(add `--preview` to show grey placeholder review cards for a design preview).
Preview locally: `cd boatlab-site/dist && python3 -m http.server`, then open http://localhost:8000/nl/.

To change text: edit `src/assets/site.js` or the files in `src/content/` (keep NL, DE and EN in step), then rebuild.
The build stops with an error if a text is missing in one of the languages.

## Tilda

Tilda's API is read-only (export only, Business plan), so pages cannot be pushed to Tilda from code.
Each change is rebuilt here and then pasted into Tilda (by hand, or by Claude through the browser).
Per page, `tilda/PAGES.md` lists the Tilda page address, SEO title and description, and the HEAD code
(hreflang links, plus business details for Google on the home pages).

## Still to do

- [ ] **Owner check of the service pages**: read each service page in Dutch and confirm that every statement is true for BoatLab (e.g. which engines are serviced, what an inspection includes, cleaning price unit for winter storage: "from €5 per foot" is shown without "per month").
- [ ] **Service photos**: most service pages reuse yard photos. Real photos per service (antifouling, polishing, engine work, electronics) will lift both Google Ads quality and conversion.

- [ ] **Tilda: confirm nested page addresses** (`nl/diensten`). If Tilda refuses a `/` in the page address, change `SLUGS` in `build.py` (e.g. `nl-diensten`) and rebuild.
- [ ] **Tilda: images.** Upload the photos and put their Tilda URLs in `TILDA_IMAGES` in `build.py`; turn off Tilda statistics/tracking; sign data processing agreements with Tilda and the email provider.
- [ ] **Booking delivery**: either rebuild the form as a native Tilda form (email + Google Sheets receivers), or set `CONFIG.formEndpoint` (e.g. Formspree). Until then the form shows the request for the visitor to email.
- [ ] **Reviews**: paste real Google reviews into `REVIEWS` in `site.js`; the home page band stays hidden while it is empty.
- [ ] **Before/after photos**: the originals were lost. The slider uses recovered halves (the right half of each "before" photo). Replace with new, ideally same-angle before/after shots.
- [ ] **Image alt texts** are English on every language version; translate them for Dutch/German image search.
- [ ] **Native check of the new Dutch and German SEO titles and descriptions** in `META` (`build.py`).
- [ ] **Fonts (GDPR)**: self-host Archivo, Instrument Sans and IBM Plex Mono instead of loading them from Google Fonts. Awaiting the owner's OK to download them.
- [ ] **Focus Marine Center**: confirm whether customer data is shared with them; if yes, name them in the privacy policy.
- [ ] Have the privacy policy checked by a legal/privacy professional before going live.
