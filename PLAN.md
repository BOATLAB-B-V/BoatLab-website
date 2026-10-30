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
   - Results slider: Antifouling 07→14 (bow, same angle), Polishing (the two halves of 67 as a wipe), Osmosis repair 65→61 (wipe). 06→12 and 30→34 removed at the owner's request.
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
- Logos are from the companies' own websites. Hempel: official file (press kit). Renskib: only a white logo exists online, recoloured to dark.
  U-Dek: small PNG. Focus Motor Yachts: PNG from focus-motoryachts.com. Focus Marine Center: white logo from focus-marine-center.nl, recoloured to dark.
  Both Focus logos sit side by side in the main-partner block (Home and About).
- Note: U-Dek is a brand of Ultralon (New Zealand); the Dutch site u-dek.com is a dealer. The text no longer calls U-Dek Dutch.
- [ ] Get written OK from the people shown in photos (staff faces) and from partners for logo use.

## Home page media and 3D (planned)

- [x] **Videos instead of photos** (done 30 Oct). Drone footage from SharePoint "Boatlab Website Files" (13 clips, 2 photos, 5.4 GB; originals stay in SharePoint).
      Four 9-10 s loops in `boatlab-site/video/` (MP4, 1600 px, 1.5-2.3 MB each, last 0.8 s crossfades into the start so the loop is seamless):
      `hero-yard` (154212 @12.5 s, drone flying in over the quay to the hall with the Focus sign) on the Home hero;
      `crane-sunset` (170322 @13 s, boat in the crane in front of the Focus Marine Center sign at sunset) in the crane section;
      `lift-topdown` (155232 @0.5 s) in the Home facility teaser; `hall-flight` (161656 @0.5 s, through the indoor hall) on the Facility page.
      Each has a poster photo (`img/<name>.jpg`); the video loads only near the viewport, pauses off screen, and is skipped for
      reduced-motion / data-saver visitors. Two drone photos added to the Facility slider (`aerial-yard`, `aerial-hall`).
      Other good footage for later: 153304 (84-100 s, approach over the harbour), 170038 (32-46 s, sunset crane wide), 170132 (60-72 s, boat in crane + sign),
      155720 (54-70 s, crane with hall and sign), phone clip (sunset, 1080p). 170420 is unusable after 96 s (drone landing).
- [ ] **Tilda**: video files must be uploaded to Tilda's file storage and the `video/...mp4` paths swapped, like the images.
- Footage lives in SharePoint. Two ways to pick the best parts: (a) Claude pulls the videos via the Microsoft 365 connector and cuts loops with ffmpeg in the cloud session;
  (b) the owner runs them through OpusClip. Prompt for OpusClip:
  > Find the best B-roll moments for a yacht service company website (BoatLab, Wanssum). No talking, no captions. Short, steady, well-lit shots of 4-8 s
  > for silent looping background video. Priority: 1) the blue 30 t crane lifting/lowering a boat with the "FOCUS Marine Center" sign on the hall in the
  > background; 2) the crane lifting a boat from any angle, boat in the slings, boat lowered into the water; 3) wide shots of the yard, hall, quay, harbour;
  > 4) work: polishing, washing, antifouling, teak, glossy hull close-ups; 5) the remote-controlled boat mover. Keep 16:9 (no vertical crop), skip shaky, dark,
  > blurry footage, faces close to camera and talking. Return timestamps and a one-line description per clip.
  Settings: clip length <15 s, aspect 16:9/original, captions off.
- [ ] **Focus 3D model**: an interactive 3D boat (Focus model from Focus Motor Yachts) on the Services/Home page with animated
      hotspots showing which part of the boat each service covers (hull/antifouling, topsides/polishing, deck/teak, engine, electronics).
      Needs: 3D file from Focus (glTF/GLB preferred), a lightweight viewer (e.g. `<model-viewer>` or Three.js), fallback image for slow devices.
- [ ] Ask partners for vector logos: Renskib (dark-on-white), U-Dek (SVG), Focus Motor Yachts / Focus Marine Center (SVG).

## Design direction (30 Oct)

- **Palette**: white content pages with deep-navy bands (`--navy #0b1726`) for the hero, crane section, facility teaser, CTA card and footer.
  Logo blue stays the accent (`#0b8fd6`, lifted to `#4db3ec` on navy); crane-hook yellow marks the free lift. Body text on navy is `#a7b6c8`.
- **Media**: photos and videos sit in crisp rounded frames (28 px radius). The old edge fades are gone everywhere.
- **Videos**: at most one per screen, only where motion adds something. Now: the yard fly-in in the Home facility teaser, the hall flight on the
  Facility page, and the crane orbit (155720 @57 s, boat in the slings in front of the Focus sign) at the top of the Services page. The Home hero and the crane section are stills (aerial yard photo with anchored callouts; sunset crane with the Focus sign).
- **Watermarks**: the BoatLab ship's wheel (SVG symbol `i-wheel`) sits faintly on the navy bands: hero (top right), crane section (bottom left)
  and the CTA card (right), turning very slowly while on screen. Keep it to these three; more would get busy.
- **Hero callouts** are pinned to real spots in the aerial photo (hall, Focus sign, crane, pontoon, wrapped boats in dry storage), positioned by
  script from image coordinates so they stay put at any crop. On phones the pins become numbered dots and the cards below carry the same numbers; tapping a dot lights its card.
- Video files are 1920 px, CRF 26 (5-6 MB each); quality over size here, and they load lazily anyway.

## Performance (done 29 Oct, keep in mind)

- Looping animations only run while their section is on screen; parallax on masked photos removed; blur effects reduced.
- Every photo has an 800 px copy (`img/NAME-sm.jpg`, generated by `build.py`) used on small screens and thumbnails.
- Hempel logo served as PNG (the official SVG was heavy). Logo strip is a real scroll area: drifts on its own, pauses under the pointer, drag or scroll to move it.
- Rule for new work: no `backdrop-filter` on moving elements, no infinite `box-shadow`/`filter` animations, photos max 1600 px, quality ~75.

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
- **29 Oct 2026 (evening)**: Partner block redesigned (both Focus logos, smaller heading) and added to Home. Logo strip rebuilt (drag/scroll, pauses on hover).
  Performance pass (see above). Installing the `web-perf` and `animation-performance` skills was blocked by the session's permission check; fixes applied by hand.
- **30 Oct 2026**: Drone videos and photos pulled from SharePoint (anonymous share link works with curl). Four background loops on Home and Facility, two aerial photos in the slider.
- **30 Oct 2026 (later)**: Dark-navy redesign, framed media, hero still with callouts, videos reduced to two and re-encoded at higher quality. Services hero photo swapped for the aerial hall shot.
