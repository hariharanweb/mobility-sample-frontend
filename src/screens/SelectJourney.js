import * as React from "react";
import Modal from "@mui/material/Modal";
import Quote from "../components/Quote";

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
            <Quote
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
