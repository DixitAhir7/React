import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//it's making 2 div dynamically through js
createRoot(document.getElementById('root')).render(
  <App />
)