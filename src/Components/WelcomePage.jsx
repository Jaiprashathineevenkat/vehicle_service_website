// src/WelcomePage.js

import React from 'react';
import './WelcomePage.css'; // Ensure this CSS file is created for styling the welcome page
import vide from '../images/video.mp4';
import Footer from './footer';
import { Link } from 'react-router-dom';
import Navbar from './Navbarlogin';
const WelcomePage = () => {
  return (
    <div>
    <div className="welcome-page">
      <Navbar/>
      <video autoPlay muted loop className="background-video">
        <source src={vide} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <header className="header">

          <h1>REPAIR-BUD</h1>
          <p>Your one-stop solution for all vehicle service needs.</p>
        </header>
        <main className="main-content">
          <h2>Welcome to Repair-Bud Services</h2>
          <p>
            At RepairBud, we make vehicle servicing easy and convenient. Whether you need routine maintenance or urgent repairs, we’ve got you covered.We’re here to provide personalized vehicle care tailored to your needs. Your satisfaction is our commitment
          </p>
          <Link to="/Home"><a href="/Service" className="cta-button">Get Started</a></Link>
        </main>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default WelcomePage;
