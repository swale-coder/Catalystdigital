import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Service from './Component/Service/Service';
import Testimonial from './Component/Testimonial/Testimonial';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import LoginPage from './Component/Loginpage/Login';
import GetStarted from './Component/Getstarted/Getstarted';
import PrivacyPolicy from './Component/Privacypolicy/Privacypolicy';

function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>404 - Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
