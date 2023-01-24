import { Button, Grid } from '@mui/material';
import React from 'react';
import './Track.css';

const Status = () => (
  <Grid container paddingX={4}>
    <Grid container className="track-with-border" display="flex">
      <Grid
        item
        xs={4}
        alignItems="center"
        justifyContent="left"
        display="flex"
        marginLeft={4}
      >
        <h3>Your order status is: </h3>
      </Grid>
    </Grid>
    <Button
      fullWidth
      variant="contained"
      sx={{ my: 2 }}
    >
      Track
    </Button>
  </Grid>
);

export default Status;
