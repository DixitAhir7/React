import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App, UseWindowWidth } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <useWindowWidth />
  </StrictMode>,
)