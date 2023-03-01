import React, { useState } from 'react';
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Grid } from '@mui/material';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import './FilterSection.css';
import { styled } from '@mui/material/styles';

const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
  '&.Mui-selected, &.Mui-selected:hover': {
    color: 'white',
    backgroundColor: selectedColor,
  },
}));

const FilterSection = ({ openPanel, setProvider }) => {
  const [enable, setEnable] = useState(null);
  const handleAlignment = (event, newAlignment) => {
    setEnable(newAlignment);
    setProvider(newAlignment);
    console.log(`provider:${newAlignment}`);
  };

  const style = {
    borderRadius: '20px',
    borderColor: '#327B18',
    width: '94px',
    height: '39px',
  };

  return (
    <Grid className="filter-icon" paddingTop={openPanel ? 2 : 3}>
      <ToggleButtonGroup exclusive color="primary" value={enable} onChange={handleAlignment} className="filter-options">
        <ToggleButton value="cabs" style={style} selectedColor="#327B18">
          <DirectionsCarFilledIcon />
          {' '}
          Cabs
        </ToggleButton>
        <ToggleButton value="trains" style={style} selectedColor="#327B18">
          <DirectionsSubwayIcon />
          Trains
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};

export default FilterSection;
