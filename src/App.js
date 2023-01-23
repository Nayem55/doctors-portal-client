import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Appointment from "./Components/Appointment/Appointment";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashborad/Dashboard";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./PrivateRoute";
import { useState } from "react";

function App() {
  const [dark , setDark] = useState(false); 
  return (
    <div className={`${dark?"dark":"light"}`}>
      <Header dark={dark} setDark={setDark} ></Header>
      <Routes>
        <Route path="/" element={<Home dark={dark}/>}></Route>
        <Route path="/home" element={<Home dark={dark}/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/appointment"
          element={
            <PrivateRoute>
              <Appointment />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login dark={dark}/>}></Route>
        <Route path="/signup" element={<Signup dark={dark} />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }></Route>
      </Routes>
      <Toaster />
      <Footer></Footer>
    </div>
  );
}

export default App;
