import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
