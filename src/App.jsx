import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import logo from './logo_take_a_stick.jpg';
import './app.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="header-container">
          <div className="logo">
            <img className="logo" src={logo} alt="Logo" />
          </div>
          <div id="navBar"><Navbar />
          </div>
        </div>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
