import React, { useState } from 'react'
import ChangePrimary from './ChangePrimary'

const Hello = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
      <ChangePrimary />
    </div>
  )
}

export default Hello
