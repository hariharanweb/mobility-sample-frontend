import React from 'react';
import Grid from '@mui/material/Grid';

const LoaderScreen = () => (
  <Grid container className="loader">
    <h3 className="loader-heading">Finding perfect rides for you.</h3>
    <img src="./loadingCar.gif" alt="loading-icon" className="loader-image" />
  </Grid>
);
export default LoaderScreen;
