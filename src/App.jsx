import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Vondy App Builder</h1>
      <p>HMR test — last update: 2026-03-12T22:43:14.575Z</p>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
    </div>
  )
}

export default App
