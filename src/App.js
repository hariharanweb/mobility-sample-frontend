import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import SearchScreen from './screens/SearchScreen';
import SearchResult from './screens/SearchResult';
import ConfirmationScreen from './screens/ConfirmationScreen';
import SelectJourney from './screens/SelectJourney';
import InitScreen from './screens/InitScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import TrackScreen from './screens/TrackScreen';
import StatusScreen from './screens/StatusScreen';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div style={{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: 'auto',
    backgroundColor: 'red',
  }}
  >
    <Box
      sx={{
        display: 'grid',
        gridAutoRows: '700px',
        gridAutoColumns: '350px',
      }}
    >
      <Box
        sx={{
          border: '1px solid',
          borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
          p: 1,
          width: '120%',
          height: 'auto',
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
          gridColumn: 'span 1',
          gridRow: 'span 1',
          backgroundColor: 'white',
        }}
      >
        {/* <Item> */}
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchScreen />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/invoice" element={<ConfirmationScreen />} />
            <Route path="/select" element={<SelectJourney />} />
            <Route path="/init" element={<InitScreen />} />
            <Route path="/confirm" element={<ConfirmScreen />} />
            <Route path="/track" element={<TrackScreen />} />
            <Route path="/status" element={<StatusScreen />} />
          </Routes>
        </BrowserRouter>
        <Footer />
        {/* </Item> */}
      </Box>
    </Box>
  </div>
);

export default App;
