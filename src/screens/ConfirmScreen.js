/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Api from '../api/Api';
import Confirmation from '../components/Confirmation';
import ContextBuilder from '../utilities/ContextBuilder';

const ConfirmScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [confirmResults, setConfirmResults] = useState([]);
  const [confirmResultsLoaded, setConfirmResultsLoaded] = useState(false);
  const location = useLocation();
  const { message_id } = location.state;

  const onTrackVehicle = async () => {
    const sampleContext = ContextBuilder.getContext('track', confirmResults[0].context.bpp_uri, confirmResults[0].context.transaction_id);
    const data = {
      context: {
        ...sampleContext,
        bpp_id: confirmResults[0].context.bpp_id,
      },
      message: {
        order: {
          id: confirmResults[0].message.order.id,
        },
      },
    };
    const response = await Api.post('/track', data);
    if (response.message_id) {
      navigate('/track', { state: { ...response } });
    }
  };

  const onCheckStatus = async () => {
    const sampleContext = ContextBuilder.getContext('status', confirmResults[0].context.bpp_uri, confirmResults[0].context.transaction_id);
    const data = {
      context: {
        ...sampleContext,
        bpp_id: confirmResults[0].context.bpp_id,
      },
      message: {
        order: {
          id: confirmResults[0].message.order.id,
        },
      },
    };
    const response = await Api.post('/status', data);
    if (response.message_id) {
      navigate('/status', { state: { ...response } });
    }
  };

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
      <Confirmation
        details={confirmResults[0]}
        onTrackVehicle={onTrackVehicle}
        onCheckStatus={onCheckStatus}
      />
    </Grid>
  );
  return (
    <div>
      {loading ? <Loader /> : displayConfirmScreen()}
    </div>
  );
};

export default ConfirmScreen;
