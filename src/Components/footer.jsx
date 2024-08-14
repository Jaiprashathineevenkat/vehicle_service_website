// src/Footer.js

import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import './Footer.css'; // Ensure this CSS file is created for styling the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>REPAIRBUD</h2>
          <p>Your trusted partner for all vehicle service needs.</p>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:support@repairbud.com">support@repairbud.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Facebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Twitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} REPAIRBUD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
