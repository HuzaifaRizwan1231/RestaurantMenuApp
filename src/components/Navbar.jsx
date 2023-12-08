import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const [isProfileBarOpen, setProfilebarOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const NavBarRef = useRef(null);
  const ProfileBarRef = useRef(null);
  const navigate = useNavigate();
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    //updating number of cart items
    if (props.islogin) {
      //fetching cart items
      axios
        .post("http://localhost:3002/cartItems", { userEmail: props.userEmail })
        .then((response) => setCartQuantity(response.data.data.length))
        .catch((error) => console.log(error));
    }

    //handling outside click
    const handleClickOutside = (event) => {
      if (NavBarRef.current && !NavBarRef.current.contains(event.target)) {
        const exceptionButton = document.querySelector(".exception-button");
        if (exceptionButton && exceptionButton.contains(event.target)) {
          return;
        }
        setNavOpen(false);
      }

      if (
        ProfileBarRef.current &&
        !ProfileBarRef.current.contains(event.target)
      ) {
        const exceptionProfileButton = document.querySelector(
          ".exception-Profilebutton"
        );
        if (
          exceptionProfileButton &&
          exceptionProfileButton.contains(event.target)
        ) {
          return;
        }
        setProfilebarOpen(false);
      }
    };

    // Add the click event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isNavOpen, NavBarRef, isProfileBarOpen, ProfileBarRef]);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const toggleProfileBar = () => {
    setProfilebarOpen(!isProfileBarOpen);
  };

  const SignOut = () => {
    props.setUserName("");
    props.setPassword("");
    props.setUserEmail("");
    props.setIsLogin(false);
    props.setIsAdminLogin(false);
    document.getElementById("dropdown-button").click();
    navigate("/");
  };

  return (
    <>
      <nav className=" top-0 z-50 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={toggleNav}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className=" exception-button inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm: hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link
                to={props.isAdminlogin ? "/currentOrders" : "/"}
                id="logo"
                className="flex ms-2 md:me-24"
              >
                {/* <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                /> */}
                <span className=" Logo self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  <i>RFC</i>
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  {props.islogin || props.isAdminlogin ? (
                    <button
                      onClick={toggleProfileBar}
                      type="button"
                      className=" exception-Profilebutton buttonNav"
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                      id="dropdown-button"
                    >
                      <i
                        className="fa-solid fa-user mr-1.5"
                        style={{ color: "#fff" }}
                      ></i>
                      {props.userName}
                      <i
                        className="fa-solid fa-caret-down ml-1.5"
                        style={{ color: "#fff" }}
                      ></i>
                    </button>
                  ) : (
                    <>
                      <Link to="/login" className="uppercase buttonNav">
                        <i
                          className="fa-solid fa-user mr-1.5"
                          style={{ color: "#fff" }}
                        ></i>
                        Log in
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        ref={ProfileBarRef}
        className={`z-50 profilebar top-10 right-3 fixed my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 ${
          isProfileBarOpen ? "" : "hidden"
        }`}
        id="dropdown-user"
      >
        <div className="px-4 py-3" role="none">
          <p
            className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
            role="none"
          >
            {props.userEmail}
          </p>
        </div>
        <ul className="py-1" role="none">
          <li>
            <a
              onClick={SignOut}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem"
            >
              Log out
            </a>
          </li>
        </ul>
      </div>

      {/* SideBar */}
      <aside
        ref={NavBarRef}
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform border-r sidebar border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
          isNavOpen ? "" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className=" sidebar h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {props.isAdminlogin ? (
              <>
                <li>
                  <Link
                    onClick={toggleNav}
                    to="/currentOrders"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <i
                      className="fa-solid fa-list"
                      style={{ color: "#9ca3af" }}
                    ></i>
                    <span className="ms-3">Current Orders</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleNav}
                    to="/completedOrders"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "#9ca3af" }}
                    ></i>
                    <span className="ms-3">Completed Orders</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleNav}
                    to="/adminFeedbacks"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <i
                      className="fa-solid fa-comment"
                      style={{ color: "#9ca3af" }}
                    ></i>
                    <span className="ms-3">Feedbacks</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    onClick={toggleNav}
                    to="/"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <i
                      className="fa-solid fa-house"
                      style={{ color: "#9ca3af" }}
                    ></i>
                    <span className="ms-3">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleNav}
                    to="/login"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <i
                      className="fa-solid fa-user"
                      style={{ color: "#9ca3af" }}
                    ></i>

                    <span className="ms-3">Login</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleNav}
                    to="/signup"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <i
                      className="fa-solid fa-user"
                      style={{ color: "#9ca3af" }}
                    ></i>

                    <span className="ms-3">Sign Up</span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleNav}
                    to="/cart"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <i
                      className="fa-solid fa-cart-shopping"
                      style={{ color: "#9ca3af" }}
                    ></i>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      My Cart
                    </span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      {cartQuantity}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleNav}
                    to="/history"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <i
                      className="fa-solid fa-list"
                      style={{ color: "#9ca3af" }}
                    ></i>

                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Order History
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleNav}
                    to="/exploreMenu"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <i
                      className="fa-solid fa-pizza-slice"
                      style={{ color: "#9ca3af" }}
                    ></i>

                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Explore Menu
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={toggleNav}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <i
                      className="fa-solid fa-circle-info"
                      style={{ color: "#9ca3af" }}
                    ></i>

                    <span className="flex-1 ms-3 whitespace-nowrap">
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/feedback"
                    onClick={toggleNav}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <i
                      className="fa-solid fa-comment"
                      style={{ color: "#9ca3af" }}
                    ></i>

                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Feedback
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={toggleNav}
                    to="/contact"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <i
                      className="fa-solid fa-phone"
                      style={{ color: "#9ca3af" }}
                    ></i>

                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Contact Us
                    </span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </aside>
      {/* <Outlet/> */}
    </>
  );
}
