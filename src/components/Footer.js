import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <Grid item>
      <Typography
        variant="body2"
        paddingLeft={1}
        justifyContent="flex-end"
        color="#1976e9"
        align="center"
      >
        Open-source license
        <br />
        <b>Powered by Thoughtworks</b>
      </Typography>
    </Grid>
  </div>
);

export default Footer;
