import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import { Grid } from '@mui/material';
import './Invoice.css';
import Agent from './Agent';
import Vehicle from './Vehicle';

const Invoice = ({ details }) => {
  const [isCab, setIsCab] = useState(false);
  // eslint-disable-next-line no-console
  console.log(details.context.bpp_id);
  useEffect(() => {
    if (details.context.bpp_id
      === 'sample_mobility_bpp_cabs') {
      setIsCab(true);
    }
  }, []);

  // eslint-disable-next-line no-console
  console.log(details);

  const cabCheck = () => (
    <div>
      <Vehicle vehicle={details.message.order.fulfillment.vehicle} />
      <Agent agent={details.message.order.fulfillment.agent} />
    </div>
  );

  return (
    <Grid fullWidth sx={{ width: 1, px: 5 }}>
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
      {' '}
      <Typography variant="body1" display="block" gutterBottom>
        Fare:
        {' '}
        {details.message.order.items[0].price.currency}
        {' '}
        {details.message.order.items[0].price.value}
      </Typography>
      {isCab && cabCheck()}
    </Grid>
  );
};

export default Invoice;
