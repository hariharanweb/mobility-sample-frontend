import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const RouteLineSwitch2 = () => (
  <Card sx={{
    maxWidth: 355, marginLeft: '10%', backgroundColor: '#e0dfdc', marginTop: '2%', marginBottom: '2%',
  }}
  >

    <CardContent>
      <Typography variant="body2" color="text.secondary">
        Walk  (2 min)
        <p>Interchange here</p>
      </Typography>
    </CardContent>

  </Card>
);

export default RouteLineSwitch2;
