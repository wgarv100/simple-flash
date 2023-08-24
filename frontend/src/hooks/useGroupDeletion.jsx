import { useState } from "react";
import { deleteGroup, getAllGroups } from "../services/groupServices";
import { useNavigate } from "react-router-dom";

export const useGroupDeletion = () => {
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  const handleDeleteGroup = async (groupId) => {
    try {
      const success = await deleteGroup(groupId);

      if (success) {
        const updatedGroups = await getAllGroups();
        setGroups(updatedGroups);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    groups,
    handleDeleteGroup,
  };
};
