import './Item.css';
import Grid from '@mui/material/Grid';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Price from './Price';
import Time from './Time';

const Item = ({
  item, category, isParent, onSelectJourney, provider,
}) => {
  const onSelect = () => {
    onSelectJourney(item, provider);
  };
  const containerStyle = isParent ? '' : 'item-with-border';
  return (
    <Grid container className={containerStyle} display="flex">
      { item.descriptor.images && item.descriptor.images.length > 0
      && (
      <Grid
        item
        xs={1}
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
      )}
      <Grid
        item
        xs={4}
        alignItems="center"
        justifyContent="left"
        display="flex"
        paddingLeft={2}
      >
        {isParent
        && (
        <Typography variant="h6" gutterBottom>
          {item.descriptor.name}
        </Typography>
        )}
        {!isParent && category
        && (
        <Typography variant="h6" gutterBottom>
          {category}
        </Typography>
        )}
        {!isParent && !category
        && (
        <Typography variant="h6" gutterBottom>
          {item.descriptor.name}
        </Typography>
        )}
      </Grid>
      <Grid
        item
        xs={2}
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        <Price price={item.price} />
      </Grid>
      {
        item.time
        && (
        <Grid
          item
          xs={1}
          alignItems="center"
          justifyContent="left"
          display="flex"
        >
          <Time time={item.time} />
        </Grid>
        )
      }
      {!isParent && (
      <Grid
        item
        xs={3}
        alignItems="flex-end"
        justifyContent="flex-end"
        display="flex"
        marginX={1}
      >
        <Typography variant="subtitle2" gutterBottom>
          <Button onClick={onSelect} variant="contained">
            Select
          </Button>
        </Typography>
      </Grid>
      )}
    </Grid>
  );
};
export default Item;
