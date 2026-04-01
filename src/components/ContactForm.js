import React, { useState } from 'react';
import '../styles/ContactForm.css';

function ContactForm({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const translations = {
    ge: {
      title: 'ჩაეწერეთ ექიმთან',
      subtitle: '032 222 71 71',
      description: 'დაგვიკავშირდით ნებისმიერ დროს როცა დაგჭირდებათ პედიატრიული სასწრაფო დახმარება. გამოცდილი პედიატრებისგან დაკომპლექტებული ბრიგადა უმოკლეს დროში გაჩნდება თქვენთან.',
      namePlaceholder: 'სახელი, გვარი',
      phonePlaceholder: 'ტელეფონი',
      dateLabel: 'თარიღი',
      datePlaceholder: 'რომელ თარიღს ეწერებით',
      messagePlaceholder: 'დამატებითი ინფორმაცია (არასავალდებულო)',
      submit: 'გაგზავნა',
      success: 'წარმატებით გაიგზავნა!',
      error: 'დაფიქსირდა შეცდომა. გთხოვთ სცადოთ თავიდან.'
    },
    en: {
      title: 'Book an Appointment',
      subtitle: '032 222 71 71',
      description: 'Call anytime you need pediatric emergency care. Our experienced pediatric team will be with you in the shortest time.',
      namePlaceholder: 'Full Name',
      phonePlaceholder: 'Phone Number',
      dateLabel: 'Date',
      datePlaceholder: 'Preferred Date',
      messagePlaceholder: 'Additional Information (Optional)',
      submit: 'Submit',
      success: 'Successfully submitted!',
      error: 'An error occurred. Please try again.'
    }
  };

  const t = translations[language || 'ge'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xpweyolg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', date: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <div className="contact-form-box">
          {/* Header with Title and Phone */}
          <div className="contact-form-header">
            <h2 className="contact-form-title">{t.title}</h2>
            <a href="tel:16911" className="contact-form-phone">
              📞 {t.subtitle}
            </a>
          </div>

          {/* Description */}
          <p className="contact-form-description">{t.description}</p>

          {/* Divider */}
          <div className="contact-form-divider"></div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.phonePlaceholder}
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label2">{t.dateLabel}</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder={t.datePlaceholder}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                rows="3"
                className="form-input form-textarea"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? '...' : t.submit}
            </button>

            {submitStatus === 'success' && (
              <div className="form-message form-success">✓ {t.success}</div>
            )}
            {submitStatus === 'error' && (
              <div className="form-message form-error">✗ {t.error}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;