import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Body from "./components/body";
import Menu from "./components/Menu";
import OrderItem from "./components/OrderItem";
import Login from "./components/Login";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Feedback from "./components/Feedback";
import OrderHistory from "./components/OrderHistory";
import CurrentOrders from "./components/orderManager/CurrentOrders.jsx";
import AdminFeedbacks from "./components/orderManager/AdminFeedbacks.jsx";
import LoadingBar from "react-top-loading-bar";
import CompletedOrders from "./components/orderManager/completedOrders.jsx";
import Footer from "./components/footer.jsx";
import Cart from "./components/cart.jsx";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
 
  const [islogin, setIsLogin] = useState(false);
  const [isAdminlogin, setIsAdminLogin] = useState(false);
  const [progress, setProgress] = useState(0);

  const [exploreDeal, setExploreDeal] = useState(false);
  const [exploreFast, setExploreFast] = useState(false);
  const [exploreDesi, setExploreDesi] = useState(false);
  const [exploreDrinks, setExploreDrinks] = useState(false);
  const [navigateTo, setNavigateTo] = useState("");

  const KeepLoggedIn = ()=>{
    
    const loggedInUser = localStorage.getItem('user')
    // localStorage.clear();
    if (loggedInUser){
      setIsLogin(true)
      const foundUser = JSON.parse(loggedInUser);
      setUserEmail(foundUser[0].user_email);
      setPassword(foundUser[0].user_password);
      setUserName(foundUser[0].user_username);
      setUserAddress(foundUser[0].user_address);
      
    }
  }
  
  
  

  const ip = 'restaurant-menu-app-backend.vercel.app';
  // const ip = 'localhost:3002';

  return (
    <>
      <Router>
        <LoadingBar
          color="#ffd100"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar
          ip={ip}
          setProgress={setProgress}
          setIsAdminLogin={setIsAdminLogin}
          isAdminlogin={isAdminlogin}
          userName={userName}
          userEmail={userEmail}
          islogin={islogin}
          setIsLogin={setIsLogin}
          setUserName={setUserName}
          setUserEmail={setUserEmail}
          setPassword={setPassword}
          userAddress = {userAddress}
          setUserAddress={setUserAddress}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Body
              KeepLoggedIn={KeepLoggedIn}
              setNavigateTo={setNavigateTo}
              ip={ip}
              setExploreDeal={setExploreDeal}
                setExploreFast={setExploreFast}
                setExploreDesi={setExploreDesi}
                setExploreDrinks={setExploreDrinks}
                setProgress={setProgress}
                isAdminlogin={isAdminlogin}
                setUserName={setUserName}
                setUserEmail={setUserEmail}
                setUserAddress={setUserAddress}
                setPassword={setPassword}
                islogin={islogin}
                setIsLogin={setIsLogin}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
              KeepLoggedIn={KeepLoggedIn}
              setNavigateTo={setNavigateTo}
              ip={ip}
                setProgress={setProgress}
                islogin={islogin}
                userEmail={userEmail}
                userAddress = {userAddress}
                setUserAddress={setUserAddress}
              />
            }
          />
          <Route
            path="/exploreMenu"
            element={
              <Menu KeepLoggedIn={KeepLoggedIn}

              setNavigateTo={setNavigateTo}
              ip={ip}
              exploreDeal={exploreDeal}
                exploreFast={exploreFast}
                exploreDesi={exploreDesi}
                exploreDrinks={exploreDrinks}
                setExploreDeal={setExploreDeal}
                setExploreFast={setExploreFast}
                setExploreDesi={setExploreDesi}
                setExploreDrinks={setExploreDrinks}
                setProgress={setProgress}
              />
            }
          />
          <Route
            path="/order/:product_id"
            element={
              <OrderItem KeepLoggedIn={KeepLoggedIn}
              setNavigateTo={setNavigateTo}
              ip={ip}
                islogin={islogin}
                setProgress={setProgress}
                userEmail={userEmail}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login KeepLoggedIn={KeepLoggedIn}
   
              navigateTo={navigateTo}
              ip={ip}
                setProgress={setProgress}
                setIsAdminLogin={setIsAdminLogin}
                userName={userName}
                setUserName={setUserName}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                password={password}
                setPassword={setPassword}
                userAddress = {userAddress}
                setUserAddress={setUserAddress}
                setIsLogin={setIsLogin}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <SignUp KeepLoggedIn={KeepLoggedIn}
              navigateTo={navigateTo}
              ip={ip}
                setProgress={setProgress}
                userName={userName}
                setUserName={setUserName}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                password={password}
                setPassword={setPassword}
                userAddress = {userAddress}
                setUserAddress={setUserAddress}
                setIsLogin={setIsLogin}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutUs KeepLoggedIn={KeepLoggedIn}  setNavigateTo={setNavigateTo} ip={ip} setProgress={setProgress} />}
          />
          <Route
            path="/feedback"
            element={
              <Feedback KeepLoggedIn={KeepLoggedIn}
              setNavigateTo={setNavigateTo}
              ip={ip}
                islogin={islogin}
                setProgress={setProgress}
                userEmail={userEmail}
              />
            }
          />
          <Route
            path="/contact"
            element={<ContactUs KeepLoggedIn={KeepLoggedIn}  setNavigateTo={setNavigateTo} ip={ip} setProgress={setProgress} />}
          />
          <Route
            path="/history"
            element={
              <OrderHistory KeepLoggedIn={KeepLoggedIn}
              setNavigateTo={setNavigateTo}
              ip={ip}
                islogin={islogin}
                setProgress={setProgress}
                userEmail={userEmail}
              />
            }
          />

          {/* Order Manager */}
          <Route
            path="/currentOrders"
            element={<CurrentOrders ip={ip} setProgress={setProgress} />}
          />
          <Route
            path="/completedOrders"
            element={<CompletedOrders ip={ip} setProgress={setProgress} />}
          />
          <Route
            path="/adminFeedBacks"
            element={<AdminFeedbacks ip={ip} islogin={islogin} setProgress={setProgress} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
