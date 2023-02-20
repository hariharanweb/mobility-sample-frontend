/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import './Payment.css';
import { Button, FormControlLabel } from '@mui/material';

const containerStyle = 'item-with-border';

const CashPayment = ({ avatar, onPaymentSelect, selectedValue }) => (

  <Grid container className={containerStyle} id="item" display="flex" paddingLeft={4}>
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
      // label="Pay on Cash"
      label={(
        <div className="label-content">
          <img src={avatar} alt="i" width="40px" height="auto" style={{ marginLeft: '0px' }} />
          <h1>Pay on Cash</h1>
        </div>
      )}
    />

  </Grid>
);

const ONDCWallet = ({ onPaymentSelect, selectedValue }) => (

  <Grid container className={containerStyle} id="item" display="flex" paddingLeft={4}>
    <FormControlLabel
      value="ONDC Wallet"
      control={(
        <Radio
          checked={selectedValue === 'ONDC Wallet'}
          value="ONDC Wallet"
          onChange={onPaymentSelect}
          name="radio-buttons"
          inputProps={{ 'aria-label': 'ONDC Wallet' }}
        />

)}
      label="ONDC Wallet"
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
      label="Pay via UPI"
    />

  </Grid>
);

const Payment = ({ onConfirmPayment }) => {
  const [paymentMode, setPaymentMode] = useState('');
  const onPaymentSelect = (event) => {
    setPaymentMode(event.target.value);
  };
  return (

    <Grid container paddingX={4} paddingY={5}>
      <>
        <CashPayment src="../images/cash.png" onPaymentSelect={onPaymentSelect} selectedValue={paymentMode} />
        <ONDCWallet onPaymentSelect={onPaymentSelect} selectedValue={paymentMode} />
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
