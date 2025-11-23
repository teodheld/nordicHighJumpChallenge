'use client';

import AthleteProfile from "../components/AthleteProfile";

// Example usage - This is how you would use the template for each athlete

export default function AthletePageExample() {
  // This is the data you would customize for each athlete
  const athleteData = {
    name: "Teodor Heldal",
    photo: "/images/athletes/teodor-heldal.jpeg",
    flag: "🇳🇴",
    personalBest: "2.01m",
    age: 21,
    seasonBests: [
      { year: "2025", result: "2.00m", location: "Ulsteinvik" },
      { year: "2024", result: "2.01m", location: "Strandebarm" }
    ],
    en: {
      pbLabel: "Personal Best",
      ageLabel: "Age",
      birthLabel: "Born",
      birthDate: "October 8, 2004",
      clubLabel: "Club",
      club: "Fana IL",
      bioTitle: "About",
      bio: [
        "Teodor Heldal represents Fana IL and holds a personal best in the high jump of 2.00 m, achieved in July 2022 and again in 2025.",
        "He won bronze in the high jump at the Norwegian Championships in 2025 with a jump of 1.97 m"
      ],
      achievementsTitle: "Career Highlights",
      achievements: [
        "Norwegian Nationalship: 3. Place 2025",
        "Personal Best: 2.01m (2024)"
      ],
      seasonBestsTitle: "Recent Season Bests",
      quote: "Every jump is a chance to fly higher than before."
    },
    no: {
      pbLabel: "Personlig rekord",
      ageLabel: "Alder",
      birthLabel: "Født",
      birthDate: "8. oktober 2004",
      clubLabel: "Klubb",
      club: "Fana IL",
      bioTitle: "Om",
      bio: [
        "Teodor Heldal representerer Fana IL og har en personlig rekord i høydehopp på 2,00 m, satt både i juli 2022 og i 2025.",
        "I NM 2025 tok han bronse i høyde med 1,97 m.",

      ],
      achievementsTitle: "Karrierehøydepunkter",
      achievements: [
        "Bronse Medalje ved NM i 2025",
        "Personlig rekord: 2,01m (2024)"
      ],
      seasonBestsTitle: "Siste sesongers beste",
      quote: "Hvert hopp er en sjanse til å fly høyere enn før."
    }
  };

  return <AthleteProfile athlete={athleteData} />;
}