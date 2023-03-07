import React from 'react';
// import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import StepContent from '@mui/material/StepContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import useCollapse from 'react-collapsed';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import './RouteLine.css';

const CustomStepIcon = () => (
  <div>
    <CircleIcon sx={{
      color: '#bdbdbd',
      borderRadius: '50%',
    }}
    />
  </div>
);
const RouteLine = ({ stops, startLocation, endLocation }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div>
      <Stepper orientation="vertical">
        <Step key={startLocation}>
          <StepLabel StepIconComponent={CustomStepIcon}><b style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{startLocation}</b></StepLabel>
        </Step>
        <Divider className='divider' variant="inset" />
        {/*  eslint-disable-next-line react/jsx-props-no-spreading */}
        <Step className="header" {...getToggleProps()}>
          {isExpanded ? (
            <div className="show-hide-station">
              <p className="show-station-text">Hide stops</p>
              <ExpandLessIcon className="show-station-icon" />
            </div>
          ) : (
            <div className="show-hide-station">
              <p className="show-station-text">
                Show
                {' '}
                {stops.length}
                {' '}
                stops
              </p>
              <ExpandMoreIcon className="show-station-icon" />
            </div>
          )}
        </Step>
        <Divider className='divider' variant="inset" />
        {/*  eslint-disable-next-line react/jsx-props-no-spreading */}
        <div {...getCollapseProps()}>
          <div className="content">
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
          </div>
        </div>

        <Step key={endLocation}>
          <StepLabel StepIconComponent={CustomStepIcon}>
            <b>{endLocation}</b>
          </StepLabel>

        </Step>
      </Stepper>
    </div>
  );
};
export default RouteLine;
