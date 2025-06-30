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
          <Link to="/Gallery">Gallery</Link>
          <Link to="/Policy">Policies</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
        <Link to="/Booking" className="book-now-btn">Book Now</Link>
      </div>
    </header>
  );
}
