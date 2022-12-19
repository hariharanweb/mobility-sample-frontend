import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import LocationSearch from '../components/LocationSearch'
import Api from "../api/Api";
import Typography from "@mui/material/Typography";

const SearchScreen = () => {
    const navigate = useNavigate();
    const [fromLocation,setFromLocation] = useState({});
    const [toLocation,setToLocation] = useState({});

    const onSearchClick = async () => {
        const data = {
            intent: {
                fulfillment: {
                    start: {
                        location: {
                            gps: fromLocation.latLong
                        }
                    },
                    end: {
                        location: {
                            gps: toLocation.latLong
                        }
                    }
                }
            }
        }
        const response = await Api.post('/search', data)
        navigate('/search', {state: {...response}});
        // console.log(fromLocation);
        // console.log(toLocation);
    }
    return (
        <Grid container paddingX={4}>
            <Typography variant="h4" gutterBottom paddingY={1}>
                ONDC Sample App
            </Typography>
            <LocationSearch type="From" initialLocation={fromLocation} initialLocationChange={setFromLocation} sampleText="Enter Pickup Point"/>
            <LocationSearch type="To" initialLocation={toLocation} initialLocationChange={setToLocation} sampleText="Enter Destination Point"/>
            <FormControl fullWidth sx={{m: 1}} variant="filled">
                <Button variant="contained" onClick={onSearchClick}>Find Rides</Button>
            </FormControl>
        </Grid>
    )
}

export default SearchScreen;
