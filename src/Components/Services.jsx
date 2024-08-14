import React, { useState } from 'react';
import './Services.css'; // CSS file for styling the Services page
import Footer from './footer';
import imgg from '../images/pic1.jpg';
import img1 from '../images/pic2.jpg';
import img2 from '../images/pic3.jpg';
import img3 from '../images/pic 4.jpg';
import img4 from '../images/pic5.jpg';
import img5 from '../images/pic6.jpg';
import img6 from '../images/pic7.webp';
import img7 from '../images/pic8.jpeg';
import img8 from '../images/pic9.jpg';
import img9 from '../images/pic 10.webp';
import img10 from '../images/pic 11.webp';
import img11 from '../images/pic 12.jpg';
import img12 from '../images/pic 13.jpg';
import img13 from '../images/pic 14.jpg';
import img14 from '../images/pic 15.jpg';
import img15 from '../images/pic 16.jpg';
import BookingPopup from './BookingPopup'; // Import the popup component
import PopUp from './PopUp';
import Navbar from './Navbarlogin';

const Services = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [serviceType, setServiceType] = useState('Car'); // State to toggle between Car and Bike services
  const [searchTerm, setSearchTerm] = useState('');

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

  const carServices = [
    { image: imgg, title: 'General Maintenance', description: 'Keep your vehicle running smoothly with regular check-ups and maintenance.' },
    { image: img1, title: 'Engine Diagnostics', description: 'Identify and resolve engine issues with our comprehensive diagnostics.' },
    { image: img2, title: 'Brake Services', description: 'Ensure your safety with expert brake inspection and repairs.' },
    { image: img3, title: 'Transmission Repairs', description: 'Get your vehicle back on the road with our transmission repair services.' },
    { image: img4, title: 'Oil Changes', description: 'Regular oil changes to maintain engine performance and longevity.' },
    { image: img5, title: 'Battery Services', description: 'Battery testing, replacement, and recycling services.' },
    { image: img6, title: 'Tire Services', description: 'Tire replacement, alignment, and balancing to keep your ride smooth and safe.' },
    { image: img7, title: 'Detailing Services', description: 'Interior and exterior detailing to keep your vehicle looking brand new.' }
  ];

  const bikeServices = [
    { image: img8, title: 'Bike Maintenance', description: 'Regular maintenance for smooth bike operation.' },
    { image: img9, title: 'Engine Tune-up', description: 'Optimize your bike’s engine performance with a tune-up.' },
    { image: img10, title: 'Brake Adjustment', description: 'Adjust and repair bike brakes for enhanced safety.' },
    { image: img11, title: 'Gear Services', description: 'Get your bike gears adjusted for better shifting.' },
    { image: img12, title: 'Oil and Lubrication', description: 'Keep your bike running smoothly with oil and lubrication services.' },
    { image: img13, title: 'Battery Replacement', description: 'Replace your bike’s battery to ensure reliable starts.' },
    { image: img14, title: 'Tire Replacement', description: 'Replace worn-out bike tires for a safer ride.' },
    { image: img15, title: 'Detailing Services', description: 'Detailing services to keep your bike looking like new.' }
  ];

  const filteredServices = (serviceType === 'Car' ? carServices : bikeServices).filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="services">
      <Navbar/>
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
        <PopUp/>
      </div>

      {showPopup && (
        <BookingPopup service={selectedService} closePopup={closePopup} />
      )}

    <Footer/>
    </div>
  );
};

export default Services;
