import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Header = ({ title }) => (
  <Grid container paddingLeft={4} bgcolor="black" color="whitesmoke" paddingY={2} marginBottom={2}>
    <Typography variant="h5">
      {title}
    </Typography>
  </Grid>
);

export default Header;
