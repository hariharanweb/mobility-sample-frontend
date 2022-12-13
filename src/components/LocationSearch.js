import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'

const LocationSearch = ({type, initialLocation, onLocationChange}) => {
    const [location, setLocation] = useState(initialLocation)
    return (
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <TextField label={type} variant="standard" defaultValue={location.display}/>
        </FormControl>
    )
}

export default LocationSearch
