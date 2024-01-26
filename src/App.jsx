import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"

const App = () => {
  const myDiv = (
    <div>
      <h1>Hello</h1>
    </div>
  );


  return (
    <BrowserRouter>
      <div className="w-11/12 flex flex-col mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {myDiv}
    </div>
    </BrowserRouter>
  )
};


export default App