/* eslint camelcase: 0 */
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Quote from '../components/Quote';
import Api from '../api/Api';
import Loader from '../components/Loader';

const SelectJourney = () => {
  const location = useLocation();
  const { message_id } = location.state;
  const [bookingInformationLoaded, setbookingInformationLoaded] = React.useState(false);
  const [bookingInformation, setbookingInformation] = React.useState({});
  const [loadingJourney, setLoadingJourney] = React.useState(true);

  const getSelectResult = React.useCallback(async () => {
    if (message_id && !bookingInformationLoaded) {
      const result = await Api.get('search', { message_id });
      if (result && result.length > 0) {
        setbookingInformationLoaded(true);
        setbookingInformation(result);
        setLoadingJourney(false);
      }
    }
  }, [bookingInformationLoaded, message_id]);
  React.useEffect(() => {
    Api.poll(getSelectResult, 3, 1500);
  }, [getSelectResult, loadingJourney]);
  return (
    loadingJourney ? <Loader /> : (
      <Quote
        bookingInformation={bookingInformation}
      />
    )
  );
};
export default SelectJourney;
