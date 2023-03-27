import React from 'react';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import Item from './Item';
import '@testing-library/jest-dom';

describe('Item', () => {
  let item;
  beforeEach(() => {
    item = {
      id: 'Bake_SEDAN_ID',
      fulfillment_id: 'Bake_SEDAN_FULFILLMENT_ID',
      descriptor: {
        name: 'Sedan',
        code: 'SEDAN_TAXI',
        images: [
          'https://cdn.iconscout.com/icon/premium/png-256-thumb/sedan-car-469131.png',
        ],
      },
      price: {
        currency: 'INR',
        value: '111',
      },
      category_id: 'Bake_TAXI_SEDAN',
      time: {
        duration: '45m',
      },
    };
  });

  it('Should display item image', () => {
    render(<Item item={item} />);
    expect(screen.getByAltText('item-icon')).toBeInTheDocument();
  });
  it('Should not display item image if not present', () => {
    const itemWithoutImage = {
      ...item,
      descriptor: {
        ...item.descriptor,
        images: null,
      },
    };
    render(<Item item={itemWithoutImage} />);
    expect(screen.queryByAltText('item-icon')).not.toBeInTheDocument();
  });

  it('Should display time', () => {
    render(<Item item={item} />);
    expect(screen.getByText('45m')).toBeInTheDocument();
  });

  it('Should not display time if not available', () => {
    const itemWithoutTime = {
      ...item,
      time: null,
    };
    render(<Item item={itemWithoutTime} />);
    expect(screen.queryByText('45m')).not.toBeInTheDocument();
  });

  it('Should display Vehicle', () => {
    render(<Item item={item} />);
    expect(screen.queryByText('Vehicle')).toBeInTheDocument();
    expect(screen.queryByText('Sedan')).toBeInTheDocument();
  });

  it('Should display Fare', () => {
    render(<Item item={item} />);
    expect(screen.queryByText('Fare')).toBeInTheDocument();
    expect(screen.getByText('₹111')).toBeInTheDocument();
  });

  it('Should select item on click', () => {
    const onItemSelect = jest.fn();
    render(<Item
      item={item}
      onItemSelect={onItemSelect}
      isSelected={false}
    />);
    fireEvent.click(screen.queryByText('Fare'));
    expect(onItemSelect).toHaveBeenCalledWith(item, null, true);
  });
  it('Should unselect item on click', () => {
    const onItemSelect = jest.fn();
    render(<Item
      item={item}
      onItemSelect={onItemSelect}
      isSelected
    />);
    fireEvent.click(screen.queryByText('Fare'));
    expect(onItemSelect).toHaveBeenCalledWith(item, null, false);
  });
});
