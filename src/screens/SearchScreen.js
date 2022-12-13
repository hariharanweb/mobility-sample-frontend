import {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import LocationSearch from '../components/LocationSearch'
import Api from "../api/Api";

const SearchScreen = () => {
    const navigate = useNavigate();
    const [fromLocation] = useState({
        display: "Forum Mall",
        latLong: "12.9348455,77.6109492"
    })
    const [toLocation] = useState({
        display: "Garuda Mall",
        latLong: "12.9702626,77.6099629"
    })


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
        navigate('/search',{state:{...response}});
    }
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            <div>
                <h1 style={{textAlign: 'center'}}>ONDC Sample Mobility App</h1>
                <LocationSearch type="From" initialLocation={fromLocation}/>
                <LocationSearch type="To" initialLocation={toLocation}/>
                <FormControl fullWidth sx={{m: 1}} variant="filled">
                    <Button variant="contained" onClick={onSearchClick}>Find Rides</Button>
                </FormControl>
            </div>
        </Box>
    )
}

export default SearchScreen;
