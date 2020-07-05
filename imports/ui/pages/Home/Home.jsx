import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Helmet } from 'react-helmet'
import { useTracker } from 'meteor/react-meteor-data'
import Container from '../../components/grid/Container'
import TaskList from '../../components/TaskList'
import { Tasks } from '../../../api/tasks'

import { heading } from './Home.scss'

// const tasks = [
//   { _id: 1, name: 'Foo', done: false },
//   { _id: 2, name: 'Bar', done: true }
// ]

const Home = () => {
  const tasksReady = useTracker(() => {
    if (Meteor.isClient) {
      return Meteor.subscribe('tasks').ready()
    }

    return true
  }, [])

  const tasks = useTracker(() => Tasks.find().fetch(), [])

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <h1 className={heading}>
          Todo list
        </h1>
        {tasksReady && (
          <TaskList id="homeTasks" tasks={tasks} />
        )}
      </Container>
    </>
  )
}

export default Home
