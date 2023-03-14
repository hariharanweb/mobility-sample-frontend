import React from 'react';
import { Grid } from '@mui/material';
import TravelClass from './TravelClass';

const TravelClassList = ({ travelClassList }) => (
  <Grid
    className="travelClassList-scrollmenu"
    direction="row"
    display="flex"
    flexWrap="nowrap"
    overflow="auto"
    whiteSpace="nowrap"
  >
    {travelClassList.map((travelClass) => (
      <Grid item paddingRight="1rem">
        <TravelClass travelClass={travelClass} />
      </Grid>
    ))}
  </Grid>
);

export default TravelClassList;
