import React from 'react';
import TravelClass from './TravelClass';
import './TravelClassList.css';

const TravelClassList = ({ travelClassList }) => (
  <div className="travelClassList-scrollmenu">
    {travelClassList.map((travelClass) => (
      <TravelClass travelClass={travelClass} />
    ))}
  </div>
);

export default TravelClassList;
