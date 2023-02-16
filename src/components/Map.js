import React from 'react';
import './Map.css';

// const LookUpBPPUrl = async () => {
//   const type = 'BPP';
//   const subscriberId = 'sample_mobility_bpp_cabs';
//   const request = JSON.stringify({
//     type,
//     subscriber_id: subscriberId,
//   });
//   const response = await Api.post('/lookup', request);
//   const responseJson = await response.json();
//   console.log(responseJson[0].subscriber_url);
//   return responseJson[0].subscriber_url;
// };

const Mapper = (bppUrl) => {
  const url = `${bppUrl}/tracking`;
  console.log(JSON.stringify(url));
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
};

export default Mapper;
