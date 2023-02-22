import React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import './Panel.css';

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function Panel(props) {
  const {
    panelChildren, open, toggleDrawer, openDrawerHeight, drawerHeight,
  } = props;
  const drawerBleeding = drawerHeight || 50;
  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: openDrawerHeight,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onOpen={toggleDrawer}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        allowSwipeInChildren
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          className="panel-styledbox"
          paddingX={2}
          height="100%"
          sx={{
            top: -drawerBleeding,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>Search </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            height: '100%',
            overflow: 'auto',
          }}
        >
          {panelChildren}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

export default Panel;
