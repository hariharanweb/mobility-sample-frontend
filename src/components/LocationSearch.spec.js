import React from 'react';
import { render, screen, act } from '@testing-library/react';
import LocationSearch from './LocationSearch';

let onPlaceChangedFunction;
let onLoadFunction;
jest.mock('@react-google-maps/api', () => ({
  Autocomplete: ({ onPlaceChanged, onLoad, children }) => {
    onPlaceChangedFunction = onPlaceChanged;
    onLoadFunction = onLoad;
    return <div>{children}</div>;
  },
}));
describe('Location Search', () => {
  it('Should initialize with given initial location and label', () => {
    render(
      <LocationSearch
        label="test_label"
        initialLocation={{
          display: 'ONDC, New Delhi',
        }}
        onLocationChange={() => {
        }}
      />,
    );
    expect(screen.getByText('test_label')).toBeInTheDocument();
    expect(screen.getByDisplayValue('ONDC, New Delhi')).toBeInTheDocument();
  });
  it('onPlaceChangedFunction should change location', () => {
    render(
      <LocationSearch
        label="test_label"
        initialLocation={{
          display: 'ONDC, New Delhi',
        }}
        onLocationChange={() => {
        }}
      />,
    );
    act(() => onLoadFunction({
      getPlace: () => ({
        name: 'Mg Road, Bangalore',
        formatted_address: '560045',
        geometry: {
          location: {
            lat: () => '11',
            lng: () => '22',
          },
        },
      }),
    }));
    act(() => {
      onPlaceChangedFunction();
    });
    expect(
      screen.getByDisplayValue('Mg Road, Bangalore 560045'),
    ).toBeInTheDocument();
  });
});
