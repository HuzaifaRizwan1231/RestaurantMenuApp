import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="container mt-16 ">
        <div className="w-full mx-auto rounded-lg   md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight mb-4 text-gray-900 md:text-2xl dark:text-white">
              LOG IN
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="loginFormField  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className=" loginFormField text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                  required=""
                />
              </div>
              
              <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  href="#"
                  className="font-medium underline text-primary-600 dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
              <div className="text-center mt-4">
              <button
                type="submit"
                className="LoginButton text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Log in
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
