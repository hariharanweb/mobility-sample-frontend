/* eslint camelcase: 0 */
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Quote from '../components/Quote';
import Api from '../api/Api';
import Loader from '../components/Loader';

const SelectJourney = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { message_id } = location.state;
  const [bookingInformationLoaded, setbookingInformationLoaded] = React.useState(false);
  const [bookingInformation, setbookingInformation] = React.useState({});
  const [loadingJourney, setLoadingJourney] = React.useState(true);

  const getSelectResult = React.useCallback(async () => {
    if (message_id && !bookingInformationLoaded) {
      const result = await Api.get('select', { message_id });
      if (result && result.length > 0) {
        setbookingInformationLoaded(true);
        setbookingInformation(result);
        setLoadingJourney(false);
      }
    }
  }, [bookingInformationLoaded, message_id]);
  const gotoHome = () => {
    navigate('/', { state: {} });
  };
  React.useEffect(() => {
    Api.poll(getSelectResult, 3, 1500);
  }, [getSelectResult, loadingJourney]);
  const displayQuote = () => (
    <Grid container>
      <Typography variant="h4" gutterBottom paddingX={4} paddingY={1}>
        <IconButton color="black" onClick={gotoHome}>
          <ArrowBackIosNewIcon fontSize="0.9em" />
        </IconButton>
        {' '}
        Booking Details
      </Typography>
      <Grid item xs={12}>
        <Quote
          bookingInformation={bookingInformation}
        />
      </Grid>
    </Grid>
  );
  return loadingJourney ? <Loader /> : displayQuote();
};
export default SelectJourney;
