import React, { useEffect } from 'react';
import '../styles/ServicePage.css';
import Header from './Header';
import Footer from './Footer';


const background = process.env.PUBLIC_URL + '/service-back.jpg';
const pic1 = process.env.PUBLIC_URL + '/s1.jpg';
const pic2 = process.env.PUBLIC_URL + '/s2.jpg';
const pic3 = process.env.PUBLIC_URL + '/s3.jpg';

function ServicePage({ language, setLanguage }) {
  const translations = {
    ge: {
      title: 'სერვისები',
      services: [
        {
          title: 'პედიატრის მომსახურეობა ბინაზე',
          description: 'პროფესიონალი პედიატრის ვიზიტი თქვენს სახლში ნებისმიერ დროს',
          image: pic1
        },
        {
          title: 'ლაბორატორიული მომსახურეობა ბინაზე',
          description: 'A და B ვირუსების ტესტირება',
          image: pic2
        },
        {
          title: 'კოვიდ ტესტები ბინაზე',
          description: 'სწრაფი და საიმედო COVID-19 ტესტირება სახლში',
          image: pic3
        }
      ]
    },
    en: {
      title: 'Services',
      services: [
        {
          title: 'Home Pediatric Care',
          description: 'Professional pediatrician visit at your home anytime',
          image: pic1
        },
        {
          title: 'Home Laboratory Services',
          description: 'Testing for Influenza A and B viruses at your convenience',
          image: pic2
        },
        {
          title: 'Home COVID Testing',
          description: 'Fast and reliable COVID-19 testing at home',
          image: pic3
        }
      ]
    }
  };

  const t = translations[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sp-page">
      <Header language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <div className="sp-hero" style={{ backgroundImage: `url(${background})` }}>
        <div className="sp-hero-overlay"></div>
        <div className="sp-hero-content">
          <h1 className="sp-hero-title">{t.title}</h1>
        </div>
      </div>

      {/* Full Width Service Sections */}
      <div className="sp-services-wrapper">
        {t.services.map((service, index) => (
          <div 
            key={index} 
            className={`sp-service-section ${index % 2 === 0 ? 'sp-service-left' : 'sp-service-right'}`}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="sp-service-overlay"></div>
            <div className="sp-service-content">
              <h2 className="sp-service-title">{service.title}</h2>
              <p className="sp-service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Original Services Section */}

      <Footer language={language} />
    </div>
  );
}

export default ServicePage;