import React from 'react';
import moment from 'moment';
import Typography from '@mui/material/Typography';
import './Time.css';

const formattedTime = (time) => moment(time).format('hh:mm');

const Time = ({ time }) => (
  <>
    {!!time.duration && (
    <Typography variant="subtitle2" gutterBottom>
        {time.duration}
    </Typography>
    )}
    {!!time.range && (
    <Typography variant="body1" gutterBottom style={{ fontSize: 'small', fontWeight: '600' }}>
      {`${formattedTime(time.range.start)} - ${formattedTime(time.range.end)}`}
    </Typography>
    )}
  </>
);

export default Time;
