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
