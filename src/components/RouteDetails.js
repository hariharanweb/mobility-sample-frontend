import React from 'react';
import RouteLine from './RouteLine';
import RoutLineSwitch from './RouteLineSwitch';

const RouteDetails = () => (
  <div className="route-details-section">
    <RouteLine />
    <RoutLineSwitch />
    <RouteLine />
    <RoutLineSwitch />
    <RouteLine />
  </div>
);

export default RouteDetails;
