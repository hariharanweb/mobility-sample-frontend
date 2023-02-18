/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Api from '../api/Api';
import ContextBuilder from '../utilities/ContextBuilder';
import Status from '../components/Status';

const StatusScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [statusResults, setStatusResults] = useState([]);
  const [statusResultsLoaded, setstatusResultsLoaded] = useState(false);
  const location = useLocation();
  const { message_id } = location.state;
  const onTrackVehicle = async () => {
    const sampleContext = ContextBuilder.getContext('track', statusResults[0]?.context?.bpp_uri, statusResults[0]?.context?.transaction_id);
    const data = {
      context: {
        ...sampleContext,
        bpp_id: statusResults[0]?.context?.bpp_id,
      },
      message: {
        order: {
          id: statusResults[0]?.message?.order?.id,
        },
      },
    };
    const response = await Api.post('/track', data);
    if (response.message_id) {
      navigate('/track', { state: { ...response } });
    }
  };

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
    <Grid paddingY={10} container>
      <Grid item xs={12}>
        <Status vehicleStatus={statusResults} onTrackVehicle={onTrackVehicle} />
      </Grid>
    </Grid>
  );
  const gotoHome = () => {
    navigate('/', { state: {} });
  };
  return (
    <div>
      {loading ? <Loader /> : displayTrack()}
    </div>
  );
};

export default StatusScreen;
