import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import './Payment.css';
import { Button, FormControlLabel } from '@mui/material';

const containerStyle = 'item-with-border';

const CashPayment = ({ onPaymentSelect, selectedValue }) => (
  <Grid container className={containerStyle} id="item" paddingLeft={4} display="flex">
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
      label={(
        <div className="payment-label">
          <img src="https://cdn-icons-png.flaticon.com/64/438/438526.png" className="img-style" alt="cash" />
          <p className="payment-mode-name">Pay on Cash</p>
        </div>
      )}
    />

  </Grid>
);

const OnlinePayment = ({ onPaymentSelect, selectedValue }) => (

  <Grid container className={containerStyle} id="item" display="flex" paddingLeft={4}>
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
      label={(
        <div className="payment-label">
          <img src="https://img.icons8.com/ios-filled/64/bhim-upi.png" className="img-style" alt="upi" />
          <p className="payment-mode-name">Pay via UP</p>
        </div>
      )}
    />

  </Grid>
);

const Payment = ({ onConfirmPayment }) => {
  const [paymentMode, setPaymentMode] = useState('');
  const onPaymentSelect = (event) => {
    setPaymentMode(event.target.value);
  };
  return (

    <Grid container paddingX={4} paddingY={5} display="flex">
      <>
        <CashPayment onPaymentSelect={onPaymentSelect} selectedValue={paymentMode} />
        <OnlinePayment onPaymentSelect={onPaymentSelect} selectedValue={paymentMode} />
        <Button
          fullWidth
          variant="contained"
          sx={{ my: 2 }}
          disabled={!(paymentMode.length > 0)}
          onClick={onConfirmPayment}
        >
          Book Now
        </Button>
      </>
    </Grid>
  );
};

export default Payment;
