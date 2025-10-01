import React, { useState } from 'react';
import './Hero.css';


const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Navigation or other actions here
    }, 1500);
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          
          <h2 className="hero-title">
            Your Success, Our Blueprint
          </h2>
          <p className="hero-description">
            We are experts in building and crafting digital solutions that empower businesses to thrive in a competitive world.
          </p>
        </div>
        <a
          href="#get-started"
          onClick={handleButtonClick}
          className={`hero-button${isLoading ? ' loading' : ''}`}
        >
          {isLoading ? (
            <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            'Get Started Today'
          )}
        </a>
        <div className="hero-stats-container">
          <div className="stat-card">
            <span className="stat-number">250+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years of Experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">98%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;