import MyLocationIcon from '@mui/icons-material/MyLocation';
import { IconButton } from '@mui/material';
import React from 'react';
import './MyLocationButton.css';

const MyLocationButton = ({ onPanLocation }) => (
  <IconButton color="white" className="myLocationButton-locationIconButton" onClick={onPanLocation} sx={{ py: 15 }}>
    <MyLocationIcon className="myLocationButton-locationIcon" fontSize="30px" color="white" />

  </IconButton>
);

export default MyLocationButton;
