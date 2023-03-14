import React from 'react';
import Typography from '@mui/material/Typography';

const variantStyles = {
  medium: {
    height: '30px',
    width: '60px',
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
    height: '50px',
    width: '70px',
    textVariant: 'subtitle1',
    fontWeight: 700,
  },
};
const Price = ({ price, variant }) => (
  <>
    {!!price.value && (
      <Typography
        variant={variantStyles[variant].textVariant}
        height={variantStyles[variant].height}
        width={variantStyles[variant].width}
      >
        ₹
        {price.value}
      </Typography>
    )}
    {!!price.minimum_value && !!price.maximum_value && (
      <Typography
        variant={variantStyles[variant].textVariant}
        height={variantStyles[variant].height}
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
