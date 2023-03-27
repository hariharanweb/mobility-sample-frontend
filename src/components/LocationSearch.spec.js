import React from 'react';
import {
  render, screen, act, fireEvent,
} from '@testing-library/react';
import LocationSearch from './LocationSearch';

let onPlaceChangedFunction;
jest.mock('@react-google-maps/api', () => ({
  Autocomplete: ({
    onPlaceChanged, children,
  }) => {
    onPlaceChangedFunction = onPlaceChanged;
    return <div>{children}</div>;
  },
}));
describe('Location Search', () => {
  it('Should initialize with given initial location and label', () => {
    render(
      <LocationSearch
        initialLocation={{
          display: 'ONDC, New Delhi',
        }}
        onLocationChange={() => {
        }}
        isPanelOpen
      />,
    );
    expect(screen.getByLabelText('from_location')).toBeInTheDocument();
    expect(screen.getByDisplayValue('ONDC, New Delhi')).toBeInTheDocument();
  });

  it('onPlaceChangedFunction should not change location when autocomplete is null', () => {
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
    act(() => {
      onPlaceChangedFunction();
    });
    expect(
      screen.getByDisplayValue('ONDC, New Delhi'),
    ).toBeInTheDocument();
  });

  it('onChange should change the location', () => {
    render(
      <LocationSearch
        label="test_label"
        initialLocation={{
          display: 'Some, New Delhi',
        }}
        onLocationChange={() => {
        }}
      />,
    );
    const input = screen.getByRole(
      'textbox',
    );
    fireEvent.change(input, { target: { value: 'ONDC, New Delhi' } });
    expect(input.value).toBe('ONDC, New Delhi');
    fireEvent.change(input, { target: { value: '' } });
    expect(input.value).not.toBe('ONDC, New Delhi');
  });
});
