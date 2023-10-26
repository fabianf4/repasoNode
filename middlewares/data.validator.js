import { validationResult } from 'express-validator'

export default function validator(schema) {
  return [
    schema,
    (req, res, next) => {
      const errors = validationResult(req)
      if (errors.isEmpty()) {
        return next()
      }

      const extractedErrors = []
      errors.array().map((err) => extractedErrors.push({ [err.path]: err.msg }))

      return res.status(422).json({
        error: 'Validation failed',
        details: extractedErrors,
      })
    },
  ]
}
