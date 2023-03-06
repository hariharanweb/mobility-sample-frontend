import React, { useState } from 'react';
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import './FilterSection.css';
import { styled } from '@mui/material/styles';

const ToggleButton = styled(MuiToggleButton)(() => ({
  '&.Mui-selected, &.Mui-selected:hover': {
    color: 'white',
    backgroundColor: '#327B18',
  },
}));

const FilterSection = ({ openPanel, setCategory }) => {
  const [enable, setEnable] = useState(null);
  const handleCategory = (event, selectedCategory) => {
    setEnable(selectedCategory);
    setCategory(selectedCategory);
  };

  const style = {
    borderRadius: '3em',
    borderColor: '#327B18',
    textTransform: 'none',
  };

  return (
    <Grid className="filter-section" paddingTop={openPanel ? 2 : 3}>
      <ToggleButtonGroup exclusive color="primary" value={enable} onChange={handleCategory} className="toggle-button-group">
        <ToggleButton value="cabs" style={style}>
          <DirectionsCarFilledIcon color="primary" fontSize="small" />
          <Typography className="toggle-button-value" color="primary">Cabs</Typography>
        </ToggleButton>
        <ToggleButton value="trains" style={style}>
          <DirectionsSubwayIcon color="primary" fontSize="small" />
          <Typography className="toggle-button-value" color="primary">Trains</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};

export default FilterSection;
