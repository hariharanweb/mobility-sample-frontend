import React from 'react';
import moment from 'moment';
import Typography from '@mui/material/Typography';

const formattedTime = (time) => moment(time).format('hh:mm');

const Time = ({ time }) => (
  <Typography variant="overline" gutterBottom>
    {formattedTime(time.range.start)}
    &nbsp;-&nbsp;
    {formattedTime(time.range.end)}
  </Typography>
);

export default Time;
