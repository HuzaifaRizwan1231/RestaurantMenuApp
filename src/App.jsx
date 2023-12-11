import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Body from "./components/body";
import Cart from "./components/Cart";
import Menu from "./components/Menu";
import OrderItem from "./components/OrderItem";
import Login from "./components/Login";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Feedback from "./components/Feedback";
import OrderHistory from "./components/OrderHistory";
import CurrentOrders from "./components/order manager/CurrentOrders";
import AdminFeedbacks from "./components/order manager/AdminFeedbacks";
import CompletedOrders from "./components/order manager/completedOrders";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [islogin, setIsLogin] = useState(false);
  const [isAdminlogin, setIsAdminLogin] = useState(false);
  const [progress, setProgress] = useState(0);

  const [exploreFast, setExploreFast] = useState(false);
  const [exploreDesi, setExploreDesi] = useState(false);
  const [exploreDrinks, setExploreDrinks] = useState(false);
  const ip = '182.185.144.69';

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
        />
        <Routes>
          <Route
            path="/"
            element={
              <Body
              ip={ip}
                setExploreFast={setExploreFast}
                setExploreDesi={setExploreDesi}
                setExploreDrinks={setExploreDrinks}
                setProgress={setProgress}
                isAdminlogin={isAdminlogin}
                setUserName={setUserName}
                setUserEmail={setUserEmail}
                setPassword={setPassword}
                islogin={islogin}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
              ip={ip}
                setProgress={setProgress}
                islogin={islogin}
                userEmail={userEmail}
              />
            }
          />
          <Route
            path="/exploreMenu"
            element={
              <Menu
              ip={ip}
                exploreFast={exploreFast}
                exploreDesi={exploreDesi}
                exploreDrinks={exploreDrinks}
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
              <OrderItem
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
              <Login
              ip={ip}
                setProgress={setProgress}
                setIsAdminLogin={setIsAdminLogin}
                userName={userName}
                setUserName={setUserName}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                password={password}
                setPassword={setPassword}
                setIsLogin={setIsLogin}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <SignUp
              ip={ip}
                setProgress={setProgress}
                userName={userName}
                setUserName={setUserName}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                password={password}
                setPassword={setPassword}
                setIsLogin={setIsLogin}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutUs ip={ip} setProgress={setProgress} />}
          />
          <Route
            path="/feedback"
            element={
              <Feedback
              ip={ip}
                islogin={islogin}
                setProgress={setProgress}
                userEmail={userEmail}
              />
            }
          />
          <Route
            path="/contact"
            element={<ContactUs  ip={ip} setProgress={setProgress} />}
          />
          <Route
            path="/history"
            element={
              <OrderHistory
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
            element={<AdminFeedbacks ip={ip} setProgress={setProgress} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
