import Grid from '@mui/material/Grid';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Price from './Price';
import Time from './Time';
import './Item.css';

const Item = ({
  item, category, isParent, onSelectJourney, provider, fulfillments, bppUrl,
}) => {
  const onSelect = () => {
    onSelectJourney(item, provider, fulfillments, bppUrl);
  };
  const containerStyle = isParent ? '' : 'item-with-border';
  return (
    <Grid container className={containerStyle} display="flex">
      { provider?.descriptor?.images && provider?.descriptor?.images.length > 0
      && (
      <Grid
        item
        xs={1}
        alignItems="center"
        justifyContent="center"
        display="flex"
        paddingLeft={2}
      >
        <img
          height={32}
          width={32}
          src={provider?.descriptor?.images[0]}
          alt="taxi-icon"
        />
      </Grid>
      )}
      <Grid
        item
        xs={2}
        alignItems="center"
        justifyContent="left"
        display="flex"
        marginLeft={4}
      >
        <div>
          <Typography variant="body1">
            <AccessTimeOutlinedIcon style={{ fontSize: 'small', marginRight: '7px', color: 'grey' }} />
            Ride
          </Typography>
          <Typography variant="body1">
            27min
          </Typography>
        </div>

      </Grid>
      <Grid
        item
        xs={2}
        alignItems="center"
        justifyContent="left"
        display="flex"
        marginLeft={2}
      >
        {isParent
        && (
        <Typography variant="body1">
          {item.descriptor.name}
        </Typography>
        )}
        {!isParent && category
        && (
        <Typography variant="body1">
          {category}
        </Typography>
        )}
        {!isParent && !category
        && (
        <Typography variant="body1">
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
          paddingX={1}
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
        className="select-button"
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
