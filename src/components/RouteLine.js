import React from 'react';
// import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import StepContent from '@mui/material/StepContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const RouteLine = ({ stops, startLocation, endLocation }) => (
// console.log('stops here:');
// console.log(stops);
// console.log(startLocation);
// console.log(endLocation);
// const steps = [
//   {
//     label: 'Station 1',
//     description: 'Time',
//   },
//   {
//     label: 'Station 2',
//     description:
//           '',
//   },
//   {
//     label: 'Station 3',
//     description: 'change here for yellow line',
//   },
// ];

  //   const [activeStep, setActiveStep] = React.useState(0);
  <div>
    <Stepper activeStep={0} orientation="vertical">
      <Step key={startLocation}>
        <StepLabel>{startLocation}</StepLabel>

      </Step>

      {stops.map((stop, index) => (
        <Step key={stops[index]?.descriptor?.name}>
          <StepLabel>
            {stops[index]?.descriptor?.name}
          </StepLabel>
          {/* <StepContent>
              <Typography>{stops.description}</Typography>
            </StepContent> */}
        </Step>
      ))}
      <Step key={endLocation}>
        <StepLabel
          optional={
            <Typography variant="caption">Change here for yellow line</Typography>
              }
        >
          {endLocation}
        </StepLabel>
        {/* <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent> */}
      </Step>
    </Stepper>
  </div>
);
export default RouteLine;
