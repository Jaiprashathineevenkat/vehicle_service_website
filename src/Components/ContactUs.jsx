import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from './Navbarlogin';
import Footer from './footer';
import co from '../images/cont.png';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!name) newErrors.name = 'Name is required';
    if (!email || !emailPattern.test(email)) newErrors.email = 'Valid email is required';
    if (!phone || !phonePattern.test(phone)) newErrors.phone = 'Valid 10-digit phone number is required';
    if (!message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const contactDetails = { name, email, phone, message };

      try {
        const response = await fetch('http://localhost:9001/api/users/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactDetails),
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          console.error('Failed to submit contact form');
        }
      } catch (error) {
        console.error('Error submitting contact form:', error);
      }
    }
  };

  const closePopup = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div>
      <Navbar/>
      <div className="contact-us">
        <div className="image-container">
          <img src={co} alt="con" className="image container"/>
        </div>
        <div className="form-container">
          <h1>Contact Us</h1>
          <div className="contact-box">
            <form onSubmit={handleSubmit} className="contact-form">
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </label>
              <label>
                Phone:
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </label>
              <label>
                Message:
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <div className="char-counter">{message.length}/500</div>
                {errors.message && <span className="error">{errors.message}</span>}
              </label>
              <button type="submit">Submit</button>
              </form>
            {isSubmitted && (
              <div className="popup">
                <div className="popup-content">
                  <h2>Message Sent Successfully</h2>
                  <p>Thank you for using RepairBud. Happy journey!</p>
                  <button onClick={closePopup}>Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
