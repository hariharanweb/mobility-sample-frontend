import React from 'react';
import { Grid } from '@mui/material';
import TravelClass from './TravelClass';
import FareCategoryList from './FareCategoryList';
import './TravelClassList.css';

const TravelClassList = ({ travelClassList, selectedTravelClassId, onTravelClassSelect }) => (
  <Grid
    className="travelClassList"
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
          {isTravelClassSelected && (
            <FareCategoryList fareCategoryList={travelClass.fare_categories} />
          )}
        </Grid>
      );
    })}
  </Grid>
);

export default TravelClassList;
