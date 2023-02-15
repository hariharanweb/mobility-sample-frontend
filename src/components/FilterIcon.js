import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import './FilterIcon.css';

const style = {
  borderRadius: '20px', marginLeft: '45px', borderColor: '#1976e9',
};

const FilterIcon = () => (
  <Grid className="filter-icon">
    <ButtonGroup>
      <Button style={style}>
        <DirectionsCarFilledIcon />
        {' '}
        Cabs
      </Button>
      <Button style={style}>
        <DirectionsSubwayIcon />
        Trains
      </Button>
    </ButtonGroup>
  </Grid>
);

export default FilterIcon;
