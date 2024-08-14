import React, { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import './Navbarlogin.css';

const Navbar = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const email = sessionStorage.getItem('email');
    if (email) {
      fetch(`http://localhost:9001/api/users/getUser?email=${email}`)
        .then(response => response.json())
        .then(data => {
          setUsername(data.name || 'User');
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('email');
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      <div className="nav-head">
        <a href="/"><span>R</span>epair<span>B</span>ud</a>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/Home">Home</a></li>
        <li className="navbar-item"><a href="/Service">Services</a></li>
        <li className="navbar-item"><a href="/booking">Bookings</a></li>
        <li className="navbar-item"><a href="/About">About Us</a></li>
        <li className="navbar-item"><a href="/Contact">Contact Us</a></li>
        {username && (
          <li className="navbar-item">
            <span>Hello, {username}</span>
          </li>
        )}
        <li className="navbar-item-logout" onClick={handleLogout}>
          <FiLogOut />SignOff
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
