import { Meteor } from 'meteor/meteor'
import { Tasks } from '../index'

Meteor.publish('tasks', function () {
  return Tasks.find()
})
