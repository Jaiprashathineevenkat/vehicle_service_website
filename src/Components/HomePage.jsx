// src/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Footer from './footer';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneIcon from '@mui/icons-material/Phone';
import PeopleIcon from '@mui/icons-material/People';
import ComputerIcon from '@mui/icons-material/Computer';
import PopUp from './PopUp';
import Navbar from './Navbarlogin';

const HomePage = () => {
  return (
    <div className="home-page">
      <PopUp/>
      <header className="hero-section">
        <Navbar/>
        <div className="hero-content">
          <h1>Welcome to REPAIRBUD</h1>
          <p>Your one-stop solution for all vehicle service needs.</p>
        </div>
      </header>
      <section className="services-overview">
        <div className="services-header">
          <center><h2>Our Services</h2></center>
        </div>
        <div className="services-list">
          <div className="service-item">
            <BuildIcon style={{ fontSize: 50 }} />
            <h3>General Maintenance</h3>
            <p>Keep your vehicle running smoothly with our regular maintenance services.</p>
          </div>
          <div className="service-item">
            <DirectionsCarIcon style={{ fontSize: 50 }} />
            <h3>Engine Repair</h3>
            <p>Expert diagnostics and repairs for all types of engine issues.</p>
          </div>
          <div className="service-item">
            <LocalShippingIcon style={{ fontSize: 50 }} />
            <h3>Brake Services</h3>
            <p>Ensure your safety with our comprehensive brake inspection and repair services.</p>
          </div>
          <div className="service-item">
            <ComputerIcon style={{ fontSize: 50 }} />
            <h3>More Services</h3>
            <p>From tire changes to electrical diagnostics, we've got you covered.</p>
          </div>
        </div>
      </section>
      <section className="featured-services">
        <h2>Featured Services</h2>
        <div className="featured-list">
          <div className="featured-item">
            <PhoneIcon style={{ fontSize: 50 }} />
            <h3>Online Booking</h3>
            <p>Book your service appointments online for convenience and speed.</p>
          </div>
          <div className="featured-item">
            <PhoneIcon style={{ fontSize: 50 }} />
            <h3>24/7 Support</h3>
            <p>Our customer support team is available around the clock to assist you.</p>
          </div>
          <div className="featured-item">
            <PeopleIcon style={{ fontSize: 50 }} />
            <h3>Certified Technicians</h3>
            <p>Our team consists of certified professionals with extensive experience.</p>
          </div>
        </div>
      </section>
      <Link to="/Service"><center><button className="book-button">BOOK YOUR SERVICE</button></center></Link>
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>"REPAIRBUD provided excellent service. My car has never run better!"</p>
            <span>- John Doe</span>
          </div>
          <div className="testimonial-item">
            <p>"Great experience! The staff was friendly and knowledgeable."</p>
            <span>- Jane Smith</span>
          </div>
          <div className="testimonial-item">
            <p>"I highly recommend REPAIRBUD for all your vehicle needs."</p>
            <span>- Michael Brown</span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
