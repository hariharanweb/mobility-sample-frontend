import React from 'react';
import RouteDetails from './RouteDetails';

export default {
  title: 'RouteDetails',
  component: RouteDetails,
};
const routeDetails = [
  {
    routeName: 'Yellow Line',
    startLocation: {
      descriptor: {
        name: 'Huda City Center',
      },
      gps: '28.459435790417952, 77.0725014556516',
    },
    endLocation: {
      descriptor: {
        name: 'Samaypur Badli',
      },
      gps: '28.744842537205894, 77.1382827538096',
    },
    stops: [
      {
        descriptor: {
          name: 'Iffco Chowk',
        },
        gps: '28.744842537205894, 77.1382827538096',
        time: {
          timestamp: '2023-02-14T06:10:16',
        },
      },
      {
        descriptor: {
          name: 'Huda City Center',
        },
        gps: '28.459435790417952, 77.0725014556516',
        time: {
          timestamp: '2023-02-14T06:15:16',
        },
      },
      {
        descriptor: {
          name: 'ABCD',
        },
        gps: '28.744842537205894, 77.1382827538096',
        time: {
          timestamp: '2023-02-14T06:20:16',
        },
      },
      {
        descriptor: {
          name: 'Samaypur Badli',
        },
        gps: '28.744842537205894, 77.1382827538096',
        time: {
          timestamp: '2023-02-14T06:25:16',
        },
      },
      {
        descriptor: {
          name: 'M.G. Road',
        },
        gps: '28.744842537205884, 77.1382827538086',
        time: {
          timestamp: '2023-02-14T06:30:16',
        },
      },
    ],
    frequency: [
      { frequency: 'PT1H30M' },
    ],
  },
  {
    routeName: 'Pink Line',
    startLocation: {
      descriptor: {
        name: 'Majlis Park',
      },
      gps: '28.459435790417952, 77.0725014556516',
    },
    endLocation: {
      descriptor: {
        name: 'Shiv Vihar',
      },
      gps: '28.744842537205894, 77.1382827538096',
    },
    stops: [
      {
        descriptor: {
          name: 'Punjabi Bagh West',
        },
        gps: '28.744842537205894, 77.1382827538096',
        time: {
          timestamp: '2023-02-14T07:10:16',
        },
      },
      {
        descriptor: {
          name: 'Majlis Park',
        },
        gps: '28.459435790417952, 77.0725014556516',
        time: {
          timestamp: '2023-02-14T07:15:16',
        },
      },
      {
        descriptor: {
          name: 'Shiv Vihar',
        },
        gps: '28.744842537205894, 77.1382827538096',
        time: {
          timestamp: '2023-02-14T07:20:16',
        },
      },
      {
        descriptor: {
          name: 'Krishna Nagar',
        },
        gps: '28.744842537205884, 77.1382827538086',
        time: {
          timestamp: '2023-02-14T07:25:16',
        },
      },
    ],
    frequency: [
      { frequency: 'PT45M' },
    ],
  },
];

export const Primary = () => (
  <RouteDetails routeDetails={routeDetails} />
);
