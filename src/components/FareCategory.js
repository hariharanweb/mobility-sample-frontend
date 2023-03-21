import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Price from './Price';

const FareCategory = ({ fareCategory }) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <Grid container paddingY="10px" backgroundColor="#ededed">
      <Grid item direction="column" textAlign="center" width="50%">
        <Typography>{fareCategory.fare_category_name}</Typography>
        <Price price={fareCategory.price} variant="small" />
      </Grid>
      <Grid item width="50%" textAlign="center" paddingY="6px">
        <ButtonGroup
          size="small"
          aria-label="small outlined button group"
          variant="contained"
          color="info"
        >
          <Button onClick={handleIncrement}>+</Button>
          <Button disabled variant="text" style={{ color: 'black' }}>
            {count}
          </Button>
          <Button onClick={handleDecrement}>-</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default FareCategory;
