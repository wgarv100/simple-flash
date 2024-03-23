import React from "react";
import Modal from "@mui/material/Modal";
import AddFlashcardForm from "./AddFlashcardForm";

const AddFlashcardModal = ({
  open,
  openModal,
  onClose,
  onFlashcardAdded,
  groupId,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
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
          onClose={onClose}
          open={open}
          openModal={openModal}
        />
      </div>
    </Modal>
  );
};

export default AddFlashcardModal;
