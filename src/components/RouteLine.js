import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CircleIcon from '@mui/icons-material/Circle';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './RouteLine.css';
import { Grid } from '@mui/material';

const CustomStepIcon = () => (
  <Grid display="flex" flexDirection="row" alignItems="center">
    <CircleIcon
      color="disabled"
    />
  </Grid>
);

const RouteLine = ({ routeDetail }) => {
  const [open, setOpen] = React.useState(false);

  const getFrequency = () => {
    const t1 = routeDetail.frequency[0].times[0];
    const t2 = routeDetail.frequency[0].times[1];
    const diffInHours = new Date(t2).getHours() - new Date(t1).getHours();
    const diffInMinutes = new Date(t2).getMinutes() - new Date(t1).getMinutes();
    if (diffInHours > 0 && diffInMinutes > 0) {
      return `${diffInHours} hour ${diffInMinutes} min`;
    } if (diffInHours > 0) {
      return `${diffInHours} hour`;
    }
    return `${diffInMinutes} min`;
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid>
      <Stepper orientation="vertical">
        <Step key={routeDetail.startLocation.descriptor.name} className="start-end-station">
          <StepLabel StepIconComponent={CustomStepIcon}>
            <Grid display="flex" color="rgba(0, 0, 0, 0.6)">
              <b>
                {routeDetail.startLocation.descriptor.name}
              </b>
              <Grid paddingLeft="30px" marginTop="0px" fontSize="0.8rem" className="show-station-details">
                every
                {' '}
                {getFrequency()}
              </Grid>
            </Grid>
          </StepLabel>
        </Step>
        <Divider variant="inset" />
        <Grid onClick={handleClick} display="flex" paddingLeft="21%">
        {open ? (
            <Grid display="flex">
              <p className="show-station-details">Hide stops</p>
              <ExpandLess className="show-station-icon" />
            </Grid>
          ) : (
            <Grid display="flex">
              <p className="show-station-details">
                Show
                {' '}
                {routeDetail.stops.length}
                {' '}
                stops
              </p>
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
                  <Grid paddingTop="10px" paddingRight="7px" className="show-station-details">
                    {(stop.time.timestamp).substring(11, 16)}
                  </Grid>
                  <StepLabel StepIconComponent={CustomStepIcon}>
                    {stop.descriptor.name}
                  </StepLabel>
                </Grid>
              </Step>
            ))}
          </Grid>
        </Collapse>
        <Step key={routeDetail.endLocation.descriptor.name} className="start-end-station">
          <StepLabel StepIconComponent={CustomStepIcon}>
            <b>{routeDetail.endLocation.descriptor.name}</b>
          </StepLabel>
        </Step>
      </Stepper>
    </Grid>
  );
};
export default RouteLine;
