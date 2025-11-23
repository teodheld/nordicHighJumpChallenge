'use client';

import AthleteProfile from "../components/AthleteProfile";

// Example usage - This is how you would use the template for each athlete

export default function AthletePageExample() {
  // This is the data you would customize for each athlete
  const athleteData = {
    name: "Tobias Heldal",
    photo: "/images/athletes/tobias-heldal.jpeg",
    flag: "🇳🇴",
    personalBest: "2.08m",
    age: 19,
    seasonBests: [
      { year: "2025", result: "2.08m", location: "Strandebarm" },
      { year: "2024", result: "2.04m", location: "Tårnby" }
    ],
    en: {
      pbLabel: "Personal Best",
      ageLabel: "Age",
      birthLabel: "Born",
      birthDate: "April 20, 2006",
      clubLabel: "Club",
      club: "Fana IL",
      bioTitle: "About",
      bio: [
        "Tobias Heldal, representing Fana IL, achieved a personal best high jump of 2.08 m in 2025.",
        "He won silver in the high jump at the Norwegian Championships in 2025 with a clearance of 2.06 m.",
        "Born on 20 April 2006, Tobias is regarded by his club as a top national talent with a clear upward trend in his performance."
      ],
      achievementsTitle: "Career Highlights",
      achievements: [
        "Norwegian Nationalship: 2. Place 2025",
        "Personal Best: 2.08m (2025)"
      ],
      seasonBestsTitle: "Recent Season Bests",
      quote: "Always keep striving for success."
    },
    no: {
      pbLabel: "Personlig rekord",
      ageLabel: "Alder",
      birthLabel: "Født",
      birthDate: "20. april 2006",
      clubLabel: "Klubb",
      club: "Fana IL",
      bioTitle: "Om",
      bio: [
        "Tobias Heldal representerer Fana IL og har en personlig rekord i høyde på 2,08 m, satt i 2025.",
        "Han vant sølv i høyde under NM på Askøy i 2025 med 2,06 m.",
        "Tidligere har han hoppet 2,06 også på andre stevner, og nærmet seg 2,08 i juni samme sesong.",
        "Ifølge klubbens rapport har han etablert seg i norsk toppsjikt og regnes som et talent med stort potensial."
      ],
      achievementsTitle: "Karrierehøydepunkter",
      achievements: [
        "Sølv Medalje ved NM i 2025",
        "Personlig rekord: 2,08m (2025)"
      ],
      seasonBestsTitle: "Siste sesongers beste",
      quote: "Jobb alltid mot suksess."
    }
  };

  return <AthleteProfile athlete={athleteData} />;
}