import { useState } from 'react';
import Button from "@mui/material/Button";
import Modal from "component/Modal";

const ConfirmationModal = (props) => {
  const { open, onClose, onConfirm, message } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setIsLoading(true)
  }

  return (
    <Modal
      maxWidth="xs"
      dividers={false}
      closeIcon={false}
      title="Confirmation"
      actions={
        <Modal.Actions sx={{ pt: 0, pb: 1, justifyContent: "flex-end" }}>
          <Button
            sx={{ textTransform: "uppercase" }}
            variant="text"
            onClick={onClose}
          >
            No
          </Button>
          <Button
            sx={{ textTransform: "uppercase" }}
            variant="text"
            onClick={handleConfirm}
            disabled={isLoading}
          >
            Yes
          </Button>
        </Modal.Actions>
      }
      open={open}
      onClose={onClose}
    >
      {message}
    </Modal>
  );
};

export default ConfirmationModal;
