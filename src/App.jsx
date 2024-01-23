import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"

const App = () => {
  return (
    <div className="w-11/12 flex flex-col mx-auto">
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  )
}

export default App