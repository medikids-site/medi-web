import React from 'react';
import '../styles/Contact.css';

const ClockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9.5" stroke="white" strokeWidth="1.8"/>
    <path d="M12 7v5.5l3.5 2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
    <circle cx="12" cy="8" r="2.2" stroke="white" strokeWidth="1.8"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 3.5h3l1.5 4-2 1.5c1 2 2.5 3.5 4.5 4.5L15 11.5l4 1.5v3c0 1-1 2-2 2C8 18 4.5 9 3.5 6.5c0-1 1-3 3-3z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="white" strokeWidth="1.8"/>
    <path d="M3 8l9 6 9-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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
            <div className="contact-icon"><ClockIcon /></div>
            <div className="contact-details">
              <p className="contact-label">{t.availability}</p>
            </div>
          </div>

          {/* Address */}
          <div className="contact-item">
            <div className="contact-icon"><LocationIcon /></div>
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
            <div className="contact-icon"><PhoneIcon /></div>
            <div className="contact-details">
              <p className="contact-label">{t.phone}:</p>
              <a href="tel:0322227171" className="contact-value">032 222 71 71</a>
            </div>
          </div>

          {/* Email */}
          <div className="contact-item">
            <div className="contact-icon"><EmailIcon /></div>
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