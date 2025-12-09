'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function WorldAthleticsPage() {
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
      backBtn: "← Back to Home",
      title: "World Athletics Level D",
      subtitle: "Official Competition Status",
      intro: "The Nordic High Jump Challenge is a World Athletics Level D competition, meaning it's an officially recognized international athletics meeting.",
      whatIsTitle: "What is a Level D Competition?",
      whatIs1: "World Athletics categorizes all competitions worldwide into 10 different categories for their World Rankings system: OW, DF, GW, GL, A, B, C, D, E, and F. Level D competitions are international invitation meetings that contribute to athletes' World Rankings points.",
      whatIs2: "While 99% of all competitions worldwide are classified as F level, Level D represents a significant step up in prestige and competitive value. These competitions attract strong fields of athletes and must adhere to World Athletics rules and regulations.",
      benefitsTitle: "Benefits for Athletes",
      benefit1Title: "World Rankings Points",
      benefit1Text: "Performances at Level D competitions contribute to athletes' World Rankings, which are crucial for qualification to major championships including the World Championships and Olympic Games.",
      benefit2Title: "International Competition",
      benefit2Text: "Level D meetings bring together quality athletes from multiple countries, providing valuable international competition experience.",
      benefit3Title: "Official Recognition",
      benefit3Text: "Results from Level D competitions are officially ratified by World Athletics and can count towards ranking positions and qualification standards.",
      benefit4Title: "Performance Opportunity",
      benefit4Text: "The combination of quality competition and official status creates an ideal environment for athletes to achieve personal bests and season's bests.",
      rankingsTitle: "World Rankings System",
      rankingsText: "Athletes earn both result scores (based on their performance) and placing scores (based on their finishing position and the competition category). At Level D competitions, the top 8 finishers receive placing scores ranging from 40 points for first place down to 5 points for eighth place in track and field events.",
      standardsTitle: "Competition Standards",
      standards1: "Must have a World Athletics or Area Association permit",
      standards2: "Must adhere to all World Athletics Technical Rules",
      standards3: "Results must be officially ratified",
      standards4: "Competition must be open to international athletes",
      standards5: "Must meet facility and equipment certification requirements",
      conclusionTitle: "Why It Matters",
      conclusionText: "Being designated as a World Athletics Level D competition ensures that the Nordic High Jump Challenge meets international standards and provides athletes with meaningful competition that can advance their careers and rankings on the world stage.",
      footer: "© 2025 Nordic High Jump Challenge. All rights reserved."
    },
    no: {
      backBtn: "← Tilbake til forsiden",
      title: "World Athletics Level D",
      subtitle: "Offisiell konkurransestatus",
      intro: "Nordic High Jump Challenge er en World Athletics Level D-konkurranse, noe som betyr at det er et offisielt anerkjent internasjonalt friidrettsstevne.",
      whatIsTitle: "Hva er en Level D-konkurranse?",
      whatIs1: "World Athletics kategoriserer alle konkurranser over hele verden i 10 forskjellige kategorier for sitt verdensrankingsystem: OW, DF, GW, GL, A, B, C, D, E og F. Level D-konkurranser er internasjonale invitasjonsstevner som bidrar til utøvernes verdensrankingpoeng.",
      whatIs2: "Selv om 99% av alle konkurranser over hele verden er klassifisert som F-nivå, representerer Level D et betydelig steg opp i prestisje og konkurranseverdi. Disse konkurransene tiltrekker seg sterke felt av utøvere og må følge World Athletics' regler og forskrifter.",
      benefitsTitle: "Fordeler for utøvere",
      benefit1Title: "Verdensrankingpoeng",
      benefit1Text: "Prestasjoner ved Level D-konkurranser bidrar til utøvernes verdensranking, som er avgjørende for kvalifisering til store mesterskap inkludert verdensmesterskapet og de olympiske leker.",
      benefit2Title: "Internasjonal konkurranse",
      benefit2Text: "Level D-stevner samler kvalitetsutøvere fra flere land, og gir verdifull internasjonal konkurranseerfaring.",
      benefit3Title: "Offisiell anerkjennelse",
      benefit3Text: "Resultater fra Level D-konkurranser blir offisielt ratifisert av World Athletics og kan telle mot rankingposisjoner og kvalifikasjonsstandarder.",
      benefit4Title: "Prestasjonsmulighet",
      benefit4Text: "Kombinasjonen av kvalitetskonkurranse og offisiell status skaper et ideelt miljø for utøvere til å oppnå personlige rekorder og årsbester.",
      rankingsTitle: "Verdensrankingsystemet",
      rankingsText: "Utøvere får både resultatpoeng (basert på deres prestasjon) og plasseringspoeng (basert på deres sluttposisjon og konkurransekategorien). Ved Level D-konkurranser mottar de 8 beste plasseringspoeng fra 40 poeng for førsteplass ned til 5 poeng for åttendeplass i friidrettsøvelser.",
      standardsTitle: "Konkurransestandarder",
      standards1: "Må ha en World Athletics eller Area Association-tillatelse",
      standards2: "Må følge alle World Athletics' tekniske regler",
      standards3: "Resultater må være offisielt ratifisert",
      standards4: "Konkurranser må være åpen for internasjonale utøvere",
      standards5: "Må oppfylle krav til anlegg- og utstyrssertifisering",
      conclusionTitle: "Hvorfor det betyr noe",
      conclusionText: "Å være utpekt som en World Athletics Level D-konkurranse sikrer at Nordic High Jump Challenge oppfyller internasjonale standarder og gir utøvere meningsfull konkurranse som kan fremme deres karriere og rangeringer på verdensscenen.",
      footer: "© 2025 Nordic High Jump Challenge. All rights reserved."
    },
    sv: {
      backBtn: "← Tillbaka till startsidan",
      title: "World Athletics Level D",
      subtitle: "Officiell tävlingsstatus",
      intro: "Nordic High Jump Challenge är en World Athletics Level D-tävling, vilket betyder att det är ett officiellt erkänt internationellt friidrottsmöte.",
      whatIsTitle: "Vad är en Level D-tävling?",
      whatIs1: "World Athletics kategoriserar alla tävlingar världen över i 10 olika kategorier för sitt världsrankingsystem: OW, DF, GW, GL, A, B, C, D, E och F. Level D-tävlingar är internationella inbjudningsmöten som bidrar till idrottarnas världsrankingpoäng.",
      whatIs2: "Medan 99% av alla tävlingar världen över klassificeras som F-nivå, representerar Level D ett betydande steg uppåt i prestige och tävlingsvärde. Dessa tävlingar lockar starka fält av idrottare och måste följa World Athletics regler och föreskrifter.",
      benefitsTitle: "Fördelar för idrottare",
      benefit1Title: "Världsrankingpoäng",
      benefit1Text: "Prestationer vid Level D-tävlingar bidrar till idrottarnas världsranking, vilket är avgörande för kvalificering till stora mästerskap inklusive världsmästerskapet och de olympiska spelen.",
      benefit2Title: "Internationell tävling",
      benefit2Text: "Level D-möten samlar kvalitetsidrottare från flera länder och ger värdefull internationell tävlingserfarenhet.",
      benefit3Title: "Officiellt erkännande",
      benefit3Text: "Resultat från Level D-tävlingar ratificeras officiellt av World Athletics och kan räknas mot rankingpositioner och kvalifikationsstandarder.",
      benefit4Title: "Prestationsmöjlighet",
      benefit4Text: "Kombinationen av kvalitetstävling och officiell status skapar en ideal miljö för idrottare att uppnå personliga rekord och säsongens bästa.",
      rankingsTitle: "Världsrankingsystemet",
      rankingsText: "Idrottare tjänar både resultatpoäng (baserat på deras prestation) och placeringspoäng (baserat på deras slutposition och tävlingskategorin). Vid Level D-tävlingar får de 8 bästa placeringspoäng från 40 poäng för förstaplatsen ner till 5 poäng för åttondeplats i friidrottsgrenar.",
      standardsTitle: "Tävlingsstandarder",
      standards1: "Måste ha ett World Athletics eller Area Association-tillstånd",
      standards2: "Måste följa alla World Athletics tekniska regler",
      standards3: "Resultat måste vara officiellt ratificerade",
      standards4: "Tävlingen måste vara öppen för internationella idrottare",
      standards5: "Måste uppfylla krav på anläggnings- och utrustningscertifiering",
      conclusionTitle: "Varför det spelar roll",
      conclusionText: "Att vara utsedd som en World Athletics Level D-tävling säkerställer att Nordic High Jump Challenge uppfyller internationella standarder och ger idrottare meningsfull tävling som kan främja deras karriärer och rankning på världsscenen.",
      footer: "© 2025 Nordic High Jump Challenge. All rights reserved."
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Back to Home Button*/}
      <div className="fixed top-4 left-4 z-20">
        <Link 
          href="/"
          className="inline-flex items-center bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition font-semibold hover:bg-gray-50"
        >
          ← {t.backBtn.replace('← ', '')}
        </Link>
      </div>

      {/* Language Toggle */}
      <div className="absolute top-4 right-4 z-10">
        <select
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value as 'en' | 'no' | 'sv')}
          className="bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition font-semibold text-gray-700"
        >
          <option value="en">🇬🇧 English</option>
          <option value="no">🇳🇴 Norsk</option>
          <option value="sv">🇸🇪 Svenska</option>
        </select>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-6xl mb-6">🏆</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-6">
            {t.subtitle}
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            {t.intro}
          </p>
        </div>
      </header>

      {/* What is Level D Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t.whatIsTitle}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            {t.whatIs1}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t.whatIs2}
          </p>
        </div>
      </section>

      {/* Benefits for Athletes */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t.benefitsTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.benefit1Title}
                </h3>
                <p className="text-gray-700">
                  {t.benefit1Text}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.benefit2Title}
                </h3>
                <p className="text-gray-700">
                  {t.benefit2Text}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">✓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.benefit3Title}
                </h3>
                <p className="text-gray-700">
                  {t.benefit3Text}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.benefit4Title}
                </h3>
                <p className="text-gray-700">
                  {t.benefit4Text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World Rankings System */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t.rankingsTitle}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t.rankingsText}
          </p>
        </div>
      </section>

      {/* Competition Standards */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t.standardsTitle}
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">•</span>
                  <span className="text-gray-700 text-lg">{t.standards1}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">•</span>
                  <span className="text-gray-700 text-lg">{t.standards2}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">•</span>
                  <span className="text-gray-700 text-lg">{t.standards3}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">•</span>
                  <span className="text-gray-700 text-lg">{t.standards4}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">•</span>
                  <span className="text-gray-700 text-lg">{t.standards5}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            {t.conclusionTitle}
          </h2>
          <p className="text-lg leading-relaxed">
            {t.conclusionText}
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