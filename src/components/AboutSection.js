import React, { useEffect } from 'react';
import '../styles/AboutSection.css';
import Header from './Header';
import Footer from './Footer';
import ServicesSection from './ServicesSection';
import Doctors from './Doctors';

const pic1 = process.env.PUBLIC_URL + '/b1.jpg';

function AboutSection({ language, setLanguage }) {
  const translations = {
    ge: {
      title: 'ჩვენს შესახებ',
      description1: 'ჩვენი გუნდი მზად არის ნებისმიერ დროს გაუწიოს თქვენს პატარას პროფესიონალური, სწრაფი და საიმედო სამედიცინო დახმარება.',
      description2: 'ჩვენ ვმუშობთ 24/7 – რადგან თქვენს შვილებს ყოველთვის ჰქონდეთ მაღალი სტანდარტის პედიატრიული სასწრაფო დახმარება.'
    },
    en: {
      title: 'About Us',
      description1: 'Our team is ready to provide your little one with professional, fast, and safe medical care at any time.',
      description2: 'We work 24/7 – so your children always have access to high-standard pediatric emergency care.'
    }
  };

  const t = translations[language];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="about-section" id="about">
      <Header language={language} setLanguage={setLanguage} />
      
      {/* Hero Section with Background Image */}
      <div className="about-hero" style={{ backgroundImage: `url(${pic1})` }}>
        <div className="about-overlay"></div>
        <div className="about-hero-content">
          <h2 className="about-title">{t.title}</h2>
          <p className="about-description">{t.description1}</p>
          <p className="about-description">{t.description2}</p>
        </div>
      </div>

      <Doctors language={language} />
      <Footer language={language} />
    </section>
  );
}

export default AboutSection;