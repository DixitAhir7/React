import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Card, Just } from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card />
    <Just />
  </StrictMode>,
)