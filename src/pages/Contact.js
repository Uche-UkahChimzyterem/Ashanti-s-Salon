import React, { useRef } from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Set the current time manually
    form.current.time.value = new Date().toLocaleString();

    emailjs.sendForm(
      'service_qvm0gxx',            // ✅ Your EmailJS Service ID
      'template_alef4f6',           // ✅ Your EmailJS Template ID
      form.current,
      '7e7c-Z7W3iEc_-hy5'            // 🔁 Replace with your actual EmailJS public key
    )
    .then(() => {
      alert('Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      alert('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', error);
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT - Contact Info */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p className="contact-subtitle">
            Have questions or need more information? Contact us using the information below or send us a message.
          </p>

          <div className="info-item">
            <div className="info-icon"><FaMapMarkerAlt /></div>
            <div className="info-text"><h3>Location</h3><p>Opposite Bethel Church</p></div>
          </div>

          <div className="info-item">
            <div className="info-icon"><FaPhone /></div>
            <div className="info-text"><h3>Phone</h3><p>0243 281 434 / 059 864 818</p></div>
          </div>

          <div className="info-item">
            <div className="info-icon"><FaClock /></div>
            <div className="info-text"><h3>Hours</h3><p>Open Daily: 7:00 AM - 7:00 PM</p></div>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/ashantis_salon?igsh=MWRsMTYxaHQ1dmFmMA==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@ashantisalon24?_t=ZM-8xcgbfmOqO6&_r=1" target="_blank" rel="noopener noreferrer">
                <SiTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT - Contact Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="time" />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" id="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
