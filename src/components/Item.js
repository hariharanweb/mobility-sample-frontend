import "./Item.css";
import Grid from "@mui/material/Grid";
import React, { useCallback, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SelectJourney from "./SelectJourney";
import Api from "../api/Api";

const Item = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const handleClose = () => setOpen(false);

  const handleOpen = async () => {
    setLoading(true);
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
      setResponse(response);
      setData(data);
      getSelectResult();
    }
  };
  const getSelectResult = useCallback(async () => {
    let message_id = response.message_id;
    if (message_id && !dataLoaded) {
      const result = await Api.get("select", { message_id });
      if (result && result.length > 0) {
        setDataLoaded(true);
        setLoading(false);
        setOpen(true);
      }
    }
  }, [dataLoaded, response.message_id]);
  useEffect(() => {
    if (Object.keys(response).length > 0) {
      Api.poll(getSelectResult, 3, 1500);
    }
  }, [getSelectResult, loading, response]);

  useEffect(() => {
    if (!loading) {
      return;
    }
  }, [loading]);
  return (
    <Grid container className="item-container">
      <Grid
        item
        xs={2}
        alignItems="center"
        justifyContent="center"
        display="flex"
        paddingLeft={2}
      >
        <img height={32} width={32} src={item.descriptor.images[0]} />
      </Grid>
      <Grid
        item
        xs={4}
        alignItems="center"
        justifyContent="center"
        display="flex-row"
        paddingLeft={2}
      >
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            {item.tags.Make} - {item.tags.NameOfModel}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" gutterBottom>
            {item.descriptor.name}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={3}
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        <Typography variant="h5" gutterBottom>
          ₹&nbsp;{item.price.value}
        </Typography>
      </Grid>
      <Grid
        item
        xs={3}
        alignItems="center"
        justifyContent="center"
        display="flex"
      >
        <Typography variant="subtitle2" gutterBottom>
          {loading === true ? (
            <div>Loading....</div>
          ) : (
            <Button onClick={handleOpen} variant="contained">
              Select
            </Button>
          )}
        </Typography>
      </Grid>
      <SelectJourney
        open={open}
        handleClose={handleClose}
        data={data}
        response={response}
      />
    </Grid>
  );
};
export default Item;
