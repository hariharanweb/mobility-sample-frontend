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
  width: '105px',
  height: '4px',
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: '5px',
  position: 'absolute',
  top: '19px',
  left: '127px',
}));

function Panel(props) {
  const {
    panelChildren, open, toggleDrawer, openDrawerHeight, drawerHeight, panelHeight, isPullerPresent,
  } = props;
  const drawerBleeding = drawerHeight || 50;
  const height = panelHeight || '100%';
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
        variant="persistent"
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
          height={height}
          sx={{
            top: -drawerBleeding,
          }}
        >
          {isPullerPresent ? <Puller /> : null}
          {panelChildren}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

export default Panel;
