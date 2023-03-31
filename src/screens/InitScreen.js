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
import Panel from '../components/Panel';
import Map from '../components/Map';

const InitScreen = ({ isMapsLoaded }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [initResults, setInitResults] = useState([]);
  const [initResultsLoaded, setInitResultsLoaded] = useState(false);
  const location = useLocation();
  const [openPanel, setOpenPanel] = useState(true);
  const toggleDrawer = () => {
    setOpenPanel(true);
  };
  const closeDrawer = () => {
    setOpenPanel(false);
  };
  const { message_id, locations } = location.state;
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
        <Payment onConfirmPayment={onConfirmJourney} initResults={initResults} />
      </Grid>
    </Grid>
  );
  const gotoHome = () => {
    navigate('/', { state: {} });
  };
  return (
    <>
      <Header onBackClick={gotoHome} />
      {isMapsLoaded
        && (
        <Map
          openPanel={openPanel}
          showMarker={false}
          destinationLocation={locations.destinationLocation}
          originLocation={locations.originLocation}
        />
        )}
      {loading
        ? (
          <Loader
            isLoaded={isMapsLoaded}
            destinationLocation={locations.destinationLocation}
            originLocation={locations.originLocation}
          />
        ) : (
          <Panel
            panelChildren={displayPaymentMode()}
            open={openPanel}
            toggleDrawer={toggleDrawer}
            closeDrawer={closeDrawer}
            openDrawerHeight="350px"
            isPullerPresent={false}
          />
        )}
      <Footer />
    </>
  );
};

export default InitScreen;
