import React from "react";
import "./Privacypolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p><strong>Last Updated:</strong> [01/10/2025]</p>

      <p> www.catalystdigitial.com/CatalystDigitial (“we,” “our,” or “us”) values your privacy...</p>

      <h2 className="privacy-heading">1. Information We Collect</h2>
      <ul>
        <li><strong>Personal Information:</strong> Name, email, phone number, etc.</li>
        <li><strong>Usage Information:</strong> Pages visited, device/browser info.</li>
        <li><strong>Cookies & Tracking:</strong> To improve user experience.</li>
      </ul>

      <h2 className="privacy-heading">2. How We Use Information</h2>
      <ul>
        <li>Provide and improve our services.</li>
        <li>Respond to your queries and support requests.</li>
        <li>Send updates, promotions, or notifications (if opted in).</li>
        <li>Ensure website/app security and prevent misuse.</li>
      </ul>

      {/* Continue same pattern for other sections */}

      <footer className="privacy-footer">
        &copy; {new Date().getFullYear()}  www.catalystdigitial.com/CatalystDigitial . All Rights Reserved.
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
