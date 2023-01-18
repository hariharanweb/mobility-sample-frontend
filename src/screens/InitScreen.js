import React from 'react';
import Grid from '@mui/material/Grid';
import Payment from '../components/Payment';
import Loader from '../components/Loader';
import Header from '../components/Header';

const InitScreen = () => {
  const loading = false;
  const displayPaymentMode = () => (
    <Grid container>
      <Grid item xs={12}>
        <Payment />
      </Grid>
    </Grid>
  );
  return (
    <>
      <Header title="Payments" />
      {loading ? <Loader /> : displayPaymentMode()}
    </>
  );
};

export default InitScreen;
