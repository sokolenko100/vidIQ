import * as Yup from 'yup';

const EMAIL = Yup.string()
  .email('Please provide a valid email')
  .required("This field can't be empty");

const PASSWORD = Yup.string()
  .min(8, 'Password must contain at least 8 character')
  .required("This field can't be empty");

export {EMAIL, PASSWORD};
