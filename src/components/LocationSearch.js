import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import { Autocomplete, LoadScript } from '@react-google-maps/api';

const LocationSearch = ({type, initialLocation, onLocationChange}) => {
    const [location, setLocation] = useState(initialLocation)
    console.log(process.env.REACT_APP_API_KEY);
  const [autocomplete,setAutoComplete]=useState(null);
  
  const onLoad =(autocomplete)=> {
    console.log('autocomplete: ', autocomplete)

    setAutoComplete(autocomplete);
  }

  const onPlaceChanged= ()=> {
    if (autocomplete !== null) {
      let place=autocomplete.getPlace();
      console.log(place) //result of the selected location from dropdown
      console.log("lat",place.geometry['location'].lat());
      console.log("lng",place.geometry['location'].lng());
    }
  }
    return (
        
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <LoadScript
        googleMapsApiKey={process.env.REACT_APP_API_KEY}
        libraries={["places"]}
      >
        <Autocomplete
            onLoad={onLoad}
            onPlaceChanged={onPlaceChanged}
          >
            <TextField fullWidth sx={{ m: 1 }} style={{"marginLeft":0}} label={type} variant="standard" defaultValue={location.display}/>
            </Autocomplete>
            </LoadScript>
        </FormControl>
    )
}

export default LocationSearch
