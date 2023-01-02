import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Api from "../api/Api";
import Loader from "../components/Loader";
import Geocode from "react-geocode";
import Invoice from "../components/Invoice";
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const InvoiceScreen = () => {
  const location = useLocation();
  const message_id = location?.state?.message_id;
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

  const InvoiceContainer = () => (
    <Invoice
      order={order}
      driverName={driverName}
      fromLocation={fromLocation}
      toLocation={toLocation}
    />
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

  return loading ? <Loader /> : InvoiceContainer();
};

export default InvoiceScreen;
