import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Api from "../api/Api";
import Loader from "../components/Loader";
import Invoice from "../components/Invoice";
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
      setDriverName(
        result[0]?.message?.order?.provider?.items[0]["./komn/driver_name"]
      );
      setOrder(result);
      setLoading(false);
    }
  }, [message_id]);

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
