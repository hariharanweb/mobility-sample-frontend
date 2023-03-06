import React from 'react';
// import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import StepContent from '@mui/material/StepContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';

const CustomStepIcon = () => (
  <div>
    <CircleIcon sx={{
      color: '#bdbdbd',
      borderRadius: '50%',
    }}
    />
  </div>
);
const RouteLine = ({ stops, startLocation, endLocation }) => (
  <div>
    <Stepper orientation="vertical">
      <Step key={startLocation}>
        <StepLabel StepIconComponent={CustomStepIcon}><b style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{startLocation}</b></StepLabel>
      </Step>

      {stops.map((stop, index) => (
        <Step key={stops[index]?.descriptor?.name}>
          <StepLabel StepIconComponent={CustomStepIcon}>
            {stops[index]?.descriptor?.name}
          </StepLabel>
          {/* <StepContent>
              <Typography>{stops.description}</Typography>
            </StepContent> */}
        </Step>
      ))}
      <Step key={endLocation}>
        <StepLabel StepIconComponent={CustomStepIcon}>
          <b>{endLocation}</b>
        </StepLabel>

      </Step>
    </Stepper>
  </div>
);
export default RouteLine;
