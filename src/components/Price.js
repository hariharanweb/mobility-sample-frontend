import React from 'react';
import Typography from '@mui/material/Typography';

const variantStyles = {
  medium: {
    textVariant: 'subtitle2',
    fontWeight: 'default',
  },
  small: {
    height: 'default',
    width: 'default',
    textVariant: 'caption',
    fontWeight: 600,
  },
  large: {
    textVariant: 'subtitle1',
    fontWeight: 700,
  },
};
const Price = ({ price, variant = 'medium' }) => (
  <>
    {!!price.value && (
      <Typography
        variant={variantStyles[variant].textVariant}
        fontWeight={variantStyles[variant].fontWeight}
      >
        ₹&nbsp;
        {price.value}
      </Typography>
    )}
    {!!price.minimum_value && !!price.maximum_value && (
      <Typography
        variant={variantStyles[variant].textVariant}
        align="center"
      >
        ₹&nbsp;
        {price.minimum_value}
        &nbsp;-&nbsp;
        ₹&nbsp;
        {price.maximum_value}
      </Typography>
    )}
  </>
);

export default Price;
