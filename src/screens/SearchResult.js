import {useLocation} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress'
import {useEffect, useState} from "react";
import Api from "../api/Api";
import Catalog from "../components/Catalog";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const SearchResult = (props) => {
    const location = useLocation();
    const message_id = location.state.message_id;
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(true)

    const getSearchResult = async () => {
        const result = await Api.get('search', {message_id})
        if (result && result.length > 0) {
            const catalogs = result.flatMap(r => r.message.catalogs)
            setSearchResults(catalogs)
            setLoading(false)
        }
    }
    const displayCatalogs = () => (
        <Grid container>
            <Typography variant="h3" gutterBottom paddingX={4}>
                Search Results
            </Typography>
            <Grid item xs={12}>
                {
                    searchResults.map(catalog => (
                        <Catalog catalog={catalog}/>
                    ))
                }
            </Grid>
        </Grid>
    )

    useEffect(() => {
        Api.poll(getSearchResult, 5, 1000)
    }, [loading]);

    return (
        loading ? <CircularProgress/> :
            displayCatalogs()
    )
}

export default SearchResult;
