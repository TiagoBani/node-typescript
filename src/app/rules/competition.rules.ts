import { check } from 'express-validator/check'

export const competitionRules = {
  forRegister: [
    check('_name')
        .isString().isLength({ min: 5 }).withMessage('_name have minimum length 5 characters'),
    check('_date')
        .exists().withMessage('_birth is required'),
    check('_date')
        .optional({ checkFalsy: true }).isISO8601().withMessage('_birth is bad formated'),
    check('_week')
        .isInt().exists().withMessage('_week is required'),
    check('_result')
        .isString().exists().withMessage('_result is required'),
  ],
}