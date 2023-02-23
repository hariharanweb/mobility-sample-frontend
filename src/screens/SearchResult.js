/* eslint camelcase: 0 */
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Api from '../api/Api';
import Catalog from '../components/Catalog';
import ContextBuilder from '../utilities/ContextBuilder';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Panel from '../components/Panel';
import Map from '../components/Map';
import SearchResultLoader from '../components/SearchResultLoader';
import LocationTracer from '../components/LocationTracer';

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

  const onSelectJourney = async (item, provider, fulfillments, bppUrl) => {
    const data = {
      context: ContextBuilder.getContext('select', bppUrl, searchResults[0].context.transaction_id),
      message: {
        order: {
          provider: {
            id: provider.id,
          },
          items: [
            {
              id: item?.id,
              fulfillment_id: item?.fulfillment_id,
              descriptor: item?.descriptor,
              price: item?.price,
              category_id: item?.category_id,
            },
          ],
          fulfillment: fulfillments,
        },
      },
    };
    const response = await Api.post('/select', data);
    response.provider = provider;
    if (response.message_id) {
      navigate('/select', { state: { ...response } });
    }
  };
  const gotoHome = () => {
    navigate('/', { state: {} });
  };

  const drawerBleeding = 56;

  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
  }));

  const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
  }));

  const displayCatalogs = () => (
    <Grid container>
      <StyledBox
        sx={{
          position: 'absolute',
          top: -drawerBleeding,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          right: 0,
          left: 0,
        }}
      >
        <Puller />
        <Typography sx={{ color: 'text.secondary' }}>
          <LocationTracer locationMap={locationMap} isSearchResult />
        </Typography>
      </StyledBox>

      <Grid item xs={12} marginTop="12%">
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
      </Grid>
    </Grid>
  );

  return (
    <>
      <Header onBackClick={gotoHome} />
      {loading ? <SearchResultLoader locationMap={locationMap} /> : (
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
            openDrawerHeight="350px"
          />
          {' '}

        </>
      )}
      <Footer />
    </>
  );
};

export default SearchResult;
