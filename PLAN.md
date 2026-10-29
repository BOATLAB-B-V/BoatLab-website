# BoatLab website: plan and progress

Running log of what is done, what is next, and open questions. Update it at the end of every work session.
Technical details (pages, project layout, how to build) are in `README.md`.

_Last updated: 29 Oct 2026_

## Where things stand

- Multi-page site is built: Home, Services, Results, Why BoatLab, Facility, Contact, Privacy.
- Every page in English, Dutch and German (language switch on each page).
- Build script `boatlab-site/build.py` makes three versions: `dist/` (normal hosting), `inline/`, `tilda/` (paste into Tilda).
- **Preview link (current version from this repo):** https://claude.ai/artifact/GNe96iomnHhgrWhos7mqSj
  (private; share it from the page's Share menu). Rebuild and republish after every change.
  The older link in `README.md` (DNrMyNRKgsKyXCE7mQN8yH) belongs to another account and can't be updated from here.
- 16 web-ready images in `boatlab-site/img/` (crane, yard, workshop, hall, boat mover, aerial, logo, 2 before/after pairs).
- Not live yet. Hosting plan: Tilda (or any static host).

## Next up: photos

The owner has a large set of new photos. Plan:

1. ~~Get the photos into the session.~~ Done 29 Oct: Dropbox shared folder (69 photos + 1 video, Mar–Oct 2026).
   Originals stay in Dropbox. Photo library page (numbered 01–69 by date):
   https://claude.ai/artifact/CWG1wAXheZ35fa7EK1kBdF
2. ~~Sort them.~~ Done. Before/after pairs found: antifouling 06→12, 07/08→13/14, 30→34, 59/60→61 (confirm same boat);
   polishing 67 and 68 (already combined images). Crane: 36, 33, 41, 32 and more. Owner to confirm the picks.
3. **Prepare them for the web**: resize, compress, consistent names (e.g. `antifouling-before-2.jpg`).
   Large originals stay out of the repo; only web-ready versions go in `boatlab-site/img/`.
4. ~~Use them on the site~~ Done 29 Oct (owner's picks):
   - Results slider: antifouling 06→12 (hull side), 07→14 (bow), 30→34 (new colour). 59/60→61 dropped (different boats).
   - Polishing: 67 (one split image, not duplicated) and 05 with drawn Before/After markers and a dashed line.
   - Stories: osmosis repair 63, 65 → 61; antifouling prep 51, 52, 23.
   - Services: photos per service (washing 01, 22, 56; polishing 04, 55, 66; antifouling 23, 51, 14; osmosis 63, 64, 61;
     teak 20, 21; interior 17, 18; refit 35). New service: Teak & decking (incl. U-Dek).
   - Crane section: 36. Facility slider: 27, 36, 28, 35, 03, 32, 62, 37. Finished boats: 33, 39, 15, 49, 41, 40, 16.
   - About: Oleh Shevchuk (11).
   - [ ] Better crane photos and crane video for the home page (owner will shoot them).
   - [ ] Photos still missing for: coating, gelcoat, lamination, painting, inspection, engine, electronics (these show an animated icon for now).

## Services and partners (done 29 Oct, to review)

- Every service has a full description and 4–5 animated, clickable steps, in EN/NL/DE. **Owner: please check the steps match how BoatLab really works.**
- Partners: Focus Motor Yachts / Focus Marine Center as main partner (large block on About); sliding logos of Hempel (official partner),
  Renskib and U-Dek on Home and About; brand badges on each service.
- Logos are from the companies' own websites. Hempel: official vector. Renskib: only a white logo exists online, recoloured to dark;
  [ ] ask Renskib for an official dark logo. U-Dek: small PNG; [ ] ask for a larger/vector logo. Focus: PNG from focus-motoryachts.com.
- Note: U-Dek is a brand of Ultralon (New Zealand); the Dutch site u-dek.com is a dealer. The text no longer calls U-Dek Dutch.
- [ ] Get written OK from the people shown in photos (staff faces) and from partners for logo use.

## Publishing: Tilda and Claude

Goal: a proper, working page online as soon as possible, so visitors never land on an empty or broken page.

- [ ] **Figure out how to connect Tilda and Claude.** Find the best way for Claude to get the site onto Tilda
      (Tilda has no Claude connector yet; options: paste the generated `tilda/` pages into Tilda HTML blocks by hand,
      Tilda's API (business plan, read-only export), a Zapier connection, or hosting the static `dist/` site elsewhere).
- [ ] **Decide the publishing route** and write the steps down here, so every update follows the same path.
- [ ] **Put a decent version live quickly** (even before every item below is finished), and replace any placeholder/default page on boatlabservice.nl.
- [ ] **Check the live site works**: all pages, language switch, booking form, phone links, on mobile and desktop.
- [ ] Keep the Claude preview link in step with what is live.

## Landing page for marketing campaigns

A separate page that people reach from ads and campaigns (Instagram, TikTok, Google, flyers), built to turn a visit into a booking or a call.

- [ ] Decide which campaign(s) it is for first (e.g. spring antifouling, free crane lift, winter storage/maintenance).
- [ ] One clear offer and one action: book / call / WhatsApp. Short, no full menu.
- [ ] Content: headline + offer, best before/after photos, the free 30 t crane lift, 3 reasons to choose BoatLab, reviews, booking form.
- [ ] In English, Dutch and German, same style as the main site.
- [ ] Campaign tracking (UTM links) so we can see which ads bring bookings, while staying GDPR-compliant (cookie consent if tracking is used).
- [ ] Add it to `build.py` as its own page (e.g. `actie.html` / `offer.html`), not in the main menu.

## Still to do before going live

- [ ] **Email address** for bookings and privacy questions (`CONFIG.email` is still the placeholder `info@boatlabservice.nl`).
- [ ] **KvK and BTW (VAT) numbers** in `CONFIG.kvk` / `CONFIG.vat` (required by Dutch law; shown in footer and privacy page).
- [ ] **Booking form delivery**: native Tilda form, or a Formspree URL in `CONFIG.formEndpoint`.
- [ ] **Reviews**: paste real Google reviews into `REVIEWS` in `site.js` (the reviews band stays hidden until then).
- [ ] **Fonts (GDPR)**: self-host Archivo, Instrument Sans, IBM Plex Mono instead of Google Fonts. Waiting for owner's OK.
- [ ] **Focus Marine Center**: confirm whether customer data is shared; if yes, name them in the privacy policy.
- [ ] **Tilda**: upload photos and swap image paths for Tilda URLs; turn off Tilda tracking; data processing agreements with Tilda and the email provider.
- [ ] Privacy policy checked by a legal/privacy professional.
- [ ] Publish and connect the domain boatlabservice.nl.

## Open questions for the owner

- Which email address should receive bookings?
- KvK and BTW numbers?
- Tilda or another host? Who manages the Tilda account?
- OK to self-host the fonts?
- Is customer data shared with Focus Marine Center?

## Session log

- **29 Oct 2026**: Repo connected to a Claude Code session. Wrote this plan and `CLAUDE.md`. Installed the `find-skills` skill.
  Published a new preview of the current site. Added to the plan: Tilda/Claude publishing route, and a marketing landing page.
- **29 Oct 2026 (later)**: New photos on Results, Services, About, Facility and Home. Detailed service pages with animated steps. Oleh section. Partner logos. Preview updated (version 2).
