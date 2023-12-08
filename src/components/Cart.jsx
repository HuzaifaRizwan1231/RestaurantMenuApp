import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import axios from "axios";


export default function Cart(props) {
  const navigate = useNavigate();
  const [Quantity, setQuantity] = useState(1);

  const HandleIncreaseQuantity = () => {
    setQuantity(Quantity + 1);
  };

  const HandleDecreaseQuantity = () => {
    if (Quantity > 1) {
      setQuantity(Quantity - 1);
    }
  };

  const [products, setProducts] = useState([]);
  const FetchData =()=>{

    if (!props.islogin) {
      document.getElementById("modalButton").click();
    }

    //fetching cart items
    axios
      .post("http://localhost:3002/cartItems", { userEmail: props.userEmail })
      .then((response) => setProducts(response.data.data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    FetchData();
  }, []);


  const removeFromCart=(product_id)=>{
    axios
      .post("http://localhost:3002/removeCartItem", { userEmail: props.userEmail, product_id: product_id })
      .then(
        alert("Removed from cart"),
      FetchData()
      )
      .catch((error) => console.log(error));
  }


  const Checkout = ()=>{
    axios
      .post("http://localhost:3002/checkout", {userEmail: props.userEmail})
      .then(
      alert("Checked out"),
      FetchData()
      )
      .catch((error) => console.log(error));
  }

  return (
    <>
      {props.islogin ? (
        <div className="container mt-4">
          <h1 className="text-center display-6 mb-4">
            <b>CART</b>
          </h1>

          {products.map((product) => (
            <div key={product.order_id} className="container mb-4">
              <div className="card cardContainer">
                <div className="card-body">
                  <div className="row">
                    <div className="col-5 text-center ">
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
                        <b>{product.product_price}</b>
                      </h1>

                      {/* <div className="row mx-auto text-center">
                        <div className="col-5 btnQuantityCart">
                          <b>
                            <button
                              onClick={HandleIncreaseQuantity}
                              className=" "
                            >
                              +
                            </button>
                          </b>
                        </div>
                        <div className="col-2 m-auto p-0">
                          <b>{Quantity}</b>
                        </div>
                        <div className="col-5 btnQuantityCart">
                          <b>
                            <button
                              onClick={HandleDecreaseQuantity}
                              className=" "
                            >
                              -
                            </button>
                          </b>
                        </div>
                      </div> */}
                      <div className="row">
                        <button onClick={()=>{removeFromCart(product.product_id)}} className="RemoveButton mx-auto"><i
                        className="fa-solid fa-trash mr-1.5"
                        style={{ color: "#fff" }}
                      ></i>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="container text-center mt-5">
          {products.length == 0 ? (
            <h6 className="mt-16">Your Cart is Empty</h6>
          ): (<button
              onClick={Checkout}
              className="LoginButton w-75 text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Checkout
            </button>)}
            
          </div>
        </div>
      ) : (
        <Modal />
      )}
    </>
  );
}
