// Hub games in public/games/ — tutorials: Chris Courses (https://www.youtube.com/@ChrisCourses)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
