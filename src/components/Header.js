import React from 'react';
import { Grid, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = ({ onBackClick }) => (
  <Grid
    container
    paddingLeft={1}
    bgcolor="white"
    color="whitesmoke"
    paddingY={0.5}
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

    <Grid item marginLeft={2}>
      <img
        height={50}
        width={95}
        src="https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/res/daea2fs3n/image/upload/ondc-website/image--6-/1665032253.png"
        alt="ONDC"
      />
    </Grid>
    <Grid marginLeft="auto" marginRight={3}>

      <Grid>
        <AccountCircleIcon style={{ color: 'black', height: 35, width: 35 }} />
      </Grid>

    </Grid>
  </Grid>
);

export default Header;
