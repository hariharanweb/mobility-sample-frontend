import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Api from "../api/Api";
import Typography from "@mui/material/Typography";
import Loader from "../components/Loader";
import { Box } from "@mui/system";
import Geocode from "react-geocode";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import "./Invoice.css";
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Invoice = () => {
  const location = useLocation();
  const message_id = location.state.message_id;
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fromLocation, setFromLocation] = useState("");
  const [driverName, setDriverName] = useState("");
  const [toLocation, setToLocation] = useState("");
  const getSelectResult = useCallback(async () => {
    const result = await Api.get("select", { message_id });
    if (result && result.length > 0) {
      getLocation(
        result[0]?.message?.order?.provider?.fulfillments[0]?.start,
        "start"
      );
      getLocation(
        result[0]?.message?.order?.provider?.fulfillments[0]?.end,
        "end"
      );
      setDriverName(
        result[0]?.message?.order?.provider?.items[0]["./komn/driver_name"]
      );
      setOrder(result);
      setLoading(false);
    }
  }, [message_id]);

  const getLocation = async (locationDetails, label) => {
    let gps = locationDetails?.location?.gps;
    let lat = gps.split(",")[0];
    let long = gps.split(",")[1].trim();
    const address = await Geocode.fromLatLng(lat, long).then((response) => {
      let address = response.results[0].formatted_address;
      if (label === "start") {
        setFromLocation(address);
      } else {
        setToLocation(address);
      }
    });
  };

  const displayCatalogs = () => (
    <>
      <Typography
        variant="h4"
        gutterBottom
        paddingX={4}
        paddingY={5}
        textAlign="center"
      >
        Your Invoice
      </Typography>

      <Box container sx={style}>
        <div className="invoice-confirmation">
          <CheckCircleSharpIcon
            className="invoice-successIcon"
            sx={{ fontSize: "5em" }}
          />
        </div>
        <Typography
          variant="body1"
          display="block"
          gutterBottom
          textAlign="center"
          fontSize="2em"
        >
          Your ride is booked.
        </Typography>
        <Typography variant="body1" display="block" gutterBottom>
          Transaction ID: {order[0]?.context?.transaction_id}
        </Typography>
        <Typography variant="body1" display="block" gutterBottom>
          Country: {order[0]?.context?.country}
        </Typography>
        <Typography variant="body1" display="block" gutterBottom>
          Date: {order[0]?.context?.timestamp.substring(0, 10)}
        </Typography>
        <Typography variant="body1" display="block" gutterBottom>
          Time: {order[0]?.context?.timestamp.substring(11, 19)}
        </Typography>
        <Typography variant="body1" display="block" gutterBottom>
          Driver Name:{" "}
          {driverName.charAt(0) + driverName.slice(1).toLowerCase()}
        </Typography>
        <Typography variant="body1" display="block" gutterBottom>
          Taxi Fare:{" "}
          {order[0]?.message?.order?.provider?.items[0]?.price?.currency}{" "}
          {order[0]?.message?.order?.provider?.items[0]?.price?.value}
        </Typography>
        <Typography variant="body1" display="block" gutterBottom>
          Duration To Pick-up:{" "}
          {order[0]?.message?.order?.provider?.items[0]?.duration_to_pickup} sec
        </Typography>

        <Typography variant="body1" display="block" gutterBottom>
          Vehicle:{" "}
          {
            order[0]?.message?.order?.provider?.fulfillments[0]?.vehicle
              ?.category
          }
        </Typography>
        <Typography variant="body1" display="block" gutterBottom>
          Pick-up Location: {fromLocation}
        </Typography>
        <Typography variant="body1" display="block" gutterBottom>
          Destination Location: {toLocation}
        </Typography>
      </Box>
    </>
  );
  useEffect(() => {
    if (loading) {
      Api.poll(getSelectResult, 3, 1500);
    }
  }, [getSelectResult, loading]);

  useEffect(() => {
    if (!loading) {
      return;
    }
  }, [loading]);

  return loading ? <Loader /> : displayCatalogs();
};

export default Invoice;
