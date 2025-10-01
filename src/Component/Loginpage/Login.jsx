import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Loginpage.css";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const code = Math.floor(10000 + Math.random() * 90000).toString();
    setCaptchaCode(code);
    setCaptchaInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoginSuccess(false);

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    if (captchaInput !== captchaCode) {
      setError("Incorrect CAPTCHA code entered.");
      return;
    }
    // Replace with your authentication API logic
    if (email === "test@example.com" && password === "password123") {
      setLoginSuccess(true);
      // Auto-dismiss success message after 3 seconds
      setTimeout(() => setLoginSuccess(false), 3000);
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <div className="captcha-container">
            <div className="captcha-code">
              {captchaCode}
            </div>
            <button type="button" onClick={generateCaptcha} className="refresh-captcha">
              ↻
            </button>
          </div>

          <input
            type="text"
            placeholder="Enter CAPTCHA code"
            value={captchaInput}
            onChange={e => setCaptchaInput(e.target.value)}
            required
          />

          <button type="submit" className="login-button">Login</button>
        </form>

        {loginSuccess && (
          <button className="success-message" disabled>
            Login Successful!
          </button>
        )}

        <div className="login-links">
          <Link to="/forgot-password" className="login-link">Forgot Password?</Link>
          <span> | </span>
          <Link to="/signup" className="login-link">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
