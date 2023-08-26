import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import AddFlashcardForm from "./AddFlashcardForm"; // Import your AddFlashcardForm component

const AddFlashcardModal = ({ isOpen, onClose, onFlashcardAdded, groupId }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <AddFlashcardForm
          onFlashcardAdded={onFlashcardAdded}
          groupId={groupId}
        />

        <Button variant="contained" color="primary" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default AddFlashcardModal;
