import React, { useState } from 'react';
import './Contact.css';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
  ) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) errors.message = "Message is required.";
  return errors;
};

const Contact = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const fieldError = validate({ ...form, [name]: form[name] })[name];
    if (fieldError) setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setFormStatus({ message: 'Please fix the errors highlighted below.', type: 'error' });
      return;
    }
    setFormStatus({ message: 'Message sent successfully!', type: 'success' });
    setTimeout(() => {
      setForm(initialState);
      setErrors({});
      setFormStatus({ message: '', type: '' });
    }, 3000);
  };

  return (
    <div className="contact-page-container">
      <div className="contact-root">
        <div className="contact-form-container">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Please fill out the form below and we will get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} noValidate>
            {['name', 'email', 'message'].map((field) => (
              <div className="form-group" key={field}>
                <label htmlFor={field} className="form-label">
                  {field.charAt(0).toUpperCase() + field.slice(1)} <span className="field-required">*</span>
                </label>
                {field !== "message" ? (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    id={field}
                    autoComplete={field}
                    value={form[field]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors[field]}
                    aria-describedby={errors[field] ? `${field}-error` : undefined}
                    className={`form-input${errors[field] ? ' error' : ''}`}
                  />
                ) : (
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`form-input${errors.message ? ' error' : ''}`}
                  />
                )}
                {errors[field] && (
                  <div id={`${field}-error`} className="input-error" role="alert">
                    {errors[field]}
                  </div>
                )}
              </div>
            ))}
            <button type="submit" className="form-submit-btn">
              Send Message
            </button>
          </form>
          {formStatus.message && (
            <div className={`form-status-message ${formStatus.type}`}>
              {formStatus.message}
            </div>
          )}
        </div>
        <div className="contact-map-container">
          <h2 className="contact-map-title">Our Location</h2>
          <iframe
            title="Ahmedabad Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.5543022852105!2d72.57136291502772!3d23.022505784949966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f55c4c8a3f%3A0x318f1c7cbe82c9ea!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1695658589785!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '14px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;