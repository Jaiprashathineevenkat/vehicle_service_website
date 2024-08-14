import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import WelcomePage from './WelcomePage';
import AboutUs from './AboutUs';
import HomePage from './HomePage';

import Services from './Services';
import ContactUs from './ContactUs';
import Payment from './Payment';
import AdminSidebar from './Admin';
import Dashboard from './Dashboard';
import ServiceDetails from './ServicesDetails';
import CustomerDetails from './CustomerDetails';
import ManageMechanics from './ManageMechanics';
import { BookingContext } from './BookingContext';
import BookingsPage from './BookingPage';
import BookingPage from './BookingPage';
import FeedbackPage from './FeedBack';
export const Routing = () => {
  return (
    <div>
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/Register" element={<RegisterPage/>}/>
            <Route path="/Welcome" element={<WelcomePage/>}/>
            <Route path="/About" element={<AboutUs/>}/>
            <Route path="/Home" element={<HomePage/>}/>
            <Route path="/Service" element={<Services/>}/>
            <Route path="/Contact" element={<ContactUs/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/Admin" element={<AdminSidebar/>}/>
            <Route path="/dash" element={<Dashboard/>}/>
            <Route path="/details" element={<ServiceDetails/>}/>
            <Route path="/cus" element={<CustomerDetails/>}/>
            <Route path="/settings" element={<ManageMechanics/>}/>
            <Route path="/booking" element={<BookingPage/>}/>
            <Route path="/feedback" element={<FeedbackPage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
