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
import Status from '../components/Status';

const StatusScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [statusResults, setStatusResults] = useState([]);
  const [statusResultsLoaded, setstatusResultsLoaded] = useState(false);
  const location = useLocation();

  const displayTrack = () => (
    <Grid container>
      <Grid item xs={12}>
        <Status />
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
