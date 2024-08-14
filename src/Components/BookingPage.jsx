import React, { useState, useEffect } from 'react';
import './BookingPage.css'; // Make sure to create this CSS file for styling
import Navbar from './Navbarlogin';

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const email = sessionStorage.getItem('email'); // Assuming the email is stored in session storage

  useEffect(() => {
    if (!email) {
      setError('User is not logged in');
      setLoading(false);
      return;
    }

    const fetchBookings = async () => {
      try {
        const response = await fetch(`http://localhost:9001/api/users/bookings?email=${email}`);
        if (response.ok) {
          const data = await response.json();
          setBookings(data);
        } else {
          throw new Error('Failed to fetch bookings');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [email]);

  const handleCancelBooking = async (id) => {
    try {
      const response = await fetch(`http://localhost:9001/api/users/bookings/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setBookings(bookings.filter((booking) => booking.id !== id));
      } else {
        throw new Error('Failed to cancel booking');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="booking-page">
      <Navbar/>
      <center><h2>Your Bookings</h2></center>
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <div key={booking.id} className="booking-info">
            <p><strong>Service Type:</strong> {booking.serviceType}</p>
            <p><strong>Vehicle Brand:</strong> {booking.vehicleBrand}</p>
            <p><strong>Vehicle Model:</strong> {booking.vehicleModel}</p>
            <p><strong>Vehicle Number:</strong> {booking.vehicleNumber}</p>
            <p><strong>Pickup Date:</strong> {new Date(booking.pickupDate).toLocaleDateString()}</p>
            <p><strong>Customer Name:</strong> {booking.name}</p>
            <p><strong>Customer Email:</strong> {booking.email}</p>
            <p><strong>Phone Number:</strong> {booking.contact}</p>
            <p><strong>License Number:</strong> {booking.licenseNumber}</p>
            <p><strong>Pickup Location Address:</strong> {booking.location}</p>
            <button onClick={() => handleCancelBooking(booking.id)}>Cancel Booking</button>
          </div>
        ))
      ) : (
        <div>No bookings found.</div>
      )}
    </div>
  );
};

export default BookingPage;
