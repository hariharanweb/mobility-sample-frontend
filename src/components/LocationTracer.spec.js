import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import LocationTracer from './LocationTracer';

describe('Location Tracer', () => {
  it('Sould display the from and to location in search result', () => {
    const locationMap = [
      {
        location: 'Delhi',
      },
      {
        location: 'Agra',
      },
    ];
    render(<LocationTracer isSearchResult locationMap={locationMap} />);
    expect(screen.getByText('Delhi')).toBeInTheDocument();
    expect(screen.getByText('Agra')).toBeInTheDocument();
  });
  it('Sould display the from and to location', () => {
    const locationMap = [
      {
        location: 'Delhi',
      },
      {
        location: 'Agra',
      },
    ];
    render(<LocationTracer isSearchResult={false} locationMap={locationMap} />);
    expect(screen.getByText('Delhi')).toBeInTheDocument();
    expect(screen.getByText('Agra')).toBeInTheDocument();
  });
});
