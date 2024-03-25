import { useState, useEffect } from "react";
import { getAllGroups } from "../services/groupServices";

export const useGroups = () => {
  const [groups, setGroups] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    getAllGroups()
      .then((data) => setGroups(data))
      .catch((error) => console.error("Error fetching groups:", error));
  }, [groups]);

  useEffect(() => {
    // Reset confirmDelete state when groups changes
    setConfirmDelete(false);
  }, [groups]);

  return groups;
};
