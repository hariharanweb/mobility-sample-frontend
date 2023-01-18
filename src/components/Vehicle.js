import React from 'react';
import './Vehicle.css';
import { Grid, Paper, Typography } from '@mui/material';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';

const Vehicle = ({ vehicle }) => {
  const registrationClass = vehicle.energy_type === 'Electric'
    ? 'vehicle-registration-number-electric' : 'vehicle-registration-number';
  const registrationColor = vehicle.energy_type === 'Electric'
    ? 'white' : 'black';
  return (
    <Grid
      container
      display="flex"
      justifyContent="space-evenly"
      border="1px solid grey"
      borderRadius="0.75em"
    >
      <Grid item display="flex" alignItems="center">
        <DirectionsCarRoundedIcon fontSize="large" />
      </Grid>
      <Grid item paddingX={2} display="flex">
        <Grid container display="flex" flexDirection="column" justifyContent="center">
          <Typography variant="button">
            {vehicle.make}
          </Typography>
          <Typography variant="overline" fontWeight="bold">
            {vehicle.model}
            {' '}
            -
            {' '}
            {vehicle.color}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Paper elevation={3} className={registrationClass}>
          <Typography margin={2} variant="h6" fontWeight="bold" color={registrationColor}>
            {vehicle.registration}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Vehicle;
