import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App2 from './App2.js'
import App from './App.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
