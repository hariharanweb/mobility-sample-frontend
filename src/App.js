import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import SearchScreen from './screens/SearchScreen';
import SearchResult from './screens/SearchResult';
import SelectJourney from './screens/SelectJourney';
import InitScreen from './screens/InitScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import TrackScreen from './screens/TrackScreen';
import StatusScreen from './screens/StatusScreen';
import GooglePlacesApiLoader from './api/googlePlacesApiLoader';

const libraries = ['places'];

const theme = createTheme({
  palette: {
    primary: {
      main: '#327B18',
    },
  },
});
const App = () => {
  const { isLoaded } = GooglePlacesApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<SearchScreen isMapsLoaded={isLoaded} />} />
            <Route path="/search" element={<SearchResult isMapsLoaded={isLoaded} />} />
            <Route path="/select" element={<SelectJourney />} />
            <Route path="/init" element={<InitScreen isMapsLoaded={isLoaded} />} />
            <Route path="/confirm" element={<ConfirmScreen />} />
            <Route path="/track" element={<TrackScreen />} />
            <Route path="/status" element={<StatusScreen />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
