import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Api from "../api/Api";
import Catalog from "../components/Catalog";
import Typography from "@mui/material/Typography";
import Loader from "../components/Loader";
import Grid from "@mui/material/Grid";

const SearchResult = () => {
  const location = useLocation();
  const message_id = location.state.message_id;
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const getSearchResult = useCallback(async () => {
    const result = await Api.get("search", { message_id });
    if (result && result.length > 0) {
      const catalogs = result.flatMap((r) => r.message.catalogs);
      setSearchResults(catalogs);
      setLoading(false);
    }
  }, [message_id]);
  const displayCatalogs = () => (
    <Grid container>
      <Typography variant="h4" gutterBottom paddingX={4} paddingY={1}>
        Search Results
      </Typography>
      <Grid item xs={12}>
        {searchResults.map((catalog) => (
          <Catalog catalog={catalog} />
        ))}
      </Grid>
    </Grid>
  );
  useEffect(() => {
    if (loading) {
      Api.poll(getSearchResult, 3, 1500);
    }
  }, [getSearchResult, loading]);

  useEffect(() => {
    if (!loading) {
      return;
    }
  }, [loading]);

  return loading ? <Loader /> : displayCatalogs();
};

export default SearchResult;
