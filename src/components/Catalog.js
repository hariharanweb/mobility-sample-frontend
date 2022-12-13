import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const Catalog = ({result}) => {
    return (
        <div>
            <ListItem fullWidth sx={{m: 1}} variant="filled">
                <ListItemText>{result.bpp_descriptor.name}</ListItemText>
                <ListItemAvatar>
                    <Avatar>
                        <DirectionsCarIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={`${result.bpp_providers[0].items[0].tags.Make} - ${result.bpp_providers[0].items[0].tags.NameOfModel}`}
                    secondary={`${result.bpp_providers[0].items[0].tags.VehicleType} - ₹${result.bpp_providers[0].items[0].price.value}`}/>
                <FormControl>
                    <Button variant="contained">Select</Button>
                </FormControl>
            </ListItem>
            <ListItem fullWidth sx={{m: 1}} variant="filled">
                <ListItemText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ListItemText>
                <ListItemAvatar>
                    <Avatar>
                        <DirectionsCarIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={`Maruthi - WagonR`}
                    secondary={`Taxi - ₹75`}/>
                <FormControl>
                    <Button variant="contained">Select</Button>
                </FormControl>
            </ListItem>
        </div>

    );
}

export default Catalog;
