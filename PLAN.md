# BoatLab website: plan and progress

Running log of what is done, what is next, and open questions. Update it at the end of every work session.
Technical details (pages, project layout, how to build) are in `README.md`.

_Last updated: 29 Oct 2026_

## Where things stand

- Multi-page site is built: Home, Services, Results, Why BoatLab, Facility, Contact, Privacy.
- Every page in English, Dutch and German (language switch on each page).
- Build script `boatlab-site/build.py` makes three versions: `dist/` (normal hosting), `inline/`, `tilda/` (paste into Tilda).
- Preview link: https://claude.ai/artifact/DNrMyNRKgsKyXCE7mQN8yH
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
