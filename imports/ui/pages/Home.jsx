import React from 'react'
import Container from '/imports/ui/components/grid/Container'
import Hello from '/imports/ui/components/Hello'

const Home = () => {
  return (
    <Container>
      <h1>
        Meteor React Todos
      </h1>
      <Hello />
    </Container>
  )
}

export default Home
