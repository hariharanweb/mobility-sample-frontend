import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import SearchScreen from './screens/SearchScreen';
import SearchResult from './screens/SearchResult';
import SelectJourney from './screens/SelectJourney';
import InitScreen from './screens/InitScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import TrackScreen from './screens/TrackScreen';
import StatusScreen from './screens/StatusScreen';

const theme = createTheme({
  palette: {
    primary: {
      main: '#327B18',
    },
  },
});
const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchScreen />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/select" element={<SelectJourney />} />
          <Route path="/init" element={<InitScreen />} />
          <Route path="/confirm" element={<ConfirmScreen />} />
          <Route path="/track" element={<TrackScreen />} />
          <Route path="/status" element={<StatusScreen />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </div>
);

export default App;
