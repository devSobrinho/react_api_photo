export const passwordValidation = (password) => {
  if (typeof password !== 'string') {
    return false;
  }
  if (password.length < 6 || password.length > 32) {
    return false;
  }
  return true;
};
