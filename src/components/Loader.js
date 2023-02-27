import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import './Loader.css';
import Panel from './Panel';
import Map from './Map';

const LoaderScreen = () => (
  <Grid container className="loader">
    <h3 className="loader-heading">Finds perfect rides for you.</h3>
    <div className="loader-image">
      <img src="./loadingCar.gif" alt="loading-icon" />
    </div>
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
      />
    </>
  );
};

export default Loader;
