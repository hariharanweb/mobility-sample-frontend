import React from 'react';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import './Payment.css';
import { Button, FormControlLabel } from '@mui/material';

const containerStyle = 'item-with-border';

const CashPayment = () => (

  <Grid container className={containerStyle} display="flex">

    <Grid
      item
      xs={1}
      alignItems="center"
      justifyContent="center"
      display="flex"
      paddingLeft={2}
    >
      <FormControlLabel
        value="Cash"
        control={(
          <Radio
            value="Cash"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'Cash' }}
          />
)}
        label="Cash"
      />

    </Grid>

  </Grid>
);

const OnlinePayment = () => (

  <Grid container className={containerStyle} display="flex">

    <Grid
      item
      xs={1}
      alignItems="center"
      justifyContent="center"
      display="flex"
      paddingLeft={2}
    >
      <FormControlLabel
        value="UPI"
        control={(
          <Radio
            value="UPI"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'UPI' }}
          />

)}
        label="UPI"
      />

    </Grid>

  </Grid>
);

const Payment = () => (

  <Grid container paddingX={4}>
    <>
      <CashPayment />
      <OnlinePayment />
      <Button
        fullWidth
        variant="contained"
        sx={{ my: 2 }}
      >
        Book Now
      </Button>
    </>
  </Grid>
);

export default Payment;
