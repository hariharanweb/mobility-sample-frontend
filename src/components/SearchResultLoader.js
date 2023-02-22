import React, { useState } from 'react';
import LocationTracer from './LocationTracer';
import Panel from './Panel';

const SearchResultLoader = ({ locationMap }) => {
  const [openPanel, setOpenPanel] = useState(true);
  const toggleDrawer = () => {
    setOpenPanel(true);
  };
  const closeDrawer = () => {
    setOpenPanel(false);
  };
  return (
    <Panel
      panelChildren={<LocationTracer locationMap={locationMap} />}
      open={openPanel}
      toggleDrawer={toggleDrawer}
      closeDrawer={closeDrawer}
      openDrawerHeight="350px"
    />

  );
};
export default SearchResultLoader;
