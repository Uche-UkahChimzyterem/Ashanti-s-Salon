import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Added import
import { FaCheck } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">
          Discover our comprehensive range of beauty services designed to enhance your natural beauty and boost your confidence.
        </p>

        <div className="divider"></div>

        <div className="services-grid">
          {/* Braiding Services */}
          <div className="service-card">
            <h2 className="service-category">Braiding Services</h2>
            <ul className="service-list">
              <li><FaCheck className="check-icon" /> Knotless Braids</li>
              <li><FaCheck className="check-icon" /> Cornrow Rasta</li>
              <li><FaCheck className="check-icon" /> Goddess Braids</li>
              <li><FaCheck className="check-icon" /> Rough Cornrow</li>
              <li><FaCheck className="check-icon" /> All Types of Braids</li>
            </ul>
          </div>

          {/* Hair Services */}
          <div className="service-card">
            <h2 className="service-category">Hair Services</h2>
            <ul className="service-list">
              <li><FaCheck className="check-icon" /> Hair Treatment</li>
              <li><FaCheck className="check-icon" /> Hair Relaxing</li>
              <li><FaCheck className="check-icon" /> Hair Dyeing</li>
              <li><FaCheck className="check-icon" /> Wig Cap Creation</li>
              <li><FaCheck className="check-icon" /> Frontal Installation</li>
              <li><FaCheck className="check-icon" /> Wig Fixing</li>
            </ul>
          </div>

          {/* Beauty Services */}
          <div className="service-card">
            <h2 className="service-category">Beauty Services</h2>
            <ul className="service-list">
              <li><FaCheck className="check-icon" /> Makeup Application</li>
              <li><FaCheck className="check-icon" /> Manicure</li>
              <li><FaCheck className="check-icon" /> Pedicure</li>
              <li><FaCheck className="check-icon" /> Ear Piercing</li>
              <li><FaCheck className="check-icon" /> Lash Extensions</li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="book-cta">
          <Link to="/booking" className="book-button">Book a Service</Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
