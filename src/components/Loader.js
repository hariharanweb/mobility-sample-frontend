import React, { useState } from 'react';
import './Loader.css';
import Panel from './Panel';
import CarLoader from './CarLoader';

const Loader = () => {
  const [openPanel, setOpenPanel] = useState(true);
  const toggleDrawer = () => {
    setOpenPanel(true);
  };
  return (
    <Panel
      panelChildren={<CarLoader />}
      open={openPanel}
      toggleDrawer={toggleDrawer}
      openDrawerHeight="428px"
      drawerHeight={70}
      isPullerPresent={false}
    />
  );
};

export default Loader;
