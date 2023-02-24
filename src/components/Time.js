import React from 'react';
import moment from 'moment';
import Typography from '@mui/material/Typography';
import './Time.css';

const formattedTime = (time) => moment(time).format('hh:mm');

const Time = ({ time }) => (
    <Typography className="time" variant="overline" gutterBottom>
      {formattedTime(time.range.start)}
    &nbsp;-&nbsp;
      {formattedTime(time.range.end)}
    </Typography>
);

export default Time;
