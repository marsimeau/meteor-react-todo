import { Meteor } from 'meteor/meteor'
import { Tasks } from '../../api/tasks'

function insertLink({ name, done }) {
  Tasks.insert({ name, done, createdAt: new Date() })
}

Meteor.startup(() => {
  // If the Tasks collection is empty, add some data.
  if (Tasks.find().count() === 0) {
    insertLink({
      name: 'Your first task',
      done: true
    })
  }
})
