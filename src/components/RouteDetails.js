import { Grid } from '@mui/material';
import React from 'react';
import RouteDetail from './RouteDetail';

const RouteDetails = ({ routeDetails }) => (
  <Grid>
    {routeDetails.map((routeDetail) => (
      <RouteDetail routeDetail={routeDetail} />
    ))}
  </Grid>
);

export default RouteDetails;
