import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import './DateTime.css';
import { TextField } from '@mui/material';

const DateTime = ({ setDateTime }) => {
  const [value, setValue] = useState(new Date().toISOString());

  const onChange = () => {
    setValue(value);
    setDateTime(value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDateTimePicker
        label="Date Time"
        inputFormat="MM/DD/YYYY hh:mm"
        value={value}
        // setDateTime{value}
        onChange={onChange}
        fullWidth
        className="date-picker"
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DateTime;
