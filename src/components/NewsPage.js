import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/NewsPage.css';

function NewsPage({ language, setLanguage }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = "https://medi-back-iltx.onrender.com";

  const translations = {
    ge: {
      loading: 'იტვირთება...',
      error: 'სიახლის ჩატვირთვა ვერ მოხერხდა',
      backToNews: '← დაბრუნება',
      notFound: 'სიახლე ვერ მოიძებნა',
      published: 'გამოქვეყნებულია'
    },
    en: {
      loading: 'Loading...',
      error: 'Failed to load news article',
      backToNews: '← Back',
      notFound: 'News article not found',
      published: 'Published on'
    }
  };

  const t = translations[language];

  // Helper function to get the correct image URL
  const getImageUrl = (item) => {
    if (!item || (!item.imageUrl && !item.image)) return null;
    
    const imagePath = item.imageUrl || item.image;
    
    // If it already starts with http, return as is
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    // If it starts with /, add the base URL
    if (imagePath.startsWith('/')) {
      return `${API_BASE_URL}${imagePath}`;
    }
    
    // Otherwise, add both base URL and /
    return `${API_BASE_URL}/${imagePath}`;
  };

  // Scroll to top when component mounts or ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Fetch single news item
  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/news/${id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch news article');
        }
        
        const data = await response.json();
        console.log('Fetched news item:', data); // Debug log
        setNewsItem(data.news || data);
        setError(null);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNewsItem();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="newspage-wrapper">
        <Header language={language} setLanguage={setLanguage} />
        <div className="newspage-loading">
          <div className="loading-spinner"></div>
          <p>{t.loading}</p>
        </div>
        <Footer language={language} />
      </div>
    );
  }

  if (error || !newsItem) {
    return (
      <div className="newspage-wrapper">
        <Header language={language} setLanguage={setLanguage} />
        <div className="newspage-error">
          <div className="error-icon">⚠️</div>
          <h2>{t.error}</h2>
          <p>{error || t.notFound}</p>
          <button onClick={() => navigate('/news')} className="back-button-error">
            {t.backToNews}
          </button>
        </div>
        <Footer language={language} />
      </div>
    );
  }

  const imageUrl = getImageUrl(newsItem);
  console.log('News page image URL:', imageUrl); // Debug log

  return (
    <div className="newspage-wrapper">
      <Header language={language} setLanguage={setLanguage} />
      
      {/* Back Button */}
      <div className="newspage-back-container">
        <button onClick={() => navigate('/news')} className="back-button">
          {t.backToNews}
        </button>
      </div>

      {/* Hero Image Section */}
      {imageUrl && (
        <div className="newspage-hero">
          <img 
            src={imageUrl} 
            alt={newsItem.title}
            className="newspage-hero-image"
            onError={(e) => {
              console.error('Image failed to load:', imageUrl);
              e.target.parentElement.style.display = 'none';
            }}
            onLoad={() => {
              console.log('Image loaded successfully:', imageUrl);
            }}
          />
          <div className="newspage-hero-overlay"></div>
        </div>
      )}

      {/* Article Content */}
      <div className="newspage-container">
        <article className="newspage-article">
          <div className="newspage-meta">
            {newsItem.createdAt && (
              <div className="newspage-date-badge">
                <svg className="calendar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>
                  {t.published} {new Date(newsItem.createdAt).toLocaleDateString(
                    language === 'ge' ? 'ka-GE' : 'en-US',
                    { year: 'numeric', month: 'long', day: 'numeric' }
                  )}
                </span>
              </div>
            )}
          </div>

          <h1 className="newspage-title">{newsItem.title}</h1>
          
          <div className="newspage-divider"></div>
          
          <div className="newspage-content">
            {newsItem.content.split('\n').map((line, index) => {
              // If line is empty, render a spacer paragraph
              if (line.trim() === '') {
                return <p key={index} className="newspage-paragraph newspage-spacer"></p>;
              }
              // Otherwise render the line
              return (
                <p key={index} className="newspage-paragraph">
                  {line}
                </p>
              );
            })}
          </div>

          {/* Decorative Element */}
          <div className="newspage-footer-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-circle"></div>
            <div className="decoration-line"></div>
          </div>
        </article>
      </div>

      <Footer language={language} />
    </div>
  );
}

export default NewsPage;