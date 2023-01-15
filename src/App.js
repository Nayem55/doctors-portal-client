import Header from "./Components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from './Components/About/About'
import Appointment from "./Components/Appointment/Appointment";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="app">
     <Header></Header>
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/appointment" element={<Appointment/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
