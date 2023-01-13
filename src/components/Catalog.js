import React from 'react';
import _ from 'lodash';
import Grid from '@mui/material/Grid';
import Item from './Item';
import Items from './Items';
import Provider from './Provider';

const providerItems = (items, categories, onSelectJourney, provider) => {
  const itemsGroupedByParent = _.groupBy(_.filter(items, (item) => !!item.parent_item_id), 'parent_item_id');
  const itemsWithoutHierarchy = items.filter(
    (item) => _.keys(itemsGroupedByParent).indexOf(item.id) < 0 && !item.parent_item_id,
  );
  const groupedItems = _.keys(itemsGroupedByParent).map((parentItemId) => {
    const parentItem = items.find((item) => item.id === parentItemId);
    const childItems = itemsGroupedByParent[parentItemId];
    return (
      <Items
        parentItem={parentItem}
        items={childItems}
        categories={categories}
        onSelectJourney={onSelectJourney}
        provider={provider}
      />
    );
  });
  const individualItems = itemsWithoutHierarchy.map((item) => (
    <Item
      isParent={false}
      item={item}
      onSelectJourney={onSelectJourney}
      provider={provider}
    />
  ));
  return (
    <>
      {groupedItems}
      {individualItems}
    </>
  );
};

const bppProvider = (provider, onSelectJourney) => (

  <Grid container paddingX={4} key={provider.id}>

    <Provider provider={provider} />
    {providerItems(provider.items, provider.categories, onSelectJourney, provider)}
  </Grid>
);

const Catalog = ({
  catalog,
  onSelectJourney,
}) => {
  const bppProviders = catalog['bpp/providers'];
  return (
    <div>
      {bppProviders && bppProviders.map((provider) => bppProvider(provider, onSelectJourney))}
    </div>
  );
};

export default Catalog;
