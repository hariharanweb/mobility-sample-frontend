import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import './Payment.css';
import { Button, FormControlLabel } from '@mui/material';
import Typography from '@mui/material/Typography';
import QuoteSummary from './QuoteSummary';
import Panel from './Panel';

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

const LoaderScreen = ({
  onConfirmPayment, initResults, onPaymentSelect, paymentMode,
}) => (
  <div>
    <Typography sx={{ p: 2, color: 'text.secondary' }}>
      <QuoteSummary bookingInformation={initResults} />
    </Typography>
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
  </div>
);

const Payment = ({ onConfirmPayment, initResults }) => {
  const [openPanel, setOpenPanel] = useState(true);
  const toggleDrawer = () => {
    setOpenPanel(true);
  };
  const [paymentMode, setPaymentMode] = useState('');
  const onPaymentSelect = (event) => {
    setPaymentMode(event.target.value);
  };
  return (

    <Grid container paddingY={5} display="flex">
      <Panel
        panelChildren={(

          <LoaderScreen
            onConfirmPayment={onConfirmPayment}
            initResults={initResults}
            onPaymentSelect={onPaymentSelect}
            paymentMode={paymentMode}
          />
)}
        open={openPanel}
        toggleDrawer={toggleDrawer}
        openDrawerHeight="428px"
      />

    </Grid>
  );
};

export default Payment;
