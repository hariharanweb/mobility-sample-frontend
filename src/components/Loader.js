import React from 'react';
import Grid from '@mui/material/Grid';
import './Loader.css';
// import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => (
  <Grid container paddingY="25%">
    {/* <h3>Finds perfect rides for you.</h3> */}
    <div className="loader" />
  </Grid>
);

export default Loader;
