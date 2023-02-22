import React from 'react';
import Typography from '@mui/material/Typography';
import './Price.css';

const Price = ({ price }) => (
  <>
    {!!price.value && (
    <Typography className="price" variant="body1">
      ₹&nbsp;
        {price.value}
    </Typography>
    )}
    {!!price.minimum_value && !!price.maximum_value && (
    <Typography className="price" variant="body1">
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
