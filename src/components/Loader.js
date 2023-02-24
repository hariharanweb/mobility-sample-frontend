import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import './Loader.css';
import Panel from './Panel';

const LoaderScreen = () => (
  <Grid container className="loader">
    <h3 className="loader-heading">Finds perfect rides for you.</h3>
    <div className="loader-image">
      <img src="./loadingCar.gif" alt="loading-icon" />
    </div>
  </Grid>
);
const Loader = () => {
  const [openPanel, setOpenPanel] = useState(true);
  const toggleDrawer = () => {
    setOpenPanel(true);
  };
  return (
    <Panel
      panelChildren={<LoaderScreen />}
      open={openPanel}
      toggleDrawer={toggleDrawer}
      openDrawerHeight="428px"
    />
  );
};

export default Loader;
