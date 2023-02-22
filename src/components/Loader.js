import React from 'react';
import Grid from '@mui/material/Grid';
import './Loader.css';
import Panel from './Panel';

const LoaderScreen = () => (
  <Grid container className="loader">
    <h3 className="loader-heading">Finds perfect rides for you.</h3>
    <div className="loader-image" />
  </Grid>
);
const Loader = () => (
  <Panel panelChildren={<LoaderScreen />} />
);

export default Loader;
