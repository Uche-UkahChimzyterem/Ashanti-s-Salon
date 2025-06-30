import React from 'react';
import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="salon-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>ASHANTI'S</h2>
            <p>Your premier destination for all your hair and beauty needs. We're dedicated to making you look and feel your best.</p>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <div className="underline"></div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/Gallery">Gallery</Link></li>
                <li><Link to="/Policy">Policies</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Services</h3>
              <div className="underline"></div>
              <ul>
                <li><Link to="/services#braiding">Braiding Services</Link></li>
                <li><Link to="/services#hair">Hair Services</Link></li>
                <li><Link to="/services#beauty">Beauty Services</Link></li>
                <li><Link to="/services#makeup">Makeup</Link></li>
                <li><Link to="/services#nails">Nail Care</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Contact Info</h3>
              <div className="underline"></div>
              <ul className="contact-list">
                <li><FaMapMarkerAlt className="icon" /> Opposite Bethel Church</li>
                <li><FaPhone className="icon" /> 0243 281 434</li>
                <li><FaPhone className="icon" /> 059 894 818</li>
                <li><FaClock className="icon" /> 7:00 AM - 7:00 PM</li>
              </ul>
              <Link to="/booking" className="book-button">Book an Appointment</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Ashanti's Salon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
