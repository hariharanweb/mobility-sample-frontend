import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import './DateTime.css';
import { TextField } from '@mui/material';

const DateTime = () => {
  const [value, onChange] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Date"
        inputFormat="MM/DD/YYYY"
        value={value}
        onChange={onChange}
        className="date-picker"
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(params) => <TextField {...params} />}
      />
      <TimePicker
        label="Time"
        value={value}
        onChange={onChange}
        className="date-picker"
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DateTime;
