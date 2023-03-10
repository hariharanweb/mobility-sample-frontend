import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CircleIcon from '@mui/icons-material/Circle';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './RouteDetail.css';
import moment from 'moment';
import { Grid, Typography } from '@mui/material';

const CustomStepIcon = (stopTimings, isStop) => (
  <Grid display="flex" flexDirection="row" alignItems="center">
    {isStop && (
      <Typography variant="body2" paddingRight="0.2em" className="show-station-details">
        {moment(stopTimings).format('HH:mm')}
      </Typography>
    )}
    <CircleIcon
      fontSize="inherit"
      color="disabled"
    />
  </Grid>
);

const RouteDetail = ({ routeDetail }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Grid>
      <Stepper orientation="vertical">
        <Step key={routeDetail.startLocation.descriptor.name} className="start-end-station">
          <StepLabel StepIconComponent={() => CustomStepIcon(null, false)}>
            <Grid display="flex" color="#00000099">
              <b>
                {routeDetail.startLocation.descriptor.name}
              </b>
            </Grid>
          </StepLabel>
        </Step>
        <Divider variant="inset" />
        <Grid onClick={handleClick} display="flex" paddingLeft="20%">
          {open ? (
            <Grid display="flex" marginY="1em">
              <Typography variant="subtitle2" className="show-station-details">Hide stops</Typography>
              <ExpandLess className="show-station-icon" />
            </Grid>
          ) : (
            <Grid display="flex" marginY="1em">
              <Typography variant="subtitle2" className="show-station-details">
                Show
                {' '}
                {routeDetail.stops.length}
                {' '}
                stops
              </Typography>
              <ExpandMore className="show-station-icon" />
            </Grid>
          )}
        </Grid>
        <Divider variant="inset" />
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Grid className="content">
            {routeDetail.stops.map((stop) => (
              <Step key={stop.descriptor.name}>
                <Grid display="flex">
                  <StepLabel StepIconComponent={() => CustomStepIcon(stop.time.timestamp, true)}>
                    {stop.descriptor.name}
                  </StepLabel>
                </Grid>
              </Step>
            ))}
          </Grid>
        </Collapse>
        <Step key={routeDetail.endLocation.descriptor.name} className="start-end-station">
          <StepLabel StepIconComponent={() => CustomStepIcon(null, false)}>
            <b>{routeDetail.endLocation.descriptor.name}</b>
          </StepLabel>
        </Step>
      </Stepper>
    </Grid>
  );
};
export default RouteDetail;
