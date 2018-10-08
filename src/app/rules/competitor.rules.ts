import { check } from 'express-validator/check'

export const competitorRules = {
  forRegister: [
    check('_name')
        .isString().isLength({ min: 5 }).withMessage('_name have minimum length 5 characters'),
    check('_birth')
        .exists().withMessage('_birth is required'),
    check('_birth')
        .optional({ checkFalsy: true }).isISO8601().withMessage('_birth is bad formated'),
    check('_age')
        .isInt().exists().withMessage('_age is required'),
  ],
}