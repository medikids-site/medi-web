import React from 'react';
import '../styles/Footer.css';

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 11.5 19.79 19.79 0 0 1 .01 2.82 2 2 0 0 1 2 .64h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.09 8.4a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

function Footer({ language }) {
  const translations = {
    ge: {
      categories: 'კატეგორიები',
      about: 'ჩვენ შესახებ',
      services: 'სერვისები',
      news: 'სიახლეები',
      contact: 'კონტაქტი',
      ourDoctors: 'ჩვენი ექიმები',
      companyName: 'მედიქიდსი',
      companyDescription: 'პედიატრიული სასწრაფო სამედიცინო დახმარება',
      slogan1: 'მუდამ თქვენი და თქვენი შვილების გვერდით',
      slogan2: 'ზრუნვა ყველაზე ძვირფასზე',
      slogan3: '24 საათის განმავლობაში კვირაში 7 დღე',
      address: 'მისამართი',
      addressText: 'თბილისი, საბურთალო, ზურაბ ანჯაფარიძის II შესახვევი 2',
      directions: 'Google Map-ზე ნახვა',
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
      copyright: '© 2025 მედიქიდსი. ყველა უფლება დაცულია.',
      developedBy: 'შექმნილია',
      followUs: 'გამოგვყევით',
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
      slogan1: "Always by your side and your children's side",
      slogan2: 'Caring for what matters most',
      slogan3: '24 hours a day, 7 days a week',
      address: 'Address',
      addressText: 'Tbilisi, Saburtalo, Zurab Anjaparidze II St. 2',
      directions: 'View on Google Maps',
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
      copyright: '© 2025 Medikids. All rights reserved.',
      developedBy: 'Developed & Designed by',
      followUs: 'Follow Us',
    },
  }

  const t = translations[language]

  const navLinks = [
    { label: t.about,      href: '#about' },
    { label: t.services,   href: '#services' },
    { label: t.news,       href: '#news' },
    { label: t.ourDoctors, href: '#doctors' },
    { label: t.contact,    href: '#contact' },
  ]

  const servicesList = [t.service1, t.service2, t.service3, t.service4]

  return (
    <footer className="footer">

      {/* ── shimmer top border ── */}
      <div className="footer-top-shimmer" />

      <div className="footer-body">

        {/* ══ TOP SECTION ══ */}
        <div className="footer-top">

          {/* Brand col */}
          <div className="footer-brand">
            <div className="footer-brand-name">{t.companyName}</div>
            <p className="footer-brand-desc">{t.companyDescription}</p>
            <ul className="footer-slogans">
              {[t.slogan1, t.slogan2, t.slogan3].map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <div className="footer-legal">
              <span>{t.taxId}: <strong>405 798 800</strong></span>
              <span>{t.legalName}: <strong>{t.legalNameText}</strong></span>
            </div>
          </div>

          {/* Nav col */}
          <div className="footer-col">
            <h4 className="footer-col-heading">{t.categories}</h4>
            <div className="footer-col-rule" />
            <ul className="footer-nav-list">
              {navLinks.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="footer-nav-link">
                    <span className="footer-nav-arrow">›</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services col */}
          <div className="footer-col">
            <h4 className="footer-col-heading">{t.services}</h4>
            <div className="footer-col-rule" />
            <ul className="footer-services-list">
              {servicesList.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div className="footer-col">
            <h4 className="footer-col-heading">{t.contact}</h4>
            <div className="footer-col-rule" />
            <ul className="footer-contact-list">

              <li>
                <a
                  href="https://maps.google.com/?q=თბილისი,+საბურთალო,+ზურაბ+ანჯაფარიძის+II+შესახვევი+2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-item"
                >
                  <span className="footer-contact-icon"><LocationIcon /></span>
                  <div className="footer-contact-text">
                    <span className="footer-contact-label">{t.address}</span>
                    <span className="footer-contact-value">{t.addressText}</span>
                    <span className="footer-directions">
                      {t.directions} <ArrowIcon />
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a href="tel:0322227171" className="footer-contact-item">
                  <span className="footer-contact-icon"><PhoneIcon /></span>
                  <div className="footer-contact-text">
                    <span className="footer-contact-label">{t.phone}</span>
                    <span className="footer-contact-value">032 222 71 71</span>
                  </div>
                </a>
              </li>

              <li>
                <a href="mailto:info@medikids.ge" className="footer-contact-item">
                  <span className="footer-contact-icon"><MailIcon /></span>
                  <div className="footer-contact-text">
                    <span className="footer-contact-label">{t.email}</span>
                    <span className="footer-contact-value">info@medikids.ge</span>
                  </div>
                </a>
              </li>

              <li>
                <a href="https://www.medikids.ge" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                  <span className="footer-contact-icon"><GlobeIcon /></span>
                  <div className="footer-contact-text">
                    <span className="footer-contact-label">{t.website}</span>
                    <span className="footer-contact-value">www.medikids.ge</span>
                  </div>
                </a>
              </li>

            </ul>

            {/* Social */}
            <div className="footer-social">
              <span className="footer-social-label">{t.followUs}</span>
              <div className="footer-social-icons">
                <a href="https://www.facebook.com/profile.php?id=61583924656715" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-btn">
                  <FacebookIcon />
                </a>
                <a href="#instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="footer-copy">{t.copyright}</span>
          <span className="footer-bottom-divider" />
          <span className="footer-credit">
            {t.developedBy}{' '}
            <a
              href="https://apollocreations.net"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-apollo-link"
            >
              Apollo Creations
            </a>
          </span>
        </div>
      </div>

    </footer>
  )
}

export default Footer