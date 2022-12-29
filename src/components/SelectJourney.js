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
  let selectedItem = data?.order?.items[0];
  const navigate = useNavigate();

  const onSelectClick = () => {
    navigate("/invoice", { state: { ...response } });
  };
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
            Taxi Price: {selectedItem?.price?.value}
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            Taxi Model: {selectedItem?.tags?.NameOfModel}
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            Order Fulfillment Id: {selectedItem?.fulfillment_id}
          </Typography>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <Button variant="contained" onClick={onSelectClick}>
              Click here to Confirm
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};

export default SelectJourney;
