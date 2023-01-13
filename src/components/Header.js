import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Header = ({ title, onBackClick }) => (
  <Grid
    container
    paddingLeft={4}
    bgcolor="black"
    color="whitesmoke"
    paddingY={2}
    marginBottom={2}
    alignItems="center"
  >
    {onBackClick
    && (
    <IconButton color="inherit" onClick={onBackClick} size="small">
      <ArrowBackIosNewIcon fontSize="inherit" />
    </IconButton>
    )}
    <Typography variant="h5" paddingLeft={1}>
      {title}
    </Typography>
  </Grid>
);

export default Header;
