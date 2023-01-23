import { Button, Grid } from '@mui/material';
import React from 'react';
import './Track.css';

const Track = () => (
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
        <h3>Click to track your order</h3>
      </Grid>
      <Grid
        item
        xs={4}
        alignItems="center"
        justifyContent="left"
        display="flex"
        marginLeft={2}
        marginRight={2}
      >
        <Button
          fullWidth
          variant="contained"
          sx={{ my: 2 }}
        >
          Track Vehicle
        </Button>
      </Grid>
    </Grid>
  </Grid>
);

export default Track;
