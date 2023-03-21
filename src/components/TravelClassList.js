import React from 'react';
import { Grid } from '@mui/material';
import TravelClass from './TravelClass';
import FareCategoryList from './FareCategoryList';
import './TravelClassList.css';

const TravelClassList = ({
  travelClassList,
  selectedTravelClassId,
  onTravelClassSelect,
  fareCategoryList,
}) => {
  let displayFareCategoryList = 'none';
  const handleOnClick = () => {
    displayFareCategoryList = fareCategoryList.length === 0 ? 'none' : 'block';
  };
  return (
    <Grid direction="column">
      <Grid
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
            <Grid item paddingRight="1rem">
              <TravelClass
                travelClass={travelClass}
                onTravelClassSelect={onTravelClassSelect}
                isTravelClassSelected={isTravelClassSelected}
              />
              {isTravelClassSelected && handleOnClick()}
            </Grid>
          );
        })}
      </Grid>
      <Grid display={displayFareCategoryList} width="100%" height="100%">
        <FareCategoryList fareCategoryList={fareCategoryList} />
      </Grid>
    </Grid>
  );
};
export default TravelClassList;
