import { isEmail } from 'validator';

export const emailValidation = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const validation = emailRegex.test(email);
  if (!validation) return false;
  if (!isEmail(email)) return false;
  return true;
};
