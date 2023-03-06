import * as React from 'react';
import Box from '@mui/material/Box';
import RouteLocation from './RouteLocation';
import RouteLineSwitch2 from './RouteLineSwitch2';

const steps = [
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
      },
      {
        descriptor: {
          name: 'Huda City Center',
        },
        gps: '28.459435790417952, 77.0725014556516',
      },
      {
        descriptor: {
          name: 'ABCD',
        },
        gps: '28.744842537205894, 77.1382827538096',
      },
      {
        descriptor: {
          name: 'Samaypur Badli',
        },
        gps: '28.744842537205894, 77.1382827538096',
      },
      {
        descriptor: {
          name: 'M.G. Road',
        },
        gps: '28.744842537205884, 77.1382827538086',
      },
    ],
    frequency: [
      {
        times: [
          '2023-02-14T06:10:16+00:00',
          '2023-02-14T07:10:16+00:00',
          '2023-02-14T08:10:16+00:00',
          '2023-02-14T09:10:16+00:00',
        ],
      },
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
      },
      {
        descriptor: {
          name: 'Majlis Park',
        },
        gps: '28.459435790417952, 77.0725014556516',
      },
      {
        descriptor: {
          name: 'Shiv Vihar',
        },
        gps: '28.744842537205894, 77.1382827538096',
      },
      {
        descriptor: {
          name: 'Krishna Nagar',
        },
        gps: '28.744842537205884, 77.1382827538086',
      },
    ],
    frequency: [
      {
        times: [
          '2023-02-14T06:10:16+00:00',
          '2023-02-14T07:10:16+00:00',
          '2023-02-14T08:10:16+00:00',
          '2023-02-14T09:10:16+00:00',
        ],
      },
    ],
  },
];

const RouteLine2 = () => (
  <Box sx={{ maxWidth: 400 }}>
    {/* <Stepper orientation="vertical"> */}
    {steps.map((step, index) => (
      <>
        <RouteLocation step={step} />
        {index !== steps.length - 1 ? <RouteLineSwitch2 /> : null}
      </>
    ))}
    {/* </Stepper> */}
  </Box>
);

export default RouteLine2;
