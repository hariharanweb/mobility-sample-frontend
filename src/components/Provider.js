import React from 'react';
import Grid from '@mui/material/Grid';
import './Provider.css';
import { Typography } from '@mui/material';

const Provider = ({ provider }) => (
  <div>
    <Grid container paddingY={2}>
      {provider?.descriptor?.images && provider?.descriptor?.images.length > 0 && (
      <Grid item xs={2} className="provider-image">
        <img height={48} width={48} src={provider?.descriptor?.images[0]} alt="header-icon" />
      </Grid>
      )}
      <Grid item xs={9} display="flex" alignItems="center" paddingLeft={6}>
        <Typography variant="h6" gutterBottom>
          {provider.descriptor.name}
        </Typography>
      </Grid>
    </Grid>
  </div>
);

export default Provider;
