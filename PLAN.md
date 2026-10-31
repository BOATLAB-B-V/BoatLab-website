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

## SEO & Ads audit (30 Oct 2026)

Report: https://claude.ai/artifact/9pUW5FMtJe9bpG48tWsxGV. Main findings, in priority order:

1. [x] **Critical: Dutch and German are not indexable.** (done 30 Oct) One URL per page, text swapped by JS; Google indexes English only.
       Fix in `build.py`: write `/nl/`, `/de/`, `/en/` copies with the right `lang`, titles, descriptions and `hreflang`; the language switch links to the sibling URL.
2. [x] **Titles/H1/meta** (done 30 Oct) with service + place keywords per language (home title e.g. "Jachtservice & botenonderhoud Wanssum, Limburg · Gratis hijsen · BoatLab"); descriptions 140–155 ch with a CTA.
3. [x] **Dedicated service pages** (done 30 Oct: antifouling, polishing, osmosis, storage, refit; FAQ + price note; no price figures yet) (3 languages): antifouling, polishing & coating, osmosis, winter storage (new service, top seasonal term), refit. FAQ + price indication + form on each.
4. [~] **Conversion plumbing before ads**: WhatsApp buttons, sticky mobile call bar, consent banner and conversion events are built (30 Oct). Still needed from the owner: a form endpoint (`CONFIG.formEndpoint`) and a Tag Manager id (`CONFIG.gtmId`).
5. [x] `robots.txt` + `sitemap.xml` (done 30 Oct) from `build.py`; JSON-LD: LocalBusiness (not AutoRepair), geo, hours, services, sameAs; OG image → new aerial.
6. [ ] Google Business Profile (category Boat repair shop), 10 reviews in 3 months, citations (HISWA, Jachthavens.nl, VVV Limburg, Focus Marine Center link).
7. [~] Fonts self-hosted and WebP done (30 Oct). Still needed from the owner: email, KvK, BTW.
8. Ads plan: brand campaign now; antifouling Feb–May; winter storage Sep–Nov; NL + DE, 40 km + NRW border; €15–25/day per language to start.
9. Winter & dry storage added as the 15th service with its own page (30 Oct), worded as "on the quay, or indoors when space allows". Owner to confirm the offer and wording.

## Go-live runbook: tomorrow's session (read this first)

**Decision (owner, 30 Oct): the site goes live inside Tilda.** The existing Tilda project stays, the quiz pages stay untouched,
and the new pages are added next to them. Claude drives the owner's Chrome to do the clicking, once the session runs on the
owner's computer (see "Connecting Claude to Tilda"). Cloudflare Pages remains the fallback (section at the end).

**How it works technically (already built and tested in a simulated Tilda page)**
- `cd boatlab-site && python3 build.py` writes `tilda/`: one body-only HTML file per page and language (36 pages), plus a
  `.head.html` snippet per page and `tilda/PAGES.md`, a checklist with every page's Tilda address, title and description.
- Each Tilda page = one **T123 "HTML code" block** with the file pasted in, padding 0, nothing else on the page. The paste holds the
  text and layout only (40-70 KB). Photos, videos, fonts, CSS and JS are loaded from a CDN, so they never have to be uploaded to
  Tilda, and a push to GitHub updates them on every page at once. Only text changes need a re-paste of the affected pages.
- Page addresses: EN `/`, `/services`, …; NL `/nl`, `/nl/services`, …; DE `/de`, `/de/services`, …. Links in the pages are already
  written that way. If Tilda refuses a slash in a page address, change `TILDA_HOME`/`TILDA_PREFIX` at the top of `build.py`
  (e.g. `nl-services`) and rebuild; nothing else changes.
- The CDN is jsDelivr reading the GitHub repo (`https://cdn.jsdelivr.net/gh/BOATLAB-B-V/BoatLab-website@main/boatlab-site/`).
  jsDelivr serves **public** repos only, and ours is private. **Decision needed first thing tomorrow**, one of:
  1. Make `BOATLAB-B-V/BoatLab-website` public (GitHub → Settings → Danger zone → Change visibility). The repo holds only the
     website: texts, photos and videos that are public on the site anyway. Simplest; recommended.
  2. Keep the repo private and let Claude publish a second, public repo `BOATLAB-B-V/boatlab-assets` with only `img/`, `video/`,
     `fonts/`, `assets/` (about 42 MB); then `python3 build.py --tilda-assets=https://cdn.jsdelivr.net/gh/BOATLAB-B-V/boatlab-assets@main/`.
  3. Upload all files to Tilda's own file storage (Site settings → Files). Works, but about 230 files by hand with random addresses;
     only if 1 and 2 are both unwanted.
  Note: jsDelivr caches a file for up to 12 hours after a push (fine for photos; a `@<commit>` address instead of `@main` forces a refresh).

**Connecting Claude to Tilda (owner, once, 10 min)**
Claude cannot log in to Tilda, and a cloud session cannot see the owner's Chrome. The session has to run on the owner's computer:
1. Install the **Claude Desktop app** (claude.ai/download) and sign in with the same account.
2. Install GitHub Desktop (or `git`) and clone `BOATLAB-B-V/BoatLab-website` to a folder on the computer.
3. In the Claude Desktop app: Settings → Claude Code → Remote Control → add that folder. Start a Claude Code session on that folder
   from the desktop app (or continue this one: it can then attach to the computer).
4. Open Chrome, log in to Tilda, leave it open. Claude's browser tool connects to the Chrome running on that computer and does the
   clicking while the owner watches; the owner can take over at any moment.
Without this, plan B is: the owner does the pasting with `tilda/PAGES.md` next to them (about 3 minutes per page, 36 pages), Claude on
the phone or laptop answering questions.

**Unattended run (owner away from the computer)**
- Preconditions the owner sets before leaving: repo public on GitHub (or an assets repo), folder pulled, Chrome open and logged in to
  Tilda (no 2FA prompt pending), computer set not to sleep, the session started with permissions set so it does not wait for approval.
- Order of work: inventory → one test page (`/services` EN) checked in the browser (photos, fonts, menu, mobile width) → all other
  pages → site settings (favicon, name) → **main page switch last**, only if the owner said so in the first message.
- Never edit, rename or delete existing quiz/landing pages. If an address clashes with an existing page, change ours in `build.py`,
  rebuild, continue.
- If blocked (Tilda refuses something, login expired, CDN files missing): do not improvise in Tilda; write what happened and what was
  finished into the session log below, push, and stop. Nothing half-done is left on the live site because the main page switch is last.
- End of run: write the session log entry (pages published, addresses, anything skipped), push to GitHub.

**Step 1: inventory (5 min)**
- Tilda → Site settings → Pages: which pages exist, their addresses, which is the current main page, which are used by running ads.
  Check that none of them uses one of our addresses (`services`, `contact`, `nl`, `de`, …). If one does, rename ours in `build.py`.
- Note the Tilda plan (Personal/Business) and whether boatlabservice.nl is connected (Site settings → Domain).

**Step 2: first page as a test (15 min)**
- Create `/services` (EN) from `tilda/services.html` + `tilda/services.head.html`, publish, open it on phone and laptop. Check: fonts,
  photos, video, menu, language switcher (links to `/nl/services`, which does not exist yet: fine), the "Get an offer" button.
- If Tilda's own padding or a Tilda header/footer shows, fix the block/page settings; Claude adjusts CSS if Tilda's styles interfere.

**Step 3: all pages (1-2 h with Claude clicking)**
- Follow `tilda/PAGES.md` row by row: 12 pages × 3 languages. Privacy pages: tick *noindex* in page settings.
- Site settings: favicon (`img/favicon.png`), site name "BoatLab Yacht Services", default language EN.
- Last: make the new EN home the site's **main page** (Site settings → Main page). Rename the old home page's address first
  (e.g. `/old-home`) so nothing is lost. The quiz pages are not touched at any point.

**Step 4: measurement and form (same day if time allows)**
- Tilda statistics: leave on or off (owner's choice); GTM: create a container, Claude puts the id in `CONFIG.gtmId` (the consent
  banner is ours, so Tilda's cookie banner must stay off to avoid two banners).
- Form: Formspree with file uploads (`CONFIG.formEndpoint`) so photos arrive at info@boatlabservice.nl. Alternative: a Tilda form
  block instead of ours (loses the photo upload unless the plan allows file fields).
- Google Search Console: verify the domain, submit the sitemap Tilda generates. Google Business Profile: claim and verify.

**Keeping it up to date afterwards**
- Text or layout change: Claude edits `src/`, rebuilds, pushes, and re-pastes only the changed pages (via Chrome, or the owner pastes).
- Photo/video/CSS/JS change: push to GitHub is enough; the CDN serves the new file to every page (up to 12 h cache).

**Fallback: Cloudflare Pages** (free static hosting that rebuilds from GitHub on every push; the repo is ready for it:
`boatlab-site/requirements.txt`, `_redirects`, `_headers`). Build command
`pip install -r boatlab-site/requirements.txt && cd boatlab-site && python3 build.py`, output `boatlab-site/dist`; the Tilda project
then moves to `go.boatlabservice.nl` and `_redirects` keeps the old quiz addresses working. Zero pasting, but DNS changes needed.

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
- [ ] **Booking form delivery**: the form now also takes up to 5 boat photos (fields `photo1..photo5`); the endpoint must accept file uploads (Formspree paid plan, Tilda form with file field, or Make/Zapier webhook). Until then the summary lists the photo names and asks the visitor to attach them to the email.
- [ ] **Hero photo retouch**: owner wants the cluttered yard area (right of the hall, behind the quay) cleaned up or replaced by tidy boats in dry storage. Needs a photo editor with generative fill (Photoshop, Canva, Pixelmator) or a fresh drone shot after a tidy-up; the first option keeps the real scene most honest.
- [ ] **Old booking form delivery**: native Tilda form, or a Formspree URL in `CONFIG.formEndpoint`.
- [ ] **Reviews**: paste real Google reviews into `REVIEWS` in `site.js` (the reviews band stays hidden until then).
- [x] **Fonts (GDPR)**: self-hosted (30 Oct).
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
- **30 Oct 2026 (night)**: SEO/ads audit fixes. Site now built per language (`/`, `/nl/`, `/de/`) with hreflang, sitemap and robots; keyword titles,
  H1s and descriptions; LocalBusiness/Service/FAQ schema; five service landing pages ×3 languages; Winter & dry storage as new service;
  WhatsApp everywhere + sticky mobile call bar; consent banner + GTM hook + conversion events (inactive until `gtmId` is set); self-hosted fonts; WebP images.
  Open for the owner: form endpoint, GTM id, Google Business Profile, reviews, price indications, geo coordinates check.
- **31 Oct 2026**: Cleaned-up hero photo from the owner in place (home, contact, facility slider, share image). KvK 42025956, vestigingsnummer 000065289390 and BTW NL869361193B01 added (footer, privacy page, structured data); email info@boatlabservice.nl confirmed. Tilda publishing plan written (above).
- **31 Oct 2026 (late)**: Registration number retouched out of the About photo. Repo prepared for Cloudflare Pages (requirements.txt, _redirects, _headers copied into dist by build.py). Go-live runbook written for tomorrow.
- **30 Oct 2026 (night)**: Owner decided: publish inside Tilda, Claude to drive Chrome. Built the Tilda mode: `tilda/` pages load assets from a CDN (jsDelivr on the GitHub repo), links mapped to Tilda addresses, head snippets, `tilda/PAGES.md` checklist; `boatlab-site/assets/` (generated CSS/JS copy) is now committed for the CDN. Tested in a simulated Tilda page with Playwright: fonts, photos, video, links all fine. Open: make repo public (or assets repo) so the CDN works; owner sets up Claude Desktop + Remote Control.
