import React from 'react';
import './Review.css';

const Review = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <h1>What Our Clients Say</h1>
        <p className="reviews-subtitle">
          Hear from our satisfied clients about their experiences at Ashanti's Salon.
        </p>

        <div className="reviews-row"> {/* Container for horizontal layout */}
          <div className="review-card">
            <div className="review-initials">AK</div>
            <div className="review-content">
              <h3>Akwaia K.</h3>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "I love my knotless braids! The stylists at Ashanti's Salon are so talented..."
              </p>
            </div>
          </div>

          <div className="review-card">
            <div className="review-initials">FO</div>
            <div className="review-content">
              <h3>Fatima O.</h3>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "The makeup service at Ashanti's Salon is exceptional! I got my makeup done..."
              </p>
            </div>
          </div>

          <div className="review-card">
            <div className="review-initials">KA</div>
            <div className="review-content">
              <h3>Kwame A.</h3>
              <div className="review-stars">★★★★☆</div>
              <p className="review-text">
                "I've been getting my hair treated at Ashanti's for months now..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;