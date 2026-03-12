import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Vondy App Builder</h1>
      <p>Edited externally on GitHub!</p>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
    </div>
  )
}

export default App
