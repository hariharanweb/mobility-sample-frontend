import React from 'react';
import RouteLine from './RouteLine';

const RouteDetails = ({ routeDetails }) => (
  <div className="route-details-section">
    {routeDetails.map((routeDetail) => (
      <RouteLine routeDetail={routeDetail} />
    ))}
  </div>
);

export default RouteDetails;
