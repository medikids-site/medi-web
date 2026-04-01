import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/News.css';

const photo = process.env.PUBLIC_URL + '/news.jpg';

function News({ language, setLanguage }) {
  const navigate = useNavigate();
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = "https://medi-back-iltx.onrender.com";

  const translations = {
    ge: {
      title: 'სიახლეები',
      description: 'გაეცანით ჩვენს სიახლეებს  და მიიღეთ საინტერესო რჩევები, რომლებიც თქვენი პატარას ჯანსაღ აღზრდაში დაგეხმარებათ',
      noNews: 'სიახლეები მალე დაემატება',
      stayTuned: 'გამოიწერეთ ჩვენი განახლებები',
      loading: 'იტვირთება...',
      error: 'სიახლეების ჩატვირთვა ვერ მოხერხდა',
      readMore: 'მეტის ნახვა'
    },
    en: {
      title: 'News',
      description: 'Stay informed about our latest news, updates, and pediatric healthcare tips',
      noNews: 'News coming soon',
      stayTuned: 'Subscribe for updates',
      loading: 'Loading...',
      error: 'Failed to load news',
      readMore: 'Read More'
    }
  };

  const t = translations[language];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch news from API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/news`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        
        const data = await response.json();
        console.log('Fetched news data:', data); // Debug log
        setNewsItems(data.news || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleNewsClick = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  // Helper function to get the correct image URL
  const getImageUrl = (item) => {
    if (!item.imageUrl && !item.image) return null;
    
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

  return (
    <div className="news-page">
      <Header language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <div className="news-hero" style={{ backgroundImage: `url(${photo})` }}>
        <div className="news-overlay"></div>
        <div className="news-hero-content">
          <h1 className="news-hero-title">{t.title}</h1>
          <p className="news-hero-description">{t.description}</p>
        </div>
      </div>

      {/* News Content Section */}
      <div className="news-content-section">
        <div className="news-content-container">
          {loading ? (
            <div className="news-placeholder">
              <div className="news-placeholder-icon">⏳</div>
              <h2 className="news-placeholder-title">{t.loading}</h2>
            </div>
          ) : error ? (
            <div className="news-placeholder">
              <div className="news-placeholder-icon">⚠️</div>
              <h2 className="news-placeholder-title">{t.error}</h2>
              <p className="news-placeholder-text">{error}</p>
            </div>
          ) : newsItems.length === 0 ? (
            <div className="news-placeholder">
              <div className="news-placeholder-icon">📰</div>
              <h2 className="news-placeholder-title">{t.noNews}</h2>
              <p className="news-placeholder-text">{t.stayTuned}</p>
            </div>
          ) : (
            <div className="news-grid">
              {newsItems.map((item, index) => {
                const imageUrl = getImageUrl(item);
                console.log('News item:', item._id, 'Image URL:', imageUrl); // Debug log
                
                return (
                  <div 
                    key={item._id} 
                    className="news-card" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => handleNewsClick(item._id)}
                  >
                    {imageUrl && (
                      <div className="news-card-image">
                        <img 
                          src={imageUrl} 
                          alt={item.title}
                          onError={(e) => {
                            console.error('Image failed to load:', imageUrl);
                            e.target.parentElement.style.display = 'none';
                          }}
                          onLoad={() => {
                            console.log('Image loaded successfully:', imageUrl);
                          }}
                        />
                        <div className="news-card-overlay"></div>
                      </div>
                    )}
                    <div className="news-card-content">
                      <div className="news-card-header">
                        {item.createdAt && (
                          <span className="news-card-date">
                            {new Date(item.createdAt).toLocaleDateString(
                              language === 'ge' ? 'ka-GE' : 'en-US',
                              { year: 'numeric', month: 'long', day: 'numeric' }
                            )}
                          </span>
                        )}
                      </div>
                      <h3 className="news-card-title">{item.title}</h3>
                      <p className="news-card-text">{item.content}</p>
                      <div className="news-card-footer">
                        <span className="news-read-more">{t.readMore} →</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}

export default News;