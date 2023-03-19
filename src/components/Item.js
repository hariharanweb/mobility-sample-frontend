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
import './Time.css';

const Item = ({
  item,
  isSelected,
  selectedTravelClassId,
  onItemSelect,
}) => {
  const onSelect = (travelClassItem, isTravelClassSelected) => {
    if (!item.travelClass) {
      onItemSelect(item, null, !isSelected);
    } else {
      onItemSelect(item, travelClassItem, isTravelClassSelected);
    }
  };
  const containerStyle = 'item-with-border';
  return (
    <Box width={1}>
      <Grid
        container
        className={containerStyle}
        onClick={onSelect}
        key={item.id}
        backgroundColor={isSelected ? 'rgba(50, 123, 24, 0.1)' : 'white'}
      >
        {item.descriptor.images && item.descriptor.images.length > 0 ? (
          <Grid
            item
            xs={2}
            alignItems="center"
            display="flex"
            paddingLeft={2}
            marginRight={1}
            height="60px"
          >
            <img height={32} width={32} src={item.descriptor.images[0]} alt="taxi-icon" />
          </Grid>
        ) : (
          <Grid
            item
            xs={2}
            alignItems="center"
            display="flex"
            paddingLeft={2}
            marginRight={1}
            height="60px"
          >
            <Train className="train-icon" />
          </Grid>
        )}
        {item.time && (
        <Grid
          item
          xs={2.5}
          alignItems="center"
          display="flex"
          paddingLeft="4%"
          paddingBottom="5px"
          marginTop="6px"
          color="#000"
          height="60px"
          width="65px"
        >
          <div>
            <Typography variant="body1" style={{ color: 'grey', fontSize: 'small' }}>
              <AccessTimeOutlined
                style={{ fontSize: 'small', marginRight: '3px', color: 'grey' }}
              />
              Ride
            </Typography>
            <Typography variant="body1" style={{ fontSize: 'medium', paddingLeft: '3px' }}>
              <Time time={item.time} />
            </Typography>
          </div>
        </Grid>
        )}

        <Grid
          item
          xs={3.5}
          alignItems="center"
          justifyContent="center"
          display="flex"
          paddingLeft="4%"
          paddingRight="3%"
          paddingBottom="5px"
          color="#000"
          height="60px"
          width="90px"
        >
          <div
            style={{
              alignContent: 'center',
              marginLeft: '15px',
              paddingTop: '6px',
            }}
          >
            <Typography variant="body1" style={{ color: 'grey', fontSize: 'small' }}>
              <DirectionsCarOutlined
                style={{
                  fontSize: 'small',
                  marginRight: '2px',
                  color: 'grey',
                }}
              />
              Vehicle
            </Typography>
            <Typography
              variant="body1"
              style={{ fontSize: 'small', fontWeight: '500', paddingLeft: '1px' }}
            >
              {item.descriptor.name}
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={1.5}
          alignItems="center"
          display="flex"
          paddingTop="8px"
          paddingBottom="5px"
          paddingLeft="8%"
          height="70px"
        >
          <div>
            <Typography style={{ color: 'grey', fontSize: 'small' }}>
              <CurrencyRupeeOutlined style={{ fontSize: 'small', color: 'grey' }} />
              Fare
            </Typography>
            <Typography variant="body1" style={{ fontSize: 'small', paddingLeft: '5%' }}>
              <Price price={item.price} variant="medium" />
            </Typography>
          </div>
        </Grid>
      </Grid>
      ,
      {item.travelClass && (
      <Box>
        <TravelClassList
          selectedTravelClassId={selectedTravelClassId}
          travelClassList={item.travelClass}
          onTravelClassSelect={onSelect}
        />
      </Box>
      )}
    </Box>
  );
};
export default Item;
