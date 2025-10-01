import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link
import "./Header.css";
import logo from "../../Assets/Catalyst Digital logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handler to navigate to login page
  const handleLoginClick = () => {
    navigate("/login");
  };

  // Handler to navigate to get started page
  const handleGetStartedClick = () => {
    navigate("/get-started");
  };

  return (
    <header className="main-header">
      <div className="header-brand">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Catalyst Digital Logo" className="logo-image" />
          <span className="logo-text">Catalyst Digital</span>
        </Link>
      </div>

      <button
        className={`hamburger-menu ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="hamburger-line line1"></span>
        <span className="hamburger-line line2"></span>
        <span className="hamburger-line line3"></span>
      </button>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/testimonial">Testimonial</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="header-buttons">
        <button className="btn secondary" onClick={handleLoginClick}>Login</button>
        <button className="btn primary" onClick={handleGetStartedClick}>Get Started</button>
      </div>
    </header>
  );
}

export default Header;
