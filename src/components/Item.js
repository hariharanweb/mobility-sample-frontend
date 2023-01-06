import './Item.css';
import Grid from '@mui/material/Grid';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Item = ({ item, onSelectJourney }) => {
  const onSelect = () => {
    onSelectJourney(item);
  };
  return (
    <Grid container className="item-container">
      <Grid
        item
        xs={2}
        alignItems="center"
        justifyContent="left"
        display="flex"
        paddingLeft={2}
      >
        <img
          height={32}
          width={32}
          src={item.descriptor.images[0]}
          alt="taxi-icon"
        />
      </Grid>
      <Grid
        item
        xs={4}
        alignItems="center"
        justifyContent="left"
        display="flex"
        paddingLeft={2}
      >
        <Typography variant="h6" gutterBottom>
          {item.descriptor.name}
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        alignItems="center"
        justifyContent="left"
        display="flex"
      >
        <Typography variant="body2" gutterBottom>
          ₹&nbsp;
          {item.price.value}
        </Typography>
      </Grid>
      <Grid
        item
        xs={3}
        alignItems="center"
        justifyContent="center"
        display="flex"
        marginX={1}
      >
        <Typography variant="subtitle2" gutterBottom>
          <Button onClick={onSelect} variant="contained">
            Select
          </Button>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Item;
