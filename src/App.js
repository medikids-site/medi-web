import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import ServicesSection from './components/ServicesSection';
import Doctors from './components/Doctors';
import Admin from './components/Admin';
import Logos from './components/Logos';
import Customers from './components/Customers';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import ContactPage from './components/ContactPage';
import News from './components/News';
import NewsPage from './components/NewsPage';
import ServicePage from './components/ServicePage';

// Main page component
function MainPage({ language, setLanguage }) {
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <Landing language={language} />
      <Contact language={language} />
      <ContactForm language={language} />
      <ServicesSection language={language} />
      <Doctors language={language} />
      <Logos language={language} />
      <Customers language={language} />
      <Footer language={language} />
    </>
  );
}

function App() {
  const [language, setLanguage] = useState('ge');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={<MainPage language={language} setLanguage={setLanguage} />} 
          />
          <Route 
            path="/admin" 
            element={<Admin />} 
          />
          <Route
            path="/about"
            element={<AboutSection language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="/contact"
            element={<ContactPage language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="/news"
            element={<News language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="/news/:id"
            element={<NewsPage language={language} setLanguage={setLanguage} />}
          />
          <Route
            path="/services"
            element={<ServicePage language={language} setLanguage={setLanguage} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;