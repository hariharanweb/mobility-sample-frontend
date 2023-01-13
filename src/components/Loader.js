import React from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => (
  <Grid container paddingX="47%" paddingY="25%">
    <CircularProgress />
  </Grid>
);

export default Loader;
