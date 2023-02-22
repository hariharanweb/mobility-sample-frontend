import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import Price from './Price';

const QuoteSummary = ({ bookingInformation }) => (
  <Grid container className="quote-container">
    <Grid
      item
      xs={3}
      alignItems="center"
      justifyContent="left"
      display="flex"
      paddingLeft={2}
    >
      {bookingInformation[0]?.message?.order?.items[0]?.descriptor?.images && (
        <img
          height={52}
          width={52}
          src={bookingInformation[0]?.message?.order?.items[0]?.descriptor?.images[0]}
          alt="vehicle-icon"
        />
      )}
    </Grid>
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
          27 mins
        </Typography>
      </div>
    </Grid>
    <Grid
      item
      xs={3.5}
      alignItems="center"
      justifyContent="left"
      display="flex"
      paddingLeft="7%"
      color="#000"
    >
      <div>
        <Typography variant="body1" style={{ color: 'grey' }}>
          <DirectionsCarOutlinedIcon style={{ fontSize: 'small', marginRight: '7px', color: 'grey' }} />
          Vehicle
        </Typography>
        <Typography variant="body1" style={{ fontSize: 'medium' }}>
          {bookingInformation[0]?.message?.order?.items[0]?.descriptor?.name}
        </Typography>
      </div>
    </Grid>
    <Grid
      item
      xs={2.5}
      alignItems="center"
      justifyContent="left"
      display="flex"
      paddingLeft="5%"
    >
      <div>
        <Typography variant="body1" style={{ color: 'grey' }}>
          <CurrencyRupeeOutlinedIcon style={{ fontSize: 'small', marginRight: '7px' }} />
          Fare
        </Typography>
        <Typography>
          <Price price={bookingInformation[0]?.message?.order?.quote?.price} />
        </Typography>
      </div>
    </Grid>

  </Grid>
);

export default QuoteSummary;
