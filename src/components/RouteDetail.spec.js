import React from 'react';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import RouteDetail from './RouteDetail';

describe('Route Detail', () => {
  const routeDetail = {
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
      {
        times: [
          '2023-02-14T06:10:16+00:00',
          '2023-02-14T07:10:16+00:00',
          '2023-02-14T08:10:16+00:00',
          '2023-02-14T09:10:16+00:00',
        ],
      },
    ],
  };
  it('Should display start location', () => {
    render(<RouteDetail routeDetail={routeDetail} />);
    expect(screen.getByText('Huda City Center')).toBeInTheDocument();
  });
  it('Should display end location', () => {
    render(<RouteDetail routeDetail={routeDetail} />);
    expect(screen.getByText('Samaypur Badli')).toBeInTheDocument();
  });

  it('Should display number of stops', () => {
    render(<RouteDetail routeDetail={routeDetail} />);
    expect(screen.getByText('Show 5 stops')).toBeInTheDocument();
  });

  it('Should Display frequency', () => {
    render(<RouteDetail routeDetail={routeDetail} />);
    expect(screen.getByText('next at 06:10 am, 07:10 am, 08:10 am, 09:10 am')).toBeInTheDocument();
  });
  it('Should individual stops on clicking', () => {
    render(<RouteDetail routeDetail={routeDetail} />);
    fireEvent.click(screen.getByText('Show 5 stops'));
    expect(screen.getByText('Hide stops')).toBeInTheDocument();
    expect(screen.getByText('06:10')).toBeInTheDocument();
    expect(screen.getByText('Iffco Chowk')).toBeInTheDocument();
    expect(screen.getByText('06:20')).toBeInTheDocument();
    expect(screen.getByText('ABCD')).toBeInTheDocument();
  });

  it('Should display frequency as ISO frequency', () => {
    let routeWithISOFrequency = {
      ...routeDetail,
      frequency: [
        { frequency: 'PT45M' },
      ],
    };
    render(<RouteDetail routeDetail={routeWithISOFrequency} />);
    expect(screen.getByText('every 45 minutes')).toBeInTheDocument();
    routeWithISOFrequency = {
      ...routeDetail,
      frequency: [
        { frequency: 'PT1H45M' },
      ],
    };
    render(<RouteDetail routeDetail={routeWithISOFrequency} />);
    expect(screen.getByText('every 1 hours 45 minutes')).toBeInTheDocument();
    routeWithISOFrequency = {
      ...routeDetail,
      frequency: [
        { frequency: 'PT1H' },
      ],
    };
    render(<RouteDetail routeDetail={routeWithISOFrequency} />);
    expect(screen.getByText('every 1 hours')).toBeInTheDocument();
  });

  it('Should not display frequency if not available', () => {
    const routeWithoutFrequency = {
      ...routeDetail,
      frequency: [],
    };
    render(<RouteDetail routeDetail={routeWithoutFrequency} />);
    expect(screen.queryByText('every 1 hours')).not.toBeInTheDocument();
  });
});
