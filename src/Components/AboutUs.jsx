// src/AboutUs.js

import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import Footer from './footer';
import { Link } from 'react-router-dom';
import Navbar from './Navbarlogin';

const AboutUs = () => {
  const [stats, setStats] = useState({
    satisfaction: 0,
    carsRepaired: 0,
    tiresRepaired: 0,
    boltsTightened: 0,
  });

  useEffect(() => {
    const satisfactionInterval = setInterval(() => {
      setStats(prevStats => ({
        ...prevStats,
        satisfaction: prevStats.satisfaction < 100 ? prevStats.satisfaction + 1 : 100,
      }));
    }, 25);

    const carsRepairedInterval = setInterval(() => {
      setStats(prevStats => ({
        ...prevStats,
        carsRepaired: prevStats.carsRepaired < 50 ? prevStats.carsRepaired + 2 : 50,
      }));
    }, 100);

    const tiresRepairedInterval = setInterval(() => {
      setStats(prevStats => ({
        ...prevStats,
        tiresRepaired: prevStats.tiresRepaired < 1000 ? prevStats.tiresRepaired + 5 : 1000,
      }));
    }, 20);

    const boltsTightenedInterval = setInterval(() => {
      setStats(prevStats => ({
        ...prevStats,
        boltsTightened: prevStats.boltsTightened < 8000 ? prevStats.boltsTightened + 10 : 8000,
      }));
    }, 5);

    return () => {
      clearInterval(satisfactionInterval);
      clearInterval(carsRepairedInterval);
      clearInterval(tiresRepairedInterval);
      clearInterval(boltsTightenedInterval);
    };
  }, []);

  return (
    <div>
      <div className='image-bg'>
        <Navbar/>
        <div className="about-us-container">
          <section className="section-1">
            <h1 className="title-1">About Us</h1>
            <div className="content-1">
              <div className="text-1">
                <p>Welcome to RepairBud, your trusted partner for all your vehicle repair needs in the Tucson area. Our team of skilled mechanics is committed to providing top-notch services, ensuring your vehicle runs smoothly and efficiently.</p>
                <p>From routine maintenance to complex repairs, we handle it all. Our goal is to make your auto repair experience as convenient and stress-free as possible. Whether you drive a car, truck, or SUV, we have the expertise to get you back on the road quickly and safely.</p>
                <h2 className="subtitle-1">Why Choose Us</h2>
                <ul className="list-1">
                  <li>Expert technicians with extensive experience</li>
                  <li>Fast and efficient service with transparent pricing</li>
                  <li>State-of-the-art equipment and diagnostic tools</li>
                  <li>Customer-first approach with a focus on satisfaction</li>
                  <li>Convenient scheduling and same-day service options</li>
                </ul>
                <h2 className="subtitle-1">24/7 Roadside Assistance</h2>
                <ul className="list-1">
                  <li>Flat Tire Replacement</li>
                  <li>Battery Jump Start</li>
                  <li>Fuel Delivery</li>
                  <li>Winching and Extraction</li>
                  <li>Lockout Services</li>
                </ul>
                <Link to="/Service"><button className="button-2">Explore Our Services</button></Link>
              </div>
              <div className="images">
                <img className="large-image" src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2019/12/multi-brand-car-service-india.jpg" alt="Vehicle Repair" />
                <div className="small-images">
                  <img src="https://www.evanshalshaw.com/-/media/evanshalshaw/service/page-link-collection/lifestyle/oil-refill-480x270px.ashx?mh=519&la=en&h=270&w=480&mw=519&hash=95001A965A343BEE64EB0CF3FBD37995" alt="Mechanic Service" />
                  <img src="https://media.torque.com.sg/public/2020/05/car-servicing-main-photo.jpg" alt="Car Maintenance" />
                </div>
              </div>
            </div>
          </section>
          <section className="stats">
            <div className="stat">
              <i className="fas fa-star"></i>
              <h3>{stats.satisfaction}%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat">
              <i className="fas fa-car"></i>
              <h3>{stats.carsRepaired}</h3>
              <p>Cars Repaired Per Day</p>
            </div>
            <div className="stat">
              <i className="fas fa-tachometer-alt"></i>
              <h3>{stats.tiresRepaired}</h3>
              <p>Tires Repaired a Year</p>
            </div>
            <div className="stat">
              <i className="fas fa-wrench"></i>
              <h3>{stats.boltsTightened}</h3>
              <p>Bolts Tightened</p>
            </div>
          </section>
          <section className='trans'>
            <center>
              <h1>Our Goal</h1>
              <h3>Our dedicated team aims to provide exceptional service and unparalleled peace of mind for all your automotive needs.</h3>
            </center>
          </section>
          <section className="company-overview">
            <center>
              <h2>Company Overview</h2>
              <p>From oil changes to engine overhauls, we are equipped to handle all types of vehicle maintenance and repairs. Our team is skilled in both foreign and domestic vehicles, ensuring comprehensive care for your vehicle.</p>
            </center>
            <div className="services-1">
              <div className="service-1">
                <i className="fas fa-volume-up"></i>
                <h3>CAR AUDIO SERVICE</h3>
                <p>We provide expert installation and repair of car audio systems, ensuring high-quality sound and seamless integration with your vehicle.</p>
              </div>
              <div className="service-1">
                <i className="fas fa-oil-can"></i>
                <h3>FREE OIL CHANGE</h3>
                <p>Enjoy a complimentary oil change with your service, ensuring your engine runs smoothly and efficiently.</p>
              </div>
              <div className="service-1">
                <i className="fas fa-cogs"></i>
                <h3>ENGINE DIAGNOSTICS</h3>
                <p>Our advanced engine diagnostics services help identify and fix issues quickly to keep your vehicle running at its best.</p>
              </div>
              <div className="service-1">
                <i className="fas fa-snowflake"></i>
                <h3>A/C RECHARGE</h3>
                <p>Keep your vehicle's air conditioning system in top condition with our professional A/C recharge service.</p>
              </div>
              <div className="service-1">
                <i className="fas fa-parking"></i>
                <h3>PARKING SENSORS CALIBRATION</h3>
                <p>Ensure your parking sensors are accurately calibrated for optimal performance and safety.</p>
              </div>
              <div className="service-1">
                <i className="fas fa-car-battery"></i>
                <h3>CAR BATTERY REPAIRS</h3>
                <p>Get your car battery checked and repaired to ensure your vehicle starts reliably every time.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
