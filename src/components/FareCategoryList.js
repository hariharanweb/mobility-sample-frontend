import React from 'react';
import { Grid } from '@mui/material';
import FareCategory from './FareCategory';

const FareCategoryList = ({ fareCategoryList }) => (
  <Grid>
    {fareCategoryList.map((fareCategory) => (
      <Grid item paddingRight="1rem" key={fareCategory.fare_category_id}>
        <FareCategory fareCategory={fareCategory} />
      </Grid>
    ))}
  </Grid>
);

export default FareCategoryList;
