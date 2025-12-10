'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function MariestadPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
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
  
  const images = [
    '/images/mariestad1.jpeg',
    '/images/mariestad2.jpeg',
    '/images/mariestad3.jpeg'
  ];

  const content = {
    en: {
      title: "MAIFhoppet",
      subtitle: "A part of Nordic High Jump Challenge",
      competitionTitle: "About the Competition",
      competitionText: "MAIFhoppet is part of the Nordic High Jump Challenge, a prestigious competition series bringing together the best high jumpers from the Nordic countries. The competition offers a unique opportunity to witness international athletics talent in a classic sports environment.",
      arenaTitle: "Arena: Högelid Idrottsplats",
      arenaText: "Högelid Idrottsplats is a classic sports facility located in the heart of Mariestad. The venue offers excellent conditions for athletics competitions with modern equipment and good spectator facilities. The atmospheric environment creates a perfect arena for elite-level high jumping.",
      cityTitle: "About Mariestad",
      cityText: "Mariestad is a charming city on the shores of Lake Vänern with a rich history dating back to 1583. The city is known for its well-preserved wooden town, impressive cathedral, and vibrant harbor environment. With its picturesque streets, cozy cafés, and beautiful location by Sweden's largest lake, Mariestad offers a perfect blend of culture, history, and nature experiences.",
      contactTitle: "Contact",
      contactText: "For more information, contact us via email:",
      meetingDirector: "Meeting Director",
      athletesLiaison: "Athletes' Liaison",
      name: "Name",
      email: "Email",
      telephone: "Telephone",
      backBtn: "← Back to Home",
      footer: "© 2025 Nordic High Jump Challenge. All rights reserved."
    },
    no: {
      title: "MAIFhoppet",
      subtitle: "En del av Nordic High Jump Challenge",
      competitionTitle: "Om stevnet",
      competitionText: "MAIFhoppet er en del av Nordic High Jump Challenge, en prestisjetung konkurranseserie som samler de beste høydehopperne fra de nordiske landene. Stevnet tilbyr en unik mulighet til å se internasjonal friidrettstalent i et klassisk idrettsmiljø.",
      arenaTitle: "Arena: Högelid Idrottsplats",
      arenaText: "Högelid Idrottsplats er et klassisk idrettsanlegg som ligger i hjertet av Mariestad. Anlegget tilbyr utmerkede forhold for friidrettsstevner med moderne utstyr og gode tilskuerfasiliteter. Det atmosfæriske miljøet skaper en perfekt arena for høydehopp på elitenivå.",
      cityTitle: "Om Mariestad",
      cityText: "Mariestad er en sjarmerende by ved Vänerns strand med en rik historie som strekker seg tilbake til 1583. Byen er kjent for sin velholdte treby, den imponerende domkirken og det livlige havnemiljøet. Med sine pittoreske gater, koselige kafeer og vakre beliggenhet ved Sveriges største innsjø, tilbyr Mariestad en perfekt blanding av kultur, historie og naturopplevelser.",
      contactTitle: "Kontakt",
      contactText: "For mer informasjon, kontakt oss via e-post:",
      meetingDirector: "Stevneleder",
      athletesLiaison: "Utøverkontakt",
      name: "Navn",
      email: "E-post",
      telephone: "Telefon",
      backBtn: "← Tilbake til forsiden",
      footer: "© 2025 Nordic High Jump Challenge. All rights reserved."
    },
    sv: {
      title: "MAIFhoppet",
      subtitle: "En del av Nordic High Jump Challenge",
      competitionTitle: "Om tävlingen",
      competitionText: "MAIFhoppet är en del av Nordic High Jump Challenge, en prestigefylld tävlingsserie som samlar de bästa höjdhopparna från Norden. Tävlingen erbjuder en unik möjlighet att se internationell friidrottstalang i en klassisk idrottsmiljö.",
      arenaTitle: "Arena: Högelid Idrottsplats",
      arenaText: "Högelid Idrottsplats är en klassisk idrottsanläggning belägen i hjärtat av Mariestad. Anläggningen erbjuder utmärkta förutsättningar för friidrottstävlingar med modern utrustning och goda publikmöjligheter. Den atmosfäriska miljön skapar en perfekt arena för höjdhopp på elitnivå.",
      cityTitle: "Om Mariestad",
      cityText: "Mariestad är en charmig stad vid Vänerns strand med en rik historia som sträcker sig tillbaka till 1583. Staden är känd för sin välbevarade trästad, den imponerande domkyrkan och sin livliga hamnmiljö. Med sina pittoreska gator, mysiga kaféer och vackra läge vid Sveriges största sjö, erbjuder Mariestad en perfekt blandning av kultur, historia och naturupplevelser.",
      contactTitle: "Kontakt",
      contactText: "För mer information, kontakta oss via e-post:",
      meetingDirector: "Tävlingsledare",
      athletesLiaison: "Idrottarkontakt",
      name: "Namn",
      email: "E-post",
      telephone: "Telefon",
      backBtn: "← Tillbaka till startsidan",
      footer: "© 2025 Nordic High Jump Challenge. All rights reserved."
    }
  };

  const t = content[language];

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Back Button - Fixed Top Left */}
      <div className="fixed top-4 left-4 z-20">
        <Link 
          href="/"
          className="inline-flex items-center bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition font-semibold hover:bg-gray-50"
        >
          ← {t.backBtn.replace('← ', '')}
        </Link>
      </div>

      {/* Language Dropdown */}
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
      
      <div className="bg-white shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-8 text-center">
          <div className="text-5xl mb-4">🏆</div>
          <h1 className="text-4xl font-bold mb-2">{t.title}</h1>
          <p className="text-xl">{t.subtitle}</p>
        </div>

        {/* Image Slideshow */}
        <div className="relative bg-white-100">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <img
                src={image}
                alt={`Mariestad ${index + 1}`}
                className="w-full h-auto object-contain max-h-[500px]"
              />
            </div>
          ))}
          
          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>


        {/* Content */}
        <div className="p-8">
          {/* Competition Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.competitionTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.competitionText}
            </p>
          </div>

          {/* Arena Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.arenaTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.arenaText}
            </p>
          </div>

          {/* City Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.cityTitle}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.cityText}
            </p>
          </div>

          {/* Contact Section */}
          <div className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contactTitle}</h2>
            
            {/* Meeting Director */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.meetingDirector}</h3>
              <p className="text-lg text-gray-700 mb-1">
                <strong>{t.name}:</strong> Jon-Inge Heldal
              </p>
              <p className="text-lg text-gray-700 mb-1">
                <strong>{t.email}:</strong>{' '}
                <a href="mailto:friidrett@fanail.no" className="text-blue-600 hover:underline">
                  friidrett@fanail.no
                </a>
              </p>
              <p className="text-lg text-gray-700">
                <strong>{t.telephone}:</strong>{' '}
                <a href="tel:+4792049315" className="text-blue-600 hover:underline">
                  +47 92049315
                </a>
              </p>
            </div>

            {/* Athletes' Liaison */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.athletesLiaison}</h3>
              <p className="text-lg text-gray-700 mb-1">
                <strong>{t.name}:</strong> Silvia Popa
              </p>
              <p className="text-lg text-gray-700 mb-1">
                <strong>{t.email}:</strong>{' '}
                <a href="mailto:silvv2323@gmail.com" className="text-blue-600 hover:underline">
                  silvv2323@gmail.com
                </a>
              </p>
              <p className="text-lg text-gray-700">
                <strong>{t.telephone}:</strong>{' '}
                <a href="tel:+46765898761" className="text-blue-600 hover:underline">
                  +46 765898761
                </a>
              </p>
            </div>
          </div>
        </div>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p className="text-gray-400">
                {t.footer}
              </p>
            </div>
          </footer>
          
      </div>
    </div>
  );
}