import React from 'react'
import "./App.css"
import { useState } from 'react'

const App = () => {

  const [status, setStatus] = useState(false)

  return (
    <div className='App'>
      {
        status? <h1>Hello World</h1> : ""
      }

      <button onClick={() => setStatus(true)}>Show</button>
      <button onClick={() => setStatus(false)}>Hide</button>

    </div>
  )
}

export default App
