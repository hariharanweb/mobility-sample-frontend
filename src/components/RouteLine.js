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
import { Grid } from '@mui/material';

const CustomStepIcon = () => (
  <Grid display='flex' flexDirection='row' alignItems='center'>
    <CircleIcon 
      color="disabled"
    />
  </Grid>
);

const RouteLine = ({
  routeDetail,
}) => {
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
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <Grid>
      <Stepper orientation="vertical">
        <Step key={routeDetail.startLocation.descriptor.name} className="start-end-station">
          <StepLabel StepIconComponent={CustomStepIcon}>
            <Grid display='flex' marginTop="9px" color="rgba(0, 0, 0, 0.6)">
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
        {/*  eslint-disable-next-line react/jsx-props-no-spreading */}
        <Step {...getToggleProps()}>
          {isExpanded ? (
            <Grid display="flex" paddingLeft="17%">
              <p className="show-station-details">Hide stops</p>
              <ExpandLessIcon className="show-station-icon" />
            </Grid>
          ) : (
            <Grid display="flex" paddingLeft="17%">
              <p className="show-station-details">
                Show
                {' '}
                {routeDetail.stops.length}
                {' '}
                stops
              </p>
              <ExpandMoreIcon className="show-station-icon" />
            </Grid>
          )}
        </Step>
        <Divider variant="inset" />
        {/*  eslint-disable-next-line react/jsx-props-no-spreading */}
        <Grid {...getCollapseProps()}>

          <Grid className="content">
            {routeDetail.stops.map((stop) => (

              <Step key={stop.descriptor.name}>
                <Grid display='flex'>
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
        </Grid>
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
