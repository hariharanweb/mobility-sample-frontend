import React from 'react';
import './Map.css';

const Mapper = () => (
  <div className="map">
    <iframe
      title="myFrame"
      src="http://localhost:52616/tracking"
      width="100%"
      height="100%"
      frameBorder="0"
      aria-hidden="false"
    />
  </div>
);

export default Mapper;
