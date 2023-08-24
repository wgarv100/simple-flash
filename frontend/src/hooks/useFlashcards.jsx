import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFlashcardsByGroup } from "../services/flashcardServices";
import { fetchSelectedGroup } from "../services/groupServices";

export const useFlashcards = () => {
  const { groupId } = useParams();
  const [flashcards, setFlashcards] = useState([]);
  const [groupName, setGroupName] = useState("");

  useEffect(() => {
    fetchSelectedGroupAndFlashcards(groupId);
  }, [groupId]);

  const fetchSelectedGroupAndFlashcards = async (groupId) => {
    const selectedGroup = await fetchSelectedGroup(groupId);

    if (selectedGroup) {
      setGroupName(selectedGroup.name);
    }

    const flashcards = await getFlashcardsByGroup(groupId);
    setFlashcards(flashcards);
  };

  return {
    flashcards,
    groupName,
  };
};
