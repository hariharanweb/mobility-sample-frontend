/* eslint camelcase: 0 */
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import Quote from '../components/Quote';
import Api from '../api/Api';
import Loader from '../components/Loader';
import Header from '../components/Header';

const SelectJourney = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { message_id, provider } = location.state;
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

      <Grid item xs={12}>
        <Quote
          bookingInformation={bookingInformation}
          provider={provider}
        />
      </Grid>
    </Grid>
  );
  return (
    <>
      <Header title="Booking Details" onBackClick={gotoHome} />
      {loadingJourney ? <Loader /> : displayQuote()}
    </>
  );
};
export default SelectJourney;
