import {
  Grid, Step, StepLabel, Stepper,
} from '@mui/material';
import NearMeIcon from '@mui/icons-material/NearMe';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';
import styled from '@emotion/styled';
import './LocationTracer.css';

const ColorlibStepIconRoot = styled('div')(({ ownerState }) => ({
  backgroundColor: '#F5EAEA',
  zIndex: 1,
  color: '#9D2F2F',
  width: '28px',
  height: '28px',
  top: '437px',
  left: '20px',
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  ...(ownerState.active && {
    backgroundImage:
          '#1976d2',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    fontWeight: 'bold',
  }),
  ...(ownerState.completed && {
    backgroundImage:
          '#1976d2',
    fontWeight: 'bold',
  }),
}));

function ColorlibStepIcon(props) {
  const {
    active, completed, className, icon,
  } = props;

  const icons = {
    1: <LocationOnIcon fontSize="14px" />,
    2: <NearMeIcon fontSize="12px" />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
}
function ColorlibStepDotIcon(props) {
  const {
    icon,
  } = props;

  const icons = {
    1: '/FromLocation.png',
    2: 'ToLocation.png',
  };

  return (
    <img className="LocationTracer-locationDot" src={icons[String(icon)]} alt="locationPoints" />
  );
}
const LocationTracer = ({ locationMap, isSearchResult }) => {
  const activeStep = [1];
  return (
    <Grid container paddingX="5%" paddingTop="5%">
      <Stepper activeStep={activeStep} orientation="vertical">
        {locationMap.map((step) => (
          <Step key={step.location}>
            {isSearchResult ? (
              <StepLabel
                StepIconComponent={ColorlibStepDotIcon}
              >
                {step.location}
              </StepLabel>
            ) : (
              <StepLabel
                StepIconComponent={ColorlibStepIcon}
              >
                {step.location}
              </StepLabel>
            )}

          </Step>
        ))}
      </Stepper>
    </Grid>
  );
};
export default LocationTracer;
