import React from 'react';
import _ from 'lodash';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Item from './Item';
import './Items.css';

const displayItem = (item, category, onSelectJourney, providerId) => (
  <Item
    key={item.id}
    item={item}
    onSelectJourney={onSelectJourney}
    category={category}
    isParent={false}
    providerId={providerId}
  />
);

const Items = ({
  parentItem, categories, items, onSelectJourney, providerId,
}) => (
  <Accordion className="items-accordian-container">
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Item
        isParent
        item={parentItem}
        providerId={providerId}
      />
    </AccordionSummary>
    <AccordionDetails>
      {items.map((item) => {
        const category = _.find(categories, { id: item.category_id });
        const categoryDecription = category ? category.description : item.category_id;
        return (
          displayItem(item, categoryDecription, onSelectJourney, providerId)
        );
      })}
    </AccordionDetails>
  </Accordion>
);

export default Items;
