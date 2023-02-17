import React from 'react';
import './Map.css';

const Mapper = ({ bppUrl, bppId }) => {
  const url = `${bppUrl}/tracking`;
  if (bppId === 'sample_mobility_bpp_cabs') {
    return (
      <div className="map">
        <iframe
          title="myFrame"
          src={url}
          width="100%"
          height="100%"
          aria-hidden="false"
        />
      </div>
    );
  }
  if (bppId === 'sample_mobility_bpp_trains') {
    return <div />;
  }
  return (
    <div className="no_map">
      Map here
    </div>
  );
};

export default Mapper;
