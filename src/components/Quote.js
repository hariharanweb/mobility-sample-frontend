import * as React from 'react';
import Typography from '@mui/material/Typography';
import {
  Grid, FormControl, Button, List, ListItem, ListItemText, IconButton, InputAdornment, TextField,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import './Quote.css';
import Provider from './Provider';
import './Item.css';

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

const QuoteProvider = ({ bookingInformation }) => (
  <>
    <Grid container className="quote-container">

      <Grid
        item
        xs={2}
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
        xs={2}
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

      <Grid
        item
        xs={3}
        alignItems="center"
        justifyContent="center"
        display="flex"
      >

        <FormControl sx={{ px: 10 }} variant="filled">
          <Button variant="contained">Confirm and Proceed</Button>
        </FormControl>

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
        <TextField
          fullWidth
          sx={{ m: 1 }}
          variant="standard"
          value="name"
          className="locationSearch-textbox"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                >
                  <CancelIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          sx={{ m: 1 }}
          variant="standard"
          value="name"
          className="locationSearch-textbox"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                >
                  <CancelIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          sx={{ m: 1 }}
          variant="standard"
          value="name"
          className="locationSearch-textbox"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                >
                  <CancelIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>

  </>
);

export default Quote;
