import React from 'react';
import Grid from '@mui/material/Grid';
import './Loader.css';

const Loader = () => (
  <Grid container paddingY="25%" display="flex" flexDirection="column">
    <h3 className="loader-heading">Finds perfect rides for you.</h3>
    <div className="loader-image" />
  </Grid>
);

export default Loader;
