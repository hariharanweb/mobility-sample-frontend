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
  onItemSelect,
  selectedItemId,
  isSelectedProvider,
) => {
  const isSelected = isSelectedProvider && selectedItemId === item.id;
  return (
    <Item
      item={item}
      onItemSelect={onItemSelect}
      category={category}
      isParent={false}
      isSelected={isSelected}
    />
  );
};

const Items = ({
  parentItem, categories, items, onItemSelect, selectedItemId, isSelectedProvider,
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
            onItemSelect,
            selectedItemId,
            isSelectedProvider,
          )
        );
      })}
    </AccordionDetails>
  </Accordion>
);

export default Items;
