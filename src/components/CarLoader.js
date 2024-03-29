import React from 'react';
import Grid from '@mui/material/Grid';

const CarLoader = ({ isTextAbsent }) => (
  <Grid container className="loader">
    {isTextAbsent ? <div className="loader-heading" /> : <h3 className="loader-heading">Finding perfect rides for you.</h3>}
    {isTextAbsent ? <img src="https://ondc-frontend.s3.ap-south-1.amazonaws.com/loadingCar.gif" alt="loading-icon" className="loader-image" style={{ marginTop: '25%' }} /> : <img src="https://ondc-frontend.s3.ap-south-1.amazonaws.com/loadingCar.gif" alt="loading-icon" className="loader-image" />}
  </Grid>
);
export default CarLoader;
