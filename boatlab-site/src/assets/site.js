/* ===== Settings: fill these in before going live ===== */
const CONFIG = {
  email: "info@boatlabservice.nl",              // TODO confirm address
  // Paste a Formspree form URL (https://formspree.io/f/xxxx) to receive bookings by email.
  formEndpoint: "",
  instagram: "https://www.instagram.com/boatlab.nl/",
  tiktok: "https://www.tiktok.com/@boatlab.nl",
  // Dutch law requires the KvK number (and VAT number) on the website. Shown in the footer once filled in.
  kvk: "",                                      // TODO KvK number
  vat: "",                                      // TODO BTW/VAT number, e.g. NL000000000B01
  maps: "https://maps.app.goo.gl/qaHuijy3DLmqtUjv5",
  // Shows grey placeholder cards in the reviews band until real reviews are added (preview only).
  reviewPlaceholders: false
};

const SERVICES = [
  {id:"antifouling", cat:"hull"},{id:"osmosis", cat:"hull"},{id:"coating", cat:"hull"},{id:"gelcoat", cat:"hull"},{id:"lamination", cat:"hull"},
  {id:"polishing", cat:"finish"},{id:"painting", cat:"finish"},{id:"washing", cat:"finish"},{id:"interior", cat:"finish"},{id:"teak", cat:"finish"},
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
 "c.eyebrow":"Visit the yard","c.maps":"Open in Google Maps →","c.email":"Email","c.copy":"Copy","c.address":"Address","c.follow":"Follow us","c.watch":"Watch us work","c.phone":"Phone","c.call":"Call us →","c.focus":"In partnership with Focus Marine Center"
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
 "c.eyebrow":"Bezoek de werf","c.maps":"Openen in Google Maps →","c.email":"E-mail","c.copy":"Kopiëren","c.address":"Adres","c.phone":"Telefoon","c.call":"Bel ons →","c.focus":"Gevestigd in samenwerking met Focus Marine Center","c.follow":"Volg ons","c.watch":"Kijk mee op de werf"
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
 "c.eyebrow":"Besuchen Sie die Werft","c.maps":"In Google Maps öffnen →","c.email":"E-Mail","c.copy":"Kopieren","c.address":"Adresse","c.phone":"Telefon","c.call":"Rufen Sie uns an →","c.focus":"In Kooperation mit dem Focus Marine Center","c.follow":"Folgen Sie uns","c.watch":"Schauen Sie uns zu"
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

/* ===== Results, service details, team and partners ===== */
const T3 = {
en:{
 "ba.t1":"Antifouling · bow","ba.t3":"Antifouling · hull side","ba.t4":"Antifouling · new colour",
 "ba.note":"Same boat, same angle: photographed before we started and after the new Hempel antifouling.",
 "pol.eyebrow":"Polishing","pol.title":"From dull to deep gloss.","pol.lede":"Machine polishing with Renskib compounds removes oxidation and fine scratches and brings the colour back.",
 "pol.c1":"Dark grey hull, before and after polishing.","pol.c2":"Blue hull with a test panel: left untouched, right polished.",
 "st.eyebrow":"Behind the scenes","st.title":"How the result is made.","st.lede":"A good finish starts with careful preparation. Two jobs, step by step.",
 "st.o.t":"Osmosis repair","st.o.p":"Old gelcoat removed, hull dried and rebuilt with Hempel epoxy, then finished with new antifouling.",
 "st.o.1":"Sanding back to sound laminate in a sealed tent","st.o.2":"The whole underwater hull, with dust extraction","st.o.3":"Finished: smooth, protected hull",
 "st.a.t":"Preparing for antifouling","st.a.p":"Before any antifouling goes on, the hull is cleaned, sanded, masked and primed.",
 "st.a.1":"Waterline masked, hull sanded","st.a.2":"Primer on the bare hull","st.a.3":"Every edge by hand",
 "fn.eyebrow":"Ready for the season","fn.title":"Back on the water.",
 "fn.1":"Antifouling and polishing","fn.2":"Polishing","fn.3":"Polishing and antifouling","fn.4":"Linssen: polishing, deep cleaning and antifouling","fn.5":"Antifouling and more, ready to launch","fn.6":"Antifouling",
 "s.teak":"Teak & decking","s.teak.d":"Teak cleaned, restored and protected, or a new U-Dek foam deck made to measure.",
 "svc.all13":"View all 14 services","ph.services.lede":"14 services under one roof in Wanssum, each with a free crane lift.",
 "svc.how":"See how we do it","sd.eyebrow":"Service by service","sd.title":"How we work.","sd.lede":"What each service includes and how we do it, step by step. Tap a step to read more.",
 "sd.steps":"How we do it","sd.book":"Add to booking","sd.with":"We work with","sd.official":"Official partner","sd.step":"Step",
 "team.eyebrow":"Your contact","team.title":"Meet Oleh Shevchuk.","team.role":"Managing director · Sales",
 "team.p1":"Oleh is the managing director of Boatlab BV and the person you speak with when you contact us. He looks at your boat with you, listens to what you need and prepares a personal offer for every client, with a clear price and planning.",
 "team.p2":"From the first call until your boat is back in the water, Oleh is your single point of contact. He keeps you informed and makes sure the work is done the way it was agreed.",
 "team.cta":"Get in touch",
 "pa.eyebrow":"Partners","pa.focusTag":"Main partner","pa.focusTitle":"Focus Motor Yachts & Focus Marine Center","pa.focusHead":"Yacht builder and service yard, side by side.",
 "pa.focusText":"BoatLab works side by side with Focus, the Dutch builder of motor yachts such as the Focus Power 44, from the Focus Marine Center site in Wanssum. Their halls, quay and 30-tonne crane are where your boat is lifted, stored and treated.",
 "pa.brandsTitle":"Products we trust","pa.brandsLede":"We only use premium brands that we know and trust on our customers' boats.",
 "pa.hempel":"Antifouling, hull repair & paint","pa.renskib":"Polishing compounds, pastes & cleaning","pa.udek":"Premium foam marine decking",
 "fac.c7":"Yard & crane","fac.c7s":"Our covered yard, quay and 30 t crane on the Maas","fac.c8":"Refit hall","fac.c8s":"Where we cut and prepare every piece for assembly",
 "fac.c9":"Focus yachts indoors","fac.c9s":"A Focus motor yacht in the indoor hall","fac.c10":"Crane operator","fac.c10s":"Every lift done with care by our own team",
 "fac.c11":"Focus Power 44","fac.c11s":"Built by our partner Focus Motor Yachts","fac.c12":"Cigarette Top Gun","fac.c12s":"Special boats welcome too",
 "fac.c6s":"Remote-controlled transport across the yard",
 "fac.c13":"From the air","fac.c13s":"The whole yard and harbour on the Maas","fac.c14":"Hall & crane","fac.c14s":"The Focus Marine Center hall with our 30 t crane"
},
nl:{
 "ba.t1":"Antifouling · boeg","ba.t3":"Antifouling · zijkant","ba.t4":"Antifouling · nieuwe kleur",
 "ba.note":"Zelfde boot, zelfde hoek: gefotografeerd voordat we begonnen en na de nieuwe Hempel-antifouling.",
 "pol.eyebrow":"Polijsten","pol.title":"Van dof naar diepe glans.","pol.lede":"Machinaal polijsten met Renskib-compounds verwijdert oxidatie en fijne krassen en brengt de kleur terug.",
 "pol.c1":"Donkergrijze romp, voor en na het polijsten.","pol.c2":"Blauwe romp met een testvlak: links onbehandeld, rechts gepolijst.",
 "st.eyebrow":"Achter de schermen","st.title":"Zo ontstaat het resultaat.","st.lede":"Een goede afwerking begint met zorgvuldige voorbereiding. Twee klussen, stap voor stap.",
 "st.o.t":"Osmosebehandeling","st.o.p":"Oude gelcoat verwijderd, romp gedroogd en opgebouwd met Hempel-epoxy, daarna afgewerkt met nieuwe antifouling.",
 "st.o.1":"Terugschuren tot gezond laminaat in een afgesloten tent","st.o.2":"Het hele onderwaterschip, met stofafzuiging","st.o.3":"Klaar: een gladde, beschermde romp",
 "st.a.t":"Voorbereiding voor antifouling","st.a.p":"Voordat de antifouling erop gaat, wordt de romp gereinigd, geschuurd, afgeplakt en gegrond.",
 "st.a.1":"Waterlijn afgeplakt, romp geschuurd","st.a.2":"Primer op de kale romp","st.a.3":"Elke rand met de hand",
 "fn.eyebrow":"Klaar voor het seizoen","fn.title":"Weer op het water.",
 "fn.1":"Antifouling en polijsten","fn.2":"Polijsten","fn.3":"Polijsten en antifouling","fn.4":"Linssen: polijsten, dieptereiniging en antifouling","fn.5":"Antifouling en meer, klaar om te water te gaan","fn.6":"Antifouling",
 "s.teak":"Teak & dekbelegging","s.teak.d":"Teak gereinigd, hersteld en beschermd, of een nieuw U-Dek-schuimdek op maat.",
 "svc.all13":"Bekijk alle 14 diensten","ph.services.lede":"14 diensten onder één dak in Wanssum, altijd met gratis hijsen.",
 "svc.how":"Zo doen we het","sd.eyebrow":"Dienst voor dienst","sd.title":"Zo werken wij.","sd.lede":"Wat elke dienst inhoudt en hoe we het aanpakken, stap voor stap. Tik op een stap voor meer uitleg.",
 "sd.steps":"Zo doen we het","sd.book":"Toevoegen aan aanvraag","sd.with":"We werken met","sd.official":"Officiële partner","sd.step":"Stap",
 "team.eyebrow":"Uw aanspreekpunt","team.title":"Maak kennis met Oleh Shevchuk.","team.role":"Algemeen directeur · Verkoop",
 "team.p1":"Oleh is algemeen directeur van Boatlab BV en de persoon die u spreekt als u contact met ons opneemt. Hij bekijkt samen met u de boot, luistert naar wat u nodig hebt en maakt voor elke klant een persoonlijke offerte, met een heldere prijs en planning.",
 "team.p2":"Van het eerste telefoontje tot uw boot weer in het water ligt, is Oleh uw vaste aanspreekpunt. Hij houdt u op de hoogte en zorgt dat het werk gebeurt zoals afgesproken.",
 "team.cta":"Neem contact op",
 "pa.eyebrow":"Partners","pa.focusTag":"Hoofdpartner","pa.focusTitle":"Focus Motor Yachts & Focus Marine Center","pa.focusHead":"Jachtbouwer en servicewerf, zij aan zij.",
 "pa.focusText":"BoatLab werkt zij aan zij met Focus, de Nederlandse bouwer van motorjachten zoals de Focus Power 44, vanaf het terrein van Focus Marine Center in Wanssum. In hun hallen, aan hun kade en met hun 30-tons kraan wordt uw boot gehesen, gestald en behandeld.",
 "pa.brandsTitle":"Producten waarop we vertrouwen","pa.brandsLede":"Op de boten van onze klanten gebruiken we alleen premium merken die we kennen en vertrouwen.",
 "pa.hempel":"Antifouling, rompreparatie & verf","pa.renskib":"Polijstmiddelen, pasta's & reiniging","pa.udek":"Hoogwaardige schuim-dekbelegging",
 "fac.c7":"Werf & kraan","fac.c7s":"Onze overdekte werf, kade en 30-tons kraan aan de Maas","fac.c8":"Refithal","fac.c8s":"Hier zagen en bereiden we elk onderdeel voor op montage",
 "fac.c9":"Focus-jachten binnen","fac.c9s":"Een Focus-motorjacht in de binnenhal","fac.c10":"Kraanmachinist","fac.c10s":"Elke hijs zorgvuldig uitgevoerd door ons eigen team",
 "fac.c11":"Focus Power 44","fac.c11s":"Gebouwd door onze partner Focus Motor Yachts","fac.c12":"Cigarette Top Gun","fac.c12s":"Ook bijzondere boten zijn welkom",
 "fac.c6s":"Op afstand bestuurbaar transport over de werf",
 "fac.c13":"Vanuit de lucht","fac.c13s":"De hele werf en haven aan de Maas","fac.c14":"Hal & kraan","fac.c14s":"De hal van Focus Marine Center met onze 30-tons kraan"
},
de:{
 "ba.t1":"Antifouling · Bug","ba.t3":"Antifouling · Rumpfseite","ba.t4":"Antifouling · neue Farbe",
 "ba.note":"Gleiches Boot, gleicher Winkel: fotografiert vor Arbeitsbeginn und nach dem neuen Hempel-Antifouling.",
 "pol.eyebrow":"Polieren","pol.title":"Von matt zu tiefem Glanz.","pol.lede":"Maschinelles Polieren mit Renskib-Compounds entfernt Oxidation und feine Kratzer und bringt die Farbe zurück.",
 "pol.c1":"Dunkelgrauer Rumpf, vor und nach dem Polieren.","pol.c2":"Blauer Rumpf mit Testfläche: links unbehandelt, rechts poliert.",
 "st.eyebrow":"Hinter den Kulissen","st.title":"So entsteht das Ergebnis.","st.lede":"Ein gutes Finish beginnt mit sorgfältiger Vorbereitung. Zwei Aufträge, Schritt für Schritt.",
 "st.o.t":"Osmosesanierung","st.o.p":"Altes Gelcoat entfernt, Rumpf getrocknet und mit Hempel-Epoxid neu aufgebaut, danach mit neuem Antifouling versehen.",
 "st.o.1":"Abschleifen bis auf gesundes Laminat im abgeschlossenen Zelt","st.o.2":"Das gesamte Unterwasserschiff, mit Staubabsaugung","st.o.3":"Fertig: ein glatter, geschützter Rumpf",
 "st.a.t":"Vorbereitung fürs Antifouling","st.a.p":"Bevor das Antifouling aufgetragen wird, wird der Rumpf gereinigt, geschliffen, abgeklebt und grundiert.",
 "st.a.1":"Wasserlinie abgeklebt, Rumpf geschliffen","st.a.2":"Grundierung auf dem blanken Rumpf","st.a.3":"Jede Kante von Hand",
 "fn.eyebrow":"Bereit für die Saison","fn.title":"Zurück auf dem Wasser.",
 "fn.1":"Antifouling und Politur","fn.2":"Politur","fn.3":"Politur und Antifouling","fn.4":"Linssen: Politur, Tiefenreinigung und Antifouling","fn.5":"Antifouling und mehr, bereit zum Einwassern","fn.6":"Antifouling",
 "s.teak":"Teak & Decksbelag","s.teak.d":"Teak gereinigt, aufgearbeitet und geschützt, oder ein neues U-Dek-Schaumdeck nach Maß.",
 "svc.all13":"Alle 14 Leistungen ansehen","ph.services.lede":"14 Leistungen unter einem Dach in Wanssum, immer mit kostenlosem Kranen.",
 "svc.how":"So machen wir es","sd.eyebrow":"Leistung für Leistung","sd.title":"So arbeiten wir.","sd.lede":"Was jede Leistung umfasst und wie wir vorgehen, Schritt für Schritt. Tippen Sie auf einen Schritt für Details.",
 "sd.steps":"So machen wir es","sd.book":"Zur Anfrage hinzufügen","sd.with":"Wir arbeiten mit","sd.official":"Offizieller Partner","sd.step":"Schritt",
 "team.eyebrow":"Ihr Ansprechpartner","team.title":"Lernen Sie Oleh Shevchuk kennen.","team.role":"Geschäftsführer · Vertrieb",
 "team.p1":"Oleh ist Geschäftsführer der Boatlab BV und Ihr Gesprächspartner, wenn Sie uns kontaktieren. Er schaut sich Ihr Boot gemeinsam mit Ihnen an, hört zu, was Sie brauchen, und erstellt für jeden Kunden ein persönliches Angebot mit klarem Preis und Zeitplan.",
 "team.p2":"Vom ersten Anruf bis Ihr Boot wieder im Wasser liegt, ist Oleh Ihr fester Ansprechpartner. Er hält Sie auf dem Laufenden und sorgt dafür, dass die Arbeit so ausgeführt wird wie vereinbart.",
 "team.cta":"Kontakt aufnehmen",
 "pa.eyebrow":"Partner","pa.focusTag":"Hauptpartner","pa.focusTitle":"Focus Motor Yachts & Focus Marine Center","pa.focusHead":"Yachtbauer und Servicewerft, Seite an Seite.",
 "pa.focusText":"BoatLab arbeitet Seite an Seite mit Focus, dem niederländischen Hersteller von Motoryachten wie der Focus Power 44, auf dem Gelände des Focus Marine Center in Wanssum. In ihren Hallen, an ihrem Kai und mit ihrem 30-Tonnen-Kran wird Ihr Boot gekrant, gelagert und behandelt.",
 "pa.brandsTitle":"Produkte, denen wir vertrauen","pa.brandsLede":"Auf den Booten unserer Kunden verwenden wir nur Premiummarken, die wir kennen und denen wir vertrauen.",
 "pa.hempel":"Antifouling, Rumpfreparatur & Lack","pa.renskib":"Polierpasten, Compounds & Reinigung","pa.udek":"Hochwertige Schaum-Decksbeläge",
 "fac.c7":"Werft & Kran","fac.c7s":"Unsere überdachte Werft, Kai und 30-t-Kran an der Maas","fac.c8":"Refit-Halle","fac.c8s":"Hier schneiden wir jedes Teil zu und bereiten es für die Montage vor",
 "fac.c9":"Focus-Yachten in der Halle","fac.c9s":"Eine Focus-Motoryacht in der Innenhalle","fac.c10":"Kranführer","fac.c10s":"Jeder Hub sorgfältig von unserem eigenen Team ausgeführt",
 "fac.c11":"Focus Power 44","fac.c11s":"Gebaut von unserem Partner Focus Motor Yachts","fac.c12":"Cigarette Top Gun","fac.c12s":"Auch besondere Boote sind willkommen",
 "fac.c6s":"Ferngesteuerter Transport über das Werftgelände",
 "fac.c13":"Aus der Luft","fac.c13s":"Die ganze Werft und der Hafen an der Maas","fac.c14":"Halle & Kran","fac.c14s":"Die Halle des Focus Marine Center mit unserem 30-t-Kran"
}};
for (const l in T3) Object.assign(T[l], T3[l]);

/* Service details: photos, partner brand and step-by-step text per language.
   Each service: i = introduction, s = steps as [title, text]. */
const SVC_INFO = {
  antifouling:{brand:"hempel", photos:[["af-primer.jpg","af.p1"],["af-prep-tape.jpg","af.p2"],["af-bow-after.jpg","af.p3"]]},
  osmosis:{brand:"hempel", photos:[["osmosis-repair.jpg","os.p1"],["osmosis-sanding.jpg","os.p2"],["osmosis-done.jpg","os.p3"]]},
  coating:{}, gelcoat:{brand:"hempel"}, lamination:{brand:"hempel"},
  polishing:{brand:"renskib", photos:[["polish-machine.jpg","po.p1"],["polish-superstructure.jpg","po.p2"],["polish-evening.jpg","po.p3"]]},
  painting:{brand:"hempel"},
  washing:{brand:"renskib", photos:[["wash-hull.jpg","wa.p1"],["wash-deck.jpg","wa.p2"],["clean-topsides.jpg","wa.p3"]]},
  interior:{photos:[["interior-cockpit.jpg","in.p1"],["interior-seats.jpg","in.p2"]]},
  teak:{brand:"udek", photos:[["teak-oil.jpg","te.p1"],["teak-detail.jpg","te.p2"]]},
  engine:{}, navigation:{}, inspection:{},
  refit:{photos:[["refit-hall.jpg","re.p1"]]}
};
const BRANDS = {hempel:{name:"Hempel", logo:"img/logo-hempel.png", official:true}, renskib:{name:"Renskib", logo:"img/logo-renskib.png"}, udek:{name:"U-Dek", logo:"img/logo-udek.png"}};

const SVC_TEXT = {
en:{
 antifouling:{i:"Antifouling keeps weed, slime and barnacles off the hull, so your boat stays fast and economical all season. We work with Hempel, our official partner and one of the best-known names in marine coatings, and choose the right antifouling for your boat, speed and sailing water.",
  s:[["Lift out & wash","Our crane lifts the boat out for free and we pressure-wash the hull straight away, before the fouling dries on."],["Inspect & sand","We check the hull for damage and blisters, and sand the old antifouling until the surface is sound and ready for new paint."],["Mask & prime","The waterline is taped off by hand and bare spots get a Hempel primer, so the new layers bond properly."],["Two coats of Hempel","We apply two coats of Hempel antifouling, with an extra coat on the waterline, bow and rudder where wear is highest."],["Dry & launch","After drying we touch up the spots where the boat stood on its supports and lift it back into the water."]]},
 osmosis:{i:"Osmosis happens when water slowly works its way into the laminate and forms blisters under the gelcoat. Left alone it weakens the hull. We measure, open up, dry and rebuild the hull with Hempel's epoxy system, inside a closed tent so conditions stay under control.",
  s:[["Measure moisture","With a moisture meter we map the hull and show you exactly where and how far osmosis has spread."],["Remove gelcoat","The affected gelcoat is removed and the blisters are opened, inside a sealed tent with dust extraction."],["Wash & dry","The hull is washed out and dried for several weeks, with regular readings until the laminate is dry."],["Rebuild with epoxy","We fill, fair and apply several coats of Hempel epoxy primer as a new waterproof barrier."],["Antifouling & launch","Fresh Hempel antifouling goes on top, and the boat is ready for many more seasons."]]},
 coating:{i:"A ceramic or protective coating forms a hard, slick layer on gelcoat and paint. Dirt and water run off, colours stay deep for longer and washing becomes much easier. It works best straight after polishing.",
  s:[["Wash & decontaminate","A thorough wash, then we remove embedded dirt and old wax so the coating can bond."],["Polish first","Machine polishing removes haze and fine scratches, because a coating locks in whatever is underneath."],["Degrease","Every panel is wiped with a special degreaser for a perfectly clean surface."],["Apply panel by panel","The coating is applied in small sections, levelled and buffed to a streak-free finish."],["Cure","The coating cures under cover before the boat goes back outside."]]},
 gelcoat:{i:"Chips, cracks and scratches in the gelcoat are more than cosmetic: they let water into the laminate. We repair them so you can barely see where the damage was. For deeper hull repairs we use Hempel fillers and primers.",
  s:[["Assess the damage","We check whether only the gelcoat is damaged or the laminate underneath as well."],["Grind out","The damaged area is ground out and the edges are bevelled, so the repair bonds over a wide surface."],["Fill & colour-match","We fill with gelcoat or Hempel filler and match the colour to your hull."],["Sand & polish","Wet sanding in steps up to a very fine grit, then polishing until the repair blends in."]]},
 lamination:{i:"When the laminate itself is damaged, after a collision, a grounding or a rotten core, we rebuild it layer by layer with glass fibre and polyester or epoxy resin, finished with Hempel products for a strong, watertight result.",
  s:[["Open up & assess","We remove damaged material until we reach sound laminate, then plan the repair."],["Build up layers","New glass-fibre mats are laid in with resin, each layer overlapping the last for strength."],["Cure & fair","After curing, the area is faired smooth with filler and sanding."],["Finish","Primer and gelcoat or Hempel paint finish the repair, ready for the water."]]},
 polishing:{i:"Sun, water and time make gelcoat dull and chalky. Machine polishing removes that oxidised top layer and brings back a deep gloss. We use Renskib compounds and polishes: professional Scandinavian products made for marine gelcoat and paint.",
  s:[["Wash & dry","The boat is washed with Renskib boat shampoo and dried, so no grit gets into the polishing pad."],["Mask","Rubbers, decals and stainless fittings are taped off to protect them."],["Compound","A cutting compound removes oxidation and fine scratches, panel by panel, by machine."],["Polish to gloss","A finer polish takes out the haze and brings up the depth and shine."],["Protect","A wax or sealant protects the fresh finish, so the gloss lasts."]]},
 painting:{i:"A good paint job is mostly preparation. We sand, fill and prime with care before the topcoat goes on. We paint with Hempel yacht paints, known worldwide for durability and colour that lasts.",
  s:[["Sand & clean","The old paint is sanded and the surface cleaned and degreased."],["Fill & fair","Dents and uneven spots are filled and faired for a smooth surface."],["Prime","A Hempel primer gives the right base for adhesion and durability."],["Topcoat","We apply the Hempel topcoat by roller, brush or spray, depending on the job."],["Check & cure","We check the finish in good light and let it cure fully before the boat is used."]]},
 washing:{i:"A thorough wash keeps your boat looking good and protects gelcoat, canvas and stainless steel. We wash by hand from waterline to flybridge, with Renskib cleaning products that are effective but kind to your boat.",
  s:[["Rinse","Loose dirt and sand are rinsed off first, so nothing scratches the surface."],["Foam & hand wash","Renskib shampoo and soft brushes clean the hull, deck and superstructure by hand."],["Details","Waterline stains, non-slip decks, fenders and stainless steel get extra attention."],["Rinse & dry","A final rinse and a streak-free dry, windows included."]]},
 interior:{i:"Cabins, upholstery, galley and heads deep-cleaned, so your boat feels fresh again when you step on board. Ideal at the start or the end of the season.",
  s:[["Empty & vacuum","We clear loose items and vacuum every corner and locker."],["Upholstery & fabrics","Cushions and fabrics are cleaned to remove stains, mould and odours."],["Galley & heads","Kitchen and toilets are cleaned and disinfected."],["Surfaces & wood","Woodwork, panels and windows are cleaned and cared for with suitable products."],["Air out","The boat is aired so it smells fresh and dries properly."]]},
 teak:{i:"Teak decks turn grey and rough over time. We clean and restore them to a warm, even colour and protect the wood. Want a new deck? As a U-Dek partner we can fit a high-quality foam marine deck: comfortable, non-slip, low-maintenance and made to measure.",
  s:[["Clean","Teak cleaner and a soft brush lift dirt and grey from the wood, along the grain."],["Sand & repair","Rough areas are lightly sanded and loose seams repaired where needed."],["Oil or seal","We protect the wood with teak oil or sealer, applied by hand."],["Or: a U-Dek deck","For a new deck we measure up, U-Dek makes the panels to size and we fit them."]]},
 inspection:{i:"Buying, selling or getting ready for the season? Our technical inspection gives you a clear picture of the boat's condition, from hull to helm, with photos and practical advice.",
  s:[["Hull & underwater","With the boat out of the water we check the hull, moisture readings, shaft, propeller and anodes."],["Deck & superstructure","Fittings, windows, hatches, railings and seals are checked for leaks and wear."],["Engine & systems","Engine, cooling, fuel, steering and bilge pumps are inspected."],["Electrics","Batteries, wiring, charging and electronics are tested."],["Report","You receive a clear report with photos and a list of what needs attention, and when."]]},
 refit:{i:"A refit can give an older boat a second life: a new interior, new systems, a new look. In our workshop and halls we handle complete refits, with one contact person from the first plan to the handover.",
  s:[["Your wishes","We inspect the boat together and listen to what you want to change."],["Plan & quote","You get a clear plan with a quote and schedule, so there are no surprises."],["Workshop","Carpentry, systems and finishing are done in our own hall, where we cut and prepare every piece."],["Updates","We keep you posted with photos and short updates during the work."],["Handover","We walk you through everything and test the boat with you before you set off."]]},
 engine:{i:"A yearly service keeps your engine reliable and prevents expensive breakdowns in the middle of the season. We service inboard and outboard engines following the manufacturer's schedule.",
  s:[["Oil & filters","Engine oil, oil filter and fuel filters are replaced."],["Cooling","Impeller, coolant and raw-water strainer are checked and replaced where needed."],["Belts, hoses & anodes","We check belts, hoses, clamps and anodes for wear."],["Test run","The engine is started and checked for leaks, temperature and smooth running."],["Logbook","Everything we did is recorded, so you know when the next service is due."]]},
 navigation:{i:"From a new chartplotter to a full electronics upgrade: we advise, install and connect navigation and onboard electronics, neatly wired and ready to use.",
  s:[["Advice","We look at how you use the boat and advise on the right equipment."],["Installation","Equipment is mounted and wired neatly, with proper connections and fuses."],["Set-up","Devices are linked and configured so they work together."],["Test & explain","We test everything and show you how it works."]]}
},
nl:{
 antifouling:{i:"Antifouling houdt wier, slijm en zeepokken van de romp, zodat uw boot het hele seizoen snel en zuinig blijft. We werken met Hempel, onze officiële partner en een van de bekendste namen in scheepscoatings, en kiezen de juiste antifouling voor uw boot, snelheid en vaarwater.",
  s:[["Uithijsen & wassen","Onze kraan hijst de boot gratis uit het water en we spuiten de romp direct schoon, voordat de aangroei opdroogt."],["Controleren & schuren","We controleren de romp op schade en blaasjes en schuren de oude antifouling tot de ondergrond gezond en klaar voor nieuwe verf is."],["Afplakken & gronden","De waterlijn wordt met de hand afgeplakt en kale plekken krijgen een Hempel-primer, zodat de nieuwe lagen goed hechten."],["Twee lagen Hempel","We brengen twee lagen Hempel-antifouling aan, met een extra laag op de waterlijn, boeg en het roer, waar de slijtage het grootst is."],["Drogen & te water","Na het drogen werken we de plekken bij waar de boot op de steunen stond en hijsen we hem terug in het water."]]},
 osmosis:{i:"Osmose ontstaat als water langzaam in het laminaat trekt en blaasjes vormt onder de gelcoat. Zonder behandeling verzwakt de romp. We meten, openen, drogen en bouwen de romp opnieuw op met het epoxysysteem van Hempel, in een afgesloten tent zodat de omstandigheden onder controle blijven.",
  s:[["Vocht meten","Met een vochtmeter brengen we de romp in kaart en laten we precies zien waar en hoe ver de osmose zit."],["Gelcoat verwijderen","De aangetaste gelcoat wordt verwijderd en de blaasjes worden geopend, in een afgesloten tent met stofafzuiging."],["Wassen & drogen","De romp wordt uitgewassen en enkele weken gedroogd, met regelmatige metingen tot het laminaat droog is."],["Opbouwen met epoxy","We plamuren, vlakken uit en brengen meerdere lagen Hempel-epoxyprimer aan als nieuwe waterdichte barrière."],["Antifouling & te water","Er komt verse Hempel-antifouling op, en de boot kan weer vele seizoenen mee."]]},
 coating:{i:"Een keramische of beschermende coating vormt een harde, gladde laag op gelcoat en lak. Vuil en water lopen eraf, kleuren blijven langer diep en wassen gaat veel makkelijker. Het beste direct na het polijsten.",
  s:[["Wassen & ontsmetten","Grondig wassen, daarna verwijderen we ingetrokken vuil en oude was zodat de coating kan hechten."],["Eerst polijsten","Machinaal polijsten verwijdert waas en fijne krassen, want een coating sluit alles eronder in."],["Ontvetten","Elk vlak wordt met een speciale ontvetter afgenomen voor een perfect schone ondergrond."],["Vlak voor vlak aanbrengen","De coating gaat er in kleine delen op, wordt gelijkgetrokken en streeploos uitgepoetst."],["Uitharden","De coating hardt overdekt uit voordat de boot weer naar buiten gaat."]]},
 gelcoat:{i:"Beschadigingen, scheurtjes en krassen in de gelcoat zijn meer dan cosmetisch: ze laten water in het laminaat. Wij herstellen ze zo dat u nauwelijks ziet waar de schade zat. Voor diepere rompreparaties gebruiken we plamuur en primers van Hempel.",
  s:[["Schade beoordelen","We kijken of alleen de gelcoat beschadigd is of ook het laminaat eronder."],["Uitslijpen","De schade wordt uitgeslepen en de randen worden schuin afgewerkt, zodat de reparatie over een groot vlak hecht."],["Vullen & kleur matchen","We vullen met gelcoat of Hempel-plamuur en stemmen de kleur af op uw romp."],["Schuren & polijsten","Nat schuren in stappen tot een heel fijne korrel, daarna polijsten tot de reparatie wegvalt."]]},
 lamination:{i:"Is het laminaat zelf beschadigd, na een aanvaring, vastloper of rotte kern, dan bouwen we het laag voor laag opnieuw op met glasvezel en polyester- of epoxyhars, afgewerkt met Hempel-producten voor een sterk, waterdicht resultaat.",
  s:[["Openen & beoordelen","We verwijderen beschadigd materiaal tot we bij gezond laminaat zijn en plannen de reparatie."],["Lagen opbouwen","Nieuwe glasvezelmatten worden met hars ingelegd, elke laag overlappend voor extra sterkte."],["Uitharden & uitvlakken","Na het uitharden wordt het vlak glad gemaakt met plamuur en schuren."],["Afwerken","Primer en gelcoat of Hempel-lak maken de reparatie af, klaar voor het water."]]},
 polishing:{i:"Zon, water en tijd maken gelcoat dof en krijtachtig. Machinaal polijsten verwijdert die geoxideerde toplaag en brengt een diepe glans terug. We gebruiken compounds en polijstmiddelen van Renskib: professionele Scandinavische producten, gemaakt voor gelcoat en lak op boten.",
  s:[["Wassen & drogen","De boot wordt gewassen met Renskib-bootshampoo en gedroogd, zodat er geen vuil in het polijstpad komt."],["Afplakken","Rubbers, stickers en rvs-beslag worden afgeplakt ter bescherming."],["Compound","Een schurende compound verwijdert oxidatie en fijne krassen, vlak voor vlak, met de machine."],["Polijsten tot glans","Een fijnere polish haalt het waas weg en brengt diepte en glans terug."],["Beschermen","Een was of sealant beschermt de nieuwe afwerking, zodat de glans blijft."]]},
 painting:{i:"Een goede lakklus is vooral voorbereiding. We schuren, plamuren en gronden zorgvuldig voordat de toplaag erop gaat. We lakken met jachtlakken van Hempel, wereldwijd bekend om hun duurzaamheid en kleurvastheid.",
  s:[["Schuren & reinigen","De oude lak wordt geschuurd en de ondergrond gereinigd en ontvet."],["Plamuren & uitvlakken","Deuken en oneffenheden worden geplamuurd en uitgevlakt."],["Gronden","Een Hempel-primer zorgt voor de juiste basis voor hechting en duurzaamheid."],["Toplaag","We brengen de Hempel-toplaag aan met roller, kwast of spuit, afhankelijk van de klus."],["Controle & uitharden","We controleren de afwerking bij goed licht en laten alles volledig uitharden."]]},
 washing:{i:"Een grondige wasbeurt houdt uw boot mooi en beschermt gelcoat, kap en rvs. We wassen met de hand, van waterlijn tot flybridge, met reinigingsmiddelen van Renskib die effectief zijn maar mild voor uw boot.",
  s:[["Afspoelen","Los vuil en zand spoelen we eerst af, zodat niets het oppervlak krast."],["Schuim & handwas","Renskib-shampoo en zachte borstels reinigen romp, dek en opbouw met de hand."],["Details","Waterlijnvlekken, antislipdekken, stootwillen en rvs krijgen extra aandacht."],["Naspoelen & drogen","Een laatste spoelbeurt en streeploos drogen, ramen inbegrepen."]]},
 interior:{i:"Kajuiten, bekleding, kombuis en toiletten grondig gereinigd, zodat uw boot weer fris aanvoelt als u aan boord stapt. Ideaal aan het begin of eind van het seizoen.",
  s:[["Leeghalen & stofzuigen","We ruimen losse spullen op en zuigen elke hoek en kast."],["Bekleding & stoffen","Kussens en stoffen worden gereinigd tegen vlekken, schimmel en geurtjes."],["Kombuis & toilet","Keuken en toiletten worden gereinigd en gedesinfecteerd."],["Oppervlakken & hout","Houtwerk, panelen en ramen worden gereinigd en verzorgd met geschikte middelen."],["Luchten","De boot wordt gelucht zodat hij fris ruikt en goed droogt."]]},
 teak:{i:"Teakdekken worden na verloop van tijd grijs en ruw. Wij reinigen en herstellen ze tot een warme, egale kleur en beschermen het hout. Liever een nieuw dek? Als U-Dek-partner leggen we hoogwaardige schuim-dekbelegging: comfortabel, antislip, onderhoudsarm en op maat gemaakt.",
  s:[["Reinigen","Teakreiniger en een zachte borstel halen vuil en grijs uit het hout, met de nerf mee."],["Schuren & herstellen","Ruwe plekken worden licht geschuurd en losse naden hersteld waar nodig."],["Oliën of sealen","We beschermen het hout met teakolie of sealer, met de hand aangebracht."],["Of: een U-Dek-dek","Voor een nieuw dek meten we in, maakt U-Dek de panelen op maat en leggen wij ze."]]},
 inspection:{i:"Kopen, verkopen of klaarmaken voor het seizoen? Onze technische keuring geeft u een helder beeld van de staat van de boot, van romp tot roer, met foto's en praktisch advies.",
  s:[["Romp & onderwaterschip","Met de boot uit het water controleren we romp, vochtwaarden, as, schroef en anodes."],["Dek & opbouw","Beslag, ramen, luiken, railing en afdichtingen worden gecontroleerd op lekkage en slijtage."],["Motor & systemen","Motor, koeling, brandstof, besturing en lenspompen worden gekeurd."],["Elektra","Accu's, bedrading, laden en elektronica worden getest."],["Rapport","U krijgt een helder rapport met foto's en een lijst van wat aandacht nodig heeft, en wanneer."]]},
 refit:{i:"Een refit kan een oudere boot een tweede leven geven: een nieuw interieur, nieuwe systemen, een nieuwe uitstraling. In onze werkplaats en hallen doen we complete refits, met één aanspreekpunt van het eerste plan tot de oplevering.",
  s:[["Uw wensen","We bekijken de boot samen en luisteren naar wat u wilt veranderen."],["Plan & offerte","U krijgt een helder plan met offerte en planning, zonder verrassingen."],["Werkplaats","Timmerwerk, systemen en afwerking gebeuren in onze eigen hal, waar we elk onderdeel zagen en voorbereiden."],["Updates","Tijdens het werk houden we u op de hoogte met foto's en korte updates."],["Oplevering","We lopen alles met u door en testen de boot samen voordat u vertrekt."]]},
 engine:{i:"Een jaarlijkse beurt houdt uw motor betrouwbaar en voorkomt dure pech midden in het seizoen. We onderhouden binnen- en buitenboordmotoren volgens het schema van de fabrikant.",
  s:[["Olie & filters","Motorolie, oliefilter en brandstoffilters worden vervangen."],["Koeling","Impeller, koelvloeistof en buitenwaterfilter worden gecontroleerd en waar nodig vervangen."],["Riemen, slangen & anodes","We controleren riemen, slangen, klemmen en anodes op slijtage."],["Proefdraaien","De motor wordt gestart en gecontroleerd op lekkage, temperatuur en rustig lopen."],["Logboek","Alles wat we deden wordt vastgelegd, zodat u weet wanneer de volgende beurt is."]]},
 navigation:{i:"Van een nieuwe kaartplotter tot een complete elektronica-upgrade: we adviseren, installeren en koppelen navigatie en boordelektronica, netjes bedraad en klaar voor gebruik.",
  s:[["Advies","We kijken hoe u de boot gebruikt en adviseren over de juiste apparatuur."],["Installatie","Apparatuur wordt netjes gemonteerd en bedraad, met goede aansluitingen en zekeringen."],["Instellen","Apparaten worden gekoppeld en ingesteld zodat ze samenwerken."],["Testen & uitleggen","We testen alles en laten u zien hoe het werkt."]]}
},
de:{
 antifouling:{i:"Antifouling hält Algen, Schleim und Seepocken vom Rumpf fern, damit Ihr Boot die ganze Saison schnell und sparsam bleibt. Wir arbeiten mit Hempel, unserem offiziellen Partner und einem der bekanntesten Namen für Bootsbeschichtungen, und wählen das richtige Antifouling für Ihr Boot, Ihre Geschwindigkeit und Ihr Revier.",
  s:[["Auskranen & waschen","Unser Kran hebt das Boot kostenlos aus dem Wasser, und wir reinigen den Rumpf sofort mit Hochdruck, bevor der Bewuchs antrocknet."],["Prüfen & schleifen","Wir prüfen den Rumpf auf Schäden und Blasen und schleifen das alte Antifouling, bis der Untergrund gesund und bereit für neue Farbe ist."],["Abkleben & grundieren","Die Wasserlinie wird von Hand abgeklebt, blanke Stellen erhalten eine Hempel-Grundierung, damit die neuen Schichten gut haften."],["Zwei Schichten Hempel","Wir tragen zwei Schichten Hempel-Antifouling auf, mit einer zusätzlichen Schicht an Wasserlinie, Bug und Ruder, wo der Verschleiß am größten ist."],["Trocknen & einwassern","Nach dem Trocknen bessern wir die Stellen aus, an denen das Boot auf den Stützen stand, und kranen es zurück ins Wasser."]]},
 osmosis:{i:"Osmose entsteht, wenn Wasser langsam ins Laminat eindringt und Blasen unter dem Gelcoat bildet. Unbehandelt schwächt das den Rumpf. Wir messen, öffnen, trocknen und bauen den Rumpf mit dem Epoxid-System von Hempel neu auf, in einem geschlossenen Zelt, damit die Bedingungen unter Kontrolle bleiben.",
  s:[["Feuchtigkeit messen","Mit einem Feuchtemessgerät erfassen wir den Rumpf und zeigen Ihnen genau, wo und wie weit die Osmose reicht."],["Gelcoat entfernen","Das betroffene Gelcoat wird entfernt und die Blasen werden geöffnet, im abgeschlossenen Zelt mit Staubabsaugung."],["Waschen & trocknen","Der Rumpf wird ausgewaschen und mehrere Wochen getrocknet, mit regelmäßigen Messungen, bis das Laminat trocken ist."],["Aufbau mit Epoxid","Wir spachteln, schleifen und tragen mehrere Schichten Hempel-Epoxidgrundierung als neue wasserdichte Sperre auf."],["Antifouling & einwassern","Frisches Hempel-Antifouling kommt darüber, und das Boot ist bereit für viele weitere Saisons."]]},
 coating:{i:"Eine Keramik- oder Schutzbeschichtung bildet eine harte, glatte Schicht auf Gelcoat und Lack. Schmutz und Wasser perlen ab, Farben bleiben länger tief und das Waschen wird viel einfacher. Am besten direkt nach dem Polieren.",
  s:[["Waschen & dekontaminieren","Gründliche Wäsche, dann entfernen wir festsitzenden Schmutz und altes Wachs, damit die Beschichtung haftet."],["Erst polieren","Maschinelles Polieren entfernt Schleier und feine Kratzer, denn eine Beschichtung versiegelt alles darunter."],["Entfetten","Jede Fläche wird mit einem speziellen Entfetter abgewischt, für einen perfekt sauberen Untergrund."],["Fläche für Fläche","Die Beschichtung wird in kleinen Abschnitten aufgetragen, verteilt und streifenfrei auspoliert."],["Aushärten","Die Beschichtung härtet unter Dach aus, bevor das Boot wieder nach draußen geht."]]},
 gelcoat:{i:"Macken, Risse und Kratzer im Gelcoat sind mehr als ein Schönheitsfehler: Sie lassen Wasser ins Laminat. Wir reparieren sie so, dass man die Stelle kaum noch sieht. Für tiefere Rumpfreparaturen verwenden wir Spachtel und Grundierungen von Hempel.",
  s:[["Schaden prüfen","Wir prüfen, ob nur das Gelcoat beschädigt ist oder auch das Laminat darunter."],["Ausschleifen","Die Schadstelle wird ausgeschliffen und die Ränder werden angeschrägt, damit die Reparatur großflächig haftet."],["Füllen & Farbe angleichen","Wir füllen mit Gelcoat oder Hempel-Spachtel und gleichen die Farbe an Ihren Rumpf an."],["Schleifen & polieren","Nassschleifen in Stufen bis zu einer sehr feinen Körnung, dann polieren, bis die Reparatur verschwindet."]]},
 lamination:{i:"Ist das Laminat selbst beschädigt, nach einer Kollision, Grundberührung oder einem morschen Kern, bauen wir es Schicht für Schicht mit Glasfaser und Polyester- oder Epoxidharz neu auf, abgeschlossen mit Hempel-Produkten für ein starkes, wasserdichtes Ergebnis.",
  s:[["Öffnen & prüfen","Wir entfernen beschädigtes Material bis zum gesunden Laminat und planen die Reparatur."],["Schichten aufbauen","Neue Glasfasermatten werden mit Harz eingelegt, jede Schicht überlappend für mehr Festigkeit."],["Aushärten & glätten","Nach dem Aushärten wird die Fläche mit Spachtel und Schleifen geglättet."],["Abschluss","Grundierung und Gelcoat oder Hempel-Lack schließen die Reparatur ab, bereit fürs Wasser."]]},
 polishing:{i:"Sonne, Wasser und Zeit machen Gelcoat matt und kreidig. Maschinelles Polieren entfernt die oxidierte Oberschicht und bringt tiefen Glanz zurück. Wir verwenden Compounds und Polituren von Renskib: professionelle skandinavische Produkte, entwickelt für Gelcoat und Lack auf Booten.",
  s:[["Waschen & trocknen","Das Boot wird mit Renskib-Bootsshampoo gewaschen und getrocknet, damit kein Schmutz ins Polierpad gelangt."],["Abkleben","Gummis, Aufkleber und Edelstahlbeschläge werden zum Schutz abgeklebt."],["Compound","Ein Schleif-Compound entfernt Oxidation und feine Kratzer, Fläche für Fläche, mit der Maschine."],["Auf Glanz polieren","Eine feinere Politur entfernt den Schleier und bringt Tiefe und Glanz."],["Schützen","Wachs oder Versiegelung schützt das frische Finish, damit der Glanz hält."]]},
 painting:{i:"Eine gute Lackierung ist vor allem Vorbereitung. Wir schleifen, spachteln und grundieren sorgfältig, bevor der Decklack kommt. Wir lackieren mit Yachtlacken von Hempel, weltweit bekannt für Haltbarkeit und Farbbeständigkeit.",
  s:[["Schleifen & reinigen","Der alte Lack wird geschliffen, der Untergrund gereinigt und entfettet."],["Spachteln & glätten","Dellen und Unebenheiten werden gespachtelt und geglättet."],["Grundieren","Eine Hempel-Grundierung schafft die richtige Basis für Haftung und Haltbarkeit."],["Decklack","Wir tragen den Hempel-Decklack mit Rolle, Pinsel oder Spritzpistole auf, je nach Auftrag."],["Prüfen & aushärten","Wir prüfen das Finish bei gutem Licht und lassen alles vollständig aushärten."]]},
 washing:{i:"Eine gründliche Wäsche hält Ihr Boot schön und schützt Gelcoat, Persenning und Edelstahl. Wir waschen von Hand, von der Wasserlinie bis zur Flybridge, mit Reinigungsprodukten von Renskib, die wirksam und trotzdem schonend sind.",
  s:[["Abspülen","Loser Schmutz und Sand werden zuerst abgespült, damit nichts die Oberfläche zerkratzt."],["Schaum & Handwäsche","Renskib-Shampoo und weiche Bürsten reinigen Rumpf, Deck und Aufbau von Hand."],["Details","Wasserlinienränder, Antirutschdecks, Fender und Edelstahl bekommen besondere Aufmerksamkeit."],["Nachspülen & trocknen","Ein letztes Abspülen und streifenfreies Trocknen, Fenster inklusive."]]},
 interior:{i:"Kabinen, Polster, Pantry und Toiletten gründlich gereinigt, damit sich Ihr Boot wieder frisch anfühlt, wenn Sie an Bord gehen. Ideal zu Beginn oder am Ende der Saison.",
  s:[["Ausräumen & saugen","Wir räumen lose Gegenstände aus und saugen jede Ecke und jedes Fach."],["Polster & Stoffe","Kissen und Stoffe werden gegen Flecken, Schimmel und Gerüche gereinigt."],["Pantry & Toilette","Küche und Toiletten werden gereinigt und desinfiziert."],["Oberflächen & Holz","Holz, Paneele und Fenster werden mit geeigneten Mitteln gereinigt und gepflegt."],["Lüften","Das Boot wird gelüftet, damit es frisch riecht und gut trocknet."]]},
 teak:{i:"Teakdecks werden mit der Zeit grau und rau. Wir reinigen und arbeiten sie zu einer warmen, gleichmäßigen Farbe auf und schützen das Holz. Lieber ein neues Deck? Als U-Dek-Partner verlegen wir hochwertige Schaum-Decksbeläge: komfortabel, rutschfest, pflegeleicht und nach Maß gefertigt.",
  s:[["Reinigen","Teakreiniger und eine weiche Bürste lösen Schmutz und Grauschleier aus dem Holz, entlang der Maserung."],["Schleifen & ausbessern","Raue Stellen werden leicht geschliffen, lose Fugen bei Bedarf repariert."],["Ölen oder versiegeln","Wir schützen das Holz mit Teaköl oder Versiegelung, von Hand aufgetragen."],["Oder: ein U-Dek-Deck","Für ein neues Deck messen wir auf, U-Dek fertigt die Platten nach Maß, und wir verlegen sie."]]},
 inspection:{i:"Kaufen, verkaufen oder die Saison vorbereiten? Unsere technische Inspektion gibt Ihnen ein klares Bild vom Zustand des Bootes, vom Rumpf bis zum Steuer, mit Fotos und praktischen Empfehlungen.",
  s:[["Rumpf & Unterwasserschiff","Mit dem Boot an Land prüfen wir Rumpf, Feuchtewerte, Welle, Propeller und Anoden."],["Deck & Aufbau","Beschläge, Fenster, Luken, Reling und Dichtungen werden auf Undichtigkeit und Verschleiß geprüft."],["Motor & Systeme","Motor, Kühlung, Kraftstoff, Steuerung und Bilgepumpen werden inspiziert."],["Elektrik","Batterien, Verkabelung, Ladung und Elektronik werden getestet."],["Bericht","Sie erhalten einen klaren Bericht mit Fotos und einer Liste, was wann Aufmerksamkeit braucht."]]},
 refit:{i:"Ein Refit kann einem älteren Boot ein zweites Leben geben: ein neues Interieur, neue Systeme, ein neuer Look. In unserer Werkstatt und unseren Hallen übernehmen wir komplette Refits, mit einem Ansprechpartner vom ersten Plan bis zur Übergabe.",
  s:[["Ihre Wünsche","Wir sehen uns das Boot gemeinsam an und hören, was Sie ändern möchten."],["Plan & Angebot","Sie erhalten einen klaren Plan mit Angebot und Zeitplan, ohne Überraschungen."],["Werkstatt","Tischlerarbeiten, Systeme und Finish entstehen in unserer eigenen Halle, wo wir jedes Teil zuschneiden und vorbereiten."],["Updates","Während der Arbeit halten wir Sie mit Fotos und kurzen Updates auf dem Laufenden."],["Übergabe","Wir gehen alles mit Ihnen durch und testen das Boot gemeinsam, bevor Sie ablegen."]]},
 engine:{i:"Ein jährlicher Service hält Ihren Motor zuverlässig und verhindert teure Pannen mitten in der Saison. Wir warten Innenborder und Außenborder nach dem Plan des Herstellers.",
  s:[["Öl & Filter","Motoröl, Ölfilter und Kraftstofffilter werden gewechselt."],["Kühlung","Impeller, Kühlmittel und Seewasserfilter werden geprüft und bei Bedarf ersetzt."],["Riemen, Schläuche & Anoden","Wir prüfen Riemen, Schläuche, Schellen und Anoden auf Verschleiß."],["Probelauf","Der Motor wird gestartet und auf Lecks, Temperatur und ruhigen Lauf geprüft."],["Logbuch","Alle Arbeiten werden dokumentiert, damit Sie wissen, wann der nächste Service fällig ist."]]},
 navigation:{i:"Vom neuen Kartenplotter bis zum kompletten Elektronik-Upgrade: Wir beraten, installieren und vernetzen Navigation und Bordelektronik, sauber verkabelt und einsatzbereit.",
  s:[["Beratung","Wir schauen, wie Sie das Boot nutzen, und beraten zur passenden Ausrüstung."],["Installation","Geräte werden sauber montiert und verkabelt, mit ordentlichen Anschlüssen und Sicherungen."],["Einrichten","Geräte werden verbunden und eingerichtet, damit sie zusammenarbeiten."],["Testen & erklären","Wir testen alles und zeigen Ihnen, wie es funktioniert."]]}
}};

/* Photo captions inside the service details */
const SVC_CAP = {
en:{"af.p1":"Primer by hand before the antifouling","af.p2":"Waterline masked, hull prepared","af.p3":"Fresh antifouling","os.p1":"Sanding in a sealed tent","os.p2":"Back to sound laminate","os.p3":"Finished hull","po.p1":"Machine polishing the hull","po.p2":"Polishing the superstructure","po.p3":"Late shift, deep gloss","wa.p1":"Washing the transom","wa.p2":"Pressure washing the deck","wa.p3":"Cleaning the topsides","in.p1":"Cockpit after deep cleaning","in.p2":"Seats and deck cleaned","te.p1":"Oiling the teak deck","te.p2":"Every board by hand","re.p1":"Our refit hall"},
nl:{"af.p1":"Primer met de hand vóór de antifouling","af.p2":"Waterlijn afgeplakt, romp voorbereid","af.p3":"Verse antifouling","os.p1":"Schuren in een afgesloten tent","os.p2":"Terug tot gezond laminaat","os.p3":"Afgewerkte romp","po.p1":"Machinaal polijsten van de romp","po.p2":"Polijsten van de opbouw","po.p3":"Late dienst, diepe glans","wa.p1":"Wassen van de spiegel","wa.p2":"Dek schoonspuiten","wa.p3":"Reinigen van de opbouw","in.p1":"Kuip na dieptereiniging","in.p2":"Stoelen en dek gereinigd","te.p1":"Teakdek oliën","te.p2":"Elke plank met de hand","re.p1":"Onze refithal"},
de:{"af.p1":"Grundierung von Hand vor dem Antifouling","af.p2":"Wasserlinie abgeklebt, Rumpf vorbereitet","af.p3":"Frisches Antifouling","os.p1":"Schleifen im abgeschlossenen Zelt","os.p2":"Zurück zum gesunden Laminat","os.p3":"Fertiger Rumpf","po.p1":"Maschinelles Polieren des Rumpfes","po.p2":"Polieren des Aufbaus","po.p3":"Spätschicht, tiefer Glanz","wa.p1":"Waschen des Spiegels","wa.p2":"Deck mit Hochdruck reinigen","wa.p3":"Reinigung des Aufbaus","in.p1":"Cockpit nach der Tiefenreinigung","in.p2":"Sitze und Deck gereinigt","te.p1":"Teakdeck ölen","te.p2":"Jede Planke von Hand","re.p1":"Unsere Refit-Halle"}
};

let lang = "en";
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const t = k => (T[lang] && T[lang][k]) ?? T.en[k] ?? k;
const PAGE = ($("main[data-page]") || {dataset:{page:"home"}}).dataset.page;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const PAGE_TITLE = {services:"nav.services", results:"nav.results", about:"nav.why", facility:"nav.facility", contact:"nav.contact", privacy:"footer.privacy"};
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
        <span class="go">${t($("#bookForm") ? "svc.add" : "svc.how")}<svg><use href="#i-arrow"/></svg></span>
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
  else if ($("#svcDetails")) openDetail(card.dataset.id);
  else location.href = "services.html#svc-" + card.dataset.id;   // details live on the services page
});

/* ---------- service details with step bubbles ---------- */
const svcText = id => (SVC_TEXT[lang] && SVC_TEXT[lang][id]) || SVC_TEXT.en[id];
const capText = k => (SVC_CAP[lang] && SVC_CAP[lang][k]) || SVC_CAP.en[k] || "";
function renderDetails(){
  const box = $("#svcDetails"); if (!box) return;
  box.innerHTML = SERVICES.map((s, n) => {
    const info = SVC_INFO[s.id] || {}, tx = svcText(s.id), br = info.brand && BRANDS[info.brand];
    const photos = info.photos || [];
    const media = photos.length
      ? `<div class="sd-photos n${Math.min(photos.length,3)}">${photos.map(([src,cap]) => `<figure><img src="img/${src}" srcset="img/${src.replace(".jpg","-sm.jpg")} 800w, img/${src} 1600w" sizes="(max-width:860px) 50vw, 25vw" alt="${capText(cap)}" loading="lazy" decoding="async"><figcaption>${capText(cap)}</figcaption></figure>`).join("")}</div>`
      : `<div class="sd-art" aria-hidden="true"><span class="r1"></span><span class="r2"></span><span class="r3"></span><svg><use href="#s-${s.id}"/></svg></div>`;
    const brand = br ? `<div class="sd-brand"><span>${t("sd.with")}</span><img src="${br.logo}" alt="${br.name}" height="28" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><b hidden>${br.name}</b>${br.official ? `<em>${t("sd.official")}</em>` : ""}</div>` : "";
    return `<article class="sd${n%2 ? " flip" : ""}" id="svc-${s.id}" data-id="${s.id}">
      <div class="sd-media reveal">${media}</div>
      <div class="sd-body">
        <span class="eyebrow">${t("svc."+s.cat)}</span>
        <h3>${t("s."+s.id)}</h3>
        ${brand}
        <p class="sd-intro">${tx.i}</p>
        <p class="sd-label">${t("sd.steps")}</p>
        <div class="sd-steps" role="tablist" style="--n:${tx.s.length}">
          <span class="sd-track" aria-hidden="true"><i></i></span>
          ${tx.s.map((st, i) => `<button type="button" role="tab" aria-selected="${i===0}" aria-controls="sdp-${s.id}" data-step="${i}" title="${st[0]}"><span>${i+1}</span></button>`).join("")}
        </div>
        <div class="sd-bubble" id="sdp-${s.id}" role="tabpanel" aria-live="polite"><small>${t("sd.step")} 1/${tx.s.length}</small><b>${tx.s[0][0]}</b><p>${tx.s[0][1]}</p></div>
        <div><a class="btn" href="contact.html#book-${s.id}"><span>${t("sd.book")}</span><svg><use href="#i-arrow"/></svg></a></div>
      </div>
    </article>`;
  }).join("");
  $$(".sd", box).forEach(setupSteps);
  watchAnimations();
}
function showStep(art, i){
  const tx = svcText(art.dataset.id), n = tx.s.length;
  i = (i + n) % n; art.dataset.cur = i;
  $$(".sd-steps button", art).forEach((b, k) => { b.setAttribute("aria-selected", k===i); b.classList.toggle("past", k<i); });
  $(".sd-track i", art).style.width = (n > 1 ? i/(n-1)*100 : 0) + "%";
  const bub = $(".sd-bubble", art);
  bub.style.setProperty("--x", ((i + .5) / n * 100) + "%");
  bub.innerHTML = `<small>${t("sd.step")} ${i+1}/${n}</small><b>${tx.s[i][0]}</b><p>${tx.s[i][1]}</p>`;
  if (!reduceMotion){ bub.classList.remove("pop"); void bub.offsetWidth; bub.classList.add("pop"); }
}
function setupSteps(art){
  showStep(art, 0);
  $(".sd-steps", art).addEventListener("click", e => {
    const b = e.target.closest("button[data-step]"); if (!b) return;
    art.dataset.manual = "1"; showStep(art, +b.dataset.step);
  });
  $(".sd-steps", art).addEventListener("keydown", e => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault(); art.dataset.manual = "1";
    showStep(art, +art.dataset.cur + (e.key === "ArrowRight" ? 1 : -1));
    $('.sd-steps [aria-selected="true"]', art).focus();
  });
  // Play the steps one by one while the service is on screen, until someone taps a step.
  if (reduceMotion || !("IntersectionObserver" in window)) return;
  let timer = null;
  const io = new IntersectionObserver(([en]) => {
    clearInterval(timer);
    if (en.isIntersecting && !art.dataset.manual)
      timer = setInterval(() => art.dataset.manual ? clearInterval(timer) : showStep(art, +art.dataset.cur + 1), 3400);
  }, {threshold:.45});
  io.observe(art);
}
/* Looping animations run only while their section is on screen (saves CPU and battery). */
let animIO = null;
function watchAnimations(){
  if (!("IntersectionObserver" in window)) { $$(".sd, .cta-card, .hero-media").forEach(el => el.classList.add("in-view")); return; }
  animIO = animIO || new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle("in-view", e.isIntersecting)), {rootMargin:"15% 0px"});
  $$(".sd, .cta-card, .hero-media").forEach(el => animIO.observe(el));
}
watchAnimations();

/* Partner logo strip: drifts by itself, pauses under the pointer, and can be dragged or scrolled by hand. */
(function(){
  const strip = $("#logoStrip"); if (!strip) return;
  const track = $(".logo-track", strip);
  const setWidth = () => track.scrollWidth / 3;                 // the cards are repeated three times
  let paused = false, drag = null, idleUntil = 0, last = 0, acc = 0, visible = true;
  strip.scrollLeft = setWidth();
  const wrap = () => { const w = setWidth(); if (strip.scrollLeft >= w*2) strip.scrollLeft -= w; else if (strip.scrollLeft <= 0) strip.scrollLeft += w; };
  strip.addEventListener("scroll", wrap, {passive:true});
  if ("IntersectionObserver" in window) new IntersectionObserver(([e]) => visible = e.isIntersecting).observe(strip);
  const tick = now => {
    const dt = last ? Math.min(48, now - last) : 16; last = now;
    if (visible && !paused && !drag && now > idleUntil && !document.hidden){
      acc += dt * 0.03; const px = Math.floor(acc);
      if (px){ strip.scrollLeft += px; acc -= px; }
    }
    requestAnimationFrame(tick);
  };
  if (!reduceMotion) requestAnimationFrame(tick);
  const rest = ms => idleUntil = performance.now() + ms;
  strip.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") paused = true; });
  strip.addEventListener("pointerleave", () => paused = false);
  strip.addEventListener("pointerdown", e => { if (e.pointerType !== "mouse") return; drag = {x:e.clientX, s:strip.scrollLeft}; strip.setPointerCapture(e.pointerId); strip.classList.add("dragging"); });
  strip.addEventListener("pointermove", e => { if (drag) strip.scrollLeft = drag.s - (e.clientX - drag.x); });
  const end = () => { if (!drag) return; drag = null; strip.classList.remove("dragging"); rest(2500); };
  strip.addEventListener("pointerup", end); strip.addEventListener("pointercancel", end);
  strip.addEventListener("wheel", () => rest(2500), {passive:true});
  strip.addEventListener("touchstart", () => rest(3500), {passive:true});
  strip.addEventListener("touchend", () => rest(3500), {passive:true});
  strip.addEventListener("focus", () => paused = true); strip.addEventListener("blur", () => paused = false);
  strip.addEventListener("keydown", e => { if (e.key === "ArrowRight") strip.scrollLeft += 120; if (e.key === "ArrowLeft") strip.scrollLeft -= 120; });
})();

function openDetail(id){
  const art = $("#svc-"+id); if (!art) return;
  art.scrollIntoView({behavior: reduceMotion ? "auto" : "smooth", block:"start"});
  art.classList.remove("flash"); void art.offsetWidth; art.classList.add("flash");
  history.replaceState(null, "", "#svc-"+id);
}

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
  $$(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang===lang));
  document.title = PAGE === "home" ? t("title.home") : t(PAGE_TITLE[PAGE]) + " · BoatLab";
  const fl = $("#f-lang"); if (fl) fl.value = {en:"English",nl:"Nederlands",de:"Deutsch"}[lang];
  renderServices(); renderDetails(); renderReviews();
  $$(".js-privacy").forEach(a => a.href = "privacy.html#"+lang);
  const reg = $("#regIds"); if (reg) reg.textContent = [CONFIG.kvk && t("footer.kvk")+" "+CONFIG.kvk, CONFIG.vat && t("footer.vat")+" "+CONFIG.vat].filter(Boolean).join(" · ");
  requestAnimationFrame(() => {
    const lb = $(`.lang button[data-lang="${lang}"]`), th = $(".lang .thumb");
    if (lb && th){ th.style.width = lb.offsetWidth+"px"; th.style.transform = `translateX(${lb.offsetLeft-3}px)`; }
    moveThumb($("#svcTabs"), $('#svcTabs [aria-selected="true"]'));
  });
  try { localStorage.setItem("boatlab-lang", lang); } catch(_){}
}
$$(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

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
  // Same boat, same angle: full "before" and "after" photos on top of each other.
  const BA = {bow:["img/af-bow-before.jpg","img/af-bow-after.jpg"], side:["img/af-side-before.jpg","img/af-side-after.jpg"],
              grey:["img/af-grey-before.jpg","img/af-grey-after.jpg"]};
  $$("[data-ba]").forEach(b => b.addEventListener("click", () => {
    $$("[data-ba]").forEach(x => x.setAttribute("aria-pressed", x===b));
    const [bf, af] = BA[b.dataset.ba];
    cmp.classList.add("swap");
    setTimeout(() => {
      $(".before img", cmp).src = bf; $(".after img", cmp).src = af;
      range.value = 50; cmp.style.setProperty("--pos","50%");
      cmp.classList.remove("swap");
    }, reduceMotion ? 0 : 200);
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

/* ---------- background videos ---------- */
(function(){
  const vids = $$("video.bg-video"); if (!vids.length) return;
  const saveData = navigator.connection && navigator.connection.saveData;
  if (reduceMotion || saveData) return;                       // the poster image stays
  const start = v => {
    if (!v.dataset.mp4) return;
    const s = document.createElement("source"); s.src = v.dataset.mp4; s.type = "video/mp4"; v.appendChild(s);
    delete v.dataset.mp4; v.load();
    v.addEventListener("playing", () => v.classList.add("on"), {once:true});
    v.play().catch(() => {});
  };
  if (!("IntersectionObserver" in window)) { vids.forEach(start); return; }
  const io = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target;
    if (e.isIntersecting){ start(v); if (v.paused) v.play().catch(() => {}); }
    else if (!v.paused) v.pause();
  }), {rootMargin:"25% 0px"});
  vids.forEach(v => io.observe(v));
  document.addEventListener("visibilitychange", () => vids.forEach(v => document.hidden ? v.pause() : (v.classList.contains("on") && v.play().catch(() => {}))));
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
$$(".js-kvk").forEach(e => { if (CONFIG.kvk) e.innerHTML = "<br>KvK: " + CONFIG.kvk; });
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
  let l = T[h] ? h : null;
  if (!l){ try { l = localStorage.getItem("boatlab-lang"); } catch(_){} }
  if (!l){ const n = (navigator.language||"en").slice(0,2); l = T[n] ? n : "en"; }
  setLang(l);
  if (h.startsWith("book-")) setTimeout(() => preselectAndScroll(h.slice(5)), 60);
  if (h.startsWith("svc-")) setTimeout(() => openDetail(h.slice(4)), 60);
  addEventListener("resize", () => {
    moveThumb($("#svcTabs"), $('#svcTabs [aria-selected="true"]'));
    const lb = $(`.lang button[data-lang="${lang}"]`), th = $(".lang .thumb");
    if (lb && th){ th.style.width = lb.offsetWidth+"px"; th.style.transform = `translateX(${lb.offsetLeft-3}px)`; }
  });
})();
