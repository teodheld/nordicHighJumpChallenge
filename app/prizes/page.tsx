'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PrizesPage() {
  const [language, setLanguage] = useState<'en' | 'no' | 'sv'>('en');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem('preferredLanguage');
    if (saved && (saved === 'en' || saved === 'no' || saved === 'sv')) {
      setLanguage(saved as 'en' | 'no' | 'sv');
    }
  }, []);

  const handleLanguageChange = (newLang: 'en' | 'no' | 'sv') => {
    setLanguage(newLang);
    if (isClient) {
      localStorage.setItem('preferredLanguage', newLang);
    }
  };

  const content = {
    en: {
      backBtn: "← Back to Home",
      title: "Prize Money",
      subtitle: "Nordic High Jump Challenge 2026",
      totalPrize: "Total prize pool for all events across both competitions is €3,000",
      bonusPrize: "A bonus prize will be awarded to the overall winner of the Nordic High Jump Challenge.",
      distributionTitle: "Prize Money Distribution",
      distributionSubtitle: "Prize money for each individual competition will be distributed as follows:",
      perMeet: "Per competition/meet: €1,500",
      championTitle: "Nordic High Jump Champion",
      championSubtitle: "At the end of the tour, only one true champion will remain.",
      championText1: "The overall winner will be crowned by combining each athlete's best heights from the two competitions.",
      championText2: "The highest-ranked man across both meets wins the main title:",
      kingTitle: "Nordic High Jump King",
      formatTitle: "Competition Format",
      formatText1: "The Nordic High Jump Challenge consists of two high jump competitions in Mariestad (July 12) and Bergen (July 16). The same athletes compete in both competitions, and the overall standings are determined by combining each athlete's best cleared height from the two competitions.",
      formatText2: "The highest-ranked man across both competitions will be crowned Nordic High Jump King.",
      formatText3: "In addition, each meet has its own individual results and prize money: the top 5 men in each competition will receive prize money based on their placement in that meet.",
      contactTitle: "Questions?",
      contactText: "For more information about prizes and competition rules, contact us at:",
      footer: "© 2025 Nordic High Jump Challenge. All rights reserved."
    },
    no: {
      backBtn: "← Tilbake til forsiden",
      title: "Premiepenger",
      subtitle: "Nordic High Jump Challenge 2026",
      totalPrize: "Total premiesum for alle øvelser i begge stevnene er €3,000",
      bonusPrize: "En tilleggspremie vil bli tildelt den samlede vinneren av Nordic High Jump Challenge.",
      distributionTitle: "Fordeling av premiepenger",
      distributionSubtitle: "Premiepengene for hver enkelt konkurranse vil bli fordelt som følger:",
      perMeet: "Per arrangement/møte: €1,500",
      championTitle: "Nordisk mester i høydehopp",
      championSubtitle: "På slutten av turneringen vil det bare være én ekte mester igjen.",
      championText1: "Den samlede vinneren vil bli kåret ved å kombinere hver utøvers beste høyder fra de to konkurransene.",
      championText2: "Den høyest rangerte mannen i begge stevnene vinner hovedtittelen:",
      kingTitle: "Nordisk høydehoppkonge",
      formatTitle: "Konkurranseformat",
      formatText1: "Nordisk høydehoppkonkurranse består av to høydehoppkonkurranser i Mariestad (12. juli) og Bergen (16. juli). De samme utøverne konkurrerer i begge konkurransene, og den samlede stillingen avgjøres ved å kombinere hver utøvers beste klarede høyde fra de to konkurransene.",
      formatText2: "Den høyest rangerte mannen i begge konkurransene vil bli kronet til nordisk høydehoppkonge.",
      formatText3: "I tillegg har hvert stevne sine egne individuelle resultater og premiepenger: de 5 beste mennene i hver konkurranse vil motta premiepenger basert på plasseringen deres i det stevnet.",
      contactTitle: "Spørsmål?",
      contactText: "For mer informasjon om premier og konkurranseregler, kontakt oss på:",
      footer: "© 2025 Nordic High Jump Challenge. All rights reserved."
    },
    sv: {
      backBtn: "← Tillbaka till startsidan",
      title: "Prispengar",
      subtitle: "Nordic High Jump Challenge 2026",
      totalPrize: "Total prispott för alla grenar i båda tävlingarna är €3,000",
      bonusPrize: "Ett bonuspris kommer att tilldelas den sammanlagda vinnaren av Nordic High Jump Challenge.",
      distributionTitle: "Fördelning av prispengar",
      distributionSubtitle: "Prispengar för varje enskild tävling kommer att fördelas enligt följande:",
      perMeet: "Per tävling/möte: €1,500",
      championTitle: "Nordisk mästare i höjdhopp",
      championSubtitle: "I slutet av tävlingsserien kommer endast en sann mästare att kvarstå.",
      championText1: "Den sammanlagda vinnaren kommer att krönas genom att kombinera varje idrottares bästa höjder från de två tävlingarna.",
      championText2: "Den högst rankade mannen över båda mötena vinner huvudtiteln:",
      kingTitle: "Nordisk höjdhoppskung",
      formatTitle: "Tävlingsformat",
      formatText1: "Nordic High Jump Challenge består av två höjdhoppstävlingar i Mariestad (12 juli) och Bergen (16 juli). Samma idrottare tävlar i båda tävlingarna, och den sammanlagda ställningen bestäms genom att kombinera varje idrottares bästa klarade höjd från de två tävlingarna.",
      formatText2: "Den högst rankade mannen över båda tävlingarna kommer att krönas till nordisk höjdhoppskung.",
      formatText3: "Dessutom har varje möte sina egna individuella resultat och prispengar: de 5 bästa männen i varje tävling kommer att få prispengar baserat på deras placering i det mötet.",
      contactTitle: "Frågor?",
      contactText: "För mer information om priser och tävlingsregler, kontakta oss på:",
      footer: "© 2025 Nordic High Jump Challenge. All rights reserved."
    }
  };

  const t = content[language];

  const prizes = [
    { place: 1, amount: '€500', emoji: '🥇', color: 'from-yellow-400 to-yellow-600' },
    { place: 2, amount: '€400', emoji: '🥈', color: 'from-gray-300 to-gray-400' },
    { place: 3, amount: '€300', emoji: '🥉', color: 'from-orange-400 to-orange-600' },
    { place: 4, amount: '€200', emoji: '4️⃣', color: 'from-blue-300 to-blue-400' },
    { place: 5, amount: '€100', emoji: '5️⃣', color: 'from-green-300 to-green-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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

      <div className="container mx-auto px-4 py-16">
        {/* Back to Home Button */}
        <div className="fixed top-4 left-4 z-20">
          <Link
            href="/"
            className="inline-flex items-center bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition font-semibold hover:bg-gray-50"
          >
            ← {t.backBtn.replace('← ', '')}
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            💰 {t.title}
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            {t.subtitle}
          </p>
        </div>

        {/* Total Prize Pool */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-2xl font-bold mb-3">
              {t.totalPrize}
            </p>
            <p className="text-lg opacity-90">
              {t.bonusPrize}
            </p>
          </div>
        </div>

        {/* Prize Distribution */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            {t.distributionTitle}
          </h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            {t.distributionSubtitle}
          </p>

          <div className="grid md:grid-cols-5 gap-4 mb-6">
            {prizes.map((prize) => (
              <div
                key={prize.place}
                className={`bg-gradient-to-br ${prize.color} p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition`}
              >
                <div className="text-4xl mb-2">{prize.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {prize.place}{language === 'en' ? (prize.place === 1 ? 'st' : prize.place === 2 ? 'nd' : prize.place === 3 ? 'rd' : 'th') : '.'} {language === 'en' ? 'place' : 'plass'}
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  {prize.amount}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 font-semibold text-lg">
            {t.perMeet}
          </p>
        </div>

        {/* Nordic Champion Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              👑 {t.championTitle}
            </h2>
            <p className="text-lg text-gray-700 mb-4 text-center italic">
              {t.championSubtitle}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {t.championText1}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {t.championText2}
            </p>

            <div className="flex justify-center mt-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-lg text-center text-white max-w-xs w-full">
                <div className="text-5xl mb-3">🤴</div>
                <h3 className="text-2xl font-bold">
                  {t.kingTitle}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Competition Format */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              {t.formatTitle}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {t.formatText1}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {t.formatText2}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t.formatText3}
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-gray-700 mb-4">
            {t.contactText}
          </p>
          <a
            href="mailto:friidrett@fanail.no"
            className="text-blue-600 hover:text-blue-800 font-semibold text-xl"
          >
            friidrett@fanail.no
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            {t.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}