import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import imgg from '../images/login page pic1.avif';
import Navbar from './Navbarlogin';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:9001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password }),
      });

      if (response.ok) {
        // Store email in session storage
        sessionStorage.setItem('email', username);

        const responseData = await response.text();
        if (username === 'admin@gmail.com') {
          window.location.href = '/dash';
        } else {
          window.location.href = '/Welcome';
        }
      } else {
        const errorData = await response.text();
        setErrorMessage(errorData || 'Invalid credentials.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
  };

  return (
    <div className="login-page">
      <Navbar />
      <div className="left-column">
        <img src={imgg} alt="Car 1" className="login-image" />
      </div>
      <div className="right-column">
        <div className="login-container">
          <h1>Welcome to RepairBud</h1>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="username">Email</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="button4">Login</button>
          </form>
          <div className="social-login">
            <button className="google-button" onClick={handleGoogleLogin}>
              <FaGoogle className="icon" /> Continue with Google
            </button>
            <button className="facebook-button" onClick={handleFacebookLogin}>
              <FaFacebook className="icon" /> Continue with Facebook
            </button>
          </div>
          <p className="register-link">
            Don't have an account? <Link to="/Register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
