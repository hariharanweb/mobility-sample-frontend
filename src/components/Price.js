import React from 'react';
import Typography from '@mui/material/Typography';

const Price = ({ price }) => (
  <>
    {!!price.value && (
    <Typography variant="body1" style={{ fontSize: 'medium', fontWeight: '1000', color: 'red' }}>
      ₹&nbsp;
        {price.value}
    </Typography>
    )}
    {!!price.minimum_value && !!price.maximum_value && (
    <Typography variant="body1" style={{ fontSize: 'medium', fontWeight: '1000', color: 'red' }}>
      ₹
      {price.minimum_value}
      &nbsp;-&nbsp;
      ₹
      {price.maximum_value}
    </Typography>
    )}
  </>
);

export default Price;
