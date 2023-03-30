import React from 'react';
import { Grid } from '@mui/material';
import TravelClass from './TravelClass';

import './TravelClassList.css';

const TravelClassList = ({
  travelClassList,
  selectedTravelClassId,
  onTravelClassSelect,
}) => (
  <Grid container direction="column">
    <Grid
      container
      className="travelClassList"
      direction="row"
      display="flex"
      flexWrap="nowrap"
      overflow="auto"
      whiteSpace="nowrap"
      marginTop={2}
      marginBottom={2}
      position="relative"
    >
      {travelClassList.map((travelClass) => {
        const isTravelClassSelected = travelClass.travel_class_id === selectedTravelClassId;
        return (
          <Grid item paddingRight="1rem" key={travelClass.travel_class_id}>
            <TravelClass
              travelClass={travelClass}
              onTravelClassSelect={onTravelClassSelect}
              isTravelClassSelected={isTravelClassSelected}
            />
          </Grid>
        );
      })}
    </Grid>
  </Grid>
);
export default TravelClassList;
