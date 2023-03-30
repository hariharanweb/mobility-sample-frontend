import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import Item from './Item';
import Provider from './Provider';

const providerItems = (
  items,
  categories,
  onSelectJourney,
  provider,
  fulfillments,
  bppUrl,
  selectedItemId,
  selectedProviderId,
  selectedTravelClassId,
  onTravelClassSelect,
) => {
  const handleOnClick = (itemSelected, travelClassItem, isItemSelected) => {
    onSelectJourney(itemSelected, provider, fulfillments, bppUrl, isItemSelected);
    onTravelClassSelect(itemSelected, travelClassItem, isItemSelected);
  };
  return items.map((item) => {
    const isSelected = provider.id === selectedProviderId && selectedItemId === item.id;
    return (
      <Grid container direction="column" key={item.id}>
        <Grid item>
          <Item
            item={item}
            onItemSelect={handleOnClick}
            isSelected={!item.travelClass && isSelected}
            selectedTravelClassId={selectedTravelClassId}
          />
        </Grid>
        <Grid item marginX="-1em">
          <Divider variant="middle" />
        </Grid>
      </Grid>
    );
  });
};

const Catalog = ({
  catalog,
  onSelectJourney,
  bppUrl,
  selectedItemId,
  selectedProviderId,
  selectedTravelClassId,
  onTravelClassSelect,
}) => {
  const bppProviders = catalog['bpp/providers'];
  const fulfillments = catalog['bpp/fulfillments'];
  return (
    <div>
      {bppProviders.map((provider) => (
        <Grid container key={provider.id}>
          <Provider provider={provider} />
          {providerItems(
            provider.items,
            provider.categories,
            onSelectJourney,
            provider,
            fulfillments,
            bppUrl,
            selectedItemId,
            selectedProviderId,
            selectedTravelClassId,
            onTravelClassSelect,
          )}
        </Grid>
      ))}
    </div>
  );
};

export default Catalog;
