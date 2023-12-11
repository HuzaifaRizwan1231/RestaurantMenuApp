import React, { useState } from "react";
import { Link } from "react-router-dom";
 

export default function Footer() {
    const [scrollToTop, setscrollToTop] = useState();
    const HandleScroll = () => {
        setscrollToTop(window.scrollTo(0, 0));
    };
    
  return (
    <>
      <footer class="footer dark:bg-gray-900 mt-48 sm:text-left text-center">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <Link  to="/" onClick={HandleScroll} class="flex items-center">
                <span class="self-center mx-auto sm:-mx-auto Logo text-2xl font-semibold whitespace-nowrap dark:text-white">
                  <i>RFC</i>
                </span>
              </Link>
            </div>
            <div class="grid grid-cols-1 gap-8 sm:gap-16 sm:grid-cols-2">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  EXPLORE
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-3">
                    <Link onClick={HandleScroll} to="/" class="hover:underline" >
                     Home
                    </Link>
                  </li>
                  <li class="mb-3">
                    <Link onClick={HandleScroll}  to="/exploreMenu" class="hover:underline" >
                     Menu
                    </Link>
                  </li>
                  <li>
                    <Link onClick={HandleScroll} to="/login" class="hover:underline" >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  OUR COMPANY
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-3">
                    <Link onClick={HandleScroll}
                      to="/about"
                      class="hover:underline "
                    >
                      About Us
                    </Link>
                  </li>
                  <li class="mb-3">
                    <Link onClick={HandleScroll}
                      to="/contact"
                      class="hover:underline"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li >
                    <Link onClick={HandleScroll}
                      to="/feedback"
                      class="hover:underline"
                    >
                      Feedback
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm mx-auto text-gray-500 text-center dark:text-gray-400">
              © 2023{" "}
              <Link to="/" class="hover:underline">
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
