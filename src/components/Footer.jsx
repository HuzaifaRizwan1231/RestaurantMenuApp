import React, { useState } from "react";
import { Link } from "react-router-dom";
 

export default function Footer() {
    const [scrollToTop, setscrollToTop] = useState();
    const HandleScroll = () => {
        setscrollToTop(window.scrollTo(0, 0));
    };
    
  return (
    <>
      <footer className=" dark:bg-gray-900 mt-48 sm:text-left text-center">
        <div className="footer mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link  to="/" onClick={HandleScroll} className="flex items-center">
                <span className="self-center mx-auto sm:-mx-auto Logo text-2xl font-semibold whitespace-nowrap dark:text-white">
                  <i>RFC</i>
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-16 sm:grid-cols-2">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  EXPLORE
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-3">
                    <Link onClick={HandleScroll} to="/" className="hover:underline" >
                     Home
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link onClick={HandleScroll}  to="/exploreMenu" className="hover:underline" >
                     Menu
                    </Link>
                  </li>
                  <li>
                    <Link onClick={HandleScroll} to="/login" className="hover:underline" >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  OUR COMPANY
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-3">
                    <Link onClick={HandleScroll}
                      to="/about"
                      className="hover:underline "
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link onClick={HandleScroll}
                      to="/contact"
                      className="hover:underline"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li >
                    <Link onClick={HandleScroll}
                      to="/feedback"
                      className="hover:underline"
                    >
                      Feedback
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm mx-auto text-gray-500 text-center dark:text-gray-400">
              © 2023{" "}
              <Link to="/" className="hover:underline">
                RFC™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
