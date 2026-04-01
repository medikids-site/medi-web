import React, { useState, useEffect } from 'react';
import '../styles/Landing.css';

const pic1 = process.env.PUBLIC_URL + '/p1.jpg';
const pic2 = process.env.PUBLIC_URL + '/p2.jpg';
const pic3 = process.env.PUBLIC_URL + '/p3.jpg';

function Landing({ language }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: pic1 },
    { image: pic2 },
    { image: pic3 }
  ];

  const translations = {
    ge: {
      title: 'მედიქიდსი',
      subtitle: 'პედიატრიული სასწრაფო დახმარება',
      cta: 'გაიგე მეტი'
    },
    en: {
      title: 'Medikids',
      subtitle: 'Pediatric Emergency Care',
      cta: 'Learn More'
    }
  };

  const t = translations[language || 'ge'];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleLearnMore = () => {
    // Scroll down to the next section smoothly
    window.scrollBy({
      top: window.innerHeight * 0.8, // Scroll down about 80% of viewport height
      behavior: 'smooth'
    });
  };

  return (
    <section className="landing">
      <div className="landing-carousel">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`landing-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="landing-overlay"></div>
          </div>
        ))}

        {/* Content */}
        <div className="landing-content">
          <div className="landing-text">
            <h1 className="landing-title">{t.title}</h1>
            <p className="landing-subtitle">{t.subtitle}</p>
            <button className="landing-cta" onClick={handleLearnMore}>{t.cta}</button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Landing;