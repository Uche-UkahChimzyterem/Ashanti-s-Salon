// Footer.js
import React from 'react';
import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
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
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Policies</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Services</h3>
              <div className="underline"></div>
              <ul>
                <li><a href="#">Braiding Services</a></li>
                <li><a href="#">Hair Services</a></li>
                <li><a href="#">Beauty Services</a></li>
                <li><a href="#">Makeup</a></li>
                <li><a href="#">Nail Care</a></li>
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
              <a href="#" className="book-button">Book an Appointment</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Ashanti's Salon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;