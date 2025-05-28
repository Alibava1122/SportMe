import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const signupValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name must be at least 2 characters')
    .required('First name is required'),

  lastName: Yup.string()
    .min(2, 'Last name must be at least 2 characters')
    .required('Last name is required'),

  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),

  dob: Yup.string()
    .required('Date of Birth is required'),

  address: Yup.string()
    .min(5, 'Address must be at least 5 characters')
    .required('Address is required'),

  postCode: Yup.string()
    .matches(/^[0-9]{4,10}$/, 'Post Code must be between 4 and 10 digits')
    .required('Post Code is required'),
});