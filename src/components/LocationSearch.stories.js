import React from "react";

import LocationSearch from "./LocationSearch";
const toLocation = {};
export default {
  title: "Location Search",
  component: LocationSearch,
};
export const Primary = () => (
  <LocationSearch
    type="To"
    initialLocation={toLocation}
    locationChange={() => {}}
    placeholder="Enter Destination Point"
  />
);
