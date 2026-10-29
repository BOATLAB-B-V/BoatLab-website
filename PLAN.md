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

1. **Get the photos into the session.** Options: share a Google Drive folder, upload them to the repo on GitHub
   (a `photos-inbox/` folder), or attach them in the chat.
2. **Sort them** into: before/after pairs per service, crane and lifting, yard and facility, team and work in progress.
3. **Prepare them for the web**: resize, compress, consistent names (e.g. `antifouling-before-2.jpg`).
   Large originals stay out of the repo; only web-ready versions go in `boatlab-site/img/`.
4. **Use them on the site**:
   - [ ] Replace the recovered before/after halves with real same-angle pairs (antifouling, polishing).
   - [ ] Add more before/after pairs to the Results page (e.g. painting, gelcoat repair, cleaning, osmosis).
   - [ ] Home page: stronger hero photo, crane / free-lift section photo.
   - [ ] Facility page: more slider photos (crane, halls, quay, workshop).
   - [ ] Optional: a photo per service card on the Services page (today the cards have icons only).

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
