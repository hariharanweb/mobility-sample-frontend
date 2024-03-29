/* eslint camelcase: 0 */
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import _ from 'lodash';
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

const SearchResult = ({ isMapsLoaded }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openPanel, setOpenPanel] = useState(true);
  const toggleDrawer = () => {
    setOpenPanel(true);
  };
  const closeDrawer = () => {
    setOpenPanel(false);
  };
  const { message_id, locationMap, locations } = location.state;
  const [searchResults, setSearchResults] = useState([]);
  const [originLocation] = useState(locations.originLocation);
  const [destinationLocation] = useState(locations.destinationLocation);
  const [searchResultsLoaded, setSearchResultsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [info, setinfo] = useState({});
  const [selectedProviderId, setSelectedProviderId] = useState();
  const [selectedItemId, setSelectedItemId] = useState();
  const [selectedTravelClassId, setSelectedTravelClassId] = useState();
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
      context: ContextBuilder.getContext(
        'select',
        info?.bppUrl,
        searchResults[0].context.transaction_id,
      ),
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
              time: info?.item?.time,
            },
          ],
          fulfillment: info?.fulfillments,
        },
      },
    };
    const response = await Api.post('/select', data);
    response.provider = info?.provider;
    response.locations = locations;
    if (response.message_id) {
      navigate('/select', { state: { ...response } });
    }
  };

  const onSelectJourney = (item, provider, fulfillments, bppUrl, isSelected) => {
    if (isSelected) {
      setSelectedItemId(item.id);
      setSelectedProviderId(provider.id);
      setinfo({
        item,
        provider,
        fulfillments,
        bppUrl,
      });
    } else {
      setSelectedItemId(null);
      setSelectedProviderId(null);
    }
  };

  const onTravelClassSelect = (item, travelClassItem, isSelected) => {
    item.travelClass && isSelected
      ? setSelectedTravelClassId(travelClassItem.travel_class_id)
      : setSelectedTravelClassId(null);
  };

  const gotoHome = () => {
    navigate('/', { state: {} });
  };

  const displayCatalogs = () => (
    <Grid container>
      <LocationTracer locationMap={locationMap} isSearchResult />
      <Grid item xs={12}>
        {searchResults.map((bppProvider) => (
          <div key={bppProvider.context.bpp_id}>
            {_.has(bppProvider.message.catalog, 'bpp/providers') && (
              <Catalog
                catalog={bppProvider.message.catalog}
                bppUrl={bppProvider.context.bpp_uri}
                {...{
                  onSelectJourney,
                  selectedProviderId,
                  selectedItemId,
                  selectedTravelClassId,
                  onTravelClassSelect,
                }}
              />
            )}
          </div>
        ))}
        <Grid py={1}>
          <Button
            className="book-ride-button"
            variant="contained"
            fullWidth
            disabled={!selectedItemId && !selectedProviderId}
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
      {isMapsLoaded && (
      <Map
        openPanel={openPanel}
        showMarker={false}
        destinationLocation={destinationLocation}
        originLocation={originLocation}
      />
      )}
      {loading ? (
        <Loader />
      ) : (
        <Panel
          panelChildren={displayCatalogs()}
          open={openPanel}
          toggleDrawer={toggleDrawer}
          closeDrawer={closeDrawer}
          openDrawerHeight="435px"
          drawerHeight={70}
          panelHeight="112%"
          isPullerPresent={false}
        />
      )}
      <Footer />
    </>
  );
};

export default SearchResult;
