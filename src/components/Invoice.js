import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import './Invoice.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Invoice = ({
  order, driverName, fromLocation, toLocation,
}) => (
  <Box container sx={style}>
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
      Your ride is booked.
    </Typography>
    <Typography variant="body1" display="block" gutterBottom>
      Transaction ID:
      {' '}
      {order[0]?.context?.transaction_id}
    </Typography>
    <Typography variant="body1" display="block" gutterBottom>
      Country:
      {' '}
      {order[0]?.context?.country}
    </Typography>
    <Typography variant="body1" display="block" gutterBottom>
      Date:
      {' '}
      {order[0]?.context?.timestamp.substring(0, 10)}
    </Typography>
    <Typography variant="body1" display="block" gutterBottom>
      Time:
      {' '}
      {order[0]?.context?.timestamp.substring(11, 19)}
    </Typography>
    <Typography variant="body1" display="block" gutterBottom>
      Driver Name:
      {' '}
      {driverName.charAt(0) + driverName.slice(1).toLowerCase()}
    </Typography>
    <Typography variant="body1" display="block" gutterBottom>
      Taxi Fare:
      {' '}
      {order[0]?.message?.order?.provider?.items[0]?.price?.currency}
      {' '}
      {order[0]?.message?.order?.provider?.items[0]?.price?.value}
    </Typography>
    <Typography variant="body1" display="block" gutterBottom>
      Duration To Pick-up:
      {' '}
      {order[0]?.message?.order?.provider?.items[0]?.duration_to_pickup}
      {' '}
      sec
    </Typography>

    <Typography variant="body1" display="block" gutterBottom>
      Vehicle:
      {' '}
      {order[0]?.message?.order?.provider?.fulfillments[0]?.vehicle?.category}
    </Typography>
    <Typography variant="body1" display="block" gutterBottom>
      Pick-up Location:
      {' '}
      {fromLocation}
    </Typography>
    <Typography variant="body1" display="block" gutterBottom>
      Destination Location:
      {' '}
      {toLocation}
    </Typography>
  </Box>
);

export default Invoice;
