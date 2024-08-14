import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';


import AboutUs from './Components/AboutUs';
import { Routing } from './Components/routing';
import HomePage from './Components/HomePage';
import { ContactEmergency } from '@mui/icons-material';
import Navbar from './Components/Navbarlogin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

   <Routing/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
