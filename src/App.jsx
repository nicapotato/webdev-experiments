import { useState } from 'react'
import reactLogo from './assets/javascript.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <img src={reactLogo} className="logo vanilla" alt="JavaScript logo" />
        </a>
      </div>
      <h1>webdev-experiments</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">Static React build → docs/ → GitHub Pages</p>
    </div>
  )
}
