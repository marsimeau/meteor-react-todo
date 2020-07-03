import React from 'react'
import Container from '../components/grid/Container'
import Hello from '../components/Hello'

const Home = () => {
  return (
    <Container>
      <h1>
        Meteor React Todo
      </h1>
      <Hello />
    </Container>
  )
}

export default Home
