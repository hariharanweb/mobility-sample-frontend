/* eslint camelcase: 0 */
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import moment from 'moment';
import Quote from '../components/Quote';
import Api from '../api/Api';
import Loader from '../components/Loader';
import Header from '../components/Header';
import ContextBuilder from '../utilities/ContextBuilder';

const SelectJourney = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { message_id, provider } = location.state;
  const [bookingInformationLoaded, setbookingInformationLoaded] = React.useState(false);
  const [bookingInformation, setbookingInformation] = React.useState({});
  const [loadingJourney, setLoadingJourney] = React.useState(true);
  const onInitJourney = async (userDetails) => {
    const data = {
      context: ContextBuilder.getContext('select', bookingInformation[0]?.context?.bpp_uri),
      message: {
        order: {
          provider: bookingInformation[0]?.message?.order?.provider,
          items: bookingInformation[0]?.message?.order?.items,
          quote: bookingInformation[0]?.message?.order?.quote,
          billing: {
            name: userDetails?.name,
            email: userDetails?.email,
            phone: userDetails?.phone,
            created_at: moment().format(),
            updated_at: moment().format(),
          },
        },
      },
    };
    const response = await Api.post('/init', data);
    if (response.message_id) {
      navigate('/init', { state: { ...response } });
    }
  };
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
          onInitJourney={onInitJourney}
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
