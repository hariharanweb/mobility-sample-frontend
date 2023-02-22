import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import GooglePlacesApiLoader from '../api/googlePlacesApiLoader';
import Api from '../api/Api';
import LocationSearch from '../components/LocationSearch';
import DateTime from '../components/DateTime';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Panel from '../components/Panel';
import FilterSection from '../components/FilterSection';

const LocationSearchDrawer = () => {
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
    navigate('/search', { state: { ...response } });
  };

  return (
    <Grid container paddingX={4} paddingY={2} direction="column">
      <FilterSection />
      {isLoaded && (
      <Grid item marginRight={1}>
        <LocationSearch
          label="From"
          initialLocation={fromLocation}
          onLocationChange={setFromLocation}
        />
        <LocationSearch
          label="To"
          initialLocation={toLocation}
          onLocationChange={setToLocation}
        />
      </Grid>
      )}
      <Grid container paddingY={2}>
        <Grid>
          <DateTime fullWidth />
        </Grid>
        <Grid paddingLeft={2}>
          <Button
            fullWidth
            variant="contained"
            onClick={onSearchClick}
            disabled={
      !!(fromLocation.display.length === 0 || toLocation.display.length === 0)
    }
          >
            Find Rides
          </Button>
        </Grid>

      </Grid>
    </Grid>
  );
};

const SearchScreen = () => (
  <div>
    <Header />
    <Map />
    <Panel panelChildren={<LocationSearchDrawer />} />
    <Footer />
  </div>
);

export default SearchScreen;
