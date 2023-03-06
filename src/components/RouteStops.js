import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const RouteStops = ({ step }) => (
  <Box sx={{ maxWidth: 400 }}>
    <Stepper orientation="vertical">
      {step.stops.map((stop) => (
        <Step key={step}>

          <StepLabel>
            {stop.descriptor.name}
          </StepLabel>

        </Step>
      ))}
    </Stepper>
  </Box>
);

export default RouteStops;
