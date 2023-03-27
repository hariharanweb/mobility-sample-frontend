import React from 'react';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import MyLocationButton from './MyLocationButton';

describe('MyLocationButton', () => {
  it('Should display location button', () => {
    render(<MyLocationButton />);
    expect(screen.getByTestId('MyLocationIcon')).toBeInTheDocument();
  });
  it('Should fetch location on click', () => {
    const onMyLocationClick = jest.fn();
    render(<MyLocationButton onMyLocationClick={onMyLocationClick} />);
    fireEvent.click(screen.getByTestId('MyLocationIcon'));
    expect(onMyLocationClick).toHaveBeenCalled();
  });
});
