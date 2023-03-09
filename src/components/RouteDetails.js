import { Grid } from '@mui/material';
import React from 'react';
import RouteLine from './RouteLine';

const RouteDetails = ({ routeDetails }) => (
  <Grid padding="5px" width="100vw">
    {routeDetails.map((routeDetail) => (
      <RouteLine routeDetail={routeDetail} />
    ))}
  </Grid>
);

export default RouteDetails;
