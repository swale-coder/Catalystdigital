import React from "react";
import "./Testimonial.css"; // Styling for testimonial section
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Testimonial = () => {
  const testimonials = [
    {
      name: "Yashart Bhatt",
      role: "CEO, IWAY INC",
      feedback:
        "The team delivered exactly what we needed. Their expertise in web solutions transformed our online presence.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Mehta",
      role: "Founder, DesignSpark",
      feedback:
        "Amazing UI/UX design! Our customers love the new look and feel of our website. Highly recommended.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Verma",
      role: "Marketing Head, GrowthX",
      feedback:
        "Their digital marketing strategies gave us 3x more leads. Truly a reliable and skilled partner.",
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      name: "Sneha Kapoor",
      role: "CTO, Innovatech",
      feedback:
        "Professional and efficient service. The development team was responsive and delivered on time.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Vikram Singh",
      role: "Entrepreneur",
      feedback:
        "From concept to launch, the team was with us every step of the way. Our app is a hit!",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      name: "Anjali Desai",
      role: "Marketing Manager, BrandBoost",
      feedback:
        "Their SEO and marketing strategies significantly improved our search rankings and online visibility.",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-title">What Our Clients Say</h2>
        <p className="testimonial-subtitle">
          Hear from businesses that trusted us with their digital journey.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
              <p className="testimonial-feedback">“{t.feedback}”</p>
              <h3 className="testimonial-name">{t.name}</h3>
              <p className="testimonial-role">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;