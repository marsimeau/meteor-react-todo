import { ValidatedMethod } from 'meteor/meteor'
import { validate, prop } from '../../validation'
import Tasks from './index'

export const addTask = new ValidatedMethod({
  name: 'tasks.add',
  validate(props) {
    validate(props, [
      prop('name').check(String)
    ])
  },
  run({ name }) {
    Tasks.create({ name, createdAt: new Date() })
  }
})
