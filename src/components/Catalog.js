import React from 'react';
import _ from 'lodash';
import './Catalog.css';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Item from './Item';
import Items from './Items';

const providerItems = (items, categories, onSelectJourney) => {
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
      />
    );
  });
  const individualItems = itemsWithoutHierarchy.map((item) => (
    <Item
      isParent={false}
      item={item}
      onSelectJourney={onSelectJourney}
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
    <Grid container paddingY={2}>
      {provider.descriptor.images && provider.descriptor.images.length > 0 && (
        <Grid item xs={1} className="catalog-image">
          <img height={48} width={48} src={provider.descriptor.images[0]} alt="header-icon" />
        </Grid>
      )}
      <Grid item xs={11} display="flex" alignItems="center" paddingLeft={6}>
        <Typography variant="h6" gutterBottom>
          {provider.descriptor.name}
        </Typography>
      </Grid>
    </Grid>
    {providerItems(provider.items, provider.categories, onSelectJourney)}
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
