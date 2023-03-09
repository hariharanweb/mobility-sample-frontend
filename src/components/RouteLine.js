import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CircleIcon from '@mui/icons-material/Circle';
import useCollapse from 'react-collapsed';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import './RouteLine.css';

const CustomStepIcon = () => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    {/* <div>{timeval}</div> */}
    <CircleIcon sx={{
      color: '#bdbdbd',
      borderRadius: '50%',
    }}
    />
  </div>
);

const RouteLine = ({
  routeDetail,
}) => {
  // console.log((stops[0].time.timestamp).substring(11, 16));

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div>
      <Stepper orientation="vertical">
        <Step key={routeDetail.startLocation.descriptor.name} className="start-end-station">
          <StepLabel StepIconComponent={CustomStepIcon}><b style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{routeDetail.startLocation.descriptor.name}</b></StepLabel>
        </Step>
        <Divider className="divider" variant="inset" />
        {/*  eslint-disable-next-line react/jsx-props-no-spreading */}
        <Step className="header" {...getToggleProps()}>
          {isExpanded ? (
            <div className="show-hide-station">
              <p className="show-station-details">Hide stops</p>
              <ExpandLessIcon className="show-station-icon" />
            </div>
          ) : (
            <div className="show-hide-station">
              <p className="show-station-details">
                Show
                {' '}
                {routeDetail.stops.length}
                {' '}
                stops
              </p>
              <ExpandMoreIcon className="show-station-icon" />
            </div>
          )}
        </Step>
        <Divider className="divider" variant="inset" />
        {/*  eslint-disable-next-line react/jsx-props-no-spreading */}
        <div {...getCollapseProps()}>

          <div className="content">
            {routeDetail.stops.map((stop) => (

              <Step key={stop.descriptor.name}>
                <div className="station-information">
                  <div className="station-timing show-station-details">
                    {(stop.time.timestamp).substring(11, 16)}
                  </div>
                  <StepLabel StepIconComponent={CustomStepIcon}>
                    {stop.descriptor.name}
                  </StepLabel>
                </div>
              </Step>
            ))}
          </div>
        </div>
        {/* <div className="start-end-station"> */}
        <Step key={routeDetail.endLocation.descriptor.name} className="start-end-station">
          <StepLabel StepIconComponent={CustomStepIcon}>
            <b>{routeDetail.endLocation.descriptor.name}</b>
          </StepLabel>

        </Step>
        {/* </div> */}
      </Stepper>
    </div>
  );
};
export default RouteLine;
