import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hellooo');
  }
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text"
            placeholder='#f15025'
            onChange={() => setColor}
            value={color} />
          <button className="btn" type='submit'>submit</button>
        </form>
      </section>
      <section className="colors">
        <h4>List here</h4>
      </section>
    </>
  )
}

export default App
