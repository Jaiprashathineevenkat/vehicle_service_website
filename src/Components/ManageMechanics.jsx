import React, { useState } from 'react';
import './ManageMechanics.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge, faEnvelope, faPhone, faWrench, faSave, faEdit, faTasks } from '@fortawesome/free-solid-svg-icons';
import AdminSidebar from './Admin';

const ManageMechanics = () => {
  const [mechanics, setMechanics] = useState([
    { id: 'M001', name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890', assigned: true },
    { id: 'M002', name: 'Jane Smith', email: 'janesmith@example.com', phone: '987-654-3210', assigned: false },
    { id: 'M003', name: 'Robert Brown', email: 'robertbrown@example.com', phone: '555-123-4567', assigned: false },
    { id: 'M004', name: 'Emily White', email: 'emilywhite@example.com', phone: '555-765-4321', assigned: true },
    { id: 'M005', name: 'Michael Johnson', email: 'michaeljohnson@example.com', phone: '555-987-6543', assigned: false }
  ]);
  const [selectedMechanic, setSelectedMechanic] = useState(null);
  const [editedMechanic, setEditedMechanic] = useState(null);

  const handleSelectMechanic = (mechanic) => {
    setSelectedMechanic(mechanic);
    setEditedMechanic({ ...mechanic });
  };

  const handleUpdateMechanic = () => {
    setMechanics(mechanics.map(mechanic =>
      mechanic.id === editedMechanic.id ? editedMechanic : mechanic
    ));
    setSelectedMechanic(null);
    setEditedMechanic(null);
  };

  const handleAssignMechanic = (id) => {
    setMechanics(mechanics.map(mechanic =>
      mechanic.id === id ? { ...mechanic, assigned: !mechanic.assigned } : mechanic
    ));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMechanic({ ...editedMechanic, [name]: value });
  };

  return (
    <div className="mechanics-management-container">
      <AdminSidebar />
      <div className="mechanics-management-content">
        <div className="mechanics-management-header">
          <h1>Mechanics Management</h1>
        </div>
        <div className="mechanic-list">
          <h2>List of Mechanics</h2>
          {mechanics.length === 0 ? (
            <p>No mechanics found.</p>
          ) : (
            mechanics.map(mechanic => (
              <div
                key={mechanic.id}
                className="mechanic-item"
                onClick={() => handleSelectMechanic(mechanic)}
              >
                <p><FontAwesomeIcon icon={faIdBadge} /> ID: {mechanic.id}</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> Email: {mechanic.email}</p>
                <p><FontAwesomeIcon icon={faPhone} /> Phone: {mechanic.phone}</p>
                <p><FontAwesomeIcon icon={faWrench} /> Name: {mechanic.name}</p>
                <p><FontAwesomeIcon icon={faTasks} /> Status: {mechanic.assigned ? 'Engaged with customer' : 'Available'}</p>
                <button className="assign-button" onClick={() => handleAssignMechanic(mechanic.id)}>
                  {mechanic.assigned ? 'Unassign' : 'Assign'}
                </button>
              </div>
            ))
          )}
        </div>
        {selectedMechanic && (
          <div className="edit-mechanic-form">
            <h2>Edit Mechanic Details</h2>
            <input
              type="text"
              name="id"
              placeholder="Mechanic ID"
              value={editedMechanic.id}
              onChange={handleChange}
              disabled
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={editedMechanic.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={editedMechanic.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={editedMechanic.phone}
              onChange={handleChange}
            />
            <button onClick={handleUpdateMechanic}>
              <FontAwesomeIcon icon={faSave} /> Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMechanics;
