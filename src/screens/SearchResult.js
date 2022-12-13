import {useLocation} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress'
import {useEffect, useState} from "react";
import Api from "../api/Api";
import Catalog from "../components/Catalog";
import List from '@mui/material/List';

const SearchResult = (props) => {
    const location = useLocation();
    const message_id = location.state.message_id;
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(true)

    const getSearchResult = async () => {
        const result = await Api.get('search', {message_id})
        if (result) {
            const catalogs = result.flatMap(r => r.message.catalogs)
            setSearchResults(catalogs)
            setLoading(false)
        }
    }
    const displayCatalogs = () => (
        <div>
            <h1>Search Results</h1>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {
                    searchResults.map(result => (
                        <Catalog result={result}/>
                    ))
                }
            </List>
        </div>
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
