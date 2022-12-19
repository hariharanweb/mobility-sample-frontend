import {BrowserRouter, Routes, Route} from "react-router-dom";
import SearchScreen from "./screens/SearchScreen";
import SearchResult from "./screens/SearchResult";
import { LoadScript } from "@react-google-maps/api";

const App = () => {
    return (
        <div>
            <LoadScript
        googleMapsApiKey={process.env.REACT_APP_API_KEY}
        libraries={["places"]}
      >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SearchScreen/>}/>
                    <Route path="/search" element={<SearchResult/>}/>
                </Routes>
            </BrowserRouter>
            </LoadScript>
        </div>
    );
}

export default App;
