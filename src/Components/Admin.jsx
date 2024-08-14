import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCogs, faUsers, faCar, faSignOutAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <ul className="menu">
        <li>
          <Link to="/dash">
            <FontAwesomeIcon icon={faTachometerAlt} className="menu-icon" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/details">
            <FontAwesomeIcon icon={faCogs} className="menu-icon" />
            Services Details
          </Link>
        </li>
        <li>
          <Link to="/cus">
            <FontAwesomeIcon icon={faUsers} className="menu-icon" />
            Customer Details
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FontAwesomeIcon icon={faCar} className="menu-icon" />
            Manage Mechanics
          </Link>
        </li>
        <li>
          <Link to="/feedback">
            <FontAwesomeIcon icon={faCommentDots} className="menu-icon" />
            Feedback
          </Link>
        </li>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faSignOutAlt} className="menu-icon" />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
