import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchScreen from './screens/SearchScreen';
import SearchResult from './screens/SearchResult';
import InvoiceScreen from './screens/InvoiceScreen';
import SelectJourney from './screens/SelectJourney';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchScreen />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/invoice" element={<InvoiceScreen />} />
        <Route path="/select" element={<SelectJourney />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
