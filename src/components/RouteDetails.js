import React from 'react';
import RouteLine from './RouteLine';

const RouteDetails = ({ routeDetails }) => (
  <div className="route-details-section">
    {routeDetails.map((routeDetail) => (
      <RouteLine
        stops={routeDetail.stops}
        startLocation={routeDetail.startLocation.descriptor.name}
        endLocation={routeDetail.endLocation.descriptor.name}
      />
    ))}
  </div>
);

export default RouteDetails;
