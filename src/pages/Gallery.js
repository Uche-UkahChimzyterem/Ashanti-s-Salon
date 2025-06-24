import React from 'react';
import { FaTiktok } from 'react-icons/fa'; // Importing TikTok icon from react-icons
import './Gallery.css';

// Import images with correct file extensions and naming
import img6 from '../assets/images/services/img.6.JPG';
import img7 from '../assets/images/services/img.7.JPG';
import img8 from '../assets/images/services/img.8.JPG';
import img9 from '../assets/images/services/img.9.JPG';
import img10 from '../assets/images/services/img.10.JPG';
import img11 from '../assets/images/services/img.11.JPG';
import img12 from '../assets/images/services/img.12.JPG';
import img13 from '../assets/images/services/img.13.JPG';
import img14 from '../assets/images/services/img.14.JPG';

const Gallery = () => {
  const galleryImages = [
    { id: 6, src: img6, alt: 'Braiding style example 1' },
    { id: 7, src: img7, alt: 'Braiding style example 2' },
    { id: 8, src: img8, alt: 'Hair treatment example' },
    { id: 9, src: img9, alt: 'Makeup application example' },
    { id: 10, src: img10, alt: 'Goddess braids example' },
    { id: 11, src: img11, alt: 'Knotless braids example' },
    { id: 12, src: img12, alt: 'Hair dyeing example' },
    { id: 13, src: img13, alt: 'Lash extensions example' },
    { id: 14, src: img14, alt: 'Braiding style example 3' },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h1 className="gallery-title">Our Gallery</h1>
        <p className="gallery-subtitle">
          Browse through our portfolio of styles and transformations to get inspired for your next visit.
        </p>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <div className="social-cta">
          <a 
            href="https://www.tiktok.com/@yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="tiktok-link"
          >
            <FaTiktok className="tiktok-icon" />
            <span>Follow us on TikTok</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;