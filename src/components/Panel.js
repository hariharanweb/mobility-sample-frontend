import React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Footer from './Footer';

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
  // const [open, setOpen] = React.useState(true);

  // const toggleDrawer = (newOpen) => () => {
  //   setOpen(newOpen);
  // };

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
      {/* <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box> */}
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
          height="15%"
          sx={{
            top: -40,
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
        <Footer />
      </SwipeableDrawer>
    </Root>
  );
}

export default Panel;
