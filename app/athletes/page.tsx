'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AthletesPage() {
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
      title: "Athletes",
      subtitle: "Nordic High Jump Challenge 2026",
      intro: "Meet the athletes competing for the title of Nordic High Jump King.",
      clubLabel: "Club",
      prLabel: "Personal Best",
      footer: "© 2026 Nordic High Jump Challenge. All rights reserved."
    },
    no: {
      backBtn: "← Tilbake til forsiden",
      title: "Utøvere",
      subtitle: "Nordic High Jump Challenge 2026",
      intro: "Møt utøverne som kjemper om tittelen som nordisk høydehoppkonge.",
      clubLabel: "Klubb",
      prLabel: "Personlig rekord",
      footer: "© 2026 Nordic High Jump Challenge. All rights reserved."
    },
    sv: {
      backBtn: "← Tillbaka till startsidan",
      title: "Idrottare",
      subtitle: "Nordic High Jump Challenge 2026",
      intro: "Möt idrottarna som tävlar om titeln som nordisk höjdhoppskung.",
      clubLabel: "Klubb",
      prLabel: "Personligt rekord",
      footer: "© 2026 Nordic High Jump Challenge. All rights reserved."
    }
  };

  const t = content[language];

  // Country names translated per language
  const countryNames: Record<string, { en: string; no: string; sv: string }> = {
    sweden: { en: 'Sweden', no: 'Sverige', sv: 'Sverige' },
    norway: { en: 'Norway', no: 'Norge', sv: 'Norge' },
    cyprus: { en: 'Cyprus', no: 'Kypros', sv: 'Cypern' },
    denmark: { en: 'Denmark', no: 'Danmark', sv: 'Danmark' },
    gbr: { en: 'Great Britain', no: 'Storbritannia', sv: 'Storbritannien' },
    algeria: { en: 'Algeria', no: 'Algerie', sv: 'Algeriet' },
    qatar: { en: 'Qatar', no: 'Qatar', sv: 'Qatar' }
  };

  const athletes = [
    { name: 'Loizos Chrysostomou', club: 'Gymnastics Club Olympia ', country: 'cyprus', pr: '2.19 m' },
    { name: 'Mads Moos Larsen', club: 'Aarhus 1900', country: 'denmark', pr: '2.15 m' },
    { name: 'Harry Whyley', club: 'Notts AC', country: 'gbr', pr: '2.15 m' },
    { name: 'Abdulrahman Al-Malki', club: '', country: 'qatar', pr: '2.12 m' },
    { name: 'Tobias Heldal', club: 'Fana IL', country: 'norway', pr: '2.11 m' },
    { name: 'Marius Hytholm Alex Petersen', club: 'Sparta', country: 'denmark', pr: '2.10 m' },
    { name: 'Aboub Zouak', club: '', country: 'algeria', pr: '2.07 m' },
    { name: 'Andrei Popa', club: 'Mariestad AIF', country: 'sweden', pr: '2.04 m' }
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
            🏃 {t.title}
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-500">
            {t.intro}
          </p>
        </div>

        {/* Athletes Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {athletes.map((athlete, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {athlete.name}
                </h3>
                <p className="text-gray-600 mb-1">
                  {athlete.club && (
                    <>
                      <span className="font-semibold">{t.clubLabel}:</span> {athlete.club} &middot;{' '}
                    </>
                  )}
                  {countryNames[athlete.country][language]}
                </p>
                <p className="text-blue-600 font-bold text-lg mt-3">
                  {t.prLabel}: {athlete.pr}
                </p>
              </div>
            ))}
          </div>
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