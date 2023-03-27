import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import TravelClassList from './TravelClassList';

describe('Travel Class', () => {
  const travelClassList = [{
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
  },
  {
    travel_class_id: '1A',
    travel_class_name: '1 AC',
    fare_type: 'Quantity',
    availability: '11',
    fare_categories: [
      {
        fare_category_id: 'ADULT_FARE',
        fare_category_name: 'Adult',
        price: {
          value: 1825,
          currency: 'INR',
        },
      },
    ],
  }];
  it('Should show all travel class name', () => {
    render(<TravelClassList travelClassList={travelClassList} fareCategoryList={[]} />);
    expect(screen.getByText('3 AC')).toBeInTheDocument();
    expect(screen.getByText('1 AC')).toBeInTheDocument();
    expect(screen.getByText('₹ 825')).toBeInTheDocument();
    expect(screen.getByText('₹ 1825')).toBeInTheDocument();
  });
});
