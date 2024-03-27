export const validateUpdateGroupNameForm = (newGroupName) => {
  if (!newGroupName) {
    return "New group name is required.";
  }

  if (newGroupName.length > 50) {
    return "New group name must be 50 characters or less.";
  }

  return "";
};
