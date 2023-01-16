import React from 'react';
import {
  render, screen, act, fireEvent, waitFor,
} from '@testing-library/react';
import LocationSearch from './LocationSearch';

let onPlaceChangedFunction;
let onLoadFunction;
jest.mock('@react-google-maps/api', () => ({
  Autocomplete: ({
    onPlaceChanged, onLoad, children,
  }) => {
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
  it('clearTextField should clear location', async () => {
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
    const inputElement = screen.getByRole(
      'textbox',
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    act(() => {
      fireEvent.change(inputElement, { target: { value: 'ONDC, New Delhi' } });
    });
    act(() => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(inputElement).toHaveValue('');
    });
  });

  test('onChange should change the location', () => {
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
    const input = screen.getByRole(
      'textbox',
    );
    fireEvent.change(input, { target: { value: 'ONDC, New Delhi' } });
    expect(input.value).toBe('ONDC, New Delhi');
    fireEvent.change(input, { target: { value: '' } });
    expect(input.value).not.toBe('ONDC, New Delhi');
  });
});
