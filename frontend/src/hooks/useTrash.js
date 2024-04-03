import { useState, useEffect } from "react";
import { getDeletedGroups } from "../services/trashServices";

export const useDeletedGroups = () => {
  const [deletedGroups, setDeletedGroups] = useState([]);

  useEffect(() => {
    getDeletedGroups()
      .then((data) => setDeletedGroups(data))
      .catch((error) => console.error("Error fetching deleted groups:", error));
  }, [deletedGroups]);

  return deletedGroups;
};
