import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const NavBar = ({ navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    if (navigateTo) {
      navigateTo(page);
    }
    
    // Use React Router navigation
    switch(page) {
      case 'home':
        navigate('/');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'work':
        navigate('/work');
        break;
      case 'services':
        navigate('/services');
        break;
      case 'contact':
        navigate('/contact');
        break;
      case 'campaign':
        navigate('/campaign');
        break;
      default:
        navigate('/');
    }
    
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="logo" onClick={() => handleNavigation('home')} style={{cursor: 'pointer'}}>
          <img src="/logo.png" alt="DigitalGram Logo" className="logo-image" />
          <span>DigitalGram</span>
        </div>
        <button 
          className="menu-button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/work" onClick={() => setIsMenuOpen(false)}>Our Work</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <div className="mobile-cta">
            <button className="primary-button" onClick={() => handleNavigation('campaign')}>Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;