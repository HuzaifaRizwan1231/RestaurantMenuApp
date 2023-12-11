import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import axios from "axios";
import Alert from "./Alert";
import RemoveFromCartAlert from "./RemoveFromCartAlert";

export default function Cart(props) {
  const [products, setProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const FetchData = async () => {
    await props.KeepLoggedIn();
    if (!props.islogin) {
      document.getElementById("modalButton").click();
    } else {
      props.setProgress(30);
      //fetching cart items
      axios
        .post(`http://${props.ip}:3002/cartItems`, {
          userEmail: props.userEmail,
        })
        .then(
          (response) => setProducts(response.data.data),
          setTimeout(() => {
            props.setProgress(100);
          }, 300)
        )
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    FetchData();
    setAddress(props.userAddress);
    props.setNavigateTo("cart")
  }, []);

  const removeFromCart = (order_id) => {
    props.setProgress(30);
    console.log(order_id);
    axios
      .post(`http://${props.ip}:3002/removeCartItem`, {
        userEmail: props.userEmail,
        order_id: order_id,
      })
      .then(
        (res) => FetchData(),
        ClickOnRemoveAlert(),
        setTimeout(() => {
          props.setProgress(100);
        }, 300)
      )
      .catch((error) => console.log(error));
  };

  const Checkout = (event) => {
    event.preventDefault();
    props.setProgress(30);
    axios
      .post(`http://${props.ip}:3002/checkout`, { userEmail: props.userEmail ,contact:contact,address:address})
      .then(
        (res) => FetchData(),
        ClickOnAlert(),
        setTimeout(() => {
          props.setProgress(100);
        }, 300)
      )
      .catch((error) => console.log(error));
  };

  const ClickOnAlert = () => {
    document.getElementById("liveAlertBtn").click();
    setTimeout(() => {
      document.getElementById("close-alert-button").click();
    }, 1500);
  };

  const ClickOnRemoveAlert = () => {
    document.getElementById("liveRemoveAlertBtn").click();
    setTimeout(() => {
      document.getElementById("close-remove-alert-button").click();
    }, 1500);
  };

  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const CheckoutRef = useRef(null);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);
  const toggleCheckout = () => {
    setCheckoutOpen(!isCheckoutOpen);
  };

  useEffect(() => {
    //handling outside click
    const handleClickOutside = (event) => {
      if (CheckoutRef.current && !CheckoutRef.current.contains(event.target)) {
        const exceptionButton = document.querySelector(
          ".exception-buttonCheck"
        );
        if (exceptionButton && exceptionButton.contains(event.target)) {
          return;
        }
        setCheckoutOpen(false);
      }
    };

    // Add the click event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
    
  }, [isCheckoutOpen, CheckoutRef]);

  return (
    <>
      <div id="liveAlertPlaceholder"></div>
      <Alert message="Checked out Successfully" />
      <RemoveFromCartAlert />
      {props.islogin ? (
        <div className="container mt-4">
          <h1 className="text-center display-6 mb-4">
            <b>CART</b>
          </h1>
          <div className="row md:mt-10">
            <div className="col-12 col-md-6 md:mx-auto">
              {products.map((product) => (
                <div key={product.order_id} className="container mb-4">
                  <div className="card cardContainer">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-5 text-center m-auto">
                          <img
                            src={product.product_image}
                            className="card-img-top foodImage"
                            alt="food"
                          />
                        </div>
                        <div className="col-7 my-3 TopDealsCard">
                          <h1 className="foodName mb-3">
                            <b>{product.product_name}</b>
                          </h1>

                          <h1 className="foodPrice mb-3">
                            <b>Quantity: {product.order_quantity}</b>
                          </h1>
                          <h1 className="foodPrice mb-3">
                            <b>
                              Total: {" Rs. "}
                              {product.product_price * product.order_quantity}
                            </b>
                          </h1>

                          <div className="row">
                            <button
                              onClick={() => {
                                removeFromCart(product.order_id);
                              }}
                              className="RemoveButton mx-auto"
                            >
                              <i
                                className="fa-solid fa-trash mr-1.5"
                                style={{ color: "#fff" }}
                              ></i>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="container text-center mt-5">
            {products.length == 0 ? (
              <h6 className="mt-16">Your Cart is Empty</h6>
            ) : (
              <>
                <h1 className="text-center display-6 mb-4">
                  Total: {totalCost}
                </h1>
                <button
                  onClick={toggleCheckout}
                  className="LoginButton exception-buttonCheck text-sm  py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Checkout
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <Modal />
      )}
     

      <aside
        ref={CheckoutRef}
        className={`fixed bottom-0 left-0 z-39 w-full checkoutBar pt-4 transition-transform border-r sidebar border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
          isCheckoutOpen ? "" : "translate-y-full"
        }`}
        aria-label="Sidebar"
      >
        <h1 className="text-center display-6 mb-4">
            <b>CHECKOUT</b>
          </h1>
        <form  onSubmit={Checkout} className=" sidebar h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800">
          <div>
            <label
              htmlFor="contact"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Contact
            </label>
            <input
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
              type="number"
              name="contact"
              id="contact"
              className="CheckoutField  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
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
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className="CheckoutField  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
              id="userAddress"
              rows="2"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
             
              className="LoginButton  text-sm py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Place Order
            </button>
          </div>
        </form>
      </aside>
    </>
  );
}
