import { Grid } from '@mui/material';
import React from 'react';
import RouteLine from './RouteLine';

const RouteDetails = ({ routeDetails }) => (
  <Grid>
    {routeDetails.map((routeDetail) => (
      <RouteLine routeDetail={routeDetail} />
    ))}
  </Grid>
);

export default RouteDetails;
