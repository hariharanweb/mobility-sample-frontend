/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Header from '../components/Header';
import Api from '../api/Api';

const ConfirmScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [confirmResults, setConfirmResults] = useState([]);
  const [confirmResultsLoaded, setConfirmResultsLoaded] = useState(false);
  const location = useLocation();
  const { message_id } = location.state;
  const getConfirmResult = useCallback(async () => {
    if (!confirmResultsLoaded) {
      const result = await Api.get('confirm', { message_id });
      if (result && result.length > 0) {
        setConfirmResults(result);
        setLoading(false);
        setConfirmResultsLoaded(true);
      }
    }
  }, [message_id]);
  useEffect(() => {
    if (loading) {
      Api.poll(getConfirmResult, 2, 2000);
    }
  }, [getConfirmResult, loading]);
  const displayConfirmScreen = () => (
    <Grid container>
      <Grid item xs={12} />
    </Grid>
  );
  return (
    <>
      <Header title="Confirm Order" />
      {loading ? <Loader /> : displayConfirmScreen()}
    </>
  );
};

export default ConfirmScreen;
