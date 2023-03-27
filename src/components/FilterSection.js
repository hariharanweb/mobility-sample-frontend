import React from 'react';
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

const FilterSection = ({ category, onCategoryChange }) => {
  const handleCategory = (_, selectedCategory) => {
    onCategoryChange(selectedCategory);
  };

  const style = {
    borderRadius: '3em',
    borderColor: '#327B18',
    textTransform: 'none',
  };

  return (
    <Grid className="filter-section">
      <ToggleButtonGroup exclusive color="primary" value={category} onChange={handleCategory} className="toggle-button-group">
        <ToggleButton value="cabs" style={style} data-testid="cabs">
          <DirectionsCarFilledIcon color={category === 'cabs' ? 'white' : 'primary'} fontSize="small" />
          <Typography color={category === 'cabs' ? 'white' : 'primary'} paddingX="8px">Cabs</Typography>
        </ToggleButton>
        <ToggleButton value="trains" style={style} data-testid="trains">
          <DirectionsSubwayIcon color={category === 'trains' ? 'white' : 'primary'} fontSize="small" />
          <Typography color={category === 'trains' ? 'white' : 'primary'} paddingX="8px">Trains</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Grid>
  );
};

export default FilterSection;
