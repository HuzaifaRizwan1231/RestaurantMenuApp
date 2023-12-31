import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Menu(props) {
  const [fastFoodProducts, setFastFoodProducts] = useState([]);
  const [desiProducts, setDesiProducts] = useState([]);
  const [drinkProducts, setDrinkProducts] = useState([]);
  const [dealProducts, setDealProducts] = useState([]);

  const [scrollToTop, setscrollToTop] = useState();

  const HandleScroll = () => {
    setscrollToTop(window.scrollTo(0, 0));
  };

  useEffect(() => {
    const LoadMenu=async() =>{
      props.setProgress(30);

      const LoadAllItems = async ()=>{

        //fetching data
    
        //Deals
        axios
        .get(`https://${props.ip}/deals`)
        .then((response) => setDealProducts(response.data.data))
        .catch((error) => console.log(error));
    
    
        // FastFood
        axios
          .get(`https://${props.ip}/fastFood`)
          .then((response) => setFastFoodProducts(response.data.data))
          .catch((error) => console.log(error));
    
        // Desi
        axios
          .get(`https://${props.ip}/desi`)
          .then((response) => setDesiProducts(response.data.data))
          .catch((error) => console.log(error));
    
        axios
          .get(`https://${props.ip}/drinks`)
          .then((response) => setDrinkProducts(response.data.data))
          .catch((error) => console.log(error));
      }
      await LoadAllItems();
       
  
      setTimeout(() => {
        props.setProgress(100);
      }, 300);
  
      if (props.exploreDeal) {
        setTimeout(() => {
          document.getElementById("firstNav").click();
        }, 476);
        
      }
      else if (props.exploreFast) {
        setTimeout(() => {
          document.getElementById("secondNav").click();
        }, 476);
      }
       else if (props.exploreDesi) {
        setTimeout(() => {
          document.getElementById("thirdNav").click();
        }, 476);
      } else if (props.exploreDrinks) {
        setTimeout(() => {
          document.getElementById("fourthNav").click();
        }, 476);
      }
      props.setNavigateTo("exploreMenu")
      props.KeepLoggedIn();
    }
    LoadMenu();
  }, []);

  return (
    <>
      <header className="MenuBar uppercase top-0 inset-x-0 flex  justify-start  d-flex w-full dark:bg-gray-800">
        <nav className="mx-auto  d-flex justify-between" aria-label="Global">
          <div
            id="navbar-collapse-basic"
            className=" overflow-hidden flex transition-all duration-300 basis  "
          >
            <div
              data-hs-scrollspy="#scrollspy-1"
              data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-1"
              className="flex d-flex gap-4 sm:flex-row sm:items-center sm:justify-end "
            >
               <a
                id="firstNav"
                className=" text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400 active"
                href="#first"
              >
                Deals
              </a>

              <a
                id="secondNav"
                className=" text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400 active"
                href="#second"
              >
                Fast Food
              </a>

              <a
                id="thirdNav"
                className=" text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
                href="#third"
              >
                Desi
              </a>
              <a
                id="fourthNav"
                className=" text-gray-700 leading-6 hover:text-gray-500 focus:outline-none focus:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:text-blue-500 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400"
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
          <div className="container menuSection mb-1">
            <div className="row">
              <div className="col-6">
                <h3 className="Heading">
                  <b>Deals</b>
                </h3>
              </div>
            </div>
          </div>

          <div className="container mb-4 ">
            <div className="row ">
              <div className="col-6 underLine"></div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              {dealProducts.map((dealProduct) => (
                <div
                  key={dealProduct.product_id}
                  className="col-12 col-md-4 mb-4"
                >
                  <div className="card cardContainer">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6 text-center ">
                          <img
                            src={dealProduct.product_image}
                            className="card-img-top foodImage"
                            alt="food"
                          />
                        </div>
                        <div className="col-6 my-3 TopDealsCard">
                          <h1 className="foodName mb-3">
                            <b>{dealProduct.product_name}</b>
                          </h1>

                          <h1 className="foodPrice mb-3">
                            <b>Rs. {dealProduct.product_price}</b>
                          </h1>

                          <Link onClick={HandleScroll} to={`/order/${dealProduct.product_id}`}>
                            <button className="button m-0">Order Now</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
             
            </div>
          </div>
        </div>

        <div id="second">
          <div className="container menuSection mb-1">
            <div className="row">
              <div className="col-6">
                <h3 className="Heading">
                  <b>Fast Food</b>
                </h3>
              </div>
            </div>
          </div>

          <div className="container mb-4 ">
            <div className="row ">
              <div className="col-6 underLine"></div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              {fastFoodProducts.map((fastFoodProduct) => (
                <div
                  key={fastFoodProduct.product_id}
                  className="col-12 col-md-4 mb-4"
                >
                  <div className="card cardContainer">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6 text-center ">
                          <img
                            src={fastFoodProduct.product_image}
                            className="card-img-top foodImage"
                            alt="food"
                          />
                        </div>
                        <div className="col-6 my-3 TopDealsCard">
                          <h1 className="foodName mb-3">
                            <b>{fastFoodProduct.product_name}</b>
                          </h1>

                          <h1 className="foodPrice mb-3">
                            <b>Rs. {fastFoodProduct.product_price}</b>
                          </h1>

                          <Link onClick={HandleScroll} to={`/order/${fastFoodProduct.product_id}`}>
                            <button className="button m-0">Order Now</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
             
            </div>
          </div>
        </div>

        <div id="third">
          <div className="container menuSection mb-1">
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

          <div className="container">
            <div className="row">
              {desiProducts.map((desiProduct) => (
                <div
                  key={desiProduct.product_id}
                  className="col-12 col-md-4 mb-4"
                >
                  <div className="card cardContainer">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6 text-center ">
                          <img
                            src={desiProduct.product_image}
                            className="card-img-top foodImage"
                            alt="food"
                          />
                        </div>
                        <div className="col-6 my-3 TopDealsCard">
                          <h1 className="foodName mb-3">
                            <b>{desiProduct.product_name}</b>
                          </h1>

                          <h1 className="foodPrice mb-3">
                            <b>Rs. {desiProduct.product_price}</b>
                          </h1>

                          <Link onClick={HandleScroll} to={`/order/${desiProduct.product_id}`}>
                            <button className="button m-0">Order Now</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="fourth">
          <div className="container menuSection mb-1">
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

          <div className="container">
            <div className="row">
              {drinkProducts.map((drinkProduct) => (
                <div
                  key={drinkProduct.product_id}
                  className="col-12 col-md-4 mb-4"
                >
                  <div className="card cardContainer">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6 text-center ">
                          <img
                            src={drinkProduct.product_image}
                            className="card-img-top foodImage"
                            alt="food"
                          />
                        </div>
                        <div className="col-6 my-3 TopDealsCard">
                          <h1 className="foodName mb-3">
                            <b>{drinkProduct.product_name}</b>
                          </h1>

                          <h1 className="foodPrice mb-3">
                            <b>Rs. {drinkProduct.product_price}</b>
                          </h1>

                          <Link onClick={HandleScroll} to={`/order/${drinkProduct.product_id}`}>
                            <button className="button m-0">Order Now</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
