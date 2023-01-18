import React from 'react';
import PriceBreakdown from './PriceBreakdown';

const quote = {
  price: {
    currency: 'INR',
    value: 141,
  },
  breakup: [
    {
      title: 'Fare',
      price: {
        currency: 'INR',
        value: '111',
      },
    },
    {
      title: 'CGST',
      price: {
        currency: 'INR',
        value: '15',
      },
    },
    {
      title: 'SGST',
      price: {
        currency: 'INR',
        value: '15',
      },
    },
  ],
};

export default {
  title: 'PriceBreakdown',
  component: PriceBreakdown,
};
export const Primary = () => <PriceBreakdown quote={quote} />;
