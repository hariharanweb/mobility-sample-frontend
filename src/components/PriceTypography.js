import { Typography } from '@mui/material';
import React from 'react';

const PriceTypography = ({
  value, height, width, variant, fontWeight,
}) => (
  <Typography
    variant={variant || 'subtitle2'}
    height={height || 'default'}
    width={width || 'default'}
    fontWeight={fontWeight || 'default'}
  >
    ₹
    {value}
  </Typography>
);
export default PriceTypography;
