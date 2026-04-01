import React, { useState, useEffect } from 'react';
import '../styles/Customers.css';

function Customers({ language }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const API_BASE_URL = "https://medi-back-iltx.onrender.com";

  const translations = {
    ge: {
      title: 'რას ამბობენ ჩვენი მომხმარებლები',
      loading: 'იტვირთება...'
    },
    en: {
      title: 'What Our Customers Say',
      loading: 'Loading...'
    }
  };

  const t = translations[language];

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/reviews`);
        if (response.ok) {
          const data = await response.json();
          setReviews(data.reviews || []);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const getItemsPerSlide = () => {
    if (window.innerWidth <= 540) return 1;
    return 3;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
      setCurrentSlide(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (loading) {
    return (
      <div className="customers-container">
        <div className="customers-loading">{t.loading}</div>
      </div>
    );
  }

  if (reviews.length === 0) {
    return null;
  }

  const startIndex = currentSlide * itemsPerSlide;
  const currentReviews = reviews.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <div className="customers-container" id="reviews">
      <div className="customers-content">
        <h2 className="customers-title">{t.title}</h2>
        
        <div className="carousel-container">
          {/* Previous Button */}
          {reviews.length > itemsPerSlide && (
            <button 
              className="carousel-arrow carousel-arrow-left" 
              onClick={handlePrev}
              aria-label="Previous reviews"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}

          {/* Reviews Grid */}
          <div className="reviews-grid">
            {currentReviews.map((review) => (
              <div 
                key={review._id} 
                className="review-card"
              >
                <div className="review-quote">
                  <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 32V17.6C0 11.7333 1.46667 7.06667 4.4 3.6C7.33333 0.133333 11.7333 -1.06667 17.6 0.8L16 6.4C13.6 6.66667 11.6 7.73333 10 9.6C8.4 11.4667 7.6 13.7333 7.6 16.4V19.2H17.6V32H0ZM22.4 32V17.6C22.4 11.7333 23.8667 7.06667 26.8 3.6C29.7333 0.133333 34.1333 -1.06667 40 0.8L38.4 6.4C36 6.66667 34 7.73333 32.4 9.6C30.8 11.4667 30 13.7333 30 16.4V19.2H40V32H22.4Z" fill="rgba(255, 255, 255, 0.15)"/>
                  </svg>
                </div>
                
                <p className="review-text">{review.note}</p>
                
                <div className="review-author">
                  <div className="author-avatar">
                    {review.name ? review.name.charAt(0).toUpperCase() : '?'}
                  </div>
                  <p className="author-name">{review.name || 'Anonymous'}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          {reviews.length > itemsPerSlide && (
            <button 
              className="carousel-arrow carousel-arrow-right" 
              onClick={handleNext}
              aria-label="Next reviews"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>

        {/* Dots Navigation - MOVED OUTSIDE carousel-container */}
        {reviews.length > itemsPerSlide && (
          <div className="carousel-dots">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Customers;