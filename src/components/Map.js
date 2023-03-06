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
  openPanel, showMarker, originLocation, destinationLocation, setOriginLocation, setisMapPresent,
}) => {
  const origin = originLocation?.display;
  const destination = destinationLocation?.display;
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const [responseMap, setResponseMap] = useState(null);
  const [isResponse, setIsResponse] = useState(false);
  const [isMapLoaded, setisMapLoaded] = useState(false);
  const [map, setMap] = useState(null);
  const mapContainerStyle = {
    height: (!openPanel && '750px') || '400px',
    width: '100%',
  };
  const onPanLocation = () => {
    map.panTo({ lat: currentLocation?.lat, lng: currentLocation?.lng });
    const currentPositionString = `${currentLocation?.lat},${currentLocation?.lng}`;
    const fromLocationCoordinates = {
      display: currentPositionString,
      latLong: currentPositionString,
    };
    setOriginLocation(fromLocationCoordinates);
  };
  const directionsCallBack = (response) => {
    if (isResponse === false && response != null && response.status === 'OK') {
      setResponseMap(response);
      setIsResponse(true);
    }
  };
  const onMapLoad = (mapLoaded) => {
    setMap(mapLoaded);
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };
        setCurrentLocation(pos);
        const positionString = `${lat},${lng}`;
        const fromLocation = {
          display: positionString,
          latLong: positionString,
        };
        setOriginLocation(fromLocation);
        if (showMarker) {
          setisMapPresent(true);
          setisMapLoaded(true);
        }
      },
    );
  };
  return (
    <GoogleMap
      id="marker-example"
      mapContainerStyle={mapContainerStyle}
      zoom={15}
      center={{
        lat: Number(originLocation?.latLong.split(',')[0]),
        lng: Number(originLocation?.latLong.split(',')[1]),
      }}
      onLoad={(mapLoaded) => onMapLoad(mapLoaded)}
    >
      <MyLocationButton onPanLocation={onPanLocation} />
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
