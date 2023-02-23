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
import Map from '../components/Map';
import Panel from '../components/Panel';
import './SearchScreen.css';
import FilterSection from '../components/FilterSection';
import SwipeButton from '../components/SwipeButton';

const LocationSearchDrawer = ({ toggleDrawer, openPanel }) => {
  const { isLoaded } = GooglePlacesApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const navigate = useNavigate();
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
    navigate('/search', { state: { ...response } });
  };

  return (

    <>
      <FilterSection />
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
          />
        </Grid>
        )}
        <Grid container paddingY={2}>
          <Grid>
            <DateTime fullWidth />
          </Grid>
          <Grid paddingLeft={1}>
            <Button
              className="searchScreen-search-button"
              variant="contained"
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
    </>
  );
};

const SearchScreen = () => {
  const [openPanel, setOpenPanel] = useState(false);
  const toggleDrawer = () => {
    setOpenPanel(true);
  };
  const closeDrawer = () => {
    setOpenPanel(false);
  };
  return (
    <div>
      <Header />
      <Map />
      <Panel
        drawerHeight={150}
        openDrawerHeight="50%"
        panelChildren={(
          <LocationSearchDrawer
            toggleDrawer={toggleDrawer}
            openPanel={openPanel}
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
