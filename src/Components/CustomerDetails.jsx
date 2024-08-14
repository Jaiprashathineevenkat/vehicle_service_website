import React, { useState, useEffect } from 'react';
import './CustomerDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faEnvelope, faMapMarkerAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import AdminSidebar from './Admin'; // Ensure this path is correct

const CustomerDetails = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:9001/api/users/allUsers');
        if (response.ok) {
          const data = await response.json();
          setCustomers(data);
        } else {
          throw new Error('Failed to fetch customers');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const handleDeleteCustomer = async (id) => {
    try {
      const response = await fetch(`http://localhost:9001/api/users/users/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setCustomers(customers.filter((customer) => customer.id !== id));
      } else {
        throw new Error('Failed to delete customer');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="customer-details-container">
      <AdminSidebar />
      <div className="customer-details-content">
        <div className="customer-details-header">
          <h1>Customer Details</h1>
        </div>
        <div className="customer-list">
          <h2>Customer List</h2>
          {customers.length === 0 ? (
            <p>No customers found.</p>
          ) : (
            customers.map((customer) => (
              <div key={customer.id} className="customer-item">
                <div className="customer-info">
                  <p><FontAwesomeIcon icon={faIdBadge} /> ID: {customer.id}</p>
                  <p><FontAwesomeIcon icon={faEnvelope} /> Email: {customer.email}</p>
                  <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Address: {customer.state}</p>
                </div>
                <button className="delete-button" onClick={() => handleDeleteCustomer(customer.id)}>
                  <FontAwesomeIcon icon={faTrash} /> <span>Delete</span>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
