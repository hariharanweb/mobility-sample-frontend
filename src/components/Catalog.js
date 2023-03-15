import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Item from './Item';
import Provider from './Provider';
import TravelClassList from './TravelClassList';

const providerItems = (
  items,
  categories,
  onSelectJourney,
  provider,
  fulfillments,
  bppUrl,
  selectedItemId,
  selectedProviderId,
) => {
  const handleItemSelect = (item, isSelected) => {
    onSelectJourney(
      item,
      provider,
      fulfillments,
      bppUrl,
      isSelected,
    );
  };
  const Items = items.map((item) => {
    const isSelected = provider.id === selectedProviderId
    && selectedItemId === item.id;
    const [selectedTravelClassId, setSelectedTravelClassId] = useState();
    const handleTravelClassSelect = (travelClass, isTravelClassSelected) => {
      if (isTravelClassSelected) {
        setSelectedTravelClassId(travelClass.travel_class_id);
      } else {
        setSelectedTravelClassId(null);
      }
      handleItemSelect(item, isTravelClassSelected);
    };
    return (
      <>
        <Item
          key={item.id}
          item={item}
          onItemSelect={handleItemSelect}
          isSelected={!item.travelClass && isSelected}
          isParent={item.travelClass}
        />
        {item?.travelClass && (
        <TravelClassList
          selectedTravelClassId={selectedTravelClassId}
          travelClassList={item?.travelClass}
          onTravelClassSelect={handleTravelClassSelect}
        />
        )}
      </>
    );
  });
  return (
    <>
      {' '}
      {Items}
    </>
  );
};

const bppProvider = (
  provider,
  onSelectJourney,
  fulfillments,
  bppUrl,
  selectedItemId,
  selectedProviderId,
) => (
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
    )}
  </Grid>
);

const Catalog = ({
  catalog,
  onSelectJourney,
  bppUrl,
  selectedItemId,
  selectedProviderId,
}) => {
  const bppProviders = catalog['bpp/providers'];
  const fulfillments = catalog['bpp/fulfillments'];
  return (
    <div>
      <div>
        {bppProviders && bppProviders.map((provider) => bppProvider(
          provider,
          onSelectJourney,
          fulfillments,
          bppUrl,
          selectedItemId,
          selectedProviderId,
        ))}
      </div>
    </div>
  );
};

export default Catalog;
