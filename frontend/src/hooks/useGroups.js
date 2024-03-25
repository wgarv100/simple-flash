import { useState, useEffect } from "react";
import { getAllGroups } from "../services/groupServices";

export const useGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getAllGroups()
      .then((data) => setGroups(data))
      .catch((error) => console.error("Error fetching groups:", error));
  }, [groups]);

  return groups;
};
