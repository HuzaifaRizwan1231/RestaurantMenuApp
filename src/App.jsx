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
  Link,
} from "react-router-dom";
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Feedback from "./components/Feedback";
import OrderHistory from "./components/OrderHistory";



function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [islogin,setIsLogin] = useState(false);
  

  return (
    <>
    
      <Router>
          <Navbar userName = {userName}  userEmail = {userEmail}/>
          <Routes>
            <Route path="/" element={<Body/>}/>           
            <Route path="/cart" element={<Cart islogin = {islogin}/>}/>           
            <Route path="/exploreMenu" element={<Menu/>}/>      
            <Route path="/order" element={<OrderItem islogin = {islogin}/>}/>      
            <Route path="/login" element={<Login userName = {userName} setUserName={setUserName} userEmail = {userEmail} setUserEmail={setUserEmail} password = {password} setPassword={setPassword} setIsLogin = {setIsLogin}/>}/>      
            <Route path="/signup" element={<SignUp userName = {userName} setUserName={setUserName} userEmail = {userEmail} setUserEmail={setUserEmail} password = {password} setPassword={setPassword} setIsLogin = {setIsLogin}/>}/>      
            <Route path="/about" element={<AboutUs/>}/>      
            <Route path="/feedback" element={<Feedback islogin = {islogin}/>}/>      
            <Route path="/contact" element={<ContactUs/>}/>      
            <Route path="/history" element={<OrderHistory islogin = {islogin}/>}/>      
          </Routes>
      </Router>
      
       
    </>
  );
}

export default App;
