import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <header className=" MenuBar top-0 inset-x-0 flex  justify-start  d-flex w-full dark:bg-gray-800">
        <nav className="mx-auto  d-flex justify-between" aria-label="Global">
          <div
            id="navbar-collapse-basic"
            className=" overflow-hidden flex transition-all duration-300 basis  "
          >
            <div
              data-hs-scrollspy="#scrollspy-1"
              data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-1"
              className="flex d-flex gap-5 sm:flex-row sm:items-center sm:justify-end "
            >
              <a
                className="text-sm text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400 active"
                href="#first"
              >
                Fast Food
              </a>
              <a
                className="text-sm text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
                href="#second"
              >
                Desi
              </a>
              <a
                className="text-sm text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
                href="#third"
              >
                Broast
              </a>
              <a
                className="text-sm text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
                href="#fourth"
              >
                Drinks
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div id="scrollspy-1" className="mt-3  space-y-4 ">
        <div id="first">
          <div className="container-fluid menuSection mb-1">
            <div className="row">
              <div className="col-6">
                <h3 className="Heading">
                  <b>Fast Food</b>
                </h3>
              </div>
            </div>
          </div>

          <div className="container  mb-4 ">
            <div className="row ">
              <div className="col-6 underLine"></div>
            </div>
          </div>

          <div className="container  mb-4">
            <div className="card cardContainer">
              <div className="card-body">
                <div className="row">
                  <div className="col-6 text-center ">
                    <img
                      src="/images/burger.png"
                      className="card-img-top foodImage"
                      alt="food"
                    />
                  </div>
                  <div className="col-6 my-3 TopDealsCard">
                    <h1 className="foodName mb-3">
                      <b>HEAVY ZINGER</b>
                    </h1>

                    <h1 className="foodPrice mb-3">
                      <b>Rs. 650</b>
                    </h1>

                    <Link  to="/order">
                      <button className="button m-0">Order Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container  mb-4">
            <div className="card cardContainer">
              <div className="card-body">
                <div className="row">
                  <div className="col-6 text-center ">
                    <img
                      src="/images/burger.png"
                      className="card-img-top foodImage"
                      alt="food"
                    />
                  </div>
                  <div className="col-6 my-3 TopDealsCard">
                    <h1 className="foodName mb-3">
                      <b>HEAVY ZINGER</b>
                    </h1>

                    <h1 className="foodPrice mb-3">
                      <b>Rs. 650</b>
                    </h1>

                    <Link  to="/order">
                      <button className="button m-0">Order Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
              This is fast food
            </p> */}
        </div>

        <div id="second">
          <div className="container-fluid menuSection mb-1">
            <div className="row">
              <div className="col-6">
                <h3 className="Heading">
                  <b>Desi</b>
                </h3>
              </div>
            </div>
          </div>

          <div className="container  mb-4 ">
            <div className="row ">
              <div className="col-6 underLine"></div>
            </div>
          </div>

          <div className="container  mb-4">
            <div className="card cardContainer">
              <div className="card-body">
                <div className="row">
                  <div className="col-6 text-center ">
                    <img
                      src="/images/burger.png"
                      className="card-img-top foodImage"
                      alt="food"
                    />
                  </div>
                  <div className="col-6 my-3 TopDealsCard">
                    <h1 className="foodName mb-3">
                      <b>HEAVY ZINGER</b>
                    </h1>

                    <h1 className="foodPrice mb-3">
                      <b>Rs. 650</b>
                    </h1>

                    <Link  to="/order">
                      <button className="button m-0">Order Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container  mb-4">
            <div className="card cardContainer">
              <div className="card-body">
                <div className="row">
                  <div className="col-6 text-center ">
                    <img
                      src="/images/burger.png"
                      className="card-img-top foodImage"
                      alt="food"
                    />
                  </div>
                  <div className="col-6 my-3 TopDealsCard">
                    <h1 className="foodName mb-3">
                      <b>HEAVY ZINGER</b>
                    </h1>

                    <h1 className="foodPrice mb-3">
                      <b>Rs. 650</b>
                    </h1>

                    <Link  to="/order">
                      <button className="button m-0">Order Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div id="third">
          <div className="container-fluid menuSection mb-1">
            <div className="row">
              <div className="col-6">
                <h3 className="Heading">
                  <b>Broast</b>
                </h3>
              </div>
            </div>
          </div>

          <div className="container  mb-4 ">
            <div className="row ">
              <div className="col-6 underLine"></div>
            </div>
          </div>

          <div className="container  mb-4">
            <div className="card cardContainer">
              <div className="card-body">
                <div className="row">
                  <div className="col-6 text-center ">
                    <img
                      src="/images/burger.png"
                      className="card-img-top foodImage"
                      alt="food"
                    />
                  </div>
                  <div className="col-6 my-3 TopDealsCard">
                    <h1 className="foodName mb-3">
                      <b>HEAVY ZINGER</b>
                    </h1>

                    <h1 className="foodPrice mb-3">
                      <b>Rs. 650</b>
                    </h1>

                    <Link  to="/order">
                      <button className="button m-0">Order Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container  mb-4">
            <div className="card cardContainer">
              <div className="card-body">
                <div className="row">
                  <div className="col-6 text-center ">
                    <img
                      src="/images/burger.png"
                      className="card-img-top foodImage"
                      alt="food"
                    />
                  </div>
                  <div className="col-6 my-3 TopDealsCard">
                    <h1 className="foodName mb-3">
                      <b>HEAVY ZINGER</b>
                    </h1>

                    <h1 className="foodPrice mb-3">
                      <b>Rs. 650</b>
                    </h1>

                    <Link  to="/order">
                      <button className="button m-0">Order Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div id="fourth">
          <div className="container-fluid menuSection mb-1">
            <div className="row">
              <div className="col-6">
                <h3 className="Heading">
                  <b>Drinks</b>
                </h3>
              </div>
            </div>
          </div>

          <div className="container  mb-4 ">
            <div className="row ">
              <div className="col-6 underLine"></div>
            </div>
          </div>

          <div className="container  mb-4">
            <div className="card cardContainer">
              <div className="card-body">
                <div className="row">
                  <div className="col-6 text-center ">
                    <img
                      src="/images/burger.png"
                      className="card-img-top foodImage"
                      alt="food"
                    />
                  </div>
                  <div className="col-6 my-3 TopDealsCard">
                    <h1 className="foodName mb-3">
                      <b>HEAVY ZINGER</b>
                    </h1>

                    <h1 className="foodPrice mb-3">
                      <b>Rs. 650</b>
                    </h1>

                    <Link  to="/order">
                      <button className="button m-0">Order Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container  mb-4">
            <div className="card cardContainer">
              <div className="card-body">
                <div className="row">
                  <div className="col-6 text-center ">
                    <img
                      src="/images/burger.png"
                      className="card-img-top foodImage"
                      alt="food"
                    />
                  </div>
                  <div className="col-6 my-3 TopDealsCard">
                    <h1 className="foodName mb-3">
                      <b>HEAVY ZINGER</b>
                    </h1>

                    <h1 className="foodPrice mb-3">
                      <b>Rs. 650</b>
                    </h1>

                    <Link  to="/order">
                      <button className="button m-0">Order Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
              This is fast food
            </p> */}
        </div>
      </div>
    </>
  );
}
