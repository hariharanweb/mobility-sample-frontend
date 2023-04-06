import React from 'react';
import Typography from '@mui/material/Typography';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import { Button, Grid } from '@mui/material';
import './Confirmation.css';
import Agent from './Agent';
import Vehicle from './Vehicle';

const Confirmation = ({ details, onTrackVehicle, onCheckStatus }) => (
  <Grid sx={{ width: 1, px: 5 }}>
    <div className="invoice-confirmation">
      <CheckCircleSharpIcon
        className="invoice-successIcon"
        sx={{ fontSize: '5em' }}
      />
    </div>
    <Typography
      variant="body1"
      display="block"
      gutterBottom
      textAlign="center"
      fontSize="2em"
    >
      Your booking is confirmed.
    </Typography>
    <Typography variant="body1" display="block" gutterBottom>
      Transaction ID:
      {' '}
      {details.context.transaction_id}
    </Typography>
    {' '}
    <Typography variant="body1" display="block" gutterBottom>
      Fare:
      {' '}
      {details.message.order.items[0].price.currency}
      {' '}
      {details.message.order.items[0].price.value}
    </Typography>
    <div>
      {details.message.order.fulfillment.vehicle
        && <Vehicle vehicle={details.message.order.fulfillment.vehicle} />}
      { details.message.order.fulfillment.agent
        && <Agent agent={details.message.order.fulfillment.agent} /> }
    </div>
    {
      details.message.order.fulfillment.start?.authorization?.type === 'OTP'
      && details.message.order.fulfillment.start?.authorization?.token
      && (
        <Grid
          container
          display="flex"
          justifyContent="space-evenly"
          border="1px solid grey"
          borderRadius="0.75em"
          my={5}
        >
          <Typography variant="body1" display="block" gutterBottom>
            OTP to start the ride:
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            {details.message.order.fulfillment.start.authorization.token}
          </Typography>
        </Grid>
      )
    }
    {details.message.order.fulfillment.tracking && (
    <Button
      fullWidth
      variant="contained"
      sx={{ my: 2 }}
      onClick={onTrackVehicle}
    >
      Track
    </Button>
    )}
    <Button
      fullWidth
      variant="contained"
      sx={{ my: 2 }}
      onClick={onCheckStatus}
    >
      Status
    </Button>

  </Grid>
);

export default Confirmation;
