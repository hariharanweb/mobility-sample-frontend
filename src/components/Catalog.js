import React from 'react';
import _ from 'lodash';
import Grid from '@mui/material/Grid';
import Item from './Item';
import Items from './Items';
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
) => {
  const handleItemSelect = (item) => {
    onSelectJourney(
      item,
      provider,
      fulfillments,
      bppUrl,
    );
  };
  const itemsGroupedByParent = _.groupBy(_.filter(items, (item) => !!item.parent_item_id), 'parent_item_id');
  const itemsWithoutHierarchy = items.filter(
    (item) => _.keys(itemsGroupedByParent).indexOf(item.id) < 0 && !item.parent_item_id,
  );
  const groupedItems = _.keys(itemsGroupedByParent).map((parentItemId) => {
    const parentItem = items.find((item) => item.id === parentItemId);
    const childItems = itemsGroupedByParent[parentItemId];
    const isSelectedProvider = provider.id === selectedProviderId;
    return (
      <Items
        parentItem={parentItem}
        items={childItems}
        categories={categories}
        onItemSelect={handleItemSelect}
        selectedItemId={selectedItemId}
        isSelectedProvider={isSelectedProvider}
      />
    );
  });
  const individualItems = itemsWithoutHierarchy.map((item) => {
    const isSelected = provider.id === selectedProviderId
    && selectedItemId === item.id;
    return (
      <Item
        key={item.id}
        isParent={false}
        item={item}
        onItemSelect={handleItemSelect}
        isSelected={isSelected}
      />
    );
  });
  return (
    <>
      {groupedItems}
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
