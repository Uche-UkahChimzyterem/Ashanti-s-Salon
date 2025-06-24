// Contact.js
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';  // Import TikTok icon
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT - Info */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">
            Have questions or need more information? Contact us using the information below or send us a message.
          </p>

          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-text">
              <h3>Location</h3>
              <p>Opposite Bethel Church</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaPhone />
            </div>
            <div className="info-text">
              <h3>Phone</h3>
              <p>0243 281 434 / 059 864 818</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaClock />
            </div>
            <div className="info-text">
              <h3>Hours</h3>
              <p>Open Daily: 7:00 AM - 7:00 PM</p>
            </div>
          </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://instagram.com/YourPage" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="#"><SiTiktok /></a>
              </div>
            </div>
          </div>

           {/* RIGHT - Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="" required  />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="" required  />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="" required ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;