import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from '../components/Header';
import Api from '../api/Api';
import LocationSearch from '../components/LocationSearch';
import DateTime from '../components/DateTime';
import Footer from '../components/Footer';
import Panel from '../components/Panel';
import './SearchScreen.css';
import FilterSection from '../components/FilterSection';
import SwapButton from '../components/SwapButton';
import Map from '../components/Map';
import CarLoader from '../components/CarLoader';
import LocationService from '../utilities/LocationService';

const LocationSearchDrawer = ({
  toggleDrawer,
  openPanel,
  fromLocation,
  toLocation,
  swapped,
  setSwapped,
  onSwapLocation,
  setFromLocation,
  setToLocation,
  category,
  setCategory,
  dateTime,
  setDateTime,
  isMapsLoaded,
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
            time: {
              timestamp: dateTime,
            },
          },
          end: {
            location: {
              gps: toLocation.latLong,
            },
          },
        },
        category: {
          id: category,
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
    <Grid container paddingTop={4}>
      <Grid paddingTop={1} container direction="row" alignContent="center">
        <FilterSection category={category} onCategoryChange={setCategory} />
      </Grid>
      <Grid container direction="column" paddingTop={0.5}>
        {isMapsLoaded && (
          <Grid item paddingTop={1}>
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
                <SwapButton onSwapLocation={onSwapLocation} />
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
        <Grid paddingY={2} display="flex" flex={1}>
          <DateTime onDateTimeChange={setDateTime} dateTime={dateTime} />
        </Grid>
        <Grid>
          <Button
            className="searchScreen-search-button"
            variant="contained"
            fullWidth
            onClick={onSearchClick}
            disabled={
              !(fromLocation && toLocation)
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

const SearchScreen = ({ isMapsLoaded }) => {
  const [openPanel, setOpenPanel] = useState(false);
  const toggleDrawer = () => {
    setOpenPanel(true);
  };
  const [fromLocation, setFromLocation] = useState({
    display: 'ThoughtWorks',
    latLong: '12.9298819961062, 77.62865178465772',
  });
  const [toLocation, setToLocation] = useState({
    display: 'Garuda Mall',
    latLong: '12.9702626,77.6099629',
  });
  const [swapped, setSwapped] = useState(false);
  const [category, setCategory] = useState('');
  const [dateTime, setDateTime] = useState(new Date().toISOString());
  const [currentLocation, setCurrentLocation] = useState();
  const onSwapLocation = () => {
    setSwapped(true);
    setFromLocation(toLocation);
    setToLocation(fromLocation);
  };
  const panelHeightSearchScreen = !openPanel ? 150 : 20;

  useEffect(() => {
    LocationService.getCurrentLocation().then((location) => {
      if (!currentLocation) {
        setCurrentLocation(location);
        setFromLocation({
          display: `${location.lat}, ${location.lng}`,
          latLong: `${location.lat}, ${location.lng}`,
        });
      }
    });
  }, [currentLocation]);

  const handleMyLocationClick = () => {
    LocationService.getCurrentLocation().then((location) => {
      if (currentLocation) {
        setCurrentLocation(location);
        setFromLocation({
          display: `${location.lat}, ${location.lng}`,
          latLong: `${location.lat}, ${location.lng}`,
        });
      }
    });
  };

  return (
    <div>
      <Header />
      {isMapsLoaded && (
        <Map
          openPanel={openPanel}
          showMarker
          originLocation={fromLocation}
          destinationLocation={toLocation}
          onMyLocationClick={handleMyLocationClick}
        />
      )}
      <Panel
        drawerHeight={isMapsLoaded ? panelHeightSearchScreen : 20}
        openDrawerHeight={isMapsLoaded ? '70%' : '30%'}
        isPullerPresent={!!isMapsLoaded}
        panelChildren={isMapsLoaded ? (
          <LocationSearchDrawer
            fromLocation={fromLocation}
            toLocation={toLocation}
            toggleDrawer={toggleDrawer}
            swapped={swapped}
            setSwapped={setSwapped}
            openPanel={openPanel}
            isMapsLoaded={isMapsLoaded}
            onSwapLocation={onSwapLocation}
            setFromLocation={setFromLocation}
            setToLocation={setToLocation}
            category={category}
            setCategory={setCategory}
            dateTime={dateTime}
            setDateTime={setDateTime}
          />
        ) : (<CarLoader isTextAbsent />)}
        open={isMapsLoaded ? openPanel : true}
        toggleDrawer={toggleDrawer}
        isTransitionPresent={isMapsLoaded}
      />
      <Footer />
    </div>
  );
};

export default SearchScreen;
