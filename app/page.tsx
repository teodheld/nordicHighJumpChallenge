'use client';

import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'no'>('en');

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
      formatText: "The format is simple: two meets, combined results count. Cash prizes will be awarded to the top three athletes overall. The stage is set for personal bests, season's bests, and crowd-pleasing excitement right up to the final attempt.",
      invitationTitle: "Invitation Only",
      invitationText: "This is not an open-entry event – participation is by invitation only. Interested in being considered? Send us an email:",
      readyText: "Ready to fly? Nordic High Jump Challenge – Mariestad, July 12 → Bergen, July 16. Two cities. Two nights. One Nordic champion list.",
      moreInfo: "More information about the event will be announced soon.",
      date1Title: "📅 Mariestad, Sweden",
      date1Text: "July 12, 2025",
      date2Title: "📅 Bergen, Norway",
      date2Text: "July 16, 2025",
      levelTitle: "🏆 World Athletics Level D",
      levelText: "Officially approved meeting",
      prizeTitle: "💰 Cash Prizes",
      prizeText: "Top 3 overall winners",
      footer: "© 2025 Nordic High Jump Challenge. Part of Fanahoppet."
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
      formatText: "Formatet er enkelt: to stevner, og sammenlagtresultatene teller. Det deles ut pengepremier til de tre beste utøverne totalt. Scenen er satt for personlige rekorder, årsbester og publikumsvennlig spenning helt til siste forsøk.",
      invitationTitle: "Kun på invitasjon",
      invitationText: "Dette er ikke et åpnet stevne – deltakelse skjer kun via invitasjon. Interessert i å bli vurdert? Send oss en e-post:",
      readyText: "Klar til å fly? Nordic High Jump Challenge – Mariestad, 12. juli → Bergen, 16. juli. To byer. To kvelder. Én nordisk vinnerliste.",
      moreInfo: "Mer informasjon om arrangementet kommer snart.",
      date1Title: "📅 Mariestad, Sverige",
      date1Text: "12. juli 2025",
      date2Title: "📅 Bergen, Norge",
      date2Text: "16. juli 2025",
      levelTitle: "🏆 World Athletics Level D",
      levelText: "Offisielt godkjent stevne",
      prizeTitle: "💰 Pengepremier",
      prizeText: "Topp 3 sammenlagt",
      footer: "© 2025 Nordic High Jump Challenge. Del av Fanahoppet."
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setLanguage(language === 'en' ? 'no' : 'en')}
          className="bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition font-semibold text-gray-700"
        >
          {language === 'en' ? '🇳🇴 Norsk' : '🇬🇧 English'}
        </button>
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
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
      </header>

      {/* Key Info Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t.date1Title}
            </h3>
            <p className="text-gray-600 text-lg">{t.date1Text}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t.date2Title}
            </h3>
            <p className="text-gray-600 text-lg">{t.date2Text}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t.levelTitle}
            </h3>
            <p className="text-gray-600">{t.levelText}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t.prizeTitle}
            </h3>
            <p className="text-gray-600">{t.prizeText}</p>
          </div>
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