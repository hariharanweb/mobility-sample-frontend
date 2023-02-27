import Grid from '@mui/material/Grid';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TrainIcon from '@mui/icons-material/Train';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import Price from './Price';
import Time from './Time';
import './Item.css';
import './Time.css';

const Item = ({
  item, category, isParent, onSelectJourney, provider, fulfillments, bppUrl,
}) => {
  const onSelect = () => {
    onSelectJourney(item, provider, fulfillments, bppUrl);
  };
  const containerStyle = isParent ? '' : 'item-with-border';
  return (
    <Grid container className={containerStyle} display="flex" gap={2}>
      { item.descriptor.images && item.descriptor.images.length > 0
        ? (
          <Grid
            item
            xs={1}
            alignItems="center"
            justifyContent="center"
            display="flex"
            paddingLeft={2}
            marginRight={1}
          >
            <img
              height={32}
              width={32}
              src={item.descriptor.images[0]}
              alt="taxi-icon"
            />
          </Grid>
        ) : (
          <TrainIcon className="train-icon" />
        )}
      {
        item.time
        && (
          <Grid
            item
            xs={2}
            alignItems="center"
            justifyContent="left"
            display="flex"
            marginLeft={1}
          >
            <div display="flex">
              <Typography style={{ color: 'grey', fontSize: 'small' }}>
                <AccessTimeOutlinedIcon className="icon" />
                Ride
              </Typography>
              <Typography style={{ fontSize: 'small', fontWeight: '600' }}>
                <Time time={item.time} />
              </Typography>
            </div>

          </Grid>
        )
      }

      <Grid
        item
        xs={2}
        alignItems="center"
        justifyContent="center"
        display="flex"
        // marginLeft={2}
      >
        {isParent
        && (
        <Typography variant="body1" style={{ fontSize: 'small', fontWeight: '600' }}>
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
          <div>
            <Typography variant="body1" style={{ color: 'grey', fontSize: 'small' }}>
              <DirectionsCarOutlinedIcon className="icon" />
              Vehicle
            </Typography>
            <Typography variant="subtitle2">
              {item.descriptor.name}
            </Typography>
          </div>
        )}
      </Grid>
      <Grid
        item
        xs={!isParent && !category ? 1 : 4}
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        <div>
          <Typography variant="body1" style={{ color: 'grey', fontSize: 'small' }}>
            <CurrencyRupeeOutlinedIcon style={{ fontSize: 'small', marginRight: '3px', color: 'grey' }} />
            Fare
          </Typography>
          <Typography variant="body1">
            <Price price={item.price} />
          </Typography>
        </div>

      </Grid>
      {!isParent && (
      <Grid
        item
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
