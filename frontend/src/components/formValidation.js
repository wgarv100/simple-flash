export const validateAddGroupForm = (groupName) => {
  if (!groupName) {
    return "Group name is required.";
  }

  if (groupName.length > 50) {
    return "Group name must be 50 characters or less.";
  }

  return "";
};

export const validateAddFlashcardForm = (title, body) => {
  const errors = {};

  if (!title.trim()) {
    errors.title = "Title is required";
  }

  if (!body.trim()) {
    errors.body = "Body is required";
  }

  return errors;
};
