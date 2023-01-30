/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Api from '../api/Api';
import Status from '../components/Status';

const StatusScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [statusResults, setStatusResults] = useState([]);
  const [statusResultsLoaded, setstatusResultsLoaded] = useState(false);
  const location = useLocation();
  const { message_id } = location.state;

  const getStatusResult = useCallback(async () => {
    if (!statusResultsLoaded) {
      const result = await Api.get('status', { message_id });
      if (result && result.length > 0) {
        setStatusResults(result);
        setLoading(false);
        setstatusResultsLoaded(true);
      }
    }
  }, [message_id]);
  useEffect(() => {
    if (loading) {
      Api.poll(getStatusResult, 3, 2000);
    }
  }, [getStatusResult, loading]);

  const displayTrack = () => (
    <Grid container>
      <Grid item xs={12}>
        <Status vehicleStatus={statusResults} />
      </Grid>
    </Grid>
  );
  const gotoHome = () => {
    navigate('/', { state: {} });
  };
  return (
    <>
      <Header title="Status" onBackClick={gotoHome} />
      {loading ? <Loader /> : displayTrack()}
    </>
  );
};

export default StatusScreen;
