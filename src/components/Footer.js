import React from 'react';
import '../styles/Footer.css';

function Footer({ language }) {
  const translations = {
    ge: {
      categories: 'კატეგორიები',
      about: 'ჩვენ შესახებ',
      services: 'სერვისები',
      news: 'სიახლეები',
      contact: 'კონტაქტი',
      ourDoctors: 'ჩვენი ექიმები',
      companyName: 'მედიქიდსი ',
      companyDescription: 'პედიატრიული სასწრაფო სამედიცინო დახმარება',
      slogan1: 'მუდამ თქვენი და თქვენი შვილების გვერდით',
      slogan2: 'ზრუნვა ყველაზე ძვირფასზე',
      slogan3: '24 საათის განმავლობაში კვირაში 7 დღე',
      address: 'მისამართი',
      addressText: 'თბილისი, საბურთალო, ზურაბ ანჯაფარიძის II შესახვევი 2',
      directions: 'მიმართულება Google Map-ზე',
      phone: 'ტელეფონი',
      email: 'ელ. ფოსტა',
      website: 'ვებ-გვერდი',
      taxId: 'საიდენტიფიკაციო კოდი',
      legalName: 'იურიდიული დასახელება',
      legalNameText: 'შპს მედიქიდსი',
      service1: 'გადაუდებელი სამედიცინო ბრიგადის მომსახურება ბინაზე',
      service2: 'ლაბორატორიული მომსახურება ბინაზე',
      service3: 'ამბულატორიული მომსახურება კლინიკაში',
      service4: 'ფასდაკლებები და უფასო აქციები',
      copyright: '© 2025 მედიქიდსი. ყველა უფლება დაცულია. | Developed and Designed by Apollo Creations',
      followUs: 'გამოგვყევით'
    },
    en: {
      categories: 'Categories',
      about: 'About Us',
      services: 'Services',
      news: 'News',
      contact: 'Contact',
      ourDoctors: 'Our Doctors',
      companyName: 'Medikids',
      companyDescription: 'Pediatric Emergency Medical Care',
      slogan1: 'Always by your side and your children\'s side',
      slogan2: 'Caring for what matters most',
      slogan3: '24 hours a day, 7 days a week',
      address: 'Address',
      addressText: 'Tbilisi, Saburtalo, Zurab Anjaparidze II St. 2',
      directions: 'Get Directions on Google Map',
      phone: 'Phone',
      email: 'Email',
      website: 'Website',
      taxId: 'Tax ID',
      legalName: 'Legal Name',
      legalNameText: 'LLC Medikids',
      service1: 'Emergency medical team service at home',
      service2: 'Laboratory service at home',
      service3: 'Outpatient service at clinic',
      service4: 'Discounts and free promotions',
      copyright: '© 2025 Medikids. All rights reserved. | Developed and Designed by Apollo Creations',

      followUs: 'Follow Us'
    }
  };

  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <h3 className="footer-logo">{t.companyName}</h3>
            <p className="footer-tagline">{t.companyDescription}</p>
            <ul className="footer-slogans">
              <li>{t.slogan1}</li>
              <li>{t.slogan2}</li>
              <li>{t.slogan3}</li>
            </ul>
            <div className="footer-legal">
              <p><strong>{t.taxId}:</strong> 405 798 800</p>
              <p><strong>{t.legalName}:</strong> {t.legalNameText}</p>
            </div>
          </div>

          {/* Categories */}
          <div className="footer-column">
            <h4 className="footer-title">{t.categories}</h4>
            <ul className="footer-links">
              <li><a href="#home">{t.companyName}</a></li>
              <li><a href="#about">{t.about}</a></li>
              <li><a href="#services">{t.services}</a></li>
              <li><a href="#news">{t.news}</a></li>
              <li><a href="#doctors">{t.ourDoctors}</a></li>
              <li><a href="#contact">{t.contact}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4 className="footer-title">{t.services}</h4>
            <ul className="footer-links">
              <li>{t.service1}</li>
              <li>{t.service2}</li>
              <li>{t.service3}</li>
              <li>{t.service4}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4 className="footer-title">{t.contact}</h4>
            <div className="footer-contact">
              <div className="contact-item2">
                <span className="contact-icon">📍</span>
                <div>
                  <p className="contact-label">{t.address}:</p>
                  <p>{t.addressText}</p>
                  <a 
                   href="https://maps.google.com/?q=თბილისი, საბურთალო, ზურაბ ანჯაფარიძის II შესახვევი 2"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-link-underline"
                  >
                    {t.directions}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <p className="contact-label">{t.phone}:</p>
                  <a href="tel:0322227171">032 222 71 71</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <p className="contact-label">{t.email}:</p>
                  <a href="mailto:info@medikids.ge">info@medikids.ge</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🌐</span>
                <div>
                  <p className="contact-label">{t.website}:</p>
                  <a href="https://www.medikids.ge" target="_blank" rel="noopener noreferrer">
                    www.medikids.ge
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="footer-social">
              <p className="contact-label">{t.followUs}:</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61583924656715&mibextid=wwXIfr&rdid=lcRulSRMnvcSewrF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16W9Et42AJ%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;