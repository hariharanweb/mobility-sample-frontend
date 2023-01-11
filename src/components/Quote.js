import * as React from 'react';
import Typography from '@mui/material/Typography';
import {
  Button, FormControl, List, ListItem, ListItemText,
} from '@mui/material';
import './Quote.css';
import Grid from '@mui/material/Grid';

const Quote = ({ bookingInformation }) => (
  <Grid sx={{
    maxWidth: 400,
    flexGrow: 1,
  }}
  >
    <Typography
      variant="h6"
      textAlign="center"
      fontSize="2em"
    >
      Booking Details
    </Typography>
    <Grid sx={{ px: 10 }}>
      <img src={bookingInformation[0]?.message?.order?.provider?.descriptor?.images[0]} alt="vehicle-img" className="select-vehicle-icon" />
    </Grid>
    <Typography
      variant="h6"
      display="block"
      gutterBottom
      textAlign="center"
      fontSize="1.5em"
    >
      Taxi Fare Breakup
    </Typography>
    <Grid sx={{ px: 5 }}>
      <List>
        {bookingInformation[0]?.message?.order?.quote?.breakup.map((product) => (
          <ListItem key={product.name}>
            <ListItemText primary={product.title} />
            <Typography variant="body2">
              {' '}
              ₹
              {' '}
              {product?.price?.value}
            </Typography>
          </ListItem>
        ))}

        <ListItem>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ₹
            {bookingInformation[0]?.message?.order?.quote?.price?.value}
          </Typography>
        </ListItem>
      </List>
      <FormControl sx={{ px: 10 }} variant="filled">
        <Button variant="contained">Tap To Proceed</Button>
      </FormControl>
    </Grid>
  </Grid>
);

export default Quote;
