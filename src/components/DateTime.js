import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import './DateTime.css';
import { TextField } from '@mui/material';

const DateTime = () => {
  const [value, onChange] = useState(dayjs());
  const [timeValue, setTimeValue] = useState(dayjs('21:11:54'));

  const handleChange = (newValue) => {
    setTimeValue(newValue);
  };

  return (
    <div className="date-picker">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Time"
          value={timeValue}
          onChange={handleChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DateTime;
