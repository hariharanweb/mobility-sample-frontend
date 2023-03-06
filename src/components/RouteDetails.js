import React from 'react';
import RouteLine from './RouteLine';
// import RoutLineSwitch from './RouteLineSwitch';

const RouteDetails = ({ routeDetails }) => (
  <div className="route-details-section">
    {routeDetails.map((routeDetail, index) => (

      <RouteLine
        stops={routeDetails[index]?.stops}
        startLocation={routeDetails[index].startLocation.descriptor.name}
        endLocation={routeDetails[index].endLocation.descriptor.name}
      />
      // <RoutLineSwitch />

    ))}
  </div>
);

export default RouteDetails;
