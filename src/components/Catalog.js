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
  setSelectedTravelClassId,
) => {
  const handleOnClick = (itemSelected, travelClassItem, isItemSelected) => {
    itemSelected.travelClass && isItemSelected
      ? setSelectedTravelClassId(travelClassItem.travel_class_id)
      : setSelectedTravelClassId(null);

    onSelectJourney(
      itemSelected,
      provider,
      fulfillments,
      bppUrl,
      isItemSelected,
    );
  };

  const Items = items.map((item) => {
    const isSelected = provider.id === selectedProviderId
   && selectedItemId === item.id;

    return (
      <Item
        key={item.id}
        item={item}
        onItemSelect={handleOnClick}
        isSelected={!item.travelClass && isSelected}
        selectedTravelClassId={selectedTravelClassId}
      />
    );
  });
  return Items;
};

const Catalog = ({
  catalog,
  onSelectJourney,
  bppUrl,
  selectedItemId,
  selectedProviderId,
  selectedTravelClassId,
  setSelectedTravelClassId,
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
            setSelectedTravelClassId,
          )}
        </Grid>
      ))}
    </div>

  );
};

export default Catalog;
