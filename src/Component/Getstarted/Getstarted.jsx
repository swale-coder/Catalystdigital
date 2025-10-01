import React, { useState } from "react";
import "./Getstarted.css";
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

function GetStarted() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !phone || !captcha) {
      setError("⚠️ Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setError("⚠️ Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("⚠️ Password must be at least 6 characters.");
      return;
    }
    if (!validatePhone(phone)) {
      setError("⚠️ Phone number must be 10 digits.");
      return;
    }
    if (captcha !== "7") {
      setError("⚠️ Captcha incorrect.");
      return;
    }

    setSubmitted(true);
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked 🚀 (Integrate Google OAuth here)");
  };

  const handleAppleLogin = () => {
    alert("Apple login clicked 🍎 (Integrate Apple OAuth here)");
  };

  if (submitted) {
    return (
      <div className="getstarted-message">
        <h2>🎉 Thank you for getting started!</h2>
        <p>We’ll reach out to you soon.</p>
      </div>
    );
  }

  return (
    <div className="getstarted-container">
      <form className="getstarted-form" onSubmit={handleSubmit}>
        <h2 className="form-title">🚀 Get Started</h2>
        {error && <div className="error-message">{error}</div>}

        <input
          type="text"
          placeholder="👤 Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="📧 Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* ✅ Password field with show/hide */}
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="🔑 Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <input
          type="tel"
          placeholder="📱 Contact Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        {/* Simple captcha */}
        <div className="captcha-box">
          <label>Solve: 3 + 4 = ?</label>
          <input
            type="text"
            placeholder="Enter Answer"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Get Started
        </button>

        <div className="divider">or</div>

        {/* Social Login */}
        <button
          type="button"
          className="social-button google"
          onClick={handleGoogleLogin}
        >
          <FaGoogle className="icon" /> Continue with Google
        </button>

        <button
          type="button"
          className="social-button apple"
          onClick={handleAppleLogin}
        >
          <FaApple className="icon" /> Continue with Apple
        </button>
      </form>
    </div>
  );
}

export default GetStarted;
