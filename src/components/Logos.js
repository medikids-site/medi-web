import React, { useState, useEffect } from 'react';
import '../styles/Logos.css';

function Logos({ language }) {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = "https://medi-back-iltx.onrender.com";

  const translations = {
    ge: {
      title: 'ჩვენი პარტნიორები',
      loading: 'იტვირთება...'
    },
    en: {
      title: 'Our Partners',
      loading: 'Loading...'
    }
  };

  const t = translations[language];

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/partners`);
        if (response.ok) {
          const data = await response.json();
          setPartners(data.partners || []);
        }
      } catch (error) {
        console.error('Error fetching partners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (loading) {
    return (
      <div className="logos-container">
        <div className="logos-loading">{t.loading}</div>
      </div>
    );
  }

  if (partners.length === 0) {
    return null; // Don't show section if no partners
  }

  return (
    <div className="logos-container" id="partners">
      <div className="logos-header">
        <h2 className="logos-title">{t.title}</h2>
      </div>

      <div className="logos-grid">
        {partners.map((partner) => (
          <div key={partner._id} className="logo-item">
            <img 
              src={partner.logoUrl} 
              alt={partner.name || 'Partner logo'}
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logos;