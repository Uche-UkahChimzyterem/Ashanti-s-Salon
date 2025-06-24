import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/home/img1.JPG';
import img2 from '../assets/images/home/img2.JPG';
import img3 from '../assets/images/home/img3.JPG';
import img4 from '../assets/images/home/img4.JPG';
import img5 from '../assets/images/home/img5.JPG';
import './Home.css';
import Contact from './Contact';
import Welcome from './Welcome';
import Booking from './Booking';
import Review from './Review';
import Policy from './Policy';
import Services from './Services';
import Gallery from './Gallery';

function Home() {
  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner-section">
        <div className="banner-images-container">
          <div className="banner-image-wrapper">
            <img src={img1} alt="Salon Service 1" className="banner-image" />
          </div>
          <div className="banner-image-wrapper">
            <img src={img2} alt="Salon Service 2" className="banner-image" />
          </div>
          <div className="banner-image-wrapper">
            <img src={img3} alt="Salon Service 3" className="banner-image" />
          </div>
          <div className="banner-image-wrapper">
            <img src={img4} alt="Salon Service 4" className="banner-image" />
          </div>
          <div className="banner-image-wrapper">
            <img src={img5} alt="Salon Service 5" className="banner-image" />
          </div>
        </div>
        
        <div className="banner-content">
          <h1 className="banner-title">Beauty & Style at Ashanti's Salon</h1>
          <div className="banner-subtitle">
            <p>Your one-stop destination for braids, makeup, hair</p>
            <p>treatments,and more.</p>
          </div>
          <div className='action-buttons'>
            <Link to="/book" className="cta-button">Book Appointment</Link>
            <a href="#welcome" className="services-button">Learn More</a>
          </div>
        </div>
      </div>

     
<Welcome />
      <section id="services" className="services-section">
        {/* Service cards will go here */}
        <Services />
      </section>
      
<Gallery />
      <Policy />
      <Review />
      <Booking />
      <Contact />
      
    </div>
  );
}

export default Home;