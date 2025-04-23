import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.css'; // Correct the import path

const Footer: React.FC = () => {
  return (
    <footer className="footer-container"> {/* Use className */}
      <div className="footer-content"> {/* Use className */}
        <p className="footer-copyright">© {new Date().getFullYear()} Arnold Website. All rights reserved.</p> {/* Use className */}
        <div className="footer-links"> {/* Use className */}
          <Link to="/about" className="footer-link">About</Link> {/* Use className */}
          <Link to="/privacy" className="footer-link">Privacy Policy</Link> {/* Use className */}
          <Link to="/contact" className="footer-link">Contact</Link> {/* Use className */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
