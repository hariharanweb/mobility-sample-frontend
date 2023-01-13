import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LocationSearch from '../components/LocationSearch';
import Api from '../api/Api';
import GooglePlacesApiLoader from '../api/googlePlacesApiLoader';
import Header from '../components/Header';

const SearchScreen = () => {
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
    <>
      <Header title="ONDC Sample App" />
      <Grid container paddingX={4} direction="column">
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
        <Grid item paddingY={2}>
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
    </>
  );
};

export default SearchScreen;
