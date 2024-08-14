import React, { useState, useEffect } from 'react';
import './BookingPopup.css';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

// Fix for the missing marker icons issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const BookingPopup = ({ service, closePopup }) => {
  const [formData, setFormData] = useState({
    serviceType: service || '',
    vehicleBrand: '',
    vehicleModel: '',
    vehicleNumber: '',
    pickupDate: '',
    name: '',
    email: '',
    contact: '',
    licenseNumber: '',
    location: { lat: null, lng: null, address: '' },
  });

  const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default to London coordinates
  const [isMapPopupOpen, setIsMapPopupOpen] = useState(false);
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const openMapPopup = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setMapCenter([latitude, longitude]);
        setIsMapPopupOpen(true);
        fetchAddress(latitude, longitude);
      },
      (error) => {
        console.error("Error fetching location:", error);
        setIsMapPopupOpen(true); // Open map even if geolocation fails
      }
    );
  };

  const fetchAddress = (latitude, longitude) => {
    // Replace with your own geocoding service or API
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
      .then(response => response.json())
      .then(data => {
        setFormData(prevData => ({
          ...prevData,
          location: {
            ...prevData.location,
            address: data.display_name
          }
        }));
      })
      .catch(error => console.error('Error fetching address:', error));
  };

  const confirmAddress = () => {
    setFormData((prevData) => ({
      ...prevData,
      location: { ...prevData.location, lat: mapCenter[0], lng: mapCenter[1] },
    }));
    setIsMapPopupOpen(false);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:9001/api/users/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
                location: formData.location.address
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Booking successful:', data);
            setShowOrderDetails(true); // Show order details popup
        } else {
            const errorData = await response.json();
            console.error('Booking failed:', errorData);
        }
    } catch (error) {
        console.error('Error submitting booking:', error);
    }
  };

  const handleCloseOrderDetails = () => {
    setShowOrderDetails(false);
    closePopup(); // Close the booking popup when order details are closed
  };

  return (
    <>

      <div className="booking-popup">
        <div className="booking-popup-content">
          <button className="close-button" onClick={closePopup}>×</button>
          <h2>Book {formData.serviceType}</h2>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              label="Service Type"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              disabled
            />
            <TextField
              label="Vehicle Brand"
              name="vehicleBrand"
              value={formData.vehicleBrand}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Vehicle Model"
              name="vehicleModel"
              value={formData.vehicleModel}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Vehicle Number"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Pickup Date"
              name="pickupDate"
              type="date"
              value={formData.pickupDate}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Customer Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Customer Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone Number"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="License Number"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Pickup Location Address"
              name="location"
              value={formData.location.address}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              disabled
            />
            <Button variant="outlined" onClick={openMapPopup} style={{marginBottom:'20px'}}>
              Use My Location
            </Button>
            <Button variant="contained" color="primary" type="submit"style={{marginBottom:'20px'}}>
              Confirm Booking
            </Button>
            <Button variant="outlined" onClick={closePopup} >
              Cancel
            </Button>
          </form>
        </div>
        {isMapPopupOpen && (
          <div className="map-popup">
            <div className="map-popup-content">
              <MapContainer center={mapCenter} zoom={13} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={mapCenter} />
                <LocationMarker setMarkerPosition={(latLng) => {
                  setMapCenter([latLng.lat, latLng.lng]);
                }} />
              </MapContainer>
              <Button variant="contained" color="primary" onClick={confirmAddress}>
                Confirm Address
              </Button>
              <Button variant="outlined" onClick={() => setIsMapPopupOpen(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>

      {showOrderDetails && (
        <div className="order-details-popup">
          <div className="order-details-content">
            <button className="close-button" onClick={handleCloseOrderDetails}>×</button>
            <h2>Order Details</h2>
            <p><strong>Service Type:</strong> {formData.serviceType}</p>
            <p><strong>Vehicle Brand:</strong> {formData.vehicleBrand}</p>
            <p><strong>Vehicle Model:</strong> {formData.vehicleModel}</p>
            <p><strong>Vehicle Number:</strong> {formData.vehicleNumber}</p>
            <p><strong>Pickup Date:</strong> {formData.pickupDate}</p>
            <p><strong>Customer Name:</strong> {formData.name}</p>
            <p><strong>Customer Email:</strong> {formData.email}</p>
            <p><strong>Phone Number:</strong> {formData.contact}</p>
            <p><strong>License Number:</strong> {formData.licenseNumber}</p>
            <p><strong>Pickup Location Address:</strong> {formData.location.address}</p>
            <Link to="/payment"> <Button variant="contained" color="primary">
              Payment
            </Button> </Link> 
          </div>
        </div>
      )}
    </>
  );
};

// Component to handle map click events and set marker position
function LocationMarker({ setMarkerPosition }) {
  useMapEvents({
    click(e) {
      setMarkerPosition(e.latlng);
    },
  });

  return null;
}

export default BookingPopup;
