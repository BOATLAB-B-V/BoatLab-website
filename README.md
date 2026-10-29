# BoatLab website (boatlabservice.nl)

Website for **Boatlab BV / BoatLab Yacht Services**, Geijsterseweg 10, 5861 BL Wanssum (NL),
in partnership with Focus Marine Center. Phone +31 6 11742272. Instagram and TikTok: @boatlab.nl.

- Languages: English (default), Dutch, German, switchable on every page.
- Style: bright white, logo blue `#0b8fd6` as accent only, full-width photos that fade into the page.
- Preview link (current): https://claude.ai/artifact/GNe96iomnHhgrWhos7mqSj · older preview: https://claude.ai/artifact/DNrMyNRKgsKyXCE7mQN8yH
- Plan and to-do list: `PLAN.md`
- Plan: host on **Tilda** (paste-ready files in `boatlab-site/tilda/`), or any static host (`boatlab-site/dist/`).

## Pages

| File | Tab | Contents |
|---|---|---|
| `index.html` | Home | Hero, 6 featured services, free 30 t crane lift, before/after slider, reasons, Focus main-partner block, partner logo strip, reviews band, facility teaser, booking call to action |
| `services.html` | Services | All 14 services with category tabs, then a detail block per service (photos, partner brand, animated step-by-step), "How it works" |
| `results.html` | Results | Before/after slider (3 antifouling pairs), polishing before/after, osmosis and antifouling-prep stories, finished boats |
| `about.html` | Why BoatLab | Oleh Shevchuk (managing director), 6 reasons, Focus main-partner block, supplier logos (Hempel, Renskib, U-Dek), "How it works" |
| `facility.html` | Facility | 30 t crane, full-width photo slider (yard, crane, refit hall, Focus yachts, boat mover) |
| `contact.html` | Contact | Booking form (with GDPR checkbox), address, phone, email, socials |
| `privacy.html` | Privacy | Privacy policy in EN/NL/DE |

## Project layout

```
boatlab-site/
  build.py            builds every page from src/ (run: python3 build.py)
  src/assets/site.css all styles
  src/assets/site.js  settings (CONFIG), services list, all texts in 3 languages (T, T2, T3),
                      service details (SVC_INFO photos/brand, SVC_TEXT steps, SVC_CAP captions), partner logos (BRANDS), reviews (REVIEWS), page behaviour
  src/partials/       shared header, footer, icon sprite
  src/sections/       one file per page section; build.py lists which sections each page uses
  img/                web-ready photos (max 1600 px) and partner logos; build.py adds an 800 px `-sm.jpg` copy of each photo
  dist/   (generated) site for normal hosting, shared CSS/JS files
  inline/ (generated) same pages with CSS/JS inside each page
  tilda/  (generated) body-only pages to paste into a Tilda HTML block
```

Generated folders are not stored in git. Rebuild them with `cd boatlab-site && python3 build.py`
(add `--preview` to show grey placeholder review cards for a design preview).

To change text: edit the dictionaries in `src/assets/site.js` (keep EN, NL and DE in step), then rebuild.

## Still to do

- [ ] **Email address** for bookings and privacy questions. `CONFIG.email` is still the placeholder `info@boatlabservice.nl`.
- [ ] **KvK and VAT (BTW) numbers**: fill `CONFIG.kvk` and `CONFIG.vat` (shown in the footer and privacy page, required by Dutch law).
- [ ] **Booking delivery**: either rebuild the form as a native Tilda form (email + Google Sheets receivers), or set `CONFIG.formEndpoint` (e.g. Formspree). Until then the form shows the request for the visitor to email.
- [ ] **Reviews**: paste real Google reviews into `REVIEWS` in `site.js`; the home page band stays hidden while it is empty.
- [ ] **Fonts (GDPR)**: self-host Archivo, Instrument Sans and IBM Plex Mono instead of loading them from Google Fonts. Awaiting the owner's OK to download them.
- [ ] **Focus Marine Center**: confirm whether customer data is shared with them; if yes, name them in the privacy policy.
- [ ] **Tilda**: upload photos and swap image paths for Tilda's URLs; turn off Tilda statistics/tracking; sign data processing agreements with Tilda and the email provider.
- [ ] Have the privacy policy checked by a legal/privacy professional before going live.
