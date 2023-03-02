import React from 'react';
import _ from 'lodash';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Item from './Item';
import './Items.css';

const displayItem = (
  item,
  category,
  onSelectJourney,
  provider,
  fulfillments,
  bppUrl,
  keyState,
) => (
  <Item
    keyState={keyState}
    key={item.id}
    item={item}
    onSelectJourney={onSelectJourney}
    category={category}
    isParent={false}
    provider={provider}
    fulfillments={fulfillments}
    bppUrl={bppUrl}
  />
);

const Items = ({
  parentItem, categories, items, onSelectJourney, provider, fulfillments, bppUrl, keyState,
}) => (
  <Accordion className="items-accordian-container">
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Item
        key={parentItem.id}
        isParent
        item={parentItem}
        provider={provider}
        fulfillments={fulfillments}
        bppUrl={bppUrl}
      />
    </AccordionSummary>
    <AccordionDetails>
      {items.map((item) => {
        const category = _.find(categories, { id: item.category_id });
        const categoryDecription = category ? category.description : item.category_id;
        return (
          displayItem(
            item,
            categoryDecription,
            onSelectJourney,
            provider,
            fulfillments,
            bppUrl,
            keyState,
          )
        );
      })}
    </AccordionDetails>
  </Accordion>
);

export default Items;
