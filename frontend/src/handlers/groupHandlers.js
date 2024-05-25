import { restoreDeletedGroup } from "../services/trashServices";

export const handleDeleteGroup = (
  confirmDelete,
  deleteGroup,
  groupId,
  groups,
  navigate,
  setConfirmDelete
) => {
  const handleGroupDeletion = () => {
    deleteGroup(groupId).then(() => {
      if (groups.length > 0) {
        navigate(`/groups/${groups[0]._id}`);
        setConfirmDelete(false);
      }
    });
  };

  const handleDeleteConfirmation = () => {
    if (confirmDelete) {
      handleGroupDeletion();
    } else {
      setConfirmDelete(true);
    }
  };

  handleDeleteConfirmation();
};

// Restore a group from the trash can
export const handleRestoreGroup = (groupId, navigate, group) => {
  restoreDeletedGroup(groupId)
    .then(() => {
      navigate(`/groups/${group[0]._id}`);
    })
    .catch((error) => {
      console.error("Failed to restore group:", error);
    });
};
