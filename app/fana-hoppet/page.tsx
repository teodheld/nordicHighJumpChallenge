'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function FanaPage() {
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
    '/images/fana1.jpeg',
    '/images/fana2.jpeg',
    '/images/fana3.jpeg',
    '/images/fana4.jpeg'
  ];

   const content = {
    en: {
      title: "Fanahoppet",
      subtitle: "A part of the Nordic High Jump Challenge",
      competitionTitle: "About the Competition",
      competitionText: "Fanahoppet is one of the key events in the Nordic High Jump Challenge, attracting top high jump athletes from across the Nordic countries. The competition is known for its professional setup, strong athletic level, and a supportive local crowd.",
      arenaTitle: "Arena: Fana Stadion",
      arenaText: "Fana Stadion is one of Norway's premier athletics arenas, located in the Fana district of Bergen. The stadium features modern facilities, a high-quality running track, solid jumping areas, and a beautiful setting. The venue is frequently used for elite competitions and national championships",
      cityTitle: "About Bergen",
      cityText: "Bergen, known as the Gateway to the Fjords, is Norway's second-largest city. Famous for its historic Bryggen wharf, vibrant cultural scene, and surrounding mountains, Bergen offers a unique blend of nature and urban life. The city's coastal climate and energetic atmosphere make it an inspiring location for major sporting events.",
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
      title: "Fanahoppet",
      subtitle: "En del av Nordic High Jump Challenge",
      competitionTitle: "Om stevnet",
      competitionText:
        "Fanahoppet er et av hovedstevnene i Nordic High Jump Challenge og samler noen av de beste høydehopperne i Norden. Stevnet er kjent for sitt profesjonelle opplegg, høyt sportslig nivå og et engasjert lokalt publikum.",
      arenaTitle: "Arena: Fana Stadion",
      arenaText:
        "Fana Stadion er en av Norges beste friidrettsarenaer, plassert i Fana bydel i Bergen. Stadionet har moderne fasiliteter, en høykvalitets løpebane, solide hoppområder og en vakker beliggenhet. Anlegget brukes ofte til elitekonkurranser og nasjonale mesterskap.",
      cityTitle: "Om Bergen",
      cityText:
        "Bergen, kjent som inngangsporten til fjordene, er Norges nest største by. Med den historiske Bryggen, et pulserende kulturliv og et unikt landskap av fjell og hav, kombinerer byen natur og byliv på en helt spesiell måte. Bergens energi og atmosfære gjør den til en flott vert for store idrettsarrangementer.",
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
      title: "Fanahoppet",
      subtitle: "En del av Nordic High Jump Challenge",
      competitionTitle: "Om tävlingen",
      competitionText:
        "Fanahoppet är en av huvudtävlingarna i Nordic High Jump Challenge och lockar några av Nordens bästa höjdhoppare. Tävlingen är känd för sin professionella organisation, höga nivå och en entusiastisk lokal publik.",
      arenaTitle: "Arena: Fana Stadion",
      arenaText:
        "Fana Stadion är en av Norges främsta friidrottsarenor, belägen i stadsdelen Fana i Bergen. Stadion har moderna faciliteter, en löpbana av hög kvalitet, bra hoppområden och ett vackert läge. Anläggningen används ofta för elittävlingar och nationella mästerskap.",
      cityTitle: "Om Bergen",
      cityText:
        "Bergen, även kallad porten till fjordarna, är Norges näst största stad. Känd för Bryggen, sitt rika kulturliv och de omgivande fjällen, erbjuder staden en unik kombination av natur och stadsmiljö. Bergens livliga atmosfär gör det till en perfekt plats för stora idrottsevenemang.",
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
          <div className="flex flex-col items-center mb-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.contactTitle}</h2>
            
            <div className="flex justify-center items-center gap-8 mb-8 flex-wrap"> 
              {/* Meeting Director */}
              <div className="bg-gray-100">
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
              <div className = "bg-gray-100">
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