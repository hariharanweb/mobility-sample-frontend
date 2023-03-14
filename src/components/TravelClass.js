import React from 'react';
import { Grid, Divider, Typography } from '@mui/material';
import Price from './Price';

const TravelClass = ({ travelClass }) => (
  <Grid
    container
    borderRadius="0.25rem"
    backgroundColor="#EFF6FE"
    paddingY="8px"
    paddingX="8px"
    justifyContent="space-evenly"
    flexWrap="nowrap"
  >
    <Grid item direction="column" textAlign="center" paddingX="8px">
      <Typography fontWeight={600}>{travelClass?.travel_class_name}</Typography>
      <Typography fontWeight={500}>{travelClass?.availability}</Typography>
    </Grid>
    <Divider orientation="vertical" flexItem color="#5182BF" />
    <Grid item alignSelf="center" paddingX="8px">
      <Price price={travelClass?.fare_categories[0]?.price} variant="large" />
    </Grid>
  </Grid>
);

export default TravelClass;
