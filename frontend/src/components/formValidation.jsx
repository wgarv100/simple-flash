export const validateGroupName = (groupName) => {
  if (!groupName) {
    return "Group name is required.";
  }

  if (groupName.length > 50) {
    return "Group name must be 50 characters or less.";
  }

  return "";
};
