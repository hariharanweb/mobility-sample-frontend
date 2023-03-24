import React from 'react';

import { Box, Typography, Grid } from '@mui/material';
import {
  Train,
  AccessTimeOutlined,
  DirectionsCarOutlined,
  CurrencyRupeeOutlined,
} from '@mui/icons-material';

import TravelClassList from './TravelClassList';
import Price from './Price';
import Time from './Time';
import './Item.css';

const Item = ({
  item,
  isSelected,
  selectedTravelClassId,
  onItemSelect,
  fareCategoryList,
}) => {
  const onSelect = (travelClassItem, isTravelClassSelected) => {
    if (!item.travelClass) {
      onItemSelect(item, null, !isSelected);
    } else {
      onItemSelect(item, travelClassItem, isTravelClassSelected);
    }
  };

  return (
    <>
      <Grid
        container
        onClick={onSelect}
        key={item.id}
        backgroundColor={isSelected ? 'rgba(50, 123, 24, 0.1)' : 'white'}
        justifyContent="space-around"
        alignItems="center"
        paddingY={1}
      >
        {item.descriptor.images && item.descriptor.images.length > 0 ? (
          <Grid
            item
            alignItems="center"
            display="flex"
            marginRight={1}
          >
            <img height={32} width={32} src={item.descriptor.images[0]} alt="item-icon" />
          </Grid>
        ) : (
          <Grid
            item
            alignItems="center"
            display="flex"
            marginRight={1}
          >
            <Train className="train-icon" />
          </Grid>
        )}
        {item.time && (
          <Grid
            item
            alignItems="center"
            display="flex"
          >
            <Grid container direction="column">
              <Grid item>
                <Typography variant="body1" color="grey" fontSize="small">
                  <AccessTimeOutlined
                    style={{ fontSize: 'small', marginRight: '3px', color: 'grey' }}
                  />
                  Ride
                </Typography>
              </Grid>
              <Grid item>
                <Time time={item.time} />
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid
          item
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Grid
            container
            justifyContent="center"
            display="flex"
            direction="column"
          >
            <Typography variant="body1" color="grey" fontSize="small">
              <DirectionsCarOutlined
                style={{
                  fontSize: 'small',
                  marginRight: '3px',
                  color: 'grey',
                }}
              />
              Vehicle
            </Typography>
            <Typography variant="body1" fontSize="small" fontWeight="500" paddingLeft="1px">
              {item.descriptor.name}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
        >
          <Grid
            container
            justifyContent="center"
            display="flex"
            direction="column"
          >
            <Typography color="grey" fontSize="small" variant="body1">
              <CurrencyRupeeOutlined style={{ fontSize: 'small', marginRight: '3px', color: 'grey' }} />
              Fare
            </Typography>
            <Price price={item.price} variant="medium" />
          </Grid>
        </Grid>
      </Grid>
      {item.travelClass && (
        <Box>
          <TravelClassList
            selectedTravelClassId={selectedTravelClassId}
            travelClassList={item.travelClass}
            onTravelClassSelect={onSelect}
            fareCategoryList={fareCategoryList}
          />
        </Box>
      )}
    </>
  );
};
export default Item;
