/* eslint camelcase: 0 */
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Api from '../api/Api';
import Catalog from '../components/Catalog';
import ContextBuilder from '../utilities/ContextBuilder';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Panel from '../components/Panel';
import Map from '../components/Map';
import Loader from '../components/Loader';
import LocationTracer from '../components/LocationTracer';
import './SearchResult.css';

const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openPanel, setOpenPanel] = useState(true);
  const toggleDrawer = () => {
    setOpenPanel(true);
  };
  const closeDrawer = () => {
    setOpenPanel(false);
  };
  const { message_id, locationMap } = location.state;
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsLoaded, setSearchResultsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [buttonState, setButtonState] = useState(true);
  const [info, setinfo] = useState({});
  const getSearchResult = useCallback(async () => {
    if (!searchResultsLoaded) {
      const result = await Api.get('search', { message_id });
      if (result && result.length > 0) {
        setSearchResults(result);
        setLoading(false);
        setSearchResultsLoaded(true);
      }
    }
  }, [message_id]);

  useEffect(() => {
    if (loading) {
      Api.poll(getSearchResult, 4, 2000);
    }
  }, [getSearchResult, loading]);

  const onBookRide = async () => {
    const data = {
      context: ContextBuilder.getContext('select', info?.bppUrl, searchResults[0].context.transaction_id),
      message: {
        order: {
          provider: {
            id: info?.provider.id,
          },
          items: [
            {
              id: info?.item?.id,
              fulfillment_id: info?.item?.fulfillment_id,
              descriptor: info?.item?.descriptor,
              price: info?.item?.price,
              category_id: info?.item?.category_id,
            },
          ],
          fulfillment: info?.fulfillments,
        },
      },
    };
    const response = await Api.post('/select', data);
    response.provider = info?.provider;
    if (response.message_id) {
      navigate('/select', { state: { ...response } });
    }
  };

  const onSelectJourney = async (item, provider, fulfillments, bppUrl, buttonEnabled) => {
    setButtonState(!buttonEnabled);
    setinfo({
      item,
      provider,
      fulfillments,
      bppUrl,
    });
  };

  const gotoHome = () => {
    navigate('/', { state: {} });
  };

  const displayCatalogs = () => (
    <Grid container>
      <LocationTracer locationMap={locationMap} isSearchResult />
      <Grid item xs={12}>
        {searchResults.map((bppProvider) => (
          <div>
            <Catalog
              catalog={bppProvider.message.catalog}
              onSelectJourney={onSelectJourney}
              bppUrl={bppProvider.context.bpp_uri}
              bppId={bppProvider.context.bpp_id}
            />
          </div>
        ))}
        <Grid py={1}>
          <Button
            className="book-ride-button"
            variant="contained"
            fullWidth
            disabled={buttonState}
            onClick={onBookRide}
          >
            Book Ride
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <>
      <Header onBackClick={gotoHome} />
      {loading ? <Loader /> : (
        <>
          <Map
            bppUrl={searchResults.filter((item) => item?.context?.bpp_id === 'sample_mobility_bpp_cabs')[0]?.context?.bpp_uri}
            bppId="sample_mobility_bpp_cabs"
          />
          {' '}
          <Panel
            panelChildren={displayCatalogs()}
            open={openPanel}
            toggleDrawer={toggleDrawer}
            closeDrawer={closeDrawer}
            openDrawerHeight="428px"
          />
          {' '}

        </>
      )}
      <Footer />
    </>
  );
};

export default SearchResult;
