import React , { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Body from "./components/body";
import Cart from "./components/cart";
import Menu from "./components/Menu";
import OrderItem from "./components/OrderItem";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



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
          </Routes>
      </Router>
      
       
    </>
  );
}

export default App;
