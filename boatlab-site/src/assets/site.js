/* ===== Settings: fill these in before going live ===== */
const CONFIG = {
  email: "info@boatlabservice.nl",              // general questions and booking requests
  salesEmail: "sales@boatlabservice.nl",        // sales inquiries
  // Paste a Formspree form URL (https://formspree.io/f/xxxx) to receive bookings by email.
  formEndpoint: "",
  instagram: "https://www.instagram.com/boatlab.nl/",
  tiktok: "https://www.tiktok.com/@boatlab.nl",
  // Dutch law requires the legal name, KvK number and VAT number on the website (footer and privacy page).
  legalName: "Boatlab B.V.",
  kvk: "42025956",
  vat: "NL869361193B01",
  maps: "https://maps.app.goo.gl/qaHuijy3DLmqtUjv5",
  // Shows grey placeholder cards in the reviews band until real reviews are added (preview only).
  reviewPlaceholders: false
};

const SERVICES = [
  {id:"antifouling", cat:"hull"},{id:"osmosis", cat:"hull"},{id:"coating", cat:"hull"},{id:"gelcoat", cat:"hull"},{id:"lamination", cat:"hull"},
  {id:"polishing", cat:"finish"},{id:"painting", cat:"finish"},{id:"washing", cat:"finish"},{id:"interior", cat:"finish"},
  {id:"engine", cat:"tech"},{id:"navigation", cat:"tech"},{id:"inspection", cat:"tech"},{id:"refit", cat:"tech"}
];

const T = {
en:{
 "nav.services":"Services","nav.results":"Results","nav.why":"Why BoatLab","nav.facility":"Facility","nav.contact":"Contact",
 "cta.book":"Book a service","cta.services":"Explore services",
 "hero.eyebrow":"Yacht & boat service · Wanssum, NL","hero.h1a":"Your boat.","hero.h1b":"Back better.",
 "hero.lede":"All-round yacht and boat care on the Maas, with a personal approach and fair prices. <strong>Every service includes a free lift with our 30-tonne crane.</strong>",
 "hero.f1":"Free 30 t crane lift","hero.f2":"English · Nederlands · Deutsch","hero.f3":"Open since April 2026",
 "chip.lift":"free lift, every service","chip.finish":"Mirror finish","chip.finish2":"polish & coating","chip.personal":"One contact","chip.personal2":"from quote to launch",
 "lift.plate":"Max load 4 × 7,500 kg","lift.title":"Lifting is on us.","lift.text":"Our own 30-tonne crane lifts your boat out and back into the water. When you book any service with BoatLab, the lift costs you nothing.",
 "svc.eyebrow":"Services","svc.title":"Everything your boat needs, under one roof.","svc.lede":"From a spring antifouling to a complete refit. Tap a service to add it to your booking.",
 "svc.all":"All","svc.hull":"Hull & protection","svc.finish":"Finish & care","svc.tech":"Technical","svc.add":"Add to booking",
 "s.antifouling":"Antifouling","s.antifouling.d":"Hull cleaned, sanded and recoated for a clean, fast season.",
 "s.painting":"Painting","s.painting.d":"Topsides, decks and details painted to a lasting finish.",
 "s.polishing":"Polishing","s.polishing.d":"Machine polishing that brings oxidised gelcoat back to a deep gloss.",
 "s.washing":"Washing & cleaning","s.washing.d":"A thorough exterior wash, from waterline to flybridge.",
 "s.interior":"Interior deep cleaning","s.interior.d":"Cabins, upholstery, galley and heads, deep-cleaned and fresh.",
 "s.coating":"Protective coating","s.coating.d":"Ceramic and protective coatings that keep the shine and repel dirt.",
 "s.osmosis":"Osmosis treatment","s.osmosis.d":"Diagnosis, drying and full osmosis treatment of the hull.",
 "s.lamination":"Lamination","s.lamination.d":"Structural laminate repairs in polyester and epoxy.",
 "s.gelcoat":"Gelcoat repair","s.gelcoat.d":"Chips, cracks and scratches repaired and colour-matched.",
 "s.inspection":"Technical inspection","s.inspection.d":"A full check before you buy, sell or start the season.",
 "s.refit":"Refits","s.refit.d":"Complete refits of yachts and boats, planned from start to handover.",
 "s.engine":"Annual engine service","s.engine.d":"Yearly engine service so you can run reliably all season.",
 "s.navigation":"Navigation & electronics","s.navigation.d":"Installation and repair of navigation and onboard electronics.",
 "ba.eyebrow":"Our work","ba.title":"See the difference.","ba.lede":"Real boats from our yard. Drag the handle to compare before and after.","ba.t1":"Antifouling","ba.t2":"Polishing","ba.before":"Before","ba.after":"After",
 "why.eyebrow":"Why BoatLab","why.statement":"A new yard with an old-school idea: <em>treat every boat like our own.</em>",
 "why.1t":"Personal approach","why.1p":"You speak with the people who work on your boat. Clear advice, honest planning, no call centre.",
 "why.2t":"High-quality work","why.2p":"Professional materials and careful preparation, because a finish is only as good as what's underneath.",
 "why.3t":"Competitive prices","why.3p":"Fair, transparent quotes that stand out in the region. You know the price before we start.",
 "why.4t":"A motivated team","why.4p":"Skilled specialists who take pride in their work and care about the details.",
 "why.5t":"We speak your language","why.5p":"Dutch, German and English. Right on the Maas, a short drive from the German border.",
 "why.6t":"Free crane lift","why.6p":"Our 30-tonne crane is free for every customer who books a service with us.",
 "fac.eyebrow":"The yard","fac.title":"Built for boats. Right on the water.","fac.lede":"Indoor halls, a full workshop and a harbour quay with our own crane in Wanssum.",
 "fac.c1":"Harbour side","fac.c1s":"Covered yard with direct water access","fac.c2":"Workshop","fac.c2s":"Carpentry, parts and tools on site","fac.c3":"Indoor hall","fac.c3s":"Work continues whatever the weather","fac.c4":"Ready to launch","fac.c4s":"Fresh antifouling, ready for the season","fac.c5":"30 t crane","fac.c5s":"Out of the water in minutes","fac.c6":"Boat mover","fac.c6s":"Remote-controlled transport across the yard",
 "how.eyebrow":"How it works","how.title":"From request to relaunch in four steps.",
 "how.1t":"Send your request","how.1p":"Tell us about your boat and what it needs. Photos help.","how.2t":"Clear quote","how.2p":"We reply with advice, a fixed quote and a date that suits you.","how.free":"Free lift","how.3t":"Lift & work","how.3p":"Our crane lifts your boat out at no cost and our team gets to work.","how.4t":"Back on the water","how.4p":"We walk you through the result and put your boat back in the water.",
 "book.eyebrow":"Book a service","book.title":"Let's get your boat ready.","book.lede":"Send your request and we'll get back to you personally with a quote and a date.",
 "book.b1":"Free crane lift included with every service","book.b2":"Fixed, transparent quote before we start","book.b3":"Reply in English, Dutch or German",
 "f.name":"Name","f.email":"Email","f.phone":"Phone","f.optional":"(optional)","f.lang":"Preferred language","f.boat":"Boat make & model","f.length":"Length (m)","f.services":"Services","f.date":"Preferred date","f.where":"Where is the boat now?","f.w1":"In the water","f.w2":"On a trailer","f.w3":"In storage elsewhere","f.msg":"Anything else we should know?","f.note":"No payment needed. We only use your details to answer this request.","f.submit":"Send request",
 "f.errReq":"Please fill in your name, a valid email and your boat.","f.errSvc":"Choose at least one service.","f.errConsent":"Please confirm that you have read the privacy policy.","f.consent":"I have read the <a class=\"js-privacy\" href=\"privacy.html\">privacy policy</a> and agree that BoatLab uses my details to handle this request.","footer.privacy":"Privacy policy","footer.kvk":"KvK","footer.vat":"VAT","f.errSend":"The request could not be sent. Please email us directly at ",
 "done.title":"Request sent.","done.text":"Thank you. We'll reply personally within one working day.","done.readyTitle":"Your request is ready.","done.readyText":"Send it to us by email and we'll reply personally with a quote and a date.","done.copy":"Copy request","done.mail":"Open in email","done.new":"New request","done.copied":"Copied",
 "c.eyebrow":"Visit the yard","c.maps":"Open in Google Maps →","c.email":"Email","c.sales":"Sales inquiries","c.copy":"Copy","c.address":"Address","c.follow":"Follow us","c.watch":"Watch us work","c.phone":"Phone","c.call":"Call us →","c.focus":"In partnership with Focus Marine Center"
},
nl:{
 "nav.services":"Diensten","nav.results":"Resultaten","nav.why":"Waarom BoatLab","nav.facility":"Werf","nav.contact":"Contact",
 "cta.book":"Service boeken","cta.services":"Bekijk diensten",
 "hero.eyebrow":"Jacht- & botenservice · Wanssum, NL","hero.h1a":"Uw boot.","hero.h1b":"Beter terug.",
 "hero.lede":"Allround onderhoud voor jachten en boten aan de Maas, persoonlijk en voor een eerlijke prijs. <strong>Bij elke service hijsen we uw boot gratis met onze 30-tons kraan.</strong>",
 "hero.f1":"Gratis hijsen, 30 t kraan","hero.f2":"English · Nederlands · Deutsch","hero.f3":"Geopend sinds april 2026",
 "chip.lift":"gratis hijsen bij elke service","chip.finish":"Spiegelglans","chip.finish2":"polijsten & coating","chip.personal":"Eén aanspreekpunt","chip.personal2":"van offerte tot te water",
 "lift.plate":"Max hijslast 4 × 7 500 kg","lift.title":"Hijsen doen wij gratis.","lift.text":"Met onze eigen 30-tons kraan halen we uw boot uit het water en zetten we hem weer terug. Boekt u een service bij BoatLab, dan kost het hijsen u niets.",
 "svc.eyebrow":"Diensten","svc.title":"Alles wat uw boot nodig heeft, onder één dak.","svc.lede":"Van antifouling in het voorjaar tot een complete refit. Tik op een dienst om hem aan uw aanvraag toe te voegen.",
 "svc.all":"Alles","svc.hull":"Romp & bescherming","svc.finish":"Afwerking & verzorging","svc.tech":"Techniek","svc.add":"Toevoegen aan aanvraag",
 "s.antifouling":"Antifouling","s.antifouling.d":"Onderwaterschip reinigen, schuren en opnieuw coaten voor een schoon, snel seizoen.",
 "s.painting":"Schilderwerk","s.painting.d":"Romp, dek en details geschilderd met een duurzame afwerking.",
 "s.polishing":"Polijsten","s.polishing.d":"Machinaal polijsten dat verweerde gelcoat weer diep laat glanzen.",
 "s.washing":"Wassen & reinigen","s.washing.d":"Een grondige buitenwas, van waterlijn tot flybridge.",
 "s.interior":"Interieur dieptereiniging","s.interior.d":"Kajuiten, bekleding, kombuis en toilet grondig gereinigd en fris.",
 "s.coating":"Beschermende coating","s.coating.d":"Keramische en beschermende coatings die de glans behouden en vuil afstoten.",
 "s.osmosis":"Osmosebehandeling","s.osmosis.d":"Diagnose, drogen en een complete osmosebehandeling van de romp.",
 "s.lamination":"Lamineren","s.lamination.d":"Constructieve laminaatreparaties in polyester en epoxy.",
 "s.gelcoat":"Gelcoatreparatie","s.gelcoat.d":"Beschadigingen, haarscheuren en krassen gerepareerd en op kleur gebracht.",
 "s.inspection":"Technische keuring","s.inspection.d":"Een complete controle voor aankoop, verkoop of de start van het seizoen.",
 "s.refit":"Refits","s.refit.d":"Complete refits van jachten en boten, van planning tot oplevering.",
 "s.engine":"Jaarlijkse motorservice","s.engine.d":"Jaarlijks motoronderhoud, zodat u het hele seizoen zorgeloos vaart.",
 "s.navigation":"Navigatie & elektronica","s.navigation.d":"Installatie en reparatie van navigatie en boordelektronica.",
 "ba.eyebrow":"Ons werk","ba.title":"Zie het verschil.","ba.lede":"Echte boten van onze werf. Sleep de schuif om voor en na te vergelijken.","ba.t1":"Antifouling","ba.t2":"Polijsten","ba.before":"Voor","ba.after":"Na",
 "why.eyebrow":"Waarom BoatLab","why.statement":"Een nieuwe werf met een ouderwets principe: <em>elke boot behandelen alsof hij van ons is.</em>",
 "why.1t":"Persoonlijke aanpak","why.1p":"U spreekt de mensen die aan uw boot werken. Helder advies, eerlijke planning, geen callcenter.",
 "why.2t":"Hoogwaardig werk","why.2p":"Professionele materialen en een zorgvuldige voorbereiding, want een afwerking is zo goed als de basis eronder.",
 "why.3t":"Scherpe prijzen","why.3p":"Eerlijke, transparante offertes die opvallen in de regio. U kent de prijs voordat we beginnen.",
 "why.4t":"Een gemotiveerd team","why.4p":"Vakmensen die trots zijn op hun werk en oog hebben voor detail.",
 "why.5t":"Wij spreken uw taal","why.5p":"Nederlands, Duits en Engels. Direct aan de Maas, vlak bij de Duitse grens.",
 "why.6t":"Gratis kraan","why.6p":"Onze 30-tons kraan is gratis voor iedere klant die een service bij ons boekt.",
 "fac.eyebrow":"De werf","fac.title":"Gebouwd voor boten. Direct aan het water.","fac.lede":"Binnenhallen, een complete werkplaats en een havenkade met eigen kraan in Wanssum.",
 "fac.c1":"Havenzijde","fac.c1s":"Overdekte werf met directe toegang tot het water","fac.c2":"Werkplaats","fac.c2s":"Timmerwerk, onderdelen en gereedschap ter plaatse","fac.c3":"Binnenhal","fac.c3s":"We werken door, weer of geen weer","fac.c4":"Klaar voor te water","fac.c4s":"Verse antifouling, klaar voor het seizoen","fac.c5":"30 t kraan","fac.c5s":"In enkele minuten uit het water","fac.c6":"Botentransporter","fac.c6s":"Op afstand bestuurd transport over de werf",
 "how.eyebrow":"Zo werkt het","how.title":"Van aanvraag tot te water in vier stappen.",
 "how.1t":"Stuur uw aanvraag","how.1p":"Vertel ons over uw boot en wat er moet gebeuren. Foto's helpen.","how.2t":"Heldere offerte","how.2p":"U krijgt advies, een vaste prijs en een datum die u uitkomt.","how.free":"Gratis hijsen","how.3t":"Hijsen & werken","how.3p":"Onze kraan haalt uw boot gratis uit het water en ons team gaat aan de slag.","how.4t":"Weer te water","how.4p":"We lopen het resultaat met u door en zetten uw boot weer in het water.",
 "book.eyebrow":"Service boeken","book.title":"Samen uw boot klaarmaken.","book.lede":"Stuur uw aanvraag en we nemen persoonlijk contact op met een offerte en een datum.",
 "book.b1":"Gratis hijsen bij elke service","book.b2":"Vaste, transparante offerte vooraf","book.b3":"Antwoord in het Nederlands, Duits of Engels",
 "f.name":"Naam","f.email":"E-mail","f.phone":"Telefoon","f.optional":"(optioneel)","f.lang":"Voorkeurstaal","f.boat":"Merk & type boot","f.length":"Lengte (m)","f.services":"Diensten","f.date":"Gewenste datum","f.where":"Waar ligt de boot nu?","f.w1":"In het water","f.w2":"Op een trailer","f.w3":"Elders in de stalling","f.msg":"Wat moeten we nog meer weten?","f.note":"U betaalt nu niets. We gebruiken uw gegevens alleen om deze aanvraag te beantworden.","f.submit":"Aanvraag versturen",
 "f.errReq":"Vul uw naam, een geldig e-mailadres en uw boot in.","f.errSvc":"Kies minstens één dienst.","f.errConsent":"Bevestig dat u de privacyverklaring heeft gelezen.","f.consent":"Ik heb de <a class=\"js-privacy\" href=\"privacy.html\">privacyverklaring</a> gelezen en ga ermee akkoord dat BoatLab mijn gegevens gebruikt om deze aanvraag af te handelen.","footer.privacy":"Privacyverklaring","footer.kvk":"KvK","footer.vat":"BTW","f.errSend":"De aanvraag kon niet worden verzonden. Mail ons direct via ",
 "done.title":"Aanvraag verstuurd.","done.text":"Bedankt. We reageren persoonlijk binnen één werkdag.","done.readyTitle":"Uw aanvraag staat klaar.","done.readyText":"Stuur hem per e-mail naar ons en we reageren persoonlijk met een offerte en een datum.","done.copy":"Aanvraag kopiëren","done.mail":"Openen in e-mail","done.new":"Nieuwe aanvraag","done.copied":"Gekopieerd",
 "c.eyebrow":"Bezoek de werf","c.maps":"Openen in Google Maps →","c.email":"E-mail","c.sales":"Verkoopvragen","c.copy":"Kopiëren","c.address":"Adres","c.phone":"Telefoon","c.call":"Bel ons →","c.focus":"Gevestigd in samenwerking met Focus Marine Center","c.follow":"Volg ons","c.watch":"Kijk mee op de werf"
},
de:{
 "nav.services":"Leistungen","nav.results":"Ergebnisse","nav.why":"Warum BoatLab","nav.facility":"Werft","nav.contact":"Kontakt",
 "cta.book":"Service buchen","cta.services":"Leistungen ansehen",
 "hero.eyebrow":"Yacht- & Bootsservice · Wanssum, NL","hero.h1a":"Ihr Boot.","hero.h1b":"Besser zurück.",
 "hero.lede":"Rundum-Service für Yachten und Boote an der Maas, persönlich und zu fairen Preisen. <strong>Bei jedem Service kranen wir Ihr Boot kostenlos mit unserem 30-Tonnen-Kran.</strong>",
 "hero.f1":"Kostenlos kranen, 30 t","hero.f2":"English · Nederlands · Deutsch","hero.f3":"Geöffnet seit April 2026",
 "chip.lift":"kostenlos kranen bei jedem Service","chip.finish":"Spiegelglanz","chip.finish2":"Politur & Versiegelung","chip.personal":"Ein Ansprechpartner","chip.personal2":"vom Angebot bis zum Einwassern",
 "lift.plate":"Max. Traglast 4 × 7.500 kg","lift.title":"Das Kranen übernehmen wir.","lift.text":"Mit unserem eigenen 30-Tonnen-Kran heben wir Ihr Boot aus dem Wasser und wieder hinein. Wenn Sie einen Service bei BoatLab buchen, kostet Sie das Kranen nichts.",
 "svc.eyebrow":"Leistungen","svc.title":"Alles, was Ihr Boot braucht, unter einem Dach.","svc.lede":"Vom Antifouling im Frühjahr bis zum kompletten Refit. Tippen Sie auf eine Leistung, um sie Ihrer Anfrage hinzuzufügen.",
 "svc.all":"Alle","svc.hull":"Rumpf & Schutz","svc.finish":"Finish & Pflege","svc.tech":"Technik","svc.add":"Zur Anfrage hinzufügen",
 "s.antifouling":"Antifouling","s.antifouling.d":"Unterwasserschiff reinigen, schleifen und neu beschichten für eine saubere, schnelle Saison.",
 "s.painting":"Lackierung","s.painting.d":"Rumpf, Deck und Details lackiert, mit dauerhaftem Finish.",
 "s.polishing":"Polieren","s.polishing.d":"Maschinelles Polieren bringt oxidiertes Gelcoat zurück zu tiefem Glanz.",
 "s.washing":"Waschen & Reinigen","s.washing.d":"Gründliche Außenwäsche, von der Wasserlinie bis zur Flybridge.",
 "s.interior":"Innen-Tiefenreinigung","s.interior.d":"Kabinen, Polster, Pantry und Nasszelle gründlich gereinigt und frisch.",
 "s.coating":"Schutzversiegelung","s.coating.d":"Keramik- und Schutzversiegelungen, die den Glanz erhalten und Schmutz abweisen.",
 "s.osmosis":"Osmosebehandlung","s.osmosis.d":"Diagnose, Trocknung und komplette Osmosebehandlung des Rumpfes.",
 "s.lamination":"Laminieren","s.lamination.d":"Strukturelle Laminatreparaturen in Polyester und Epoxid.",
 "s.gelcoat":"Gelcoat-Reparatur","s.gelcoat.d":"Macken, Risse und Kratzer repariert und farblich angepasst.",
 "s.inspection":"Technische Inspektion","s.inspection.d":"Ein kompletter Check vor Kauf, Verkauf oder Saisonstart.",
 "s.refit":"Refits","s.refit.d":"Komplette Refits von Yachten und Booten, von der Planung bis zur Übergabe.",
 "s.engine":"Jährlicher Motorservice","s.engine.d":"Jährliche Motorwartung, damit Sie die ganze Saison sorgenfrei fahren.",
 "s.navigation":"Navigation & Elektronik","s.navigation.d":"Einbau und Reparatur von Navigation und Bordelektronik.",
 "ba.eyebrow":"Unsere Arbeit","ba.title":"Sehen Sie den Unterschied.","ba.lede":"Echte Boote aus unserer Werft. Ziehen Sie den Regler, um vorher und nachher zu vergleichen.","ba.t1":"Antifouling","ba.t2":"Politur","ba.before":"Vorher","ba.after":"Nachher",
 "why.eyebrow":"Warum BoatLab","why.statement":"Eine neue Werft mit einem bewährten Prinzip: <em>jedes Boot so behandeln, als wäre es unser eigenes.</em>",
 "why.1t":"Persönlich","why.1p":"Sie sprechen direkt mit den Menschen, die an Ihrem Boot arbeiten. Klare Beratung, ehrliche Planung, kein Callcenter.",
 "why.2t":"Hochwertige Arbeit","why.2p":"Professionelle Materialien und sorgfältige Vorbereitung, denn ein Finish ist nur so gut wie sein Untergrund.",
 "why.3t":"Faire Preise","why.3p":"Transparente Angebote, die in der Region herausstechen. Sie kennen den Preis, bevor wir beginnen.",
 "why.4t":"Ein motiviertes Team","why.4p":"Fachleute, die stolz auf ihre Arbeit sind und auf jedes Detail achten.",
 "why.5t":"Wir sprechen Ihre Sprache","why.5p":"Deutsch, Niederländisch und Englisch. Direkt an der Maas, nur eine kurze Fahrt von der deutschen Grenze.",
 "why.6t":"Kostenloser Kran","why.6p":"Unser 30-Tonnen-Kran ist kostenlos für alle Kunden, die einen Service bei uns buchen.",
 "fac.eyebrow":"Die Werft","fac.title":"Gebaut für Boote. Direkt am Wasser.","fac.lede":"Hallen, eine komplette Werkstatt und ein Hafenkai mit eigenem Kran in Wanssum.",
 "fac.c1":"Hafenseite","fac.c1s":"Überdachte Werft mit direktem Wasserzugang","fac.c2":"Werkstatt","fac.c2s":"Schreinerei, Ersatzteile und Werkzeug vor Ort","fac.c3":"Halle","fac.c3s":"Wir arbeiten bei jedem Wetter","fac.c4":"Bereit zum Einwassern","fac.c4s":"Frisches Antifouling, bereit für die Saison","fac.c5":"30-t-Kran","fac.c5s":"In wenigen Minuten aus dem Wasser","fac.c6":"Bootstransporter","fac.c6s":"Ferngesteuerter Transport über das Werftgelände",
 "how.eyebrow":"So funktioniert's","how.title":"Von der Anfrage zurück aufs Wasser in vier Schritten.",
 "how.1t":"Anfrage senden","how.1p":"Erzählen Sie uns von Ihrem Boot und was es braucht. Fotos helfen.","how.2t":"Klares Angebot","how.2p":"Sie erhalten Beratung, einen Festpreis und einen passenden Termin.","how.free":"Gratis kranen","how.3t":"Kranen & arbeiten","how.3p":"Unser Kran hebt Ihr Boot kostenlos heraus und unser Team legt los.","how.4t":"Zurück aufs Wasser","how.4p":"Wir zeigen Ihnen das Ergebnis und setzen Ihr Boot wieder ins Wasser.",
 "book.eyebrow":"Service buchen","book.title":"Machen wir Ihr Boot bereit.","book.lede":"Senden Sie Ihre Anfrage und wir melden uns persönlich mit Angebot und Termin.",
 "book.b1":"Kostenloses Kranen bei jedem Service","book.b2":"Fester, transparenter Preis vorab","book.b3":"Antwort auf Deutsch, Niederländisch oder Englisch",
 "f.name":"Name","f.email":"E-Mail","f.phone":"Telefon","f.optional":"(optional)","f.lang":"Bevorzugte Sprache","f.boat":"Bootsmarke & Modell","f.length":"Länge (m)","f.services":"Leistungen","f.date":"Wunschtermin","f.where":"Wo liegt das Boot jetzt?","f.w1":"Im Wasser","f.w2":"Auf einem Trailer","f.w3":"In einem anderen Winterlager","f.msg":"Was sollten wir noch wissen?","f.note":"Keine Zahlung nötig. Wir nutzen Ihre Daten nur zur Beantwortung dieser Anfrage.","f.submit":"Anfrage senden",
 "f.errReq":"Bitte geben Sie Ihren Namen, eine gültige E-Mail-Adresse und Ihr Boot an.","f.errSvc":"Bitte wählen Sie mindestens eine Leistung.","f.errConsent":"Bitte bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben.","f.consent":"Ich habe die <a class=\"js-privacy\" href=\"privacy.html\">Datenschutzerklärung</a> gelesen und bin einverstanden, dass BoatLab meine Daten zur Bearbeitung dieser Anfrage verwendet.","footer.privacy":"Datenschutz","footer.kvk":"KvK","footer.vat":"USt-IdNr.","f.errSend":"Die Anfrage konnte nicht gesendet werden. Bitte schreiben Sie uns direkt an ",
 "done.title":"Anfrage gesendet.","done.text":"Vielen Dank. Wir melden uns persönlich innerhalb eines Werktags.","done.readyTitle":"Ihre Anfrage ist bereit.","done.readyText":"Senden Sie sie uns per E-Mail, und wir melden uns persönlich mit Angebot und Termin.","done.copy":"Anfrage kopieren","done.mail":"In E-Mail öffnen","done.new":"Neue Anfrage","done.copied":"Kopiert",
 "c.eyebrow":"Besuchen Sie die Werft","c.maps":"In Google Maps öffnen →","c.email":"E-Mail","c.sales":"Vertriebsanfragen","c.copy":"Kopieren","c.address":"Adresse","c.phone":"Telefon","c.call":"Rufen Sie uns an →","c.focus":"In Kooperation mit dem Focus Marine Center","c.follow":"Folgen Sie uns","c.watch":"Schauen Sie uns zu"
}};


/* ===== Customer reviews (home page) =====
   Paste real Google reviews here; the band animates as soon as there is at least one.
   { name: "Jan de Vries", origin: "Venlo, NL", rating: 5, text: "…", lang: "nl" } */
const REVIEWS = [];

/* ===== Extra text for the multi-page site ===== */
const T2 = {
en:{
 "nav.home":"Home","title.home":"BoatLab Yacht Services · Wanssum",
 "svc.all13":"View all 13 services","why.more":"More about BoatLab",
 "rev.eyebrow":"Reviews","rev.title":"What boat owners say.","rev.lede":"Real reviews from our customers on Google.","rev.cta":"Leave a review on Google","rev.placeholder":"Customer reviews from Google will appear here.","rev.badge":"Layout preview",
 "facT.title":"Come and see the yard.","facT.text":"Indoor halls, a full workshop and our own 30 t crane on the Maas in Wanssum.","facT.cta":"Tour the facility",
 "cta.title":"Ready for the water?","cta.text":"Send us your request and we'll reply personally with a clear quote and a date.","cta.call":"Call +31 6 11742272",
 "ph.services.h1":"Yacht and boat service, from hull to helm.","ph.services.lede":"13 services under one roof in Wanssum, each with a free crane lift.",
 "ph.results.h1":"Work we're proud of.","ph.results.lede":"Before and after photos from boats we've treated at our yard.",
 "ph.about.h1":"Why boat owners choose BoatLab.","ph.about.lede":"A new yard in Wanssum since April 2026, built on personal service, careful work and fair prices.",
 "ph.facility.h1":"A yard built for boats.","ph.facility.lede":"Indoor halls, a full workshop, our own quay and a 30-tonne crane, in partnership with Focus Marine Center.",
 "ph.contact.h1":"Book a service or get in touch.","ph.contact.lede":"Send a request below, call us or drop by the yard in Wanssum.",
 "about.pTitle":"In partnership with Focus Marine Center","about.pText":"BoatLab works from the Focus Marine Center site in Wanssum. That gives our customers indoor halls, a harbour quay, a 30-tonne crane and a hydraulic boat mover, right on the Maas.",
 "footer.pages":"Pages","footer.contact":"Contact","footer.follow":"Follow us","footer.tag":"All-round yacht and boat service on the Maas."
},
nl:{
 "nav.home":"Home","title.home":"BoatLab Yacht Services · Wanssum",
 "svc.all13":"Bekijk alle 13 diensten","why.more":"Meer over BoatLab",
 "rev.eyebrow":"Reviews","rev.title":"Wat booteigenaren zeggen.","rev.lede":"Echte reviews van onze klanten op Google.","rev.cta":"Laat een review achter op Google","rev.placeholder":"Hier verschijnen klantreviews van Google.","rev.badge":"Voorbeeldweergave",
 "facT.title":"Kom de werf bekijken.","facT.text":"Binnenhallen, een complete werkplaats en onze eigen 30-tons kraan aan de Maas in Wanssum.","facT.cta":"Bekijk de werf",
 "cta.title":"Klaar om te varen?","cta.text":"Stuur ons uw aanvraag en we reageren persoonlijk met een heldere offerte en een datum.","cta.call":"Bel +31 6 11742272",
 "ph.services.h1":"Jacht- en botenservice, van romp tot roer.","ph.services.lede":"13 diensten onder één dak in Wanssum, altijd met gratis hijsen.",
 "ph.results.h1":"Werk waar we trots op zijn.","ph.results.lede":"Voor- en na-foto's van boten die we op onze werf hebben behandeld.",
 "ph.about.h1":"Waarom booteigenaren voor BoatLab kiezen.","ph.about.lede":"Sinds april 2026 een nieuwe werf in Wanssum, gebouwd op persoonlijke service, zorgvuldig werk en eerlijke prijzen.",
 "ph.facility.h1":"Een werf gebouwd voor boten.","ph.facility.lede":"Binnenhallen, een complete werkplaats, een eigen kade en een 30-tons kraan, in samenwerking met Focus Marine Center.",
 "ph.contact.h1":"Boek een service of neem contact op.","ph.contact.lede":"Stuur hieronder een aanvraag, bel ons of kom langs op de werf in Wanssum.",
 "about.pTitle":"In samenwerking met Focus Marine Center","about.pText":"BoatLab werkt vanaf het terrein van Focus Marine Center in Wanssum. Zo hebben onze klanten de beschikking over binnenhallen, een havenkade, een 30-tons kraan en een hydraulische botentransporter, direct aan de Maas.",
 "footer.pages":"Pagina's","footer.contact":"Contact","footer.follow":"Volg ons","footer.tag":"Allround jacht- en botenservice aan de Maas."
},
de:{
 "nav.home":"Startseite","title.home":"BoatLab Yacht Services · Wanssum",
 "svc.all13":"Alle 13 Leistungen ansehen","why.more":"Mehr über BoatLab",
 "rev.eyebrow":"Bewertungen","rev.title":"Was Bootseigner sagen.","rev.lede":"Echte Bewertungen unserer Kunden auf Google.","rev.cta":"Bewertung auf Google schreiben","rev.placeholder":"Hier erscheinen Kundenbewertungen von Google.","rev.badge":"Layout-Vorschau",
 "facT.title":"Besuchen Sie die Werft.","facT.text":"Hallen, eine komplette Werkstatt und unser eigener 30-t-Kran an der Maas in Wanssum.","facT.cta":"Werft ansehen",
 "cta.title":"Bereit fürs Wasser?","cta.text":"Senden Sie uns Ihre Anfrage, und wir melden uns persönlich mit einem klaren Angebot und Termin.","cta.call":"Anrufen: +31 6 11742272",
 "ph.services.h1":"Yacht- und Bootsservice, vom Rumpf bis zum Steuer.","ph.services.lede":"13 Leistungen unter einem Dach in Wanssum, immer mit kostenlosem Kranen.",
 "ph.results.h1":"Arbeit, auf die wir stolz sind.","ph.results.lede":"Vorher-Nachher-Fotos von Booten, die wir in unserer Werft behandelt haben.",
 "ph.about.h1":"Warum Bootseigner BoatLab wählen.","ph.about.lede":"Seit April 2026 eine neue Werft in Wanssum, mit persönlichem Service, sorgfältiger Arbeit und fairen Preisen.",
 "ph.facility.h1":"Eine Werft, gebaut für Boote.","ph.facility.lede":"Hallen, eine komplette Werkstatt, ein eigener Kai und ein 30-Tonnen-Kran, in Kooperation mit dem Focus Marine Center.",
 "ph.contact.h1":"Service buchen oder Kontakt aufnehmen.","ph.contact.lede":"Senden Sie unten eine Anfrage, rufen Sie uns an oder besuchen Sie die Werft in Wanssum.",
 "about.pTitle":"In Kooperation mit dem Focus Marine Center","about.pText":"BoatLab arbeitet auf dem Gelände des Focus Marine Center in Wanssum. Unsere Kunden profitieren so von Hallen, einem Hafenkai, einem 30-Tonnen-Kran und einem hydraulischen Bootstransporter, direkt an der Maas.",
 "footer.pages":"Seiten","footer.contact":"Kontakt","footer.follow":"Folgen","footer.tag":"Rundum-Service für Yachten und Boote an der Maas."
}};
for (const l in T2) Object.assign(T[l], T2[l]);

// Every page is built in one language (main[data-lang], set by build.py); the switch links to the other versions.
let lang = document.querySelector("main[data-lang]")?.dataset.lang || document.documentElement.lang || "en";
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const t = k => (T[lang] && T[lang][k]) ?? T.en[k] ?? k;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FEATURED = ["antifouling","polishing","osmosis","gelcoat","engine","refit"];

/* ---------- services grid + booking chips ---------- */
let currentFilter = "all";
function renderServices(){
  const grid = $("#svcGrid"), chips = $("#svcChips");
  if (grid){
    const list = grid.dataset.limit ? SERVICES.filter(s => FEATURED.includes(s.id)) : SERVICES;
    grid.innerHTML = list.map(s => `
      <button type="button" class="svc reveal" data-id="${s.id}" data-cat="${s.cat}">
        <span class="ic"><svg><use href="#s-${s.id}"/></svg></span>
        <h3>${t("s."+s.id)}</h3><p>${t("s."+s.id+".d")}</p>
        <span class="go">${t("svc.add")}<svg><use href="#i-arrow"/></svg></span>
      </button>`).join("");
    applyFilter(currentFilter, false);
  }
  if (chips){
    const checked = new Set($$("input[name=services]:checked").map(i => i.value));
    chips.innerHTML = SERVICES.map(s => `
      <label><input type="checkbox" name="services" value="${s.id}" id="svc-${s.id}" ${checked.has(s.id)?"checked":""}><span>${t("s."+s.id)}</span></label>`).join("");
  }
}
function applyFilter(f, animate=true){
  currentFilter = f;
  $$("#svcGrid .svc").forEach((el,i) => {
    const show = f === "all" || el.dataset.cat === f;
    el.hidden = !show;
    if (show && animate){ el.classList.remove("pop"); void el.offsetWidth; el.style.animationDelay = (i%6*40)+"ms"; el.classList.add("pop"); }
  });
}
function moveThumb(container, active){
  const th = container && $(".thumb", container); if (!th || !active) return;
  th.style.width = active.offsetWidth+"px"; th.style.height = active.offsetHeight+"px";
  th.style.top = active.offsetTop+"px"; th.style.left = active.offsetLeft+"px"; th.style.transform = "none";
}
$("#svcTabs")?.addEventListener("click", e => {
  const b = e.target.closest("button[data-filter]"); if (!b) return;
  $$("#svcTabs button").forEach(x => x.setAttribute("aria-selected", x===b));
  moveThumb($("#svcTabs"), b); applyFilter(b.dataset.filter);
});
function preselectAndScroll(id){
  const box = $("#svc-"+id); if (box) box.checked = true;
  $("#book")?.scrollIntoView({behavior: reduceMotion ? "auto" : "smooth"});
}
$("#svcGrid")?.addEventListener("click", e => {
  const card = e.target.closest(".svc"); if (!card) return;
  if ($("#bookForm")) preselectAndScroll(card.dataset.id);
  else location.href = ($("main").dataset.contact || "contact.html") + "#book-" + card.dataset.id;   // booking lives on the contact page
});

/* ---------- reviews band ---------- */
function renderReviews(){
  const sec = $("#reviews"), box = $("#revMarquee"); if (!sec || !box) return;
  const demo = !REVIEWS.length && CONFIG.reviewPlaceholders;
  if (!REVIEWS.length && !demo){ sec.hidden = true; return; }
  sec.hidden = false;
  $("#revBadge").hidden = !demo;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const star = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z"/></svg>';
  const card = r => r ? `
    <figure class="review"><div class="stars" aria-label="${r.rating} / 5">${star.repeat(r.rating)}</div>
      <blockquote>${esc(r.text)}</blockquote>
      <figcaption><span class="avatar">${esc(r.name.trim()[0] || "?")}</span><span><b>${esc(r.name)}</b><small>${esc(r.origin || "")}</small></span></figcaption></figure>`
    : `<figure class="review demo" aria-hidden="true"><div class="stars">${star.repeat(5)}</div>
      <div class="sk"></div><div class="sk"></div><div class="sk short"></div>
      <figcaption><span class="avatar"></span><span class="sk name"></span></figcaption></figure>`;
  const items = demo ? Array(8).fill(null) : REVIEWS;
  const half = Math.ceil(items.length/2);
  const rows = items.length > 5 ? [items.slice(0,half), items.slice(half)] : [items];
  box.innerHTML = rows.map((row, i) => {
    let seq = row; while (seq.length < 6) seq = seq.concat(row);       // enough cards to fill wide screens
    const html = seq.map(card).join("");
    return `<div class="row${i ? " rev" : ""}" style="--dur:${seq.length*7}s"><div class="set">${html}</div><div class="set" aria-hidden="true">${html}</div></div>`;
  }).join("") + (demo ? `<p class="demo-note">${t("rev.placeholder")}</p>` : "");
}

/* ---------- i18n ---------- */
function setLang(l){
  lang = T[l] ? l : "en";
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  $$("[data-lang-block]").forEach(a => a.hidden = a.dataset.langBlock !== lang);
  const fl = $("#f-lang"); if (fl) fl.value = {en:"English",nl:"Nederlands",de:"Deutsch"}[lang];
  renderServices(); renderReviews();
  const reg = $("#regIds"); if (reg) reg.textContent = [CONFIG.kvk && t("footer.kvk")+" "+CONFIG.kvk, CONFIG.vat && t("footer.vat")+" "+CONFIG.vat].filter(Boolean).join(" · ");
  requestAnimationFrame(() => {
    placeLangThumb();
    moveThumb($("#svcTabs"), $('#svcTabs [aria-selected="true"]'));
  });
}
function placeLangThumb(){
  const lb = $(`.lang [data-lang="${lang}"]`), th = $(".lang .thumb");
  if (lb && th){ th.style.width = lb.offsetWidth+"px"; th.style.transform = `translateX(${lb.offsetLeft-3}px)`; }
}

/* ---------- nav ---------- */
const nav = $("#nav");
$("#menuBtn")?.addEventListener("click", () => { const o = nav.classList.toggle("open"); $("#menuBtn").setAttribute("aria-expanded", o); });

/* ---------- ripple on buttons ---------- */
document.addEventListener("pointerdown", e => {
  const b = e.target.closest(".btn"); if (!b) return;
  const r = b.getBoundingClientRect(), d = Math.max(r.width, r.height)*2.2;
  const s = document.createElement("span"); s.className = "ripple";
  s.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX-r.left-d/2}px;top:${e.clientY-r.top-d/2}px`;
  b.appendChild(s); s.addEventListener("animationend", () => s.remove());
});

/* ---------- before / after ---------- */
(function(){
  const cmp = $("#compare"), range = $("#compareRange"); if (!cmp) return;
  range.addEventListener("input", () => cmp.style.setProperty("--pos", range.value+"%"));
  // Both sides show the same half of the hull (bow stem to the right):
  // the left half of the "before" file and the right half of the "after" file line up.
  const BA = {antifouling:["img/antifouling-before.jpg","img/antifouling-after.jpg"], polish:["img/polish-before.jpg","img/polish-after.jpg"]};
  Object.entries(BA).forEach(([k, srcs]) => srcs.forEach(src => { const im = new Image(); im.onerror = () => { if (!BA[k]) return;
    const pill = $(`[data-ba="${k}"]`); pill.hidden = true; delete BA[k];
    if (!Object.keys(BA).length) $("#results").hidden = true;
    else if (pill.getAttribute("aria-pressed") === "true") $(`[data-ba="${Object.keys(BA)[0]}"]`).click();
  }; im.src = src; }));
  $$("[data-ba]").forEach(b => b.addEventListener("click", () => {
    $$("[data-ba]").forEach(x => x.setAttribute("aria-pressed", x===b));
    cmp.classList.toggle("polish", b.dataset.ba === "polish");
    const [bf, af] = BA[b.dataset.ba];
    $(".before img", cmp).src = bf; $(".after img", cmp).src = af;
    range.value = 50; cmp.style.setProperty("--pos","50%");
  }));
  // Gentle intro sweep so people notice the slider
  if (reduceMotion || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(([en]) => {
    if (!en.isIntersecting) return; io.disconnect();
    const seq = [50,30,70,50]; let i = 0;
    const step = () => { if (i >= seq.length) return;
      const from = parseFloat(range.value), to = seq[i++], t0 = performance.now();
      const tick = now => { const p = Math.min(1,(now-t0)/450), v = from+(to-from)*(1-Math.pow(1-p,3));
        range.value = v; cmp.style.setProperty("--pos", v+"%"); p<1 ? requestAnimationFrame(tick) : setTimeout(step,80); };
      requestAnimationFrame(tick); };
    setTimeout(step, 300);
  }, {threshold:.5});
  io.observe(cmp);
})();

/* ---------- facility slider + lightbox ---------- */
(function(){
  const track = $("#track"); if (!track) return;
  const slides = $$(".slide", track), dots = $("#dots");
  dots.innerHTML = slides.map((_, i) => `<button type="button" tabindex="-1" data-i="${i}"></button>`).join("");
  const current = () => Math.round(track.scrollLeft / track.clientWidth);
  const goTo = i => { i = (i + slides.length) % slides.length; track.scrollTo({left: i*track.clientWidth, behavior:"smooth"}); };
  const syncDots = () => $$("button", dots).forEach((b, i) => b.setAttribute("aria-current", i === current()));
  track.addEventListener("scroll", () => requestAnimationFrame(syncDots), {passive:true}); syncDots();
  dots.addEventListener("click", e => { const b = e.target.closest("button"); if (b) goTo(+b.dataset.i); });
  $("#prevShot").addEventListener("click", () => goTo(current() - 1));
  $("#nextShot").addEventListener("click", () => goTo(current() + 1));
  const lb = $("#lightbox");
  track.addEventListener("click", e => {
    const s = e.target.closest(".slide"); if (!s) return;
    $("#lbImg").src = s.dataset.full; $("#lbImg").alt = $("img", s).alt;
    if (lb.showModal) lb.showModal();
  });
  $("#lbClose").addEventListener("click", () => lb.close());
  lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
})();

/* ---------- contact details ---------- */
$$(".js-email").forEach(e => e.textContent = CONFIG.email);
$$(".js-email-link").forEach(a => a.href = "mailto:" + CONFIG.email);
$$(".js-sales").forEach(e => e.textContent = CONFIG.salesEmail);
$$(".js-sales-link").forEach(a => a.href = "mailto:" + CONFIG.salesEmail);
$$(".js-ig").forEach(a => a.href = CONFIG.instagram);
$$(".js-tt").forEach(a => a.href = CONFIG.tiktok);
$$(".js-maps").forEach(a => a.href = CONFIG.maps);
$$(".js-year").forEach(e => e.textContent = new Date().getFullYear());
$("#copyEmail")?.addEventListener("click", e => {
  const btn = e.currentTarget;
  const ok = () => { btn.textContent = t("done.copied"); setTimeout(() => btn.textContent = t("c.copy"), 1600); };
  const sel = () => { const r = document.createRange(); r.selectNodeContents($("#emailText")); getSelection().removeAllRanges(); getSelection().addRange(r); };
  navigator.clipboard ? navigator.clipboard.writeText(CONFIG.email).then(ok).catch(sel) : sel();
});

/* ---------- booking ---------- */
(function(){
  const form = $("#bookForm"); if (!form) return;
  const err = $("#formError");
  $("#f-date").min = new Date().toISOString().slice(0,10);
  form.addEventListener("submit", async e => {
    e.preventDefault(); err.hidden = true;
    const fd = new FormData(form);
    const svcs = fd.getAll("services");
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fd.get("email")||"");
    if (!fd.get("name")?.trim() || !emailOk || !fd.get("boat")?.trim()){ err.textContent = t("f.errReq"); err.hidden = false; return; }
    if (!svcs.length){ err.textContent = t("f.errSvc"); err.hidden = false; return; }
    if (!$("#f-consent").checked){ err.textContent = t("f.errConsent"); err.hidden = false; $("#f-consent").focus(); return; }
    const summary = [
      "BoatLab service request",
      "Name: "+fd.get("name"), "Email: "+fd.get("email"), fd.get("phone") ? "Phone: "+fd.get("phone") : null,
      "Language: "+fd.get("language"),
      "Boat: "+fd.get("boat")+(fd.get("length_m") ? " ("+fd.get("length_m")+" m)" : ""),
      "Location: "+fd.get("location"),
      "Services: "+svcs.map(id => T.en["s."+id]).join(", "),
      fd.get("date") ? "Preferred date: "+fd.get("date") : null,
      fd.get("message") ? "\nMessage:\n"+fd.get("message") : null,
      "\nPrivacy policy accepted: yes ("+new Date().toISOString().slice(0,16).replace("T"," ")+" UTC)"
    ].filter(Boolean).join("\n");
    const btn = $("#submitBtn"); btn.classList.add("loading"); btn.disabled = true;
    let sent = false;
    if (CONFIG.formEndpoint){
      try {
        fd.set("services", svcs.map(id => T.en["s."+id]).join(", "));
        fd.set("_subject", "BoatLab booking: "+fd.get("boat"));
        const res = await fetch(CONFIG.formEndpoint, {method:"POST", body:fd, headers:{Accept:"application/json"}});
        sent = res.ok;
        if (!sent) throw new Error();
      } catch(_){
        btn.classList.remove("loading"); btn.disabled = false;
        err.textContent = t("f.errSend")+CONFIG.email+"."; err.hidden = false; return;
      }
    } else { await new Promise(r => setTimeout(r, 600)); }
    showDone(sent, summary);
  });
  function showDone(sent, summary){
    const mail = `mailto:${CONFIG.email}?subject=${encodeURIComponent("BoatLab service request")}&body=${encodeURIComponent(summary)}`;
    $("#bookWrap").innerHTML = `<div class="done" role="status">
        <span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>
        <h3 style="font-size:1.6rem;font-weight:800;font-stretch:110%">${t(sent ? "done.title" : "done.readyTitle")}</h3>
        <p class="lede">${t(sent ? "done.text" : "done.readyText")} ${sent ? "" : "<b>"+CONFIG.email+"</b>"}</p>
        ${sent ? "" : `<pre id="summary">${summary.replace(/[&<>]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]))}</pre>
        <div class="row"><button class="btn" type="button" id="copySum">${t("done.copy")}</button><a class="btn ghost" href="${mail}">${t("done.mail")}</a></div>`}
        <button class="pill" type="button" id="newReq">${t("done.new")}</button>
      </div>`;
    $("#copySum")?.addEventListener("click", e => {
      const b = e.currentTarget;
      const sel = () => { const r = document.createRange(); r.selectNodeContents($("#summary")); getSelection().removeAllRanges(); getSelection().addRange(r); };
      navigator.clipboard ? navigator.clipboard.writeText(summary).then(() => b.textContent = t("done.copied")).catch(sel) : sel();
    });
    $("#newReq").addEventListener("click", () => location.reload());
  }
})();

/* ---------- start ---------- */
(function(){
  const h = (location.hash||"").slice(1);
  setLang(lang);
  if (h.startsWith("book-")) setTimeout(() => preselectAndScroll(h.slice(5)), 60);
  addEventListener("resize", () => {
    moveThumb($("#svcTabs"), $('#svcTabs [aria-selected="true"]'));
    placeLangThumb();
  });
})();
