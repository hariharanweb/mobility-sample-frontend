import React, { useState } from 'react';
import { Grid, Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Price from './Price';
import FareCategoryList from './FareCategoryList';

const TravelClass = ({ travelClass, isTravelClassSelected, onTravelClassSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const onSelectTravelClass = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    onTravelClassSelect(travelClass, !isTravelClassSelected);
  };

  const open = Boolean(isTravelClassSelected);
  const id = isTravelClassSelected ? 'simple-popper' : undefined;

  return (
    <Grid>
      <Grid
        container
        borderRadius="0.25rem"
        backgroundColor={isTravelClassSelected ? 'rgba(50, 123, 24, 0.1)' : '#EFF6FE'}
        paddingY="8px"
        paddingX="8px"
        justifyContent="space-evenly"
        flexWrap="nowrap"
        aria-describedby={id}
        onClick={onSelectTravelClass}
      >
        <Grid item textAlign="center" paddingX="8px">
          <Grid container direction="column">
            <Typography fontWeight={600}>{travelClass?.travel_class_name}</Typography>
            <Typography fontWeight={500}>{travelClass?.availability}</Typography>
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem color="#5182BF" />
        <Grid item alignSelf="center" paddingX="8px">
          <Price price={travelClass?.fare_categories[0]?.price} variant="large" />
        </Grid>

      </Grid>

      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        style={{
          zIndex: '1300', position: 'fixed', bottom: 'unset', right: 'unset', top: 'unset', left: 'unset',
        }}
        placement="bottom"
      >
        <Box
          sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}
        >
          <FareCategoryList fareCategoryList={travelClass.fare_categories} />
        </Box>
      </Popper>
    </Grid>
  );
};
export default TravelClass;
