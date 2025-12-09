'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // Start with default language (no localStorage check initially)
  const [language, setLanguage] = useState<'en' | 'no' | 'sv'>('en');
  const [isClient, setIsClient] = useState(false);

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
      aboutText1: "The Nordic High Jump Challenge is a World Athletics–approved meeting (Level D) held across two competitions – first in Mariestad (Sweden) on July 12, and then in Bergen (Norway) on July 16.",
      aboutText2: "We're bringing together the best Nordic high jumpers along with top international athletes from other countries for an explosive summer showdown – for both men and women.",
      formatTitle: "Competition Format",
      formatText: "The format is simple: two meets, combined results count. Cash prizes will be awarded and the stage is set for personal bests, season's bests, and crowd-pleasing excitement right up to the final attempt.",
      invitationTitle: "Invitation Only",
      invitationText: "This is not an open-entry event – participation is by invitation only. Interested in being considered? Send us an email:",
      readyText: "Ready to fly? Nordic High Jump Challenge – Mariestad, July 12 → Bergen, July 16. Two cities. Two nights. One Nordic champion list.",
      moreInfo: "More information about the event will be announced soon.",
      date1Title: "🗓️ MAIFhoppet, Sweden",
      date1Text: "July 12, 2026",
      date2Title: "🗓️ Fanahoppet, Norway",
      date2Text: "July 16, 2026",
      levelTitle: "🏆 World Athletics Level D",
      levelText: "Officially approved meeting",
      prizeTitle: "💰 Cash Prizes",
      prizeText: "Click for more info",
      footer: "© 2025 Nordic High Jump Challenge. All rights reserved."
    },
    no: {
      title: "Nordic High Jump Challenge",
      subtitle: "Der de nordiske høydehopperne hever listen!",
      tagline: "To byer. Én tittel.",
      registerBtn: "Kontakt for invitasjon",
      aboutTitle: "Om utfordringen",
      aboutText1: "Nordic High Jump Challenge er et World Athletics-godkjent stevne (Level D) som arrangeres gjennom to konkurranser – først i Mariestad (Sverige) 12. juli, og deretter i Bergen (Norge) 16. juli.",
      aboutText2: "Vi samler de beste nordiske høydehopperne, i tillegg til topp internasjonale utøvere fra andre land, for et eksplosivt sommeroppgjør – både for menn og kvinner.",
      formatTitle: "Konkurranseformat",
      formatText: "Formatet er enkelt: to stevner, og sammenlagtresultatene teller. Det deles ut pengepremier og scenen er satt for personlige rekorder, årsbester og publikumsvennlig spenning helt til siste forsøk.",
      invitationTitle: "Kun på invitasjon",
      invitationText: "Dette er ikke et åpnet stevne – deltakelse skjer kun via invitasjon. Interessert i å bli vurdert? Send oss en e-post:",
      readyText: "Klar til å fly? Nordic High Jump Challenge – Mariestad, 12. juli → Bergen, 16. juli. To byer. To kvelder. Én nordisk vinnerliste.",
      moreInfo: "Mer informasjon om arrangementet kommer snart.",
      date1Title: "🗓️ MAIFhoppet, Sverige",
      date1Text: "12. juli 2026",
      date2Title: "🗓️ Fanahoppet, Norge",
      date2Text: "16. juli 2026",
      levelTitle: "🏆 World Athletics Level D",
      levelText: "Offisielt godkjent stevne",
      prizeTitle: "💰 Pengepremier",
      prizeText: "Trykk for mer info",
      footer: "© 2025 Nordic High Jump Challenge. All rights reserved."
    },
    sv: {
      title: "Nordic High Jump Challenge",
      subtitle: "Där de nordiska höjdhopparna höjer ribban!",
      tagline: "Två städer. En titel.",
      registerBtn: "Kontakta för inbjudan",
      aboutTitle: "Om utmaningen",
      aboutText1: "Nordic High Jump Challenge är ett World Athletics-godkänt möte (Level D) som hålls över två tävlingar – först i Mariestad (Sverige) den 12 juli, och sedan i Bergen (Norge) den 16 juli.",
      aboutText2: "Vi samlar de bästa nordiska höjdhopparna tillsammans med toppinternationella idrottare från andra länder för en explosiv sommaruppgörelse – för både män och kvinnor.",
      formatTitle: "Tävlingsformat",
      formatText: "Formatet är enkelt: två möten, sammanlagda resultat räknas. Kontantpriser kommer att delas ut och scenen är satt för personliga rekord, säsongens bästa och publikvänlig spänning ända fram till sista försöket.",
      invitationTitle: "Endast på inbjudan",
      invitationText: "Detta är inte en öppen tävling – deltagande sker endast via inbjudan. Intresserad av att bli övervägd? Skicka ett e-postmeddelande till oss:",
      readyText: "Redo att flyga? Nordic High Jump Challenge – Mariestad, 12 juli → Bergen, 16 juli. Två städer. Två kvällar. En nordisk vinnarlista.",
      moreInfo: "Mer information om evenemanget kommer att meddelas snart.",
      date1Title: "🗓️ MAIFhoppet, Sverige",
      date1Text: "12 juli 2026",
      date2Title: "🗓️ Fanahoppet, Norge",
      date2Text: "16 juli 2026",
      levelTitle: "🏆 World Athletics Level D",
      levelText: "Officiellt godkänt möte",
      prizeTitle: "💰 Kontantpriser",
      prizeText: "Klicka för mer info",
      footer: "© 2025 Nordic High Jump Challenge. Alla rättigheter förbehållna."
    }
  };

  const t = content[language];

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Link href="/mariestad">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer transform hover:scale-105 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t.date1Title}
              </h3>
              <p className="text-gray-600">{t.date1Text}</p>
            </div>
          </Link>

          <Link href="/bergen">
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