import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp(props) {
  const [cpassword, setCpassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const SignUpUser = (event) => {
    event.preventDefault();
    props.setProgress(30);
    axios
      .post(`http://${props.ip}:3002/signup`, {
        userName: props.userName,
        password: props.password,
        cpassword: cpassword,
        userEmail: props.userEmail,
        userAddress: props.userAddress
      })
      .then(
        (res) => {
          if (res.data == "Email is already registered") {
            setEmailError(res.data);
          } else {
            setEmailError("");
          }
          if (res.data == "Passwords do not match") {
            setPasswordError(res.data);
          } else {
            setPasswordError("");
          }
          if (
            res.data != "Email is already registered" &&
            res.data != "Passwords do not match"
          ) {
            props.setIsLogin(true);
            navigate("/");
          }
        },
        setTimeout(() => {
          props.setProgress(100);
        }, 300)
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    props.setProgress(30);
    setTimeout(() => {
      props.setProgress(100);
    }, 300);
  }, []);

  return (
    <>
      <div className="container mt-10 md:-mt-5 ">
        <div className="w-full mx-auto rounded-lg   md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight mb-4 text-gray-900 md:text-2xl dark:text-white">
              SiGN UP
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={SignUpUser}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  onChange={(e) => {
                    props.setUserName(e.target.value);
                  }}
                  type="text"
                  name="username"
                  id="username"
                  className="loginFormField  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="userAddress"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <textarea
                  value={props.userAddress}
                  onChange={(e) => {
                    props.setUserAddress(e.target.value);
                  }}
                  className="loginFormField  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                  id="userAddress"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  onChange={(e) => {
                    props.setUserEmail(e.target.value);
                  }}
                  type="email"
                  name="email"
                  id="email"
                  className={`loginFormField text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    emailError === "" ? "mb-4" : "mb-1"
                  }`}
                  required
                />
                <span
                  className={`errorMessage mb-4 mx-2 ${
                    emailError === "" ? "hidden" : ""
                  }`}
                >
                  {emailError}
                </span>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={(e) => {
                    props.setPassword(e.target.value);
                  }}
                  type="password"
                  name="password"
                  id="password"
                  className=" loginFormField text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  onChange={(e) => {
                    setCpassword(e.target.value);
                  }}
                  type="password"
                  name="confirmPassword"
                  id="cpassword"
                  className={`loginFormField text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    passwordError === "" ? "mb-4" : "mb-1"
                  }`}
                  required
                />
                <span
                  className={`errorMessage mb-4 mx-2 ${
                    passwordError === "" ? "hidden" : ""
                  }`}
                >
                  {passwordError}
                </span>
              </div>

              <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium underline text-primary-600 dark:text-primary-500"
                >
                  Log in
                </Link>
              </p>
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="LoginButton text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
