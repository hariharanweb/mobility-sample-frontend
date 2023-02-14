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
import Track from '../components/Track';
import Footer from '../components/Footer';

const TrackScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [trackResults, setTrackResults] = useState([]);
  const { message_id } = location.state;
  const [trackResultsLoaded, setTrackResultsLoaded] = useState(false);

  const gotoHome = () => {
    navigate('/', { state: {} });
  };

  const getTrackResult = useCallback(async () => {
    if (!trackResultsLoaded) {
      const result = await Api.get('track', { message_id });
      if (result && result.length > 0) {
        setTrackResults(result);
        setLoading(false);
        setTrackResultsLoaded(true);
      }
    }
  }, [message_id]);
  useEffect(() => {
    if (loading) {
      Api.poll(getTrackResult, 3, 2000);
    }
  }, [getTrackResult, loading]);

  const displayTrack = () => (
    <Grid container>
      <Grid item xs={12}>
        <Track trackResult={trackResults} />
      </Grid>
    </Grid>
  );

  return (
    <>
      <Header onBackClick={gotoHome} />
      {loading ? <Loader /> : displayTrack()}
      <Footer />
    </>
  );
};

export default TrackScreen;
