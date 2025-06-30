import { Routes, Route } from "react-router"
import Home from "./components/Home"
import About from "./components/About"
import User from "./components/User"
import Header from "./components/Header"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
    </>
  )
}

export default App
