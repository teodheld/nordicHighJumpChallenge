'use client';

import { useState } from 'react';

interface AthleteData {
  name: string;
  photo: string;
  flag: string;
  personalBest: string;
  age: number;
  seasonBests?: Array<{
    year: string;
    result: string;
    location: string;
  }>;
  en: {
    pbLabel: string;
    ageLabel: string;
    birthLabel: string;
    birthDate: string;
    clubLabel: string;
    club: string;
    bioTitle: string;
    bio: string[];
    achievementsTitle: string;
    achievements: string[];
    seasonBestsTitle?: string;
    quote?: string;
  };
  no: {
    pbLabel: string;
    ageLabel: string;
    birthLabel: string;
    birthDate: string;
    clubLabel: string;
    club: string;
    bioTitle: string;
    bio: string[];
    achievementsTitle: string;
    achievements: string[];
    seasonBestsTitle?: string;
    quote?: string;
  };
}

interface AthleteProfileProps {
  athlete: AthleteData;
}

export default function AthleteProfile({ athlete }: AthleteProfileProps) {
  const [language, setLanguage] = useState<'en' | 'no'>('en');

  const t = athlete[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Back to Home Button */}
      <div className="fixed top-4 left-4 z-10">
        <a 
          href="/"
          className="inline-flex items-center bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition font-semibold text-gray-700 hover:bg-gray-50"
        >
          <span className="mr-2">←</span>
          {language === 'en' ? 'Home' : 'Hjem'}
        </a>
      </div>

      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-10">
        <button
          onClick={() => setLanguage(language === 'en' ? 'no' : 'en')}
          className="bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition font-semibold text-gray-700"
        >
          {language === 'en' ? '🇳🇴 Norsk' : '🇬🇧 English'}
        </button>
      </div>

      {/* Hero Section with Photo */}
      <header className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Photo */}
            <div className="relative">
              <img 
                src={athlete.photo}
                alt={athlete.name}
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
                <span className="text-2xl">{athlete.flag}</span>
              </div>
            </div>

            {/* Basic Info */}
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {athlete.name}
              </h1>
              <div className="space-y-3">
                <div className="flex items-center text-xl text-gray-700">
                  <span className="font-semibold mr-2">🏆 {t.pbLabel}:</span>
                  <span className="text-blue-600 font-bold">{athlete.personalBest}</span>
                </div>
                <div className="flex items-center text-xl text-gray-700">
                  <span className="font-semibold mr-2">🗓️ {t.ageLabel}:</span>
                  <span>{athlete.age}</span>
                </div>
                <div className="flex items-center text-xl text-gray-700">
                  <span className="font-semibold mr-2">🎂 {t.birthLabel}:</span>
                  <span>{t.birthDate}</span>
                </div>
                <div className="flex items-center text-xl text-gray-700">
                  <span className="font-semibold mr-2">🏃 {t.clubLabel}:</span>
                  <span>{t.club}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Bio Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t.bioTitle}
          </h2>
          <div className="text-gray-700 text-lg leading-relaxed space-y-4">
            {t.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t.achievementsTitle}
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ul className="space-y-4">
                {t.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 text-xl mr-3">🏅</span>
                    <span className="text-gray-700 text-lg">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Season Bests */}
      {athlete.seasonBests && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.seasonBestsTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {athlete.seasonBests.map((item, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <p className="text-gray-600">{item.year}</p>
                  <p className="text-2xl font-bold text-gray-900">{item.result}</p>
                  <p className="text-gray-600">{item.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote */}
      {t.quote && (
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl italic mb-4">"{t.quote}"</p>
              <p className="text-lg opacity-90">— {athlete.name}</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}