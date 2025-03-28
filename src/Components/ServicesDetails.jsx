// src/ServicesDetails.js

import React, { useState } from 'react';
import './ServicesDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faWrench, faCalendarDay, faUser } from '@fortawesome/free-solid-svg-icons';
import AdminSidebar from './Admin';
import axios from 'axios'; // Import axios for HTTP requests

const ServicesDetails = () => {
  const [isCarServices, setIsCarServices] = useState(true);
  const [serviceData, setServiceData] = useState({
    type: isCarServices ? 'Car' : 'Bike',
    title: '',
    description: '',
    image: '',
  });

  const toggleServiceType = () => {
    setIsCarServices(!isCarServices);
    setServiceData({ ...serviceData, type: !isCarServices ? 'Car' : 'Bike' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setServiceData({ ...serviceData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:9001/api/users/addService', serviceData);
      alert('Service added successfully!');
      // Clear the form after submission
      setServiceData({
        type: isCarServices ? 'Car' : 'Bike',
        title: '',
        description: '',
        image: '',
      });
    } catch (error) {
      console.error('Error adding service:', error);
      alert('Failed to add service. Please try again.');
    }
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
          {/* Service items for display */}
          {isCarServices ? (
            <>
              {/* Display for car services */}
              {/* ... existing car service items */}
            </>
          ) : (
            <>
              {/* Display for bike services */}
              {/* ... existing bike service items */}
            </>
          )}
        </div>
        
        {/* Add new service form */}
        <form onSubmit={handleSubmit} className="add-service-form">
          <h2>Add New {isCarServices ? 'Car' : 'Bike'} Service</h2>
          <input
            type="text"
            name="title"
            placeholder="Service Title"
            value={serviceData.title}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Service Description"
            value={serviceData.description}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={serviceData.image}
            onChange={handleInputChange}
          />
          <button type="submit">Add Service</button>
        </form>
      </div>
    </div>
  );
};

export default ServicesDetails;
