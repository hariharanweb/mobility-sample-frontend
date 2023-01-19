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

const Invoice = ({ details }) => {
  // eslint-disable-next-line no-console
  console.log(details.context);
  return (
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
        {details.context.transaction_id}
      </Typography>
      <Typography variant="body1" display="block" gutterBottom>
        Country:
        {' '}
        {details.context.country}
      </Typography>
      {/* <Typography variant="body1" display="block" gutterBottom>
        Date:
        {' '}
        {details.message.order[0]?.context?.timestamp.substring(0, 10)}
      </Typography> */}
      {/* <Typography variant="body1" display="block" gutterBottom>
        Time:
        {' '}
        {details.message.order[0]?.context?.timestamp.substring(11, 19)}
      </Typography> */}
      <Typography variant="body1" display="block" gutterBottom>
        Driver Name:
        {' '}
        {details.message.order.fulfillment.agent.name}
      </Typography>
      <Typography variant="body1" display="block" gutterBottom>
        Taxi Fare:
        {' '}
        {details.message.order.items[0].price.currency}
        {' '}
        {details.message.order.items[0].price.value}
      </Typography>
      {/* <Typography variant="body1" display="block" gutterBottom>
        Duration To Pick-up:
        {' '}
        {details.message.order[0]?.message?.order?.provider?.items[0]?.duration_to_pickup}
        {' '}
        sec
      </Typography> */}

      <Typography variant="body1" display="block" gutterBottom>
        Vehicle:
        {' '}
        {details.message.order.fulfillment.vehicle.category}
        {' - '}
        { details.message.order.fulfillment.vehicle.model}
      </Typography>
      {/* {/* <Typography variant="body1" display="block" gutterBottom>
        Pick-up Location:
        {' '}
        {fromLocation}
      </Typography>
      <Typography variant="body1" display="block" gutterBottom>
        Destination Location:
        {' '}
        {toLocation}
      </Typography> */}
    </Box>
  );
};

export default Invoice;
