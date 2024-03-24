import React from "react";
import Modal from "@mui/material/Modal";
import AddGroupForm from "./AddGroupForm";

const AddGroupModal = ({
  open,
  onClose,
  groupId,
  handleGroupAddedSuccessfully,
}) => {
  // Your component code here
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
        <AddGroupForm
          handleGroupAddedSuccessfully={handleGroupAddedSuccessfully}
          groupId={groupId}
          onClose={onClose}
          open={open}
        />
      </div>
    </Modal>
  );
};

export default AddGroupModal;
