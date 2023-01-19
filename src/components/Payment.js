/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import './Payment.css';
import { Button, FormControlLabel } from '@mui/material';

const containerStyle = 'item-with-border';

const CashPayment = ({ onPaymentSelect, selectedValue }) => (

  <Grid container className={containerStyle} display="flex" paddingLeft={4}>
    <FormControlLabel
      value="Cash"
      control={(
        <Radio
          checked={selectedValue === 'Cash'}
          value="Cash"
          onChange={onPaymentSelect}
          name="radio-buttons"
          inputProps={{ 'aria-label': 'Cash' }}
        />
)}
      label="Cash"
    />

  </Grid>
);

const OnlinePayment = ({ onPaymentSelect, selectedValue }) => (

  <Grid container className={containerStyle} display="flex" paddingLeft={4}>
    <FormControlLabel
      value="UPI"
      control={(
        <Radio
          checked={selectedValue === 'UPI'}
          value="UPI"
          onChange={onPaymentSelect}
          name="radio-buttons"
          inputProps={{ 'aria-label': 'UPI' }}
        />

)}
      label="UPI"
    />

  </Grid>
);

const Payment = () => {
  const [paymentMode, setPaymentMode] = useState('');
  const onPaymentSelect = (event) => {
    setPaymentMode(event.target.value);
  };
  return (

    <Grid container paddingX={4}>
      <>
        <CashPayment onPaymentSelect={onPaymentSelect} selectedValue={paymentMode} />
        <OnlinePayment onPaymentSelect={onPaymentSelect} selectedValue={paymentMode} />
        <Button
          fullWidth
          variant="contained"
          sx={{ my: 2 }}
          disabled={!(paymentMode.length > 0)}
        >
          Book Now
        </Button>
      </>
    </Grid>
  );
};

export default Payment;
