import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

const SelectJourney = ({ open, handleClose, data, response }) => {
  let selectedItem = response?.orderDetails?.order?.items[0];
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6">Booking Confirmation</Typography>
          <Typography
            variant="body1"
            display="block"
            gutterBottom
            data-testid="booking-id"
          >
            Taxi id : {selectedItem?.category_id}
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            Taxi Name: {selectedItem?.descriptor?.name}
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            Taxi Price (incl. of all taxes):{" "}
            {data[0]?.message?.order?.provider?.items[0]?.price?.currency ===
            "INR" ? (
              <>₹ </>
            ) : (
              <>
                {data[0]?.message?.order?.provider?.items[0]?.price?.currency}{" "}
              </>
            )}
            {data[0]?.message?.order?.provider?.items[0]?.price?.value}
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            Taxi Model:{" "}
            {
              data[0]?.message?.order?.provider?.fulfillments[0]?.vehicle
                ?.category
            }
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            Duration to Pickup:{" "}
            {data[0]?.message?.order?.provider?.items[0]?.duration_to_pickup}{" "}
            sec
          </Typography>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <Button variant="contained">Click here to Confirm</Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};

export default SelectJourney;
