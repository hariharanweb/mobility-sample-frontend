import React from 'react';

import Confirmation from './Confirmation';

export default {
  title: 'Confirmation',
  component: Confirmation,
};
const details = {
  context: {
    bpp_id: 'sample_mobility_bpp_cabs',
    transaction_id: '47536e49-05a5-4e34-bbb3-5f882f30c2c9',
  },
  message: {
    order:
      {
        items: [
          {
            id: 'Bake_SEDAN_ID',
            fulfillment_id: 'Bake_SEDAN_FULFILLMENT_ID',
            descriptor: {
              name: 'Sedan',
              code: 'SEDAN_TAXI',
              images: [
                'https://cdn.iconscout.com/icon/premium/png-256-thumb/sedan-car-469131.png',
              ],
            },
            price: {
              currency: 'INR',
              value: '111',
            },
            category_id: 'Bake_TAXI_SEDAN',
          },
        ],
        fulfillment: {
          agent: {
            name: 'Nikhil',
            dob: '01/02/1996',
            gender: 'Male',
            phone: '9876543210',
            email: 'nikhil@gmail.com',
          },
          vehicle: {
            category: 'Cab',
            capacity: '4',
            model: 'Sedan',
            color: 'black',
            energy_type: 'fuel',
            registration: 'DL 04 4444',
          },
        },
      },

  },
};
export const Primary = () => (
  <Confirmation
    details={details}
  />
);
