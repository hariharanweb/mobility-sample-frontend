import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FareCategoryList from './FareCategoryList';

describe('FareCategory', () => {
  const fareCategoryList = [
    {
      fare_category_id: 'ADULT_FARE',
      fare_category_name: 'Adult',
      price: {
        value: 825,
        currency: 'INR',
      },
    },
    {
      fare_category_id: 'CHILD_FARE',
      fare_category_name: 'Child',
      price: {
        value: 125,
        currency: 'INR',
      },
    },
  ];
  it('Should render farecategories', () => {
    render(<FareCategoryList fareCategoryList={fareCategoryList} />);
    expect(screen.getByText('Adult')).toBeInTheDocument();
    expect(screen.getByText('₹ 825')).toBeInTheDocument();
    expect(screen.getByText('Child')).toBeInTheDocument();
    expect(screen.getByText('₹ 125')).toBeInTheDocument();
  });
});
