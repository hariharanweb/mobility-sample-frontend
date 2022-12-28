import "./Item.css";
import Grid from "@mui/material/Grid";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SelectJourney from "./SelectJourney";
import Api from "../api/Api";

const Item = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  console.log(item);
  const handleOpen = async () => {
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
      setOpen(true);
    }
  };

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
          <Button onClick={handleOpen} variant="contained">
            Select
          </Button>
        </Typography>
      </Grid>
      <SelectJourney open={open} handleClose={handleClose} />
    </Grid>
  );
};
export default Item;
