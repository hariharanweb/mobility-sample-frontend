import React from 'react';
import FilterSection from './FilterSection';

export default {
  title: 'FilterSection',
  component: FilterSection,
};

const onCategoryChange = () => {};

export const Primary = () => (
  <FilterSection
    category={undefined}
    onCategoryChange={onCategoryChange}
  />
);
export const CabsSelected = () => (
  <FilterSection
    category="cabs"
    onCategoryChange={onCategoryChange}
  />
);
export const TrainsSelected = () => (
  <FilterSection
    category="trains"
    onCategoryChange={onCategoryChange}
  />
);
