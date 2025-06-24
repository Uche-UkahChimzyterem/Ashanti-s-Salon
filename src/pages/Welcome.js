import React from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Welcome.css';

function Welcome() {
  return (
    <section id="welcome" className="welcome-section">
      <div className="welcome-container">
        <h1>Welcome to Ashanti's Salon</h1>
        <div className="welcome-text">
          <p>
            At Ashanti's Salon, we are dedicated to enhancing your natural beauty through our expert hair styling, 
            braiding, makeup, and nail services. Located opposite Bethel Church, our salon provides a warm and 
            welcoming environment where you can relax and be pampered.
          </p>
          <p>
            Our team of skilled professionals specializes in a wide range of services including knotless braids, 
            cornrows, goddess braids, makeup application, manicures, pedicures, and much more. We take pride in 
            our attention to detail and commitment to customer satisfaction.
          </p>
        </div>
        <div className="contact-info-container">
          {/* Left-aligned Find Us section */}
          <div className="contact-info-left">
            <FaMapMarkerAlt className="info-icon-small" />
            <div className="info-text-group">
              <div className="info-label">Find Us</div>
              <div className="info-value">Opposite Bethel Church</div>
            </div>
          </div>

          {/* Right-aligned Open Hours section */}
          <div className="contact-info-right">
            <FaClock className="info-icon-small" />
            <div className="info-text-group">
              <div className="info-label">Open Hours</div>
              <div className="info-value">7:00 AM - 7:00 PM Daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;