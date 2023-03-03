import React from 'react';
// import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const RouteLine = () => {
  const steps = [
    {
      label: 'Station 1',
      description: 'Time',
    },
    {
      label: 'Station 2',
      description:
            '',
    },
    {
      label: 'Station 3',
      description: 'change here for yellow line',
    },
  ];

  //   const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div>
      <Stepper activeStep={0} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Change here for yellow line</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default RouteLine;
