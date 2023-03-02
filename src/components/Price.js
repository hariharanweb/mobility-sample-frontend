import React from 'react';
import Typography from '@mui/material/Typography';

const Price = ({ price }) => (
  <>
    {!!price.value && (
    <Typography
      variant="subtitle2"
      height="30px"
      width="60px"
    >
      ₹
      {price.value}
    </Typography>
    )}
    {!!price.minimum_value && !!price.maximum_value && (
    <Typography
      variant="subtitle2"
      height="60px"
      width="60px"
      align="center"
    >
      ₹
      {price.minimum_value}
      {' '}
      -
      ₹
      {price.maximum_value}
    </Typography>
    )}
  </>
);

export default Price;
