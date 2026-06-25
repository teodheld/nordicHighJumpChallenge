'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // Start with default language (no localStorage check initially)
  const [language, setLanguage] = useState<'en' | 'no' | 'sv'>('en');
  const [isClient, setIsClient] = useState(false);
  const [sponsorTextExpanded, setSponsorTextExpanded] = useState(false);

  // Load saved language after component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem('preferredLanguage');
    if (saved && (saved === 'en' || saved === 'no' || saved === 'sv')) {
      setLanguage(saved as 'en' | 'no' | 'sv');
    }
  }, []);

  // Save language when it changes
  const handleLanguageChange = (newLang: 'en' | 'no' | 'sv') => {
    setLanguage(newLang);
    if (isClient) {
      localStorage.setItem('preferredLanguage', newLang);
    }
  };

  const content = {
    en: {
      title: "Nordic High Jump Challenge",
      subtitle: "Where the Nordic high jumpers raise the bar!",
      tagline: "Two cities. One title.",
      registerBtn: "Contact for Invitation",
      aboutTitle: "About the Challenge",
      aboutText1: "The Nordic High Jump Challenge is a World Athletics-approved meeting (Level D) held across two competitions - first in Mariestad (Sweden) on July 12, and then in Bergen (Norway) on July 16.",
      aboutText2: "We're bringing together the best Nordic high jumpers along with top international athletes from other countries for an explosive summer showdown. Each evening's main event features the men's Level D competition, preceded by two F-ranked pre-events: a women's high jump and a separate men's high jump, each with their own group of athletes.",
      formatTitle: "Competition Format",
      formatText: "The format is simple: two meets, combined results count. Cash prizes will be awarded and the stage is set for personal bests, season's bests, and crowd-pleasing excitement right up to the final attempt.",
      invitationTitle: "Invitation Only",
      invitationText: "This is not an open-entry event - participation is by invitation only. Interested in being considered? Send us an email:",
      sponsorsTitle: "Sponsors & Co-organizers",
      sponsorsSubtitle: "Proud sponsors and co-organizers of the event",
      sponsor1Name: "Vänerport",
      sponsor1Desc: "Vänerport is an important partner and main sponsor of the Nordic High Jump Challenge. Through their commitment, they provide free accommodation for the athletes throughout their stay in Mariestad. This support is extremely valuable to the event and helps give the participants great conditions both on and off the competition arena.",
      sponsor2Name: "Norsk Friidrett Hordaland",
      sponsor2Desc: "Norsk Friidrett Hordaland is a co-organizer of the Nordic High Jump Challenge, contributing local expertise and helping run the event in Bergen.",
      sponsor3Name: "Länsförsäkringar Skaraborg",
      sponsor3Desc: "Länsförsäkringar Skaraborg is one of the sponsors of the Nordic High Jump Challenge, helping make the event possible through their local support in the Skaraborg region.",
      readMore: "Read more",
      readLess: "Read less",
      readyText: "Ready to fly? Nordic High Jump Challenge - Mariestad, July 12 → Bergen, July 16. Two cities. Two nights. One Nordic champion.",
      moreInfo: "More information about the event will be announced soon.",
      date1Title: "🗓️ MAIFhoppet, Sweden",
      date1Text: "July 12, 2026",
      date2Title: "🗓️ Fanahoppet, Norway",
      date2Text: "July 16, 2026",
      levelTitle: "🏆 World Athletics Level D",
      levelText: "Officially approved meeting",
      prizeTitle: "💰 Cash Prizes",
      prizeText: "Click for more info",
      athletesTitle: "🏃 Athletes",
      athletesText: "Meet the competitors",
      footer: "© 2025 Nordic High Jump Challenge. All rights reserved."
    },
    no: {
      title: "Nordic High Jump Challenge",
      subtitle: "Der de nordiske høydehopperne hever listen!",
      tagline: "To byer. Én tittel.",
      registerBtn: "Kontakt for invitasjon",
      aboutTitle: "Om utfordringen",
      aboutText1: "Nordic High Jump Challenge er et World Athletics-godkjent stevne (Level D) som arrangeres gjennom to konkurranser – først i Mariestad (Sverige) 12. juli, og deretter i Bergen (Norge) 16. juli.",
      aboutText2: "Vi samler de beste nordiske høydehopperne, i tillegg til topp internasjonale utøvere fra andre land, for et eksplosivt sommeroppgjør. Hvert stevne åpner med to F-rankede forøvelser – høydehopp for kvinner og høydehopp for menn – før kveldenes Level D-hovedkonkurranse avgjør hvem som blir nordisk høydehoppkonge. Begge forkampene har egne, separate utøvergrupper.",
      formatTitle: "Konkurranseformat",
      formatText: "Formatet er enkelt: to stevner, og sammenlagtresultatene teller. Det deles ut pengepremier og scenen er satt for personlige rekorder, årsbester og publikumsvennlig spenning helt til siste forsøk.",
      invitationTitle: "Kun på invitasjon",
      invitationText: "Dette er ikke et åpnet stevne – deltakelse skjer kun via invitasjon. Interessert i å bli vurdert? Send oss en e-post:",
      sponsorsTitle: "Sponsorer og medarrangører",
      sponsorsSubtitle: "Stolte sponsorer og medarrangører av arrangementet",
      sponsor1Name: "Vänerport",
      sponsor1Desc: "Vänerport er en viktig samarbeidspartner og hovedsponsor for Nordic High Jump Challenge. Gjennom sitt engasjement bidrar de med gratis innlosjering for utøverne under hele oppholdet i Mariestad. Denne støtten er svært verdifull for arrangementet og gjør det mulig å gi deltakerne gode rammer både på og utenfor konkurransearenaen.",
      sponsor2Name: "Norsk Friidrett Hordaland",
      sponsor2Desc: "Norsk Friidrett Hordaland er medarrangør av Nordic High Jump Challenge og bidrar med lokal kompetanse og gjennomføring av arrangementet i Bergen.",
      sponsor3Name: "Länsförsäkringar Skaraborg",
      sponsor3Desc: "Länsförsäkringar Skaraborg er en av sponsorene til Nordic High Jump Challenge og bidrar til å gjøre arrangementet mulig gjennom sin lokale støtte i Skaraborg-regionen.",
      readMore: "Les mer",
      readLess: "Vis mindre",
      readyText: "Klar til å fly? Nordic High Jump Challenge – Mariestad, 12. juli → Bergen, 16. juli. To byer. To kvelder. Én nordisk vinner.",
      moreInfo: "Mer informasjon om arrangementet kommer snart.",
      date1Title: "🗓️ MAIFhoppet, Sverige",
      date1Text: "12. juli 2026",
      date2Title: "🗓️ Fanahoppet, Norge",
      date2Text: "16. juli 2026",
      levelTitle: "🏆 World Athletics Level D",
      levelText: "Offisielt godkjent stevne",
      prizeTitle: "💰 Pengepremier",
      prizeText: "Trykk for mer info",
      athletesTitle: "🏃 Utøvere",
      athletesText: "Møt deltakerne",
      footer: "© 2025 Nordic High Jump Challenge. All rights reserved."
    },
    sv: {
      title: "Nordic High Jump Challenge",
      subtitle: "Där de nordiska höjdhopparna höjer ribban!",
      tagline: "Två städer. En titel.",
      registerBtn: "Kontakta för inbjudan",
      aboutTitle: "Om utmaningen",
      aboutText1: "Nordic High Jump Challenge är ett World Athletics-godkänt möte (Level D) som hålls över två tävlingar – först i Mariestad (Sverige) den 12 juli, och sedan i Bergen (Norge) den 16 juli.",
      aboutText2: "Vi samlar de bästa nordiska höjdhopparna tillsammans med toppinternationella idrottare från andra länder för en explosiv sommaruppgörelse. Varje kväll inleds med två F-rankade förevent — höjdhopp för kvinnor och höjdhopp för män — innan kvällens Level D-huvudtävling utser den nordiska höjdhoppskungen. Båda föreventen har egna, separata grupper av idrottare.",
      formatTitle: "Tävlingsformat",
      formatText: "Formatet är enkelt: två möten, sammanlagda resultat räknas. Kontantpriser kommer att delas ut och scenen är satt för personliga rekord, säsongens bästa och publikvänlig spänning ända fram till sista försöket.",
      invitationTitle: "Endast på inbjudan",
      invitationText: "Detta är inte en öppen tävling – deltagande sker endast via inbjudan. Intresserad av att bli övervägd? Skicka ett e-postmeddelande till oss:",
      sponsorsTitle: "Sponsorer och medarrangörer",
      sponsorsSubtitle: "Stolta sponsorer och medarrangörer av evenemanget",
      sponsor1Name: "Vänerport",
      sponsor1Desc: "Vänerport är en viktig samarbetspartner och huvudsponsor för Nordic High Jump Challenge. Genom sitt engagemang bidrar de med gratis boende för idrottarna under hela vistelsen i Mariestad. Detta stöd är mycket värdefullt för evenemanget och gör det möjligt att ge deltagarna goda förutsättningar både på och utanför tävlingsarenan.",
      sponsor2Name: "Norsk Friidrett Hordaland",
      sponsor2Desc: "Norsk Friidrett Hordaland är medarrangör av Nordic High Jump Challenge och bidrar med lokal kompetens och genomförande av evenemanget i Bergen.",
      sponsor3Name: "Länsförsäkringar Skaraborg",
      sponsor3Desc: "Länsförsäkringar Skaraborg är en av sponsorerna för Nordic High Jump Challenge och bidrar till att göra evenemanget möjligt genom sitt lokala stöd i Skaraborgsregionen.",
      readMore: "Läs mer",
      readLess: "Visa mindre",
      readyText: "Redo att flyga? Nordic High Jump Challenge – Mariestad, 12 juli → Bergen, 16 juli. Två städer. Två kvällar. En nordisk vinnar.",
      moreInfo: "Mer information om evenemanget kommer att meddelas snart.",
      date1Title: "🗓️ MAIFhoppet, Sverige",
      date1Text: "12 juli 2026",
      date2Title: "🗓️ Fanahoppet, Norge",
      date2Text: "16 juli 2026",
      levelTitle: "🏆 World Athletics Level D",
      levelText: "Officiellt godkänt möte",
      prizeTitle: "💰 Kontantpriser",
      prizeText: "Klicka för mer info",
      athletesTitle: "🏃 Idrottare",
      athletesText: "Möt deltagarna",
      footer: "© 2025 Nordic High Jump Challenge. All rights reserved."
    }
  };

  const t = content[language];

  // Replace image paths below with your actual sponsor logo filenames in /public/images/
  const sponsors = [
    { name: t.sponsor1Name, desc: t.sponsor1Desc, image: '/images/hotel.png' },
    { name: t.sponsor2Name, desc: t.sponsor2Desc, image: '/images/norskFriidrett.png' },
    { name: t.sponsor3Name, desc: t.sponsor3Desc, image: '/images/skaraborg.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-20">
        <select
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value as 'en' | 'no' | 'sv')}
          className="bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition font-semibold text-gray-700 cursor-pointer"
        >
          <option value="en">🇬🇧 English</option>
          <option value="no">🇳🇴 Norsk</option>
          <option value="sv">🇸🇪 Svenska</option>
        </select>
      </div>

      {/* Hero Section */}
      <header className="relative container mx-auto px-4 py-16 text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-25"
          style={{
            backgroundImage: 'url(/images/highjump-backround.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10">
          {/* Official Logos */}
          <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
            <img
              src="/images/world-athletics-logo.png"
              alt="World Athletics"
              className="h-24 w-24 object-contain"
            />
            <img
              src="/images/european-athletics-logo.png"
              alt="European Athletics"
              className="h-16 object-contain"
            />
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-2">
            {t.subtitle}
          </p>
          <p className="text-xl text-gray-600 mb-8">
            {t.tagline}
          </p>
          <a
            href="mailto:friidrett@fanail.no"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            {t.registerBtn}
          </a>
        </div>
      </header>

      {/* Key Info Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <Link href="/maif-hoppet">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer transform hover:scale-105 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.date1Title}
              </h3>
              <p className="text-gray-600">{t.date1Text}</p>
            </div>
          </Link>

          <Link href="/fana-hoppet">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer transform hover:scale-105 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.date2Title}
              </h3>
              <p className="text-gray-600">{t.date2Text}</p>
            </div>
          </Link>

          <Link href="/world-athletics">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer transform hover:scale-105 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.levelTitle}
              </h3>
              <p className="text-gray-600">{t.levelText}</p>
            </div>
          </Link>

          <Link href="/prizes">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer transform hover:scale-105 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.prizeTitle}
              </h3>
              <p className="text-gray-600">{t.prizeText}</p>
            </div>
          </Link>

          <Link href="/athletes">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer transform hover:scale-105 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.athletesTitle}
              </h3>
              <p className="text-gray-600">{t.athletesText}</p>
            </div>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {t.aboutTitle}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            {t.aboutText1}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t.aboutText2}
          </p>
        </div>
      </section>

      {/* Format Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              {t.formatTitle}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t.formatText}
            </p>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {t.invitationTitle}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            {t.invitationText}
          </p>
          <p className="text-center">
            <a
              href="mailto:friidrett@fanail.no"
              className="text-blue-600 hover:text-blue-800 font-semibold text-xl"
            >
              friidrett@fanail.no
            </a>
          </p>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            {t.sponsorsTitle}
          </h2>
          <p className="text-center text-gray-600 mb-10">
            {t.sponsorsSubtitle}
          </p>

          <div className="flex flex-col items-center justify-center gap-10">
            {/* Norsk Friidrett Hordaland */}
            <img
              src={sponsors[1].image}
              alt={sponsors[1].name}
              className="h-40 w-auto object-contain"
            />

            {/* Vänerport - centered, larger, with expandable text in its own div */}
            <div className="flex flex-col items-center text-center max-w-xl">
              <img
                src={sponsors[0].image}
                alt={sponsors[0].name}
                className="h-32 w-auto object-contain mb-4"
              />
              <p
                className={`text-gray-700 leading-relaxed text-sm ${
                  sponsorTextExpanded ? '' : 'line-clamp-2'
                }`}
              >
                {sponsors[0].desc}
              </p>
              <button
                onClick={() => setSponsorTextExpanded(!sponsorTextExpanded)}
                className="text-blue-600 hover:text-blue-800 text-sm font-semibold mt-2"
              >
                {sponsorTextExpanded ? t.readLess : t.readMore}
              </button>
            </div>

            {/* Länsförsäkringar Skaraborg */}
            <img
              src={sponsors[2].image}
              alt={sponsors[2].name}
              className="h-20 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-bold mb-4">
            {t.readyText}
          </p>
          <p className="text-lg opacity-90">
            {t.moreInfo}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            {t.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}