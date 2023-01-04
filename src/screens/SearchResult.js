/* eslint camelcase: 0 */
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Api from '../api/Api';
import Catalog from '../components/Catalog';
import Loader from '../components/Loader';
import ContextBuilder from '../utilities/ContextBuilder';

const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { message_id } = location.state;
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingJourney, setLoadingJourney] = useState(false);
  const getSearchResult = useCallback(async () => {
    const result = await Api.get('search', { message_id });
    if (result && result.length > 0) {
      const catalogs = result.map((r) => r.message.catalog);
      setSearchResults(catalogs);
      setLoading(false);
    }
  }, [message_id]);

  useEffect(() => {
    if (loading) {
      Api.poll(getSearchResult, 3, 1500);
    }
  }, [getSearchResult, loading]);

  const onSelectJourney = async () => {
    setLoadingJourney(true);
    const data = {
      context: ContextBuilder.getContext('select'),
      message: {
        order: {
          items: [
            {
              id: searchResults[0]?.bpp_providers[0]?.items[0]?.id,
              fulfillment_id:
                searchResults[0]?.bpp_providers[0]?.items[0]?.fulfillment_id,
              descriptor:
                searchResults[0]?.bpp_providers[0]?.items[0]?.descriptor,
              price: searchResults[0]?.bpp_providers[0]?.items[0]?.price,
              category_id:
                searchResults[0]?.bpp_providers[0]?.items[0]?.category_id,
              tags: searchResults[0]?.bpp_providers[0]?.items[0]?.tags,
            },
          ],
        },
      },
    };
    const response = await Api.post('/select', data);
    if (response.message_id) {
      navigate('/quote', { state: { ...response } });
    }
  };
  const displayCatalogs = () => (
    <Grid container>
      <Typography variant="h4" gutterBottom paddingX={4} paddingY={1}>
        Search Results
      </Typography>
      <Grid item xs={12}>
        {searchResults.map((catalog) => (
          <Catalog
            catalog={catalog}
            loadingJourney={loadingJourney}
            onSelectJourney={onSelectJourney}
          />
        ))}
      </Grid>
    </Grid>
  );
  return loading ? <Loader /> : displayCatalogs();
};

export default SearchResult;
