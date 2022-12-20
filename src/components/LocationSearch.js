import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@react-google-maps/api";
import CancelIcon from "@mui/icons-material/Cancel";
import "./LocationSearch.css";
import { IconButton, InputAdornment } from "@mui/material";
const LocationSearch = ({
  type,
  initialLocation,
  onLocationChange,
  onCancelDisabled,
}) => {
  const [location, setLocation] = useState(initialLocation);
  const [autocomplete, setAutoComplete] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const onLoad = (autocomplete) => {
    setAutoComplete(autocomplete);
  };
  const onChange = (e) => {
    if (e.target.value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setLocation({ display: e.target.value, latLong: "" });
  };
  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      let place = autocomplete.getPlace();
      let locationObj = {};
      let locationDisplayObj = {};
      locationObj.display = place?.name;
      locationDisplayObj.display =
        autocomplete?.gm_accessors_?.place?.jj?.formattedPrediction;
      locationDisplayObj.latLong =
        place?.geometry?.location.lat() + "," + place?.geometry?.location.lng();
      locationObj.latLong =
        place?.geometry?.location.lat() + "," + place?.geometry?.location.lng();
      setLocation(locationDisplayObj);
      onLocationChange(locationObj);
      onCancelDisabled(false);
    }
  };
  const clearTextField = () => {
    setLocation({ display: " ", latLong: " " });
    onLocationChange({ display: " ", latLong: " " });
    setDisabled(true);
    onCancelDisabled(true);
  };
  return (
    <FormControl fullWidth sx={{ m: 1 }} variant="filled">
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <TextField
          fullWidth
          sx={{ m: 1 }}
          label={type}
          variant="standard"
          value={location.display}
          onChange={onChange}
          className="locationSearch-textbox"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={clearTextField}
                  edge="end"
                  disabled={disabled}
                >
                  <CancelIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Autocomplete>
    </FormControl>
  );
};

export default LocationSearch;
