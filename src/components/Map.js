import {
  DirectionsRenderer, DirectionsService, GoogleMap, MarkerF,
} from '@react-google-maps/api';
import React, { useState } from 'react';
import './Map.css';

const DirectionsMap = ({
  responseMap, directionsCallBack, origin, destination,
}) => (
  <>
    {origin !== '' && destination !== '' && (
    <DirectionsService
      options={{
        destination,
        origin,
        travelMode: 'DRIVING',
      }}
      callback={directionsCallBack}
    />
    )}
    {responseMap != null && <DirectionsRenderer options={{ directions: responseMap }} />}
  </>
);
const Map = ({
  openPanel, showMarker, originLocation, destinationLocation,
}) => {
  const origin = originLocation?.display;
  const destination = destinationLocation?.display;
  const [responseMap, setResponseMap] = useState(null);
  const [isResponse, setIsResponse] = useState(false);
  const mapContainerStyle = {
    height: (!openPanel && '800px') || '400px',
    width: '100%',
  };
  const originLocationLatLong = originLocation?.latLong;
  const center = {
    lat: Number(originLocationLatLong.split(',')[0]),
    lng: Number(originLocationLatLong.split(',')[1]),
  };

  const position = {
    lat: Number(originLocationLatLong.split(',')[0]),
    lng: Number(originLocationLatLong.split(',')[1]),
  };
  const directionsCallBack = (response) => {
    if (isResponse === false && response != null && response.status === 'OK') {
      setResponseMap(response);
      setIsResponse(true);
    }
  };

  return (
    <GoogleMap
      id="marker-example"
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={center}
    >
      {showMarker ? (
        <MarkerF
          position={position}
          visible
        />
      ) : (
        <DirectionsMap
          responseMap={responseMap}
          directionsCallBack={directionsCallBack}
          origin={origin}
          destination={destination}
        />
      )}

    </GoogleMap>
  );
};

export default Map;
