import React, { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import './FilterSection.css';

const style = {
  borderRadius: '20px',
  marginLeft: '45px',
  borderColor: '#327B18',
};

const FilterSection = ({ openPanel }) => {
  const [enableCabs, setEnableCabs] = useState(false);
  const [buttonClassCabs, setButtonClassCabs] = useState('button');

  const [enableTrain, setEnableTrain] = useState(false);
  const [buttonClassTrain, setButtonClassTrain] = useState('button');

  const showCabs = () => {
    setEnableCabs(!enableCabs);
    setButtonClassCabs(enableCabs ? '' : 'clicked-button');
  };

  const showTrains = () => {
    setEnableTrain(!enableTrain);
    setButtonClassTrain(enableTrain ? '' : 'clicked-button');
  };

  return (
    <Grid className="filter-icon" paddingTop={openPanel ? 2 : 3}>
      <ButtonGroup>
        <Button style={style} onClick={showCabs} className={buttonClassCabs}>
          <DirectionsCarFilledIcon />
          {' '}
          Cabs
        </Button>
        <Button style={style} onClick={showTrains} className={buttonClassTrain}>
          <DirectionsSubwayIcon />
          Trains
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default FilterSection;
