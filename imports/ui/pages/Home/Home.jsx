import React from 'react'
import { Helmet } from 'react-helmet'
import Container from '../../components/grid/Container'
import Hello from '../../components/Hello'

import { heading } from './Home.scss'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <h1 className={heading}>
          Meteor React Todo
        </h1>
        <Hello />
      </Container>
    </>
  )
}

export default Home
