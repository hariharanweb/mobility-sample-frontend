/* eslint-disable react/destructuring-assignment */
import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Track.css';

const Status = ({ vehicleStatus, onTrackVehicle }) => {
  const [isCab, setIsCab] = useState(false);

  useEffect(() => {
    if (vehicleStatus[0].context.bpp_id
      === 'sample_mobility_bpp_cabs') {
      setIsCab(true);
    }
  }, []);

  return (
    <Grid container paddingX={4} paddingY={5}>
      <Grid container className="track-with-border" display="flex">
        <Grid
          item
          xs={4}
          alignItems="top-center"
          justifyContent="left"
          display="flex"
          marginLeft={4}
        >
          <h3>
            Your order status is:
            {' '}
            {vehicleStatus[0].message.order.state}
          </h3>
        </Grid>
        <Grid
          item
          xs={4}
          justifyContent="left"
          display="flex"
          marginTop={12}
        >
          <h3>
            OTP:
            {vehicleStatus[0].message.order.fulfillment.start.authorization.token}
          </h3>
        </Grid>
      </Grid>
      {isCab && (
      <Button
        fullWidth
        variant="contained"
        sx={{ my: 2 }}
        onClick={onTrackVehicle}
      >
        Track
      </Button>
      )}
    </Grid>
  );
};

export default Status;
