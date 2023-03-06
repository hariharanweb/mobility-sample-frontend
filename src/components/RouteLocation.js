import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import RouteStops from './RouteStops';

const RouteLocation = ({ step }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical">
        <Step
          key={step}

        >
          <Divider variant="inset" />
          <StepLabel>{step.startLocation.descriptor.name}</StepLabel>
          <Divider variant="inset" />
          <StepContent>
            <Typography>{step.routeName}</Typography>
            <ListItemButton onClick={handleClick}>
              <p>
                Duration :
                {step.stops.length}
                {' '}
                stops : Platform 1
                {' '}
              </p>
              <ListItemText primary={step.description} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <RouteStops step={step} />
                </ListItemButton>
              </List>
            </Collapse>
          </StepContent>
        </Step>

        <Step key={step}>
          <Divider variant="inset" />
          <StepLabel>{step.endLocation.descriptor.name}</StepLabel>
          <Divider variant="inset" />
        </Step>
      </Stepper>
    </Box>
  );
};

export default RouteLocation;
