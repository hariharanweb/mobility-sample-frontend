import Grid from '@mui/material/Grid';
import React from 'react';
import Typography from '@mui/material/Typography';

import TrainIcon from '@mui/icons-material/Train';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
    const buttonEnabled = false;
    onSelectJourney(item, provider, fulfillments, bppUrl, buttonEnabled);
  };
  const containerStyle = isParent ? 'parent-item' : 'item-with-border';
  return (
    <Card sx={{ maxWidth: 600 }} className="cardStyle">
      <CardActionArea>
        <CardContent onClick={onSelect}>
          <Grid container className={containerStyle} display="flex" gap={2} sx={{ px: '10px', py: '23px', color: 'text.secondary' }}>
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
            xs={3}
            alignItems="center"
            justifyContent="left"
            display="flex"
            paddingLeft="7%"
            color="#000"
          >
            <div>
              <Typography variant="body1" style={{ color: 'grey' }}>
                <AccessTimeOutlinedIcon style={{ fontSize: 'small', marginRight: '7px', color: 'grey' }} />
                Ride
              </Typography>
              <Typography variant="body1" style={{ fontSize: 'medium' }}>
                <Time time={item.time} />
              </Typography>
            </div>
          </Grid>
        )
      }

            <Grid
              item
              xs={3.5}
              alignItems="center"
              justifyContent="left"
              display="flex"
              paddingLeft="7%"
              color="#000"
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
            <Typography variant="body1" style={{ color: 'grey' }}>
              <DirectionsCarOutlinedIcon style={{ fontSize: 'small', marginRight: '7px', color: 'grey' }} />
              Vehicle
            </Typography>
            <Typography variant="body1" style={{ fontSize: 'medium' }}>
              {item.descriptor.name}
            </Typography>
          </div>
        )}
            </Grid>
            <Grid
              item
              xs={1.5}
              alignItems="center"
              justifyContent="center"
              display="flex"
              paddingLeft="2%"
            >
              <div>
                <Typography variant="body1" style={{ color: 'grey' }}>
                  <CurrencyRupeeOutlinedIcon style={{ fontSize: 'small', marginRight: '3px', color: 'grey' }} />
                  Fare
                </Typography>
                <Typography variant="body1">
                  <Price price={item.price} />
                </Typography>
              </div>

            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default Item;
