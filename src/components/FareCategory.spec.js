import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FareCategory from './FareCategory';

describe('FareCategory', () => {
  const fareCategory = {
    fare_category_id: 'ADULT_FARE',
    fare_category_name: 'Adult',
    price: {
      value: 825,
      currency: 'INR',
    },
  };
  it('Should display fare category name', () => {
    render(<FareCategory fareCategory={fareCategory} />);
    expect(screen.getByText('Adult')).toBeInTheDocument();
  });

  it('Should display fare category price', () => {
    render(<FareCategory fareCategory={fareCategory} />);
    expect(screen.getByText('₹ 825')).toBeInTheDocument();
  });

  it('Should increment the count', () => {
    const onChange = jest.fn();
    render(
      <FareCategory
        fareCategory={fareCategory}
        onFareCategoryChange={onChange}
      />,
    );
    fireEvent.click(screen.getByTestId('increment-button'));
    expect(onChange).toHaveBeenCalledWith('ADULT_FARE', 1);
    fireEvent.click(screen.getByTestId('increment-button'));
    expect(onChange).toHaveBeenCalledWith('ADULT_FARE', 2);
  });

  it('Should increment the count', () => {
    const onChange = jest.fn();
    render(
      <FareCategory
        fareCategory={fareCategory}
        onFareCategoryChange={onChange}
      />,
    );
    fireEvent.click(screen.getByTestId('increment-button'));
    fireEvent.click(screen.getByTestId('increment-button'));
    fireEvent.click(screen.getByTestId('decrement-button'));
    expect(onChange).toHaveBeenCalledWith('ADULT_FARE', 1);
    fireEvent.click(screen.getByTestId('decrement-button'));
    expect(onChange).toHaveBeenCalledWith('ADULT_FARE', 0);
  });
});
