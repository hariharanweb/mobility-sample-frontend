import React from 'react';
import Quote from './Quote';

export default {
  title: 'Quote',
  component: Quote,
};
const bookingInformation = [
  {
    context: {
      domain: 'nic2004:60221',
      country: 'IND',
      city: 'std:080',
      action: 'select',
      core_version: '1.0.0',
      bap_id: 'sample_mobility_bap',
      bap_uri: 'http://localhost:2010',
      transaction_id: '47536e49-05a5-4e34-bbb3-5f882f30c2c9',
      message_id: 'ea1f839c-bb4e-4f5d-b773-468794680d87',
      timestamp: '2023-01-13T16:02:21+05:30',
      bpp_id: 'sample_mobility_bpp',
      bpp_uri: 'http://localhost:3010',
    },
    message: {
      order: {
        provider: {
          id: '111-222-300',
        },
        items: [
          {
            id: 'FAKE_SEDAN_ID',
            fulfillment_id: 'FAKE_SEDAN_FULFILLMENT_ID',
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
            category_id: 'FAKE_TAXI_SEDAN',
          },
        ],
        quote: {
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
              title: 'Tax',
              price: {
                currency: 'INR',
                value: '30',
              },
            },
          ],
        },
      },
    },
  },
];
const provider = {
  id: '111-222-300',
  descriptor: {
    name: "Fake Taxi's",
    long_desc: 'We are fake',
    images: [
      'https://ih1.redbubble.net/image.925211637.3466/flat,128x,075,f-pad,128x128,f8f8f8.jpg',
    ],
  },
  locations: [
    {
      id: 'FAKE_TAXI_LOCATION_ID',
      gps: '12.973614,77.608548',
    },
  ],
  categories: [
    {
      id: 'FAKE_TAXI_SEDAN',
      descriptor: {
        name: 'Sedan Taxi',
      },
    },
    {
      id: 'FAKE_TAXI_SUV',
      descriptor: {
        name: 'SUV Taxi',
      },
    },
  ],
  items: [
    {
      id: 'FAKE_SEDAN_ID',
      fulfillment_id: 'FAKE_SEDAN_FULFILLMENT_ID',
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
      category_id: 'FAKE_TAXI_SEDAN',
    },
    {
      id: 'FAKE_SUV_ID',
      fulfillment_id: 'FAKE_SUV_FULFILLMENT_ID',
      descriptor: {
        name: 'SUV',
        code: 'SUV_TAXI',
        images: [
          'https://cdn.iconscout.com/icon/premium/png-256-thumb/taxi-2716987-2254385.png',
        ],
      },
      price: {
        currency: 'INR',
        value: '141',
      },
      category_id: 'FAKE_TAXI_SUV',
    },
  ],
};
export const Primary = () => (
  <Quote
    bookingInformation={bookingInformation}
    provider={provider}
  />
);
