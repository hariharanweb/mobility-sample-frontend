import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import './DateTime.css';

const DateTime = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="date-picker">
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
};

export default DateTime;
