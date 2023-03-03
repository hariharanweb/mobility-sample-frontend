import React from 'react';
import Typography from '@mui/material/Typography';

const Price = ({ price }) => (
  <>
    {!!price.value && (
    <Typography variant="subtitle2" gutterBottom>
      &nbsp;₹&nbsp;&nbsp;
      {price.value}
    </Typography>
    )}
    {!!price.minimum_value && !!price.maximum_value && (
    <Typography variant="subtitle2" gutterBottom>
      &nbsp;₹
      {price.minimum_value}
      &nbsp;-&nbsp;
      &nbsp;₹
      {price.maximum_value}
    </Typography>
    )}
  </>
);

export default Price;
