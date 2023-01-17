import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import {
  Grid, Button, List, ListItem, ListItemText,
} from '@mui/material';
import './Quote.css';
import Provider from './Provider';
import './Item.css';
import InputField from './InputField';

const Quote = ({ bookingInformation, provider }) => (
  <Grid container paddingX={4}>
    <Grid container paddingY={2}>
      <Provider provider={provider} />
      <Grid item xs={11} display="flex" alignItems="center" paddingLeft={6}>
        <Typography variant="h6" gutterBottom>
          {bookingInformation[0]?.message?.order?.provider?.descriptor?.name}
        </Typography>
      </Grid>
    </Grid>
    <QuoteProvider bookingInformation={bookingInformation} />
  </Grid>
);

const QuoteProvider = ({ bookingInformation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatValue = (value) => value;
  return (
    <>
      <Grid container className="quote-container">

        <Grid
          item
          xs={3}
          alignItems="center"
          justifyContent="left"
          display="flex"
          paddingLeft={5}
        >
          {bookingInformation[0]?.message?.order?.items[0]?.descriptor?.images && (
          <img
            height={32}
            width={32}
            src={bookingInformation[0]?.message?.order?.items[0]?.descriptor?.images[0]}
            alt="vehicle-icon"
          />
          )}
        </Grid>
        <Grid
          item
          xs={4}
          alignItems="center"
          justifyContent="left"
          display="flex"
          paddingLeft={5}
        >
          <Typography variant="h6" gutterBottom>
            {bookingInformation[0]?.message?.order?.items[0]?.descriptor?.name}

          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          alignItems="center"
          justifyContent="left"
          display="flex"
          paddingLeft={2}
        >
          <Typography variant="body2" gutterBottom>

            ₹&nbsp;
            {bookingInformation[0]?.message?.order?.quote?.price?.value}

          </Typography>
        </Grid>

      </Grid>
      <Grid sx={{
        maxWidth: '100%',
        minWidth: '50%',
        flexGrow: 1,
      }}
      >
        <Typography
          variant="h6"
          fontSize="1.5em"
          textAlign="center"
        >
          Fare Breakup
        </Typography>
        <Grid
          className="quote-fare-breakup"
        >
          <List>
            {bookingInformation[0]?.message?.order?.quote?.breakup.map((product) => (
              <ListItem key={product.name}>
                <ListItemText primary={product.title} />
                <Typography>
                  {' '}
                  ₹
                  {' '}
                  {product?.price?.value}
                </Typography>
              </ListItem>
            ))}

            <ListItem>
              <ListItemText primary="Total" />
              <Typography sx={{ fontWeight: 700 }}>
                ₹
                {bookingInformation[0]?.message?.order?.quote?.price?.value}
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid sx={{

        maxWidth: '100%',
        flexGrow: 1,
        minWidth: '50%',
      }}
      >
        <Typography
          variant="h6"
          fontSize="1.5em"
          textAlign="center"
        >
          User Details
        </Typography>
        <Grid
          className="quote-fare-breakup"
        >
          <InputField pattern="[a-zA-Z]" label="name" value={name} setValue={setName} formatValueFunc={formatValue} />
          <InputField pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+[.]" label="email" value={email} setValue={setEmail} formatValueFunc={formatValue} />
          <InputField pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$" label="phone number" value={phoneNumber} setValue={setPhoneNumber} formatValueFunc={formatValue} />

        </Grid>
        <div
          className="quote-form-button"
        >
          <Button
            fullWidth
            variant="contained"
          >
            Confirm
          </Button>
        </div>
      </Grid>

    </>
  );
};

export default Quote;
