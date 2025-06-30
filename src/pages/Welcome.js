import React from 'react';
import './Welcome.css';
import salonImage from '../assets/images/home/img15.JPG';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="image-section">
          <img src={salonImage} alt="Ashanti's Salon Interior" />
          <div className="founder-info">
            <p>Ashanti - Founder & Master Stylist</p>
          </div>
        </div>
        
        <div className="text-content">
          <h1 className="single-line-title">Welcome to Ashanti's Salon</h1>
          <p>
            Founded by Ashanti, our salon is a premier beauty destination dedicated to enhancing your natural beauty. 
            With over a decade of experience in hair styling, braiding, and beauty treatments, 
            Ashanti has created a warm and welcoming environment where clients can relax and transform.
          </p>
          
          <p>
            We take pride in our attention to detail and commitment to making every client feel 
            beautiful and confident. Ashanti personally trains all staff to ensure the highest 
            standards of service and creativity in every treatment we offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;