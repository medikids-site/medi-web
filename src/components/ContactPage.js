import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import Footer from './Footer';
import '../styles/ContactPage.css';
import Header from './Header';

const contact = process.env.PUBLIC_URL + '/contact.jpg';

function ContactPage({ language, setLanguage }) {
  const translations = {
    ge: {
      title: 'კონტაქტი',
      availability: '24 საათის განმავლობაში კვირაში 7 დღე',
      availabilityShort: '24სთ / 7 დღე',
      address: 'მისამართი',
      addressFull: 'თბილისი, საბურთალო, ზურაბ ანჯაფარიძის II შესახვევი 2',
      directions: 'მიმართულება Google Map-ზე',
      phone: 'ტელეფონი',
      email: 'ელ. ფოსტა',
      mapTitle: 'ჩვენი მდებარეობა',
      mapDescription: 'იხილეთ ჩვენი კლინიკის მდებარეობა რუკაზე'
    },
    en: {
      title: 'Contact',
      availability: '24 Hours a Day, 7 Days a Week',
      availabilityShort: '24/7',
      address: 'Address',
      addressFull: 'Tbilisi, Saburtalo, Zurab Anjaparidze II St. 2',
      directions: 'Get Directions on Google Map',
      phone: 'Phone',
      email: 'Email',
      mapTitle: 'Our Location',
      mapDescription: 'View our clinic location on the map and get directions'
    }
  };

  const t = translations[language];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <Header language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <div className="contact-hero" style={{ backgroundImage: `url(${contact})` }}>
        <div className="contact-overlay"></div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">{t.title}</h1>
          <p className="contact-hero-availability">{t.availability}</p>
          
          {/* Contact Info Cards */}
          <div className="contact-info-cards">
            <div className="contact-info-card">
              <div className="contact-info-icon">📍</div>
              <h3 className="contact-info-label">{t.address}</h3>
              <p className="contact-info-text">{t.addressFull}</p>
              <a 
                href="https://maps.google.com/?q=თბილისი,+საბურთალო,+ზურაბ+ანჯაფარიძის+II+შესახვევი+2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-info-link"
              >
                {t.directions}
              </a>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">📞</div>
              <h3 className="contact-info-label">{t.phone}</h3>
              <a href="tel:0322227171" className="contact-info-text contact-info-text-large">
                032 222 71 71
              </a>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">✉️</div>
              <h3 className="contact-info-label">{t.email}</h3>
              <a href="mailto:info@medikids.ge" className="contact-info-text">
                info@medikids.ge
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm language={language} />

      {/* Map Header Section */}
      <div className="contact-map-header">
        <div className="contact-map-header-content">
          <h2 className="contact-map-title">{t.mapTitle}</h2>
          <p className="contact-map-description">{t.mapDescription}</p>
          <div className="contact-map-address">
            <span className="map-address-icon">📍</span>
            <span className="map-address-text">{t.addressFull}</span>
          </div>
        </div>
      </div>

      <div className="contact-map-section">
       <iframe
  title="Medikids Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.887671834707!2d44.714511476262864!3d41.722942671259176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447375bc8cc64f%3A0x440cc2621b3e6db5!2s2%20Zurab%20Anjaparidze%20St%2C%20T'bilisi!5e0!3m2!1sen!2sge!4v1764591707172!5m2!1sen!2sge"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
      </div>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}

export default ContactPage;