import {
  DirectionsRenderer, DirectionsService, GoogleMap, MarkerF,
} from '@react-google-maps/api';
import React, { useState } from 'react';
import './Map.css';
import MyLocationButton from './MyLocationButton';

const DirectionsMap = ({
  responseMap, directionsCallBack, origin, destination,
}) => (
  <>
    {origin && destination && (
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
  openPanel,
  showMarker,
  originLocation,
  destinationLocation,
  onMapLoaded,
  onMyLocationClick,
}) => {
  const origin = originLocation?.display;
  const destination = destinationLocation?.display;
  const [responseMap, setResponseMap] = useState(null);
  const [isResponse, setIsResponse] = useState(false);
  const [isMapLoaded, setisMapLoaded] = useState(false);
  const mapContainerStyle = {
    height: (!openPanel && '750px') || '400px',
    width: '100%',
  };
  const directionsCallBack = (response) => {
    if (isResponse === false && response != null && response.status === 'OK') {
      setResponseMap(response);
      setIsResponse(true);
    }
  };
  const onMapLoad = () => {
    if (showMarker) {
      onMapLoaded(true);
      setisMapLoaded(true);
    }
  };
  const center = originLocation?.latLong ? {
    lat: Number(originLocation?.latLong?.split(',')[0]),
    lng: Number(originLocation?.latLong?.split(',')[1]),
  } : {
    lat: 12.929034984578037,
    lng: 77.62866251104393,
  };
  return (
    <GoogleMap
      id="marker-example"
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={center}
      onLoad={(mapLoaded) => onMapLoad(mapLoaded)}
    >
      <MyLocationButton onMyLocationClick={onMyLocationClick} />
      {showMarker ? (
        isMapLoaded && (
          <MarkerF
            position={{
              lat: Number(originLocation?.latLong.split(',')[0]),
              lng: Number(originLocation?.latLong.split(',')[1]),
            }}
            visible
          />
        )
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
