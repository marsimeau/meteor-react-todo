import { Meteor } from 'meteor/meteor'
import { Links } from '../index'

Meteor.publish('links', function () {
  return Links.find()
})
