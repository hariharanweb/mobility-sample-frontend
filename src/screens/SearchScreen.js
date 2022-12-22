import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import LocationSearch from "../components/LocationSearch";
import Api from "../api/Api";
import Typography from "@mui/material/Typography";

const SearchScreen = () => {
  const navigate = useNavigate();
  const [fromLocation, setFromLocation] = useState({
    display: "Forum Mall",
    latLong: "12.9372469,77.6109981",
  });
  const [toLocation, setToLocation] = useState({
    display: "Garuda Mall",
    latLong: "12.9702626,77.6099629",
  });
  const onSearchClick = async () => {
    const data = {
      intent: {
        fulfillment: {
          start: {
            location: {
              gps: fromLocation.latLong,
            },
          },
          end: {
            location: {
              gps: toLocation.latLong,
            },
          },
        },
      },
    };
    const response = await Api.post("/search", data);
    navigate("/search", { state: { ...response } });
  };
  return (
    <Grid container paddingX={4}>
      <Typography variant="h4" gutterBottom paddingY={1}>
        ONDC Sample App
      </Typography>
      <LocationSearch
        label="From"
        initialLocation={fromLocation}
        onLocationChange={setFromLocation}
      />
      <LocationSearch
        label="To"
        initialLocation={toLocation}
        onLocationChange={setToLocation}
      />
      <FormControl fullWidth sx={{ m: 1 }} variant="filled">
        <Button
          variant="contained"
          onClick={onSearchClick}
          disabled={
            fromLocation.display.length === 0 || toLocation.display.length === 0
              ? true
              : false
          }
        >
          Find Rides
        </Button>
      </FormControl>
    </Grid>
  );
};

export default SearchScreen;
