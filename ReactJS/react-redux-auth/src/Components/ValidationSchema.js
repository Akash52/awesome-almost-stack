import * as Yup from 'yup'

export const UserValidation = Yup.object({
  image: Yup.mixed()
    .nullable()
    .required('Profile Picture is Require')
    .test('fileSize', 'Image Size to much big', (value) => {
      return !value || (value !== null && value.size <= 2000000)
    })
    .test('fileType', 'Image should be jpg or png only', (value) => {
      return (
        !value ||
        (value !== null && ['image/jpg', 'image/png'].includes(value.type))
      )
    }),
  name: Yup.string()
    .required('First Name is required')
    .min(15, 'Name must be at least 15 characters'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  phoneNo: Yup.string()
    .required('Phone Number is required')
    .matches(/^[0-9]{10}$/, 'Phone Number must be 10 digits'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})
