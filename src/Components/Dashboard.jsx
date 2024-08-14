import React from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faShoppingCart, faChartLine, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import AdminSidebar from './Admin';
import PopUp from './PopUp';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const pieData = {
    labels: ['Customer Management', 'Bookings', 'Reports', 'Support'],
    datasets: [
      {
        label: 'Service Distribution',
        data: [92600, 97500, 2700, 163],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <AdminSidebar />

      <div className="dashboard-content">
        <PopUp />
        <div className="dashboard-widgets">
          <div className="widget">
            <FontAwesomeIcon icon={faUsers} size="2x" className="widget-icon" />
            <h2>92.6k</h2>
            <p>Customer Management</p>
          </div>
          <div className="widget">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" className="widget-icon" />
            <h2>97.5k</h2>
            <p>No. of Bookings Received</p>
          </div>
          <div className="widget">
            <FontAwesomeIcon icon={faChartLine} size="2x" className="widget-icon" />
            <h2>2.7k</h2>
            <p>Reports and Analytics</p>
          </div>
          <div className="widget">
            <FontAwesomeIcon icon={faLifeRing} size="2x" className="widget-icon" />
            <h2>163</h2>
            <p>Support Tracker</p>
          </div>
        </div>
        <div className="chart-container">
          <h2>Service Distribution</h2>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
