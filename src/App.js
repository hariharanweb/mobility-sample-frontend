import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchScreen from './screens/SearchScreen';
import SearchResult from './screens/SearchResult';
import ConfirmationScreen from './screens/ConfirmationScreen';
import SelectJourney from './screens/SelectJourney';
import InitScreen from './screens/InitScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import TrackScreen from './screens/TrackScreen';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchScreen />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/invoice" element={<ConfirmationScreen />} />
        <Route path="/select" element={<SelectJourney />} />
        <Route path="/init" element={<InitScreen />} />
        <Route path="/confirm" element={<ConfirmScreen />} />
        <Route path="/track" element={<TrackScreen />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
