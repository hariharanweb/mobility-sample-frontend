import React from 'react';
import { Grid } from '@mui/material';
import TravelClass from './TravelClass';

const TravelClassList = ({ travelClassList, selectedTravelClassId, onTravelClassSelect }) => (
  <Grid
    direction="row"
    display="flex"
    flexWrap="nowrap"
    overflow="auto"
    whiteSpace="nowrap"
    marginTop={2}
    marginBottom={2}
  >
    {travelClassList.map((travelClass) => {
      const isTravelClassSelected = travelClass.travel_class_id === selectedTravelClassId;
      return (
        <Grid item paddingRight="1rem">
          <TravelClass
            travelClass={travelClass}
            onTravelClassSelect={onTravelClassSelect}
            isTravelClassSelected={isTravelClassSelected}
          />
        </Grid>
      );
    })}
  </Grid>
);

export default TravelClassList;
