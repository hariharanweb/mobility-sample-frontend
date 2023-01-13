/* eslint camelcase: 0 */
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Api from '../api/Api';
import Catalog from '../components/Catalog';
import Loader from '../components/Loader';
import ContextBuilder from '../utilities/ContextBuilder';

const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { message_id } = location.state;
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsLoaded, setSearchResultsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bppUrl, setBppUrl] = useState('');
  const getSearchResult = useCallback(async () => {
    if (!searchResultsLoaded) {
      const result = await Api.get('search', { message_id });
      if (result && result.length > 0) {
        const catalogs = result.flatMap((r) => r.message.catalog);
        setBppUrl(result[0]?.context?.bpp_uri);
        setSearchResults(catalogs);
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

  const onSelectJourney = async (item, providerId) => {
    const data = {
      context: ContextBuilder.getContext('select', bppUrl),
      message: {
        order: {
          provider: {
            id: providerId,
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
        },
      },
    };
    const response = await Api.post('/select', data);
    if (response.message_id) {
      navigate('/select', { state: { ...response } });
    }
  };
  const gotoHome = () => {
    navigate('/', { state: {} });
  };
  const displayCatalogs = () => (
    <Grid container>
      <Typography variant="h4" gutterBottom paddingX={4} paddingY={1}>
        <IconButton color="black" onClick={gotoHome}>
          <ArrowBackIosNewIcon fontSize="0.9em" />
        </IconButton>
        {' '}
        Search Results
      </Typography>
      <Grid item xs={12}>
        {searchResults.map((catalog) => (
          <Catalog catalog={catalog} onSelectJourney={onSelectJourney} />
        ))}
      </Grid>
    </Grid>
  );
  return loading ? <Loader /> : displayCatalogs();
};

export default SearchResult;
