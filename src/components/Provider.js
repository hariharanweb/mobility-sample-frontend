import React from 'react';
import Grid from '@mui/material/Grid';
import './Provider.css';

const Provider = ({ provider }) => (
  <div>
    {provider.descriptor.images && provider.descriptor.images.length > 0 && (
      <Grid item xs={1} className="provider-image">
        <img height={48} width={48} src={provider.descriptor.images[0]} alt="header-icon" />
      </Grid>
    )}
  </div>
);

export default Provider;
