import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchScreen from './screens/SearchScreen';
import SearchResult from './screens/SearchResult';
import InvoiceScreen from './screens/InvoiceScreen';
import SelectJourney from './screens/SelectJourney';
import InitScreen from './screens/InitScreen';
import ConfirmScreen from './screens/ConfirmScreen';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchScreen />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/invoice" element={<InvoiceScreen />} />
        <Route path="/select" element={<SelectJourney />} />
        <Route path="/init" element={<InitScreen />} />
        <Route path="/confirm" element={<ConfirmScreen />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
