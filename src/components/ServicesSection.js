import React from 'react';
import '../styles/ServicesSection.css';

const icon1 = process.env.PUBLIC_URL + '/icon1.png';
const icon2 = process.env.PUBLIC_URL + '/icon2.png';
const icon3 = process.env.PUBLIC_URL + '/icon3.png';
const icon4 = process.env.PUBLIC_URL + '/icon4.png';
const back = process.env.PUBLIC_URL + '/back.jpg';

function ServicesSection({ language }) {
  const translations = {
    ge: {
      title: 'სერვისები',
      services: [
        {
          number: '01',
          title: 'გადაუდებელი სამედიცინო ბრიგადის მომსახურება ბინაზე',
          icon: icon1
        },
        {
          number: '02',
          title: 'ლაბორატორიული მომსახურება ბინაზე',
          icon: icon2
        },
        {
          number: '03',
          title: 'ამბულატორიული მომსახურება კლინიკაში',
          icon: icon3
        },
        {
          number: '04',
          title: 'ფასდაკლებები და უფასო აქციები',
          icon: icon4
        }
      ]
    },
    en: {
      title: 'Services',
      services: [
        {
          number: '01',
          title: 'Emergency Medical Team Service at Home',
          icon: icon1
        },
        {
          number: '02',
          title: 'Laboratory Service at Home',
          icon: icon2
        },
        {
          number: '03',
          title: 'Outpatient Service at Clinic',
          icon: icon3
        },
        {
          number: '04',
          title: 'Discounts and Free Promotions',
          icon: icon4
        }
      ]
    }
  };

  const t = translations[language || 'ge'];

  return (
    <section 
      className="services-section" 
      id="services"
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="services-overlay"></div>
      <div className="services-container">
        <h2 className="services-title">{t.title}</h2>
        <div className="services-grid">
          {t.services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;