import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import './DateTime.css';
import { TextField } from '@mui/material';

const DateTime = ({ dateTime, onDateTimeChange }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DesktopDateTimePicker
      label="Date Time"
      inputFormat="DD/MM/YYYY hh:mm"
      value={dateTime}
      onChange={onDateTimeChange}
      fullWidth
      className="date-picker"
        // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
);

export default DateTime;
