import React, { useEffect, useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import './LocationSearch.css';
import InputField from './InputField';

const LocationSearch = ({
  label, initialLocation, onLocationChange, toggleDrawer, swapped, onSwapped,
}) => {
  const [location, setLocation] = useState(initialLocation);
  const [autocomplete, setAutoComplete] = useState(null);
  useEffect(() => {
    if (swapped) {
      setLocation(initialLocation);
      onSwapped(false);
    }
  }, [swapped]);
  const onLoad = (data) => {
    setAutoComplete(data);
  };
  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      const locationObj = {
        display: place?.name,
        latLong: `${place?.geometry?.location.lat()},${place?.geometry?.location.lng()}`,
      };
      const locationDisplayObj = {
        display: `${place?.name} ${place?.formatted_address}`,
        latLong: `${place?.geometry?.location.lat()},${place?.geometry?.location.lng()}`,
      };
      setLocation(locationDisplayObj);
      onLocationChange(locationObj);
    }
  };

  const formatLocation = (locationName) => {
    const formattedLocation = { display: locationName, latLong: '' };
    return formattedLocation;
  };

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <InputField className="locationSearch-textbox" label={label} value={location.display} setValue={setLocation} formatValueFunc={formatLocation} updateValue={onLocationChange} toggleDrawer={toggleDrawer} />
    </Autocomplete>
  );
};

export default LocationSearch;
