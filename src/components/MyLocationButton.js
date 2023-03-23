import MyLocationIcon from '@mui/icons-material/MyLocation';
import { IconButton } from '@mui/material';
import React from 'react';
import './MyLocationButton.css';

const MyLocationButton = ({ onMyLocationClick }) => (
  <IconButton color="white" className="myLocationButton-locationIconButton" onClick={onMyLocationClick} sx={{ py: 15 }}>
    <MyLocationIcon className="myLocationButton-locationIcon" fontSize="30px" color="white" />
  </IconButton>
);

export default MyLocationButton;
