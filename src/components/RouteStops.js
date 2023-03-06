import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CircleIcon from '@mui/icons-material/Circle';

const CustomStepIcon = () => (
  <div>
    <CircleIcon sx={{
      color: '#bdbdbd',
      borderRadius: '50%',
      backgroundColor: '#bdbdbd',
    }}
    />
  </div>
);

const RouteStops = ({ step }) => (
  <Box sx={{ maxWidth: 400 }}>
    <Stepper orientation="vertical">
      {step.stops.map((stop) => (
        <Step key={step} sx={{ borderColor: step.routeName.replace(/ .*/, ''), borderWidth: 5 }}>

          <StepLabel StepIconComponent={CustomStepIcon}>
            {stop.descriptor.name}
          </StepLabel>

        </Step>
      ))}
    </Stepper>
  </Box>
);

export default RouteStops;
