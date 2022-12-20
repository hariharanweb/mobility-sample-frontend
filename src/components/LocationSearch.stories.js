import { LoadScript } from "@react-google-maps/api";
import React from "react";

import LocationSearch from "./LocationSearch";
const toLocation = {};
export default {
  title: "Location Search",
  component: LocationSearch,
};
export const Primary = () => (
  <LoadScript
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    libraries={["places"]}
  >
    <LocationSearch
      type="To"
      initialLocation={toLocation}
      onLocationChange={() => {}}
    />
  </LoadScript>
);
