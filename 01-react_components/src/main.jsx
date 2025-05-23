import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App, UseWindowWidth, Name, AskUser, UserCard, User } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UseWindowWidth />
    <Name />
    <AskUser />
    <UserCard />
    <User />
  </StrictMode>,
)