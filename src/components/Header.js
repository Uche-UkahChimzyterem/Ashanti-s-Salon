import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="top-header">
      <div className="tagline">
        "Enhancing Your Natural Beauty, One Style at a Time" - Ashanti's Salon
      </div>
      <div className="main-header">
        <div className="brand-name">
          <strong>ASHANTI'S</strong> <span className="salon-text">SALON</span>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/policies">Policies</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Link to="/book" className="book-now-btn">Book Now</Link>
      </div>
    </header>
  );
}
