import * as React from "react";
import Modal from "@mui/material/Modal";
import Journey from "../components/Journey";

const SelectJourney = ({
  showModal,
  handleClose,
  bookingInformation,
  bookingResponse,
}) => {
  return (
    <>
      {bookingInformation ? (
        <div>
          <Modal
            open={showModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Journey
              bookingInformation={bookingInformation}
              bookingResponse={bookingResponse}
            />
          </Modal>
        </div>
      ) : null}
    </>
  );
};

export default SelectJourney;
