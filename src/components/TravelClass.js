import React from 'react';
import Price from './Price';
import './TravelClass.css';

const TravelClassDetails = ({ travelClassName, availability }) => (
  <div className="travelClass-leftGrid">
    <div className="travelClass-name">{travelClassName}</div>
    <div className="travelClass-availability">{availability}</div>
  </div>

);
const TravelClassPrice = ({ fareDetails }) => (
  <div className="travelClass-rightGrid">
    <Price price={fareDetails?.price} variant="small" />

  </div>

);
const TravelClass = ({ travelClass }) => (
  <div className="travelClass">
    <div className="travelClass-grid">
      <div className="travelClass-travelClassDetails">
        <TravelClassDetails
          travelClassName={travelClass?.travel_class_name}
          availability={travelClass?.availability}
        />
      </div>
      <div className="travelClass-travelClassSeperator">
        <div className="travelClass-seperator" />
      </div>
      <div className="travelClass-travelClassPrice">
        <TravelClassPrice fareDetails={travelClass?.fare_categories[0]} />
      </div>
    </div>
  </div>
);

export default TravelClass;
