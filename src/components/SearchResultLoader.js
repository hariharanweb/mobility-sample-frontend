import React, { useState } from 'react';
import LocationTracer from './LocationTracer';
import Map from './Map';
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
    <>
      <Map height="70%" />
      <Panel
        panelChildren={<LocationTracer locationMap={locationMap} />}
        open={openPanel}
        toggleDrawer={toggleDrawer}
        closeDrawer={closeDrawer}
        openDrawerHeight="416px"
      />
    </>
  );
};
export default SearchResultLoader;
