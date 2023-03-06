import * as React from 'react';
import Box from '@mui/material/Box';
import RouteLocation from './RouteLocation';

const RouteLine2 = ({ steps }) => (
  <Box sx={{ maxWidth: 400 }}>
    {/* <Stepper orientation="vertical"> */}
    {steps.map((step) => (
      <>
        <RouteLocation step={step} />
        {/* {index !== steps.length - 1 ? <RouteLineSwitch2 /> : null} */}
      </>
    ))}
    {/* </Stepper> */}
  </Box>
);

export default RouteLine2;
