/* eslint-disable react/destructuring-assignment */
import { Button, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../api/Api';
import ContextBuilder from '../utilities/ContextBuilder';
import './Track.css';

const Status = (vehicleStatus) => {
  const navigate = useNavigate();

  const onTrackVehicle = async () => {
    const sampleContext = ContextBuilder.getContext('track', vehicleStatus.vehicleStatus[0].context.bpp_uri);
    const data = {
      context: {
        ...sampleContext,
        bpp_id: vehicleStatus.vehicleStatus[0].context.bpp_id,
      },
      message: {
        order: {
          id: vehicleStatus.vehicleStatus[0].message.order.id,
        },
      },
    };
    const response = await Api.post('/track', data);
    if (response.message_id) {
      navigate('/track', { state: { ...response } });
    }
  };

  return (
    <Grid container paddingX={4}>
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
            {vehicleStatus.vehicleStatus[0].message.order.state}
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
            {vehicleStatus.vehicleStatus[0].message.order.fulfillment.start.authorization.token}
          </h3>
        </Grid>
      </Grid>
      <Button
        fullWidth
        variant="contained"
        sx={{ my: 2 }}
        onClick={onTrackVehicle}
      >
        Track
      </Button>
    </Grid>
  );
};

export default Status;
