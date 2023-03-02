import React, { useState } from 'react';
import './Loader.css';
import Panel from './Panel';
import Map from './Map';
import CarLoader from './CarLoader';

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
        panelChildren={<CarLoader />}
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
