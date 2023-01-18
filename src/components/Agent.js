import React from 'react';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Typography from '@mui/material/Typography';

const Agent = ({ agent }) => (
  <Grid container alignItems="center" border="1px solid grey" borderRadius="0.75em" justifyContent="space-evenly">
    <Grid item>
      <AccountCircleIcon />
    </Grid>
    <Grid item paddingLeft={2}>
      <Typography variant="h6">
        {agent.name}
      </Typography>
    </Grid>
    <Grid item paddingLeft={1}>
      <a href={`tel://${agent.phone}`}>
        <LocalPhoneIcon />
      </a>
    </Grid>
    <Grid item paddingLeft={1}>
      <Typography variant="body2">
        {agent.phone}
      </Typography>
    </Grid>
  </Grid>
);

export default Agent;
