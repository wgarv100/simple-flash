import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFlashcardsByGroup } from "../services/flashcardServices";

export const useGetFlashcards = () => {
  const { groupId } = useParams();
  const [flashcards, setFlashcards] = useState([]);
  const [groupName, setGroupName] = useState("");

  // Fetch the flashcards when the group id changes
  useEffect(() => {
    fetchSelectedGroupAndFlashcards(groupId);
  }, [groupId]);

  const fetchSelectedGroupAndFlashcards = async (groupId) => {
    const selectedGroup = await getFlashcardsByGroup(groupId);

    // If the group exists, set the group name
    if (selectedGroup) {
      setGroupName(selectedGroup.name);
      console.log("group name is", groupName);
    }

    // Get the flashcards for the group
    const flashcards = await getFlashcardsByGroup(groupId);
    setFlashcards(flashcards);
  };

  return {
    flashcards,
    groupName,
  };
};
