import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import RouteDetails from './RouteDetails';

describe('Route Details', () => {
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
            name: 'Huda City Center',
          },
          gps: '28.459435790417952, 77.0725014556516',
          time: {
            timestamp: '2023-02-14T06:15:16',
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
      ],
      frequency: [
        {
          times: [
            '2023-02-14T06:10:16+00:00',
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
      ],
      frequency: [
        { frequency: 'PT45M' },
      ],
    },
  ];
  it('Should display routes', () => {
    render(<RouteDetails routeDetails={routeDetails} />);
    expect(screen.getByText('Huda City Center')).toBeInTheDocument();
    expect(screen.getByText('Samaypur Badli')).toBeInTheDocument();
    expect(screen.getByText('Majlis Park')).toBeInTheDocument();
    expect(screen.getByText('Shiv Vihar')).toBeInTheDocument();
  });
});
