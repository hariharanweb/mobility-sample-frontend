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
  const [showModal, setshowModal] = useState(false);
  const [bookingInformation, setbookingInformation] = useState({});
  const [bookingResponse, setBookingResponse] = useState({});
  const [loadingJourney, setLoadingJourney] = useState(false);
  const [bookingInformationLoaded, setbookingInformationLoaded] =
    useState(false);
  const handleClose = () => setshowModal(false);
  const getSearchResult = useCallback(async () => {
    const result = await Api.get("search", { message_id });
    if (result && result.length > 0) {
      const catalogs = result.flatMap((r) => r.message.catalogs);
      setSearchResults(catalogs);
      setLoading(false);
    }
  }, [message_id]);

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
  const onSelectJourney = async () => {
    setLoadingJourney(true);
    const data = {
      order: {
        items: [
          {
            id: "FAKE_TAXI_ID",
            fulfillment_id: "FAKE_TAXI_FULFILLMENT_ID",
            descriptor: {
              name: "Premium Taxi",
              code: "Premium Taxi",
              images: [
                "https://cdn.iconscout.com/icon/premium/png-256-thumb/searching-car-automobile-3052095-2538547.png",
              ],
            },
            price: {
              currency: "INR",
              value: "111",
            },
            category_id: "FAKE_TAXI_CATEGORY_ID",
            tags: {
              NameOfModel: "Nexon",
              Make: "Tata",
              FuelType: "Petrol",
              VehicleType: "Premium Taxi",
            },
          },
        ],
      },
    };

    const response = await Api.post("/select", data);
    if (response.message_id) {
      response["orderDetails"] = data;
      setBookingResponse(response);
      getSelectResult();
    }
  };
  const getSelectResult = useCallback(async () => {
    let message_id = bookingResponse.message_id;
    if (message_id && !bookingInformationLoaded) {
      const result = await Api.get("select", { message_id });
      if (result && result.length > 0) {
        setbookingInformationLoaded(true);
        setbookingInformation(result);
        setLoadingJourney(false);
        setshowModal(true);
      }
    }
  }, [bookingInformationLoaded, bookingResponse.message_id]);
  useEffect(() => {
    if (Object.keys(bookingResponse).length > 0) {
      Api.poll(getSelectResult, 3, 1500);
    }
  }, [getSelectResult, loadingJourney, bookingResponse]);

  useEffect(() => {
    if (!loadingJourney) {
      return;
    }
  }, [loadingJourney]);
  const displayCatalogs = () => (
    <Grid container>
      <Typography variant="h4" gutterBottom paddingX={4} paddingY={1}>
        Search Results
      </Typography>
      <Grid item xs={12}>
        {searchResults.map((catalog) => (
          <Catalog
            catalog={catalog}
            showModal={showModal}
            bookingInformation={bookingInformation}
            bookingResponse={bookingResponse}
            loadingJourney={loadingJourney}
            handleClose={handleClose}
            onSelectJourney={onSelectJourney}
          />
        ))}
      </Grid>
    </Grid>
  );
  return loading ? <Loader /> : displayCatalogs();
};

export default SearchResult;
