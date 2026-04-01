import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const logo = process.env.PUBLIC_URL + '/logo.jpeg';

function Header({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const translations = {
    ge: {
      home: 'მთავარი',
      about: 'ჩვენ შესახებ',
      services: 'სერვისები',
      news: 'სიახლეები',
      contact: 'კონტაქტი'
    },
    en: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      news: 'News',
      contact: 'Contact'
    }
  };

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'ge' ? 'en' : 'ge');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false); // Close mobile menu

    if (href === '/') {
      // Go to home page
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href === '/about') {
      // Go to about page
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href === '/services') {
      // Go to services page
      navigate('/services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href === '/news') {
      // Go to news page
      navigate('/news');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href === '/contact') {
      // Go to contact page
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on other pages and trying to access home page sections, go to home first
      if (location.pathname !== '/' && href.startsWith('#')) {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Scroll to section on current page
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <a href="/" onClick={(e) => handleNavClick(e, '/')}>
            <img src={logo} alt="Medikids Logo" />
          </a>
        </div>

        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <ul className="header-nav-list">
            <li>
              <a href="/" onClick={(e) => handleNavClick(e, '/')}>
                {t.home}
              </a>
            </li>
            <li>
              <a href="/about" onClick={(e) => handleNavClick(e, '/about')}>
                {t.about}
              </a>
            </li>
            <li>
              <a href="/services" onClick={(e) => handleNavClick(e, '/services')}>
                {t.services}
              </a>
            </li>
            <li>
              <a href="/news" onClick={(e) => handleNavClick(e, '/news')}>
                {t.news}
              </a>
            </li>
            <li>
              <a href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>
                {t.contact}
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="language-toggle" onClick={toggleLanguage}>
            {language === 'ge' ? 'EN' : 'GE'}
          </button>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;