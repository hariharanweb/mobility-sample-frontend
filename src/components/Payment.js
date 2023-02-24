import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import './Payment.css';
import { Button, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import QuoteSummary from './QuoteSummary';

const drawerBleeding = 56;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const CashPayment = ({ onPaymentSelect, selectedValue }) => (

  <Grid container className="payment-options" display="flex" paddingLeft={4}>
    <FormControlLabel
      value="Cash"
      className="form-control"
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
          <div className="payment-mode-icon">
            <img width="25px" height="25px" src="https://cdn-icons-png.flaticon.com/64/438/438526.png" alt="cash" />
          </div>

          <p className="payment-mode-name cash-payment">Pay on Cash</p>
        </div>
      )}
    />

  </Grid>
);

const OnlinePayment = ({ onPaymentSelect, selectedValue }) => (

  <Grid container className="payment-options" display="flex" paddingLeft={4}>
    <FormControlLabel
      value="UPI"
      className="form-control"
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
          <div className="payment-mode-icon">
            <img height="14px" width="45px" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png" alt="upi" />
          </div>

          <p className="payment-mode-name">Pay via UPI</p>
        </div>
      )}
    />

  </Grid>
);

const Payment = ({ onConfirmPayment, initResults }) => {
  const [paymentMode, setPaymentMode] = useState('');
  const onPaymentSelect = (event) => {
    setPaymentMode(event.target.value);
  };
  return (

    <Grid container paddingY={5} display="flex">
      <StyledBox
        sx={{
          position: 'absolute',
          top: -drawerBleeding,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          right: 0,
          left: 0,
        }}
      >
        <Puller />
        <Typography sx={{ p: 2, color: 'text.secondary' }}>
          <QuoteSummary bookingInformation={initResults} />
        </Typography>
      </StyledBox>
      <>
        <div className="payment-info">
          Payment Method
        </div>
        <CashPayment onPaymentSelect={onPaymentSelect} selectedValue={paymentMode} />
        <OnlinePayment onPaymentSelect={onPaymentSelect} selectedValue={paymentMode} />
        <Button
          fullWidth
          variant="contained"
          disabled={!(paymentMode.length > 0)}
          onClick={onConfirmPayment}
          className="book-now-button"
        >
          Book Now
        </Button>
      </>
    </Grid>
  );
};

export default Payment;
