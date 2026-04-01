import React from 'react';
import '../styles/Contact.css';

function Contact({ language }) {
  const translations = {
    ge: {
      availability: '24 საათის განმავლობაში კვირაში 7 დღე',
      availabilityShort: '24სთ / 7 დღე',
      address: 'მისამართი',
      addressFull: 'თბილისი, საბურთალო, ზურაბ ანჯაფარიძის II შესახვევი 2',
      directions: 'მიმართულება Google Map-ზე',
      phone: 'ტელეფონი',
      email: 'ელ. ფოსტა'
    },
    en: {
      availability: '24 Hours a Day, 7 Days a Week',
      availabilityShort: '24/7',
      address: 'Address',
      addressFull: 'Tbilisi, Saburtalo, Zurab Anjaparidze II St. 2',
      directions: 'Get Directions on Google Map',
      phone: 'Phone',
      email: 'Email'
    }
  };

  const t = translations[language || 'ge'];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          {/* Availability */}
          <div className="contact-item">
            <span className="contact-emoji">🕐</span>
            <div className="contact-details">
              <p className="contact-label">{t.availability}</p>
            </div>
          </div>

          {/* Address */}
          <div className="contact-item">
            <span className="contact-emoji">📍</span>
            <div className="contact-details">
              <p className="contact-label">{t.address}:</p>
              <p className="contact-value">{t.addressFull}</p>
              <a 
              href="https://maps.google.com/?q=თბილისი,+საბურთალო,+ზურაბ+ანჯაფარიძის+II+შესახვევი+2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                {t.directions}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-item">
            <span className="contact-emoji">📞</span>
            <div className="contact-details">
              <p className="contact-label">{t.phone}:</p>
              <a href="tel:0322227171" className="contact-value">032 222 71 71</a>
            </div>
          </div>

          {/* Email */}
          <div className="contact-item">
            <span className="contact-emoji">✉️</span>
            <div className="contact-details">
              <p className="contact-label">{t.email}:</p>
              <a href="mailto:info@medikids.ge" className="contact-value">info@medikids.ge</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;