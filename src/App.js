import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Booking from './pages/Booking'; // Add this import
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add the booking route below */}
          <Route path="/booking" element={<Booking />} />
          {/* Add other routes here when needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;