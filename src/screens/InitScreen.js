/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useLocation, useNavigate } from 'react-router-dom';
import Payment from '../components/Payment';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Api from '../api/Api';
import ContextBuilder from '../utilities/ContextBuilder';
import Footer from '../components/Footer';

const InitScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [initResults, setInitResults] = useState([]);
  const [initResultsLoaded, setInitResultsLoaded] = useState(false);
  const location = useLocation();
  const { message_id } = location.state;
  const onConfirmJourney = async () => {
    const data = {
      context: ContextBuilder.getContext('confirm', initResults[0]?.context?.bpp_uri, initResults[0]?.context?.transaction_id),
      message: {
        order: {
          id: initResults[0]?.message?.order?.id,
          provider: {
            id: initResults[0]?.message?.order?.provider?.id,
          },
          items: initResults[0]?.message?.order?.items,
          fulfillment: initResults[0]?.message?.order?.provider?.fulfillments[0],
        },
      },
    };
    const response = await Api.post('/confirm', data);
    if (response.message_id) {
      navigate('/confirm', { state: { ...response } });
    }
  };
  const getInitResult = useCallback(async () => {
    if (!initResultsLoaded) {
      const result = await Api.get('init', { message_id });
      if (result && result.length > 0) {
        setInitResults(result);
        setLoading(false);
        setInitResultsLoaded(true);
      }
    }
  }, [message_id]);
  useEffect(() => {
    if (loading) {
      Api.poll(getInitResult, 2, 2000);
    }
  }, [getInitResult, loading]);
  const displayPaymentMode = () => (
    <Grid container>
      <Grid item xs={12}>
        <Payment onConfirmPayment={onConfirmJourney} />
      </Grid>
    </Grid>
  );
  const gotoHome = () => {
    navigate('/', { state: {} });
  };
  return (
    <>
      <Header onBackClick={gotoHome} />
      {loading ? <Loader /> : displayPaymentMode()}
      <Footer />
    </>
  );
};

export default InitScreen;
