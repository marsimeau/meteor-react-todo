import React from 'react'
import { Helmet } from 'react-helmet'
import Container from '../../components/grid/Container'
import TaskList from '../../components/TaskList'

import { heading } from './Home.scss'

const tasks = [
  { _id: 1, name: 'Foo', done: false },
  { _id: 2, name: 'Bar', done: true }
]

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <h1 className={heading}>
          Todo list
        </h1>
        <TaskList id="homeTasks" tasks={tasks} />
      </Container>
    </>
  )
}

export default Home
