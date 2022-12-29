import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchScreen from "./screens/SearchScreen";
import SearchResult from "./screens/SearchResult";
import Invoice from "./components/Invoice";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchScreen />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
