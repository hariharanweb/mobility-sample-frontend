import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@react-google-maps/api";

const LocationSearch = ({
  type,
  initialLocation,
  locationChange,
  placeholder,
}) => {
  const [location, setLocation] = useState(initialLocation);
  const [autocomplete, setAutoComplete] = useState(null);

  const onLoad = (autocomplete) => {

    setAutoComplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      let place = autocomplete.getPlace();
      let locationObj = {};
      locationObj.display = place?.name;
      locationObj.latLong =
        place?.geometry?.location.lat() + "," + place?.geometry?.location.lng();
      setLocation(locationObj);
      locationChange(locationObj);
    }
  };
  return (
    <FormControl fullWidth sx={{ m: 1 }} variant="filled">
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <TextField
          fullWidth
          sx={{ m: 1 }}
          style={{ marginLeft: 0 }}
          label={type}
          variant="standard"
          defaultValue={location.display}
          placeholder={placeholder}
        />
      </Autocomplete>
    </FormControl>
  );
};

export default LocationSearch;
