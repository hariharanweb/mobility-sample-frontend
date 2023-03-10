import React from 'react';
import Typography from '@mui/material/Typography';
import PriceTypography from './PriceTypography';

const Price = ({ price }) => (
  <>
    {!!price.value && (
    <PriceTypography value={price.value} height="30px" width="60px" />
    )}
    {!!price.minimum_value && !!price.maximum_value && (
    <Typography
      variant="subtitle2"
      height="50px"
      align="center"
    >
      ₹
      {price.minimum_value}
      &nbsp;-
      ₹
      {price.maximum_value}
    </Typography>
    )}
  </>
);

export default Price;
