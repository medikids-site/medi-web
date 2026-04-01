import React, { useState, useEffect } from 'react';
import '../styles/Doctors.css';

const SKELETON_COUNT = 8;

function DoctorSkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image skeleton" />
      <div className="skeleton-info">
        <div className="skeleton-name skeleton" />
        <div className="skeleton-position skeleton" />
      </div>
    </div>
  );
}

function Doctors({ language }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = "https://medi-back-iltx.onrender.com";

  const translations = {
    ge: {
      title: 'ჩვენი ექიმები',
      description: 'პედიატრიული სასწრაფო სამედიცინო დახმარება დაკომპლექტებულია გამოცდილი და მაღალი კვალიფიკაციის მქონე პედიატრებით. რომლებიც მაღალი პროფესიონალიზმით გამოირჩევიან.',
    },
    en: {
      title: 'Our Doctors',
      description: 'Pediatric emergency medical care is staffed with experienced and highly qualified pediatricians who are distinguished by high professionalism.',
    }
  };

  const t = translations[language];

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/doctors`);
        if (response.ok) {
          const data = await response.json();
          setDoctors(data.doctors || []);
        }
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="doctors-container" id="doctors">
      <div className="doctors-header">
        {loading ? (
          <>
            <div className="skeleton-header-title skeleton" />
            <div className="skeleton-header-line1 skeleton" />
            <div className="skeleton-header-line2 skeleton" />
          </>
        ) : (
          <>
            <h1 className="doctors-title">{t.title}</h1>
            <p className="doctors-description">{t.description}</p>
          </>
        )}
      </div>

      <div className="doctors-grid">
        {loading
          ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
              <DoctorSkeletonCard key={i} />
            ))
          : doctors.map((doctor) => (
              <div key={doctor._id} className="doctor-card">
                <div className="doctor-image-wrapper">
                  <img
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    className="doctor-image"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="doctor-info">
                  <h3 className="doctor-name">{doctor.name}</h3>
                  <p className="doctor-position">{doctor.position}</p>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
}

export default Doctors;