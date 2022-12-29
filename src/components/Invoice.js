import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Api from "../api/Api";
import Typography from "@mui/material/Typography";
import Loader from "../components/Loader";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
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
  const getSelectResult = useCallback(async () => {
    const result = await Api.get("select", { message_id });
    if (result && result.length > 0) {

        console.log(result);
      setOrder(result);
      setLoading(false);
    }
  }, [message_id]);

  const displayCatalogs = () => (
    <>
    <Typography variant="h4" gutterBottom paddingX={4} paddingY={1}>
        Order Details
      </Typography>
      
    <Box container sx={style}>
      <Typography variant="body1" display="block" gutterBottom>
            Transaction ID: {order[0]?.context?.transaction_id} 
      </Typography>
      <Typography variant="body1" display="block" gutterBottom>
            Country: {order[0]?.context?.country} 
      </Typography>
      <Typography variant="body1" display="block" gutterBottom>
            Date: {order[0]?.context?.timestamp.substring(0,10)} 
      </Typography>
      <Typography variant="body1" display="block" gutterBottom>
            Time: {order[0]?.context?.timestamp.substring(11,19)} 
      </Typography>
      <Typography variant="body1" display="block" gutterBottom>
            Driver Name: {order[0]?.message?.order?.provider?.items[0]["./komn/driver_name"]} 
      </Typography>
      <Typography variant="body1" display="block" gutterBottom>
            Taxi Fare: {order[0]?.message?.order?.provider?.items[0]?.price?.currency}  {order[0]?.message?.order?.provider?.items[0]?.price?.value}
      </Typography>
      <Typography variant="body1" display="block" gutterBottom>
            Duration To Pick-up: {order[0]?.message?.order?.provider?.items[0]?.duration_to_pickup} sec
      </Typography>
      
      <Typography variant="body1" display="block" gutterBottom>
            vehicle: {order[0]?.message?.order?.provider?.fulfillments[0]?.vehicle?.category} 
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
