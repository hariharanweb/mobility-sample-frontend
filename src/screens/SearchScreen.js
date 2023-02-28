import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from '../components/Header';
import GooglePlacesApiLoader from '../api/googlePlacesApiLoader';
import Api from '../api/Api';
import LocationSearch from '../components/LocationSearch';
import DateTime from '../components/DateTime';
import Footer from '../components/Footer';
import Panel from '../components/Panel';
import './SearchScreen.css';
import FilterSection from '../components/FilterSection';
import SwipeButton from '../components/SwipeButton';
import Map from '../components/Map';

const LocationSearchDrawer = ({
  toggleDrawer,
  openPanel,
  isLoaded,
  fromLocation,
  toLocation,
  swapped,
  setSwapped,
  onSwapLocation,
  setFromLocation,
  setToLocation,
}) => {
  const navigate = useNavigate();
  const onSearchClick = async () => {
    const data = {
      intent: {
        fulfillment: {
          start: {
            location: {
              gps: fromLocation.latLong,
            },
          },
          end: {
            location: {
              gps: toLocation.latLong,
            },
          },
        },
      },
    };
    const response = await Api.post('/search', data);
    response.locationMap = [
      {
        location: fromLocation.display,
      },
      {
        location: toLocation.display,
      },
    ];
    response.locations = {
      originLocation: fromLocation,
      destinationLocation: toLocation,
    };
    navigate('/search', { state: { ...response } });
  };

  return (

    <Grid container paddingTop="29px">
      <FilterSection openPanel={openPanel} />
      <Grid container direction="column" paddingTop={0.5}>
        {isLoaded && (
        <Grid item marginRight={1} paddingTop={1}>
          {openPanel ? (
            <LocationSearch
              label="From"
              initialLocation={fromLocation}
              onLocationChange={setFromLocation}
              swapped={swapped}
              onSwapped={setSwapped}
              isPanelOpen={openPanel}
            />
          ) : null}
          {openPanel
            ? (
              <SwipeButton onSwapLocation={onSwapLocation} />
            )
            : null}
          <LocationSearch
            label="Where do you want to go ?"
            initialLocation={toLocation}
            onLocationChange={setToLocation}
            toggleDrawer={toggleDrawer}
            swapped={swapped}
            onSwapped={setSwapped}
            isPanelOpen={openPanel}
          />
        </Grid>
        )}
        <Grid paddingY={2}>
          <DateTime fullWidth />
        </Grid>
        <Grid paddingLeft={1}>
          <Button
            className="searchScreen-search-button"
            variant="contained"
            fullWidth
            onClick={onSearchClick}
            disabled={
      !!(fromLocation.display.length === 0 || toLocation.display.length === 0)
    }
            endIcon={<ArrowForwardIcon />}
          >
            Search
          </Button>
        </Grid>

      </Grid>
    </Grid>
  );
};

const SearchScreen = () => {
  const { isLoaded } = GooglePlacesApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });
  const [openPanel, setOpenPanel] = useState(false);
  const toggleDrawer = () => {
    setOpenPanel(true);
  };
  const closeDrawer = () => {
    setOpenPanel(false);
  };
  const [fromLocation, setFromLocation] = useState({
    display: 'Forum Mall',
    latLong: '12.9372469,77.6109981',
  });
  const [toLocation, setToLocation] = useState({
    display: 'Garuda Mall',
    latLong: '12.9702626,77.6099629',
  });
  const [swapped, setSwapped] = useState(false);
  const onSwapLocation = () => {
    setSwapped(true);
    setFromLocation(toLocation);
    setToLocation(fromLocation);
  };
  return (
    <div>
      <Header />
      {isLoaded && (
      <Map
        openPanel={openPanel}
        showMarker
        originLocation={fromLocation}
        destinationLocation={toLocation}
      />
      )}
      <Panel
        drawerHeight={!openPanel ? 200 : 20}
        openDrawerHeight="70%"
        panelChildren={(
          <LocationSearchDrawer
            fromLocation={fromLocation}
            toLocation={toLocation}
            toggleDrawer={toggleDrawer}
            swapped={swapped}
            setSwapped={setSwapped}
            openPanel={openPanel}
            isLoaded={isLoaded}
            onSwapLocation={onSwapLocation}
            setFromLocation={setFromLocation}
            setToLocation={setToLocation}
          />
)}
        open={openPanel}
        toggleDrawer={toggleDrawer}
        closeDrawer={closeDrawer}
      />
      <Footer />
    </div>
  );
};

export default SearchScreen;
