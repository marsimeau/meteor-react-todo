import { Meteor } from 'meteor/meteor'
import { VALIDATION_FAILED } from './error-types'
import definitions from './error-definitions'
import Validator from './Validator'

export function getErrorDefinition(errorType) {
  return definitions[errorType]
}

/**
 * Property validator
 *
 * @param {string} targetProp - The target property name
 * @returns {Validator}
 */
export function prop(targetProp) {
  return new Validator(targetProp)
}

/**
 * Validate properties
 * Use to validate data against validators
 *
 * @param {Object} props           - The data to be validated
 * @param {Validator[]} validators - An array of validators
 */
export function validate(props, validators) {
  if (!Array.isArray(validators)) {
    throw new Error('validators argument must be an array.')
  }

  let errors

  validators.forEach(validator => {
    if (!(validator instanceof Validator)) {
      throw new Error('Each validator must be a Validator. Use the prop utility.')
    }

    try {
      validator.run(props)
    } catch (error) {
      if (!errors) errors = {}
      errors[validator.targetProp] = error
    }
  })

  if (errors) {
    throw new Meteor.Error(VALIDATION_FAILED, getErrorDefinition(VALIDATION_FAILED), errors)
  }
}
