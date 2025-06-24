import React from 'react';
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
            <button className="book-button">Book Now &gt;</button>
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
            <button className="book-button">Book Now &gt;</button>
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
            <button className="book-button">Book Now &gt;</button>
          </div>
        </div>

        {/* Price List Section */}
        <div className="pricing-container">
          <h1 className="pricing-title">Our Price List</h1>
          <p className="pricing-subtitle">
            Transparent pricing for all our services. Prices may vary based on hair length, thickness, and complexity.
          </p>

          <div className="pricing-grid">
            {/* Braiding Services Pricing */}
            <div className="pricing-card">
              <h2 className="pricing-category">Braiding Services</h2>
              <ul className="pricing-list">
                <li>
                  <span className="service-name">Knotless Braids (Medium)</span>
                  <span className="service-price">₵150–250</span>
                </li>
                <li>
                  <span className="service-name">Goddess Braids</span>
                  <span className="service-price">₵180–280</span>
                </li>
                <li>
                  <span className="service-name">Cornrow Rasta</span>
                  <span className="service-price">₵120–200</span>
                </li>
                <li>
                  <span className="service-name">Rough Cornrow</span>
                  <span className="service-price">₵100–180</span>
                </li>
                <li>
                  <span className="service-name">Box Braids</span>
                  <span className="service-price">₵150–250</span>
                </li>
              </ul>
            </div>

            {/* Hair Services Pricing */}
            <div className="pricing-card">
              <h2 className="pricing-category">Hair Services</h2>
              <ul className="pricing-list">
                <li>
                  <span className="service-name">Hair Treatment</span>
                  <span className="service-price">₵80–150</span>
                </li>
                <li>
                  <span className="service-name">Hair Relaxing</span>
                  <span className="service-price">₵100–180</span>
                </li>
                <li>
                  <span className="service-name">Hair Dyeing</span>
                  <span className="service-price">₵120–250</span>
                </li>
                <li>
                  <span className="service-name">Wig Cap Creation</span>
                  <span className="service-price">₵150–200</span>
                </li>
                <li>
                  <span className="service-name">Frontal Installation</span>
                  <span className="service-price">₵180–300</span>
                </li>
              </ul>
            </div>

            {/* Beauty Services Pricing */}
            <div className="pricing-card">
              <h2 className="pricing-category">Beauty Services</h2>
              <ul className="pricing-list">
                <li>
                  <span className="service-name">Makeup Application</span>
                  <span className="service-price">₵100–250</span>
                </li>
                <li>
                  <span className="service-name">Manicure</span>
                  <span className="service-price">₵50–80</span>
                </li>
                <li>
                  <span className="service-name">Pedicure</span>
                  <span className="service-price">₵60–100</span>
                </li>
                <li>
                  <span className="service-name">Ear Piercing</span>
                  <span className="service-price">₵30–50</span>
                </li>
                <li>
                  <span className="service-name">Lash Extensions</span>
                  <span className="service-price">₵80–150</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="book-cta">
            <button className="book-button">Book a Service</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;