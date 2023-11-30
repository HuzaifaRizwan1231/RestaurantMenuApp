import React , { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Body from "./components/body";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import OrderItem from "./components/OrderItem";
import Login from "./components/Login";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignUp from "./components/SignUp";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Body/>}/>           
            <Route path="/cart" element={<Cart/>}/>           
            <Route path="/exploreMenu" element={<Menu/>}/>      
            <Route path="/order" element={<OrderItem/>}/>      
            <Route path="/login" element={<Login/>}/>      
            <Route path="/signup" element={<SignUp/>}/>      
          </Routes>
      </Router>
      
       
    </>
  );
}

export default App;
