import React from 'react';
import Typography from '@mui/material/Typography';
import './Price.css';

const Price = ({ price }) => (
  <>
    {!!price.value && (
    <Typography variant="body1" className="price">
      ₹&nbsp;
        {price.value}
    </Typography>
    )}
    {!!price.minimum_value && !!price.maximum_value && (
    <Typography variant="body1" className="price">
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
