import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Services.css';
import Footer from './footer';
import BookingPopup from './BookingPopup';
import PopUp from './PopUp';
import Navbar from './Navbarlogin';

const Services = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [serviceType, setServiceType] = useState('Car'); // State to toggle between Car and Bike services
  const [searchTerm, setSearchTerm] = useState('');
  const [services, setServices] = useState([]); // State to hold fetched services

  useEffect(() => {
    // Fetch services from the backend when the component mounts or serviceType changes
    const fetchServices = async () => {
      try {
        const response = await axios.get(`http://localhost:9001/api/users/services/type`, {
          params: { type: serviceType },
        });
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, [serviceType]);

  const openPopup = (service) => {
    setSelectedService(service);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleServiceType = (type) => {
    setServiceType(type);
  };

  // Filter services based on search term
  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    <div className="services">
      <Navbar />
      <h1>RepairBud Services</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${serviceType === 'Car' ? 'active' : ''}`}
          onClick={() => toggleServiceType('Car')}
        >
          Car Services
        </button>
        <button
          className={`toggle-button ${serviceType === 'Bike' ? 'active' : ''}`}
          onClick={() => toggleServiceType('Bike')}
        >
          Bike Services
        </button>
      </div>
      <div className="services-grid">
        {filteredServices.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className="book-button" onClick={() => openPopup(service.title)}>Book Now</button>
            </div>
          </div>
        ))}
        <PopUp />
      </div>

      {showPopup && (
        <BookingPopup service={selectedService} closePopup={closePopup} />
      )}
     </div>
      <Footer />
    </div>
  );
};

export default Services;
