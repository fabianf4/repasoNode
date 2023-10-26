import { checkSchema } from 'express-validator'

export const userSchema = checkSchema({
  name: {
    trim: true,
    escape: true,
    isLength: {
      errorMessage: 'Name should be at least 3 chars long',
      options: { min: 3 },
    },
  },
  lastName: {
    trim: true,
    escape: true,
    isLength: {
      errorMessage: 'Last name should be at least 3 chars long',
      options: { min: 3 },
    },
  },
  email: {
    isEmail: true,
    trim: true,
    escape: true,
    normalizeEmail: true,
    errorMessage: 'Email is not valid',
  },
  password: {
    isStrongPassword: true,
    trim: true,
    escape: true,
    errorMessage:
      'Password is not valid, should be at least 8 chars long, contain at least 1 lowercase, 1 uppercase, 1 number and 1 symbol',
  },
})

export const userLoginSchema = checkSchema({
  email: {
    isEmail: true,
    trim: true,
    escape: true,
    normalizeEmail: true,
    errorMessage: 'Email is not valid',
  },
  password: {
    trim: true,
    escape: true,
    errorMessage: 'Password is not valid',
  },
})
