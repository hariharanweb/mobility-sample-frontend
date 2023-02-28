import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import './Loader.css';
import Panel from './Panel';
import Map from './Map';

const LoaderScreen = () => (
  <Grid container className="loader">
    <h3 className="loader-heading">Finding perfect rides for you.</h3>
    <img src="./loadingCar.gif" alt="loading-icon" className="loader-image" />
  </Grid>
);
const Loader = ({
  isLoaded, destinationLocation, originLocation,
}) => {
  const [openPanel, setOpenPanel] = useState(true);
  const toggleDrawer = () => {
    setOpenPanel(true);
  };
  return (
    <>
      {isLoaded && (
      <Map
        openPanel={openPanel}
        showMarker={false}
        destinationLocation={destinationLocation}
        originLocation={originLocation}
      />
      )}
      <Panel
        panelChildren={<LoaderScreen />}
        open={openPanel}
        toggleDrawer={toggleDrawer}
        openDrawerHeight="428px"
        drawerHeight={70}
        isPullerPresent={false}
      />
    </>
  );
};

export default Loader;
