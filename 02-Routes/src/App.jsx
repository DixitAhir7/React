import { Routes, Route, Navigate } from "react-router"
import Home from "./components/Home"
import About from "./components/About"
import User from "./components/User"
import Header from "./components/Header"

function App() {

  const isAuth = true

  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/protectedRoute" element={!isAuth ? <Navigate to='/' /> : <User />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
    </>
  )
}

export default App
