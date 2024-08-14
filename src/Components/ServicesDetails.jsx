// src/ServicesDetails.js

import React, { useState } from 'react';
import './ServicesDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faWrench, faCalendarDay, faUser } from '@fortawesome/free-solid-svg-icons';
import AdminSidebar from './Admin';

const ServicesDetails = () => {
  const [isCarServices, setIsCarServices] = useState(true);

  const toggleServiceType = () => {
    setIsCarServices(!isCarServices);
  };

  return (
    <div className="service-details-container">
      <AdminSidebar />
      <div className="service-details-content">
        <div className="service-details-header">
          <h1>RepairBud Services</h1>
          <div className="toggle-container">
            <button onClick={toggleServiceType} className={`toggle-button ${isCarServices ? 'active' : ''}`}>
              Bike Services
            </button>
            <button onClick={toggleServiceType} className={`toggle-button ${!isCarServices ? 'active' : ''}`}>
              Car Services
            </button>
          </div>
        </div>
        <div className="service-items-container">
          {isCarServices ? (
            <>
              <div className="service-item">
                <FontAwesomeIcon icon={faCar} size="3x" className="service-icon" />
                <h2>Car Information</h2>
                <p>Details about the vehicle such as make, model, and year.</p>
              </div>
              <div className="service-item">
                <FontAwesomeIcon icon={faWrench} size="3x" className="service-icon" />
                <h2>Service Type</h2>
                <p>Type of service requested (e.g., oil change, tire rotation).</p>
              </div>
              <div className="service-item">
                <FontAwesomeIcon icon={faCalendarDay} size="3x" className="service-icon" />
                <h2>Appointment Date</h2>
                <p>Scheduled date for the service appointment.</p>
              </div>
              <div className="service-item">
                <FontAwesomeIcon icon={faUser} size="3x" className="service-icon" />
                <h2>Customer Information</h2>
                <p>Customer details including name and contact information.</p>
              </div>
            </>
          ) : (
            <>
              <div className="service-item">
                <FontAwesomeIcon icon={faCar} size="3x" className="service-icon" />
                <h2>Bike Information</h2>
                <p>Details about the bike such as make, model, and year.</p>
              </div>
              <div className="service-item">
                <FontAwesomeIcon icon={faWrench} size="3x" className="service-icon" />
                <h2>Service Type</h2>
                <p>Type of service requested (e.g., oil change, tire rotation).</p>
              </div>
              <div className="service-item">
                <FontAwesomeIcon icon={faCalendarDay} size="3x" className="service-icon" />
                <h2>Appointment Date</h2>
                <p>Scheduled date for the service appointment.</p>
              </div>
              <div className="service-item">
                <FontAwesomeIcon icon={faUser} size="3x" className="service-icon" />
                <h2>Customer Information</h2>
                <p>Customer details including name and contact information.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
