import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [category, setCategory] = useState('');
  const [specificService, setSpecificService] = useState('');

  const services = {
    braiding: [
      'Knotless Braids',
      'Cornrow Rasta',
      'Normal Cornrow',
      'Twist',
      'Other Braids'
    ],
    hair: [
      'Hair Treatment',
      'Hair Relaxing',
      'Hair Dyeing',
      'Frontal Installation',
      'Wig Fixing'
    ],
    beauty: [
      'Makeup Application',
      'Manicure',
      'Pedicure',
      'Lash Extensions',
      'Piercing'
    ]
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSpecificService('');
  };

  const timeSlots = [
    '7:00 AM',
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '13:00 PM',
    '14:00 PM',
    '15:00 PM',
    '16:00 PM',
    '17:00 PM',
    '18:00 PM'
  ];

  return (
    <section className="booking-section">
      <div className="booking-container">
        <div className="booking-card">
          <h1>Book Your Appointment</h1>
          <p className="booking-subtitle">
            Schedule your visit with our talented stylists and experience the Ashanti's difference.
          </p>

          <form className="booking-form">
            {/* Row 1: Full Name and Email */}
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="" required />
              </div>
            </div>

            {/* Row 2: Phone Number and Service Category */}
            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="" required />
              </div>
              <div className="form-group">
                <label>Service Category</label>
                <select value={category} onChange={handleCategoryChange} required>
                  <option value="">Select a category</option>
                  <option value="braiding">Braiding Services</option>
                  <option value="hair">Hair Services</option>
                  <option value="beauty">Beauty Services</option>
                </select>
              </div>
            </div>

            {/* Row 3: Specific Service and Preferred Date */}
            <div className="form-row">
              <div className="form-group">
                <label>Specific Service</label>
                <select 
                  value={specificService}
                  onChange={(e) => setSpecificService(e.target.value)} 
                  required
                  disabled={!category}
                >
                  <option value="">Select a specific service</option>
                  {category && services[category].map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Preferred Date</label>
                <input type="date" required />
              </div>
            </div>

            {/* Row 4: Preferred Time */}
            <div className="form-group">
              <label>Preferred Time</label>
              <select required>
                <option value="">Select a time</option>
                {timeSlots.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
            </div>

            {/* Row 5: Additional Notes */}
            <div className="form-group">
              <label>Additional Notes</label>
              <textarea placeholder=""></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="booking-btn">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
