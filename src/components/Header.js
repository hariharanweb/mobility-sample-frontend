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
    justify="space-between"
  >
    {onBackClick
    && (
    <IconButton color="inherit" onClick={onBackClick} size="small">
      <ArrowBackIosNewIcon fontSize="inherit" />
    </IconButton>
    )}
    <Typography inline variant="h5" paddingLeft={1}>
      {title}
    </Typography>
    <Grid item marginLeft="auto" marginRight={4}>
      <Typography
        variant="body2"
        paddingLeft={1}
        justifyContent="flex-end"
        color="grey"
        align="right"
      >
        Powered by ONDC
      </Typography>
    </Grid>
  </Grid>
);

export default Header;
