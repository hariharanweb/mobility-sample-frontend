import React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import './Panel.css';
import { grey } from '@mui/material/colors';

const Puller = styled(Box)(() => ({
  width: '25%',
  height: '4px',
  borderRadius: '1em',
  position: 'absolute',
  top: '1em',
  left: '36%',
  backgroundColor: grey[400],
}));

const Panel = ({
  panelChildren,
  open,
  toggleDrawer,
  openDrawerHeight, drawerHeight, panelHeight, isPullerPresent, isTransitionPresent,
}) => {
  const drawerBleeding = drawerHeight || 50;
  const height = panelHeight || '100%';
  return (
    <div className="panel-container">
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
        onClose={() => {}}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        allowSwipeInChildren
        ModalProps={{
          keepMounted: true,
        }}
        transitionDuration={isTransitionPresent ? { appear: 500, enter: 300, exit: 5 }
          : 5}
      >
        <Box
          className="panel-styledbox"
          paddingX={2}
          height={height}
          sx={{
            top: -drawerBleeding,
          }}
          backgroundColor="#fff"
        >
          {isPullerPresent ? <Puller /> : null}
          {panelChildren}
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default Panel;
