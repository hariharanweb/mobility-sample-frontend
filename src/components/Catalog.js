import React from 'react';
import _ from 'lodash';
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
  const itemsGroupedByParent = _.groupBy(_.filter(items, (item) => !!item.parent_item_id), 'parent_item_id');
  const itemsWithoutHierarchy = items.filter(
    (item) => _.keys(itemsGroupedByParent).indexOf(item.id) < 0 && !item.parent_item_id,
  );
  const individualItems = itemsWithoutHierarchy.map((item) => {
    const isSelected = provider.id === selectedProviderId
    && selectedItemId === item.id;
    return (
      <>
        <Item
          key={item.id}
          isParent={false}
          item={item}
          onItemSelect={handleItemSelect}
          isSelected={isSelected}
        />
        {item?.travelClass && <TravelClassList travelClassList={item?.travelClass} />}
      </>
    );
  });
  return (
    <>
      {' '}
      {individualItems}
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
