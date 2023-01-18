import React from 'react';
import Grid from '@mui/material/Grid';
import './Provider.css';
import { Typography } from '@mui/material';

const Provider = ({ provider }) => (
  <Grid container paddingBottom={1} display="flex">
    {provider?.descriptor?.images && provider?.descriptor?.images.length > 0 && (
      <Grid item xs={1} paddingLeft={1} alignItems="flex-start">
        <img height={48} width={48} src={provider?.descriptor?.images[0]} alt="header-icon" />
      </Grid>
    )}
    <Grid item xs={11} display="flex" alignItems="center">
      <Typography variant="h6" gutterBottom>
        {provider.descriptor.name}
      </Typography>
    </Grid>
  </Grid>
);

export default Provider;
