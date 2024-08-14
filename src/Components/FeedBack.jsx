import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FeedBack.css';
import AdminSidebar from './Admin'; // Ensure this path is correct

const FeedBack = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Fetching all the feedback data from the backend
    axios.get('http://localhost:9001/api/users/all')
      .then(response => {
        setFeedbackData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the feedback data!', error);
      });
  }, []);

  return (
    <div className="feedback-container">
      <AdminSidebar className="admin-sidebar"/>
      <div className="feedback-content">
        <center><h1>Customer Feedback</h1></center>
        <table className="feedback-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.map(feedback => (
              <tr key={feedback.id}>
                <td>{feedback.id}</td>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.phone}</td>
                <td>{feedback.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeedBack;
