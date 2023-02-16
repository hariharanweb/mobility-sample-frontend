/* eslint camelcase: 0 */
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Api from '../api/Api';
import Catalog from '../components/Catalog';
import Loader from '../components/Loader';
import ContextBuilder from '../utilities/ContextBuilder';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { message_id } = location.state;
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

  const displayCatalogs = () => (
    <Grid paddingY={10} container>
      <Grid item xs={12}>
        {searchResults.map((bppProvider) => (
          <Catalog
            catalog={bppProvider.message.catalog}
            onSelectJourney={onSelectJourney}
            bppUrl={bppProvider.context.bpp_uri}
            bppId={bppProvider.context.bpp_id}
          />
        ))}
      </Grid>
    </Grid>
  );
  return (
    <>
      <Header onBackClick={gotoHome} />
      {loading ? <Loader /> : displayCatalogs()}
      <Footer />
    </>
  );
};

export default SearchResult;
