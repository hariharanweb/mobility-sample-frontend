import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  Button, FormControl, List, ListItem, ListItemText,
} from '@mui/material';
import './Quote.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Quote = ({ bookingInformation }) => (
  <Box sx={style}>
    <Typography
      variant="h6"
      textAlign="center"
      fontSize="2em"
    >
      Booking Confirmation

    </Typography>
    <div className="select-vehicle">
      <img src={bookingInformation[0]?.message?.quote?.items[0]?.descriptor?.images} alt="vehicle-img" className="quote-vehicleImg" />
    </div>
    <Typography
      variant="body1"
      display="block"
      gutterBottom
      bookingInformation-testid="booking-id"
    >
      Fulfillment id :
      {' '}
      {bookingInformation[0]?.message?.quote?.items[0]?.fulfillment_id}
    </Typography>
    <Typography
      variant="body1"
      display="block"
      gutterBottom
      bookingInformation-testid="booking-id"
    >
      Taxi id :
      {' '}
      {bookingInformation[0]?.message?.quote?.provider?.id}
    </Typography>
    <Typography variant="body1" display="block" gutterBottom>
      Taxi Name:
      {' '}
      {bookingInformation[0]?.message?.quote?.provider?.categories[0]?.descriptor?.name}
    </Typography>
    <Typography variant="body1" display="block" gutterBottom>
      Taxi Model:
      {' '}
      {
          bookingInformation[0]?.message?.quote?.provider?.items[0]?.tags?.NameOfModel
        }
    </Typography>
    <Typography
      variant="h6"
      display="block"
      gutterBottom
      textAlign="center"
      fontSize="1.5em"
    >
      Taxi Fare Breakup
    </Typography>
    <List disablePadding>
      {bookingInformation[0]?.message?.quote?.quote?.breakup.map((product) => (
        <ListItem key={product.name} sx={{ py: 0, px: 0 }}>
          <ListItemText primary={product.title} />
          <Typography variant="body2">
            {' '}
            ₹
            {' '}
            {product?.price?.value}
          </Typography>
        </ListItem>
      ))}

      <ListItem sx={{ py: 0, px: 0 }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          ₹
          {bookingInformation[0]?.message?.quote?.quote?.price?.value}
        </Typography>
      </ListItem>
    </List>
    <FormControl fullWidth sx={{ m: 1 }} variant="filled">
      <Button variant="contained">Click here to Confirm</Button>
    </FormControl>
  </Box>
);

export default Quote;
