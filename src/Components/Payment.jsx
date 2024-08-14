import React, { useState } from 'react';
import { TextField, Button, FormControl, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';
import './Payment.css';
import Navbar from './Navbarlogin';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
  });
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPaymentSuccessful(true);
  };

  return (
    <div className="payment-page">
      <Navbar/>
      <h1>Payment</h1>
      <form onSubmit={handleSubmit} className="payment-form">
        <TextField
          label="Name on Card"
          name="name"
          value={paymentDetails.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <FormControl component="fieldset" className="payment-method">
          <Typography variant="h6">Payment Method</Typography>
          <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
            <FormControlLabel value="card" control={<Radio />} label="Credit/Debit Card" />
            <FormControlLabel value="upi" control={<Radio />} label="UPI" />
            <FormControlLabel value="cash" control={<Radio />} label="Cash on Service" />
          </RadioGroup>
        </FormControl>
        {paymentMethod === 'card' && (
          <>
            <TextField
              label="Card Number"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Expiry Date (MM/YY)"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="CVV"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
              type="password"
            />
          </>
        )}
        {paymentMethod === 'upi' && (
          <TextField
            label="UPI ID"
            name="upiId"
            value={paymentDetails.upiId}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
        )}
        <Button variant="contained" color="primary" type="submit" fullWidth>
          {paymentMethod === 'cash' ? 'Confirm Booking' : 'Make Payment'}
        </Button>
      </form>

      {isPaymentSuccessful && (
        <div className="payment-success-popup">
          <Typography variant="h6" color="primary">
            {paymentMethod === 'cash' ? 'Booking Confirmed!' : 'Payment Successful!'}
          </Typography>
          <Typography>
            {paymentMethod === 'cash'
              ? 'Thank you for using RepairBud. Your booking has been confirmed.'
              : 'Your payment has been processed successfully.'}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Payment;
