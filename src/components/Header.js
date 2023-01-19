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
    <Typography inline variant="h5" paddingLeft={1}>
      {title}
    </Typography>
    <Grid item marginLeft="auto" marginRight={4}>
      <Grid container display="flex" flexDirection="column" alignItems="flex-end">
        <Grid item>
          <img
            height={42}
            width={87}
            src="https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/res/daea2fs3n/image/upload/ondc-website/image--6-/1665032253.png"
            alt="ONDC"
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            paddingLeft={1}
            justifyContent="flex-end"
            color="grey"
            align="right"
          >
            Powered by ThoughtWorks
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default Header;
