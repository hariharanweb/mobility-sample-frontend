import React from 'react';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import TravelClass from './TravelClass';

describe('Travel Class', () => {
  const travelClass = {
    travel_class_id: '3A',
    travel_class_name: '3 AC',
    fare_type: 'Quantity',
    availability: '20 WL',
    fare_categories: [
      {
        fare_category_id: 'ADULT_FARE',
        fare_category_name: 'Adult',
        price: {
          value: 825,
          currency: 'INR',
        },
      },
    ],
  };
  it('Should show travel class name', () => {
    render(<TravelClass travelClass={travelClass} />);
    expect(screen.getByText('3 AC')).toBeInTheDocument();
  });

  it('Should show availability', () => {
    render(<TravelClass travelClass={travelClass} />);
    expect(screen.getByText('20 WL')).toBeInTheDocument();
  });

  it('Should show fare', () => {
    render(<TravelClass travelClass={travelClass} />);
    expect(screen.getByText('₹ 825')).toBeInTheDocument();
  });

  it('Should select travel class', () => {
    const onTravelClassSelect = jest.fn();
    render(
      <TravelClass
        travelClass={travelClass}
        onTravelClassSelect={onTravelClassSelect}
      />,
    );
    fireEvent.click(screen.getByText('3 AC'));
    expect(onTravelClassSelect).toHaveBeenCalledWith(travelClass, true);
  });
  it('Should unselect travel class', () => {
    const onTravelClassSelect = jest.fn();
    render(
      <TravelClass
        travelClass={travelClass}
        onTravelClassSelect={onTravelClassSelect}
        isTravelClassSelected
      />,
    );
    fireEvent.click(screen.getByText('3 AC'));
    expect(onTravelClassSelect).toHaveBeenCalledWith(travelClass, false);
  });
});
