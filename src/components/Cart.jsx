import React, { useState, useEffect,  } from "react";
import Modal from "./Modal";
import axios from "axios";
import Alert from "./Alert";
import RemoveFromCartAlert from "./RemoveFromCartAlert";





export default function Cart(props) {
 
  const [products, setProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0)

  const FetchData =()=>{

    if (!props.islogin) {
      document.getElementById("modalButton").click();
    }
    else{
      props.setProgress(30)
      //fetching cart items
      axios
      .post(`http://${props.ip}:3002/cartItems`, { userEmail: props.userEmail })
      .then((response) => setProducts(response.data.data),setTimeout(() => {
        props.setProgress(100)
        products.map(product=>{
          {updateTotal(product.product_price*product.order_quantity)}
        })
      }, 300))
      .catch((error) => console.log(error));
    }

  }

 
  useEffect(() => {
    FetchData();
  }, []);

  
  const removeFromCart=(order_id)=>{
    props.setProgress(30)
    console.log(order_id)
    axios
    .post(`http://${props.ip}:3002/removeCartItem`, { userEmail: props.userEmail, order_id: order_id })
    .then((res)=>FetchData(),ClickOnRemoveAlert(),setTimeout(() => {
      props.setProgress(100)
    }, 300))
    .catch((error) => console.log(error));
  }

  const Checkout = ()=>{
    props.setProgress(30)
    axios
        .post(`http://${props.ip}:3002/checkout`, {userEmail: props.userEmail})
        .then(
          (res)=>FetchData(),ClickOnAlert(),setTimeout(() => {
            props.setProgress(100)
          }, 300)
        )
        .catch((error) => console.log(error));
  }

  const ClickOnAlert = ()=>{
    document.getElementById("liveAlertBtn").click();
    setTimeout(() => {
      document.getElementById("close-alert-button").click();
    }, 1500);
  }

  const ClickOnRemoveAlert = ()=>{
    document.getElementById("liveRemoveAlertBtn").click();
    setTimeout(() => {
      document.getElementById("close-remove-alert-button").click();
    }, 1500);
  }

  const updateTotal=(price)=>{
    console.log(price)
    setTotalCost(totalCost+price)
  }
 
  return (
    <>
      <div id="liveAlertPlaceholder"></div>
      <Alert message = "Checked out Successfully"/>
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
                        <b>Quantity: {" "}{product.order_quantity}</b>
                      </h1>
                      <h1 className="foodPrice mb-3">
                        <b>Total: {" Rs. "}{product.product_price*product.order_quantity}</b>
                      </h1>
                     
                      <div className="row">
                        <button onClick={()=>{removeFromCart(product.order_id)}} className="RemoveButton mx-auto"><i
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
            </div>
          </div>

          <div className="container text-center mt-5">
          {products.length == 0 ? (
            <h6 className="mt-16">Your Cart is Empty</h6>
          ): (
            <><h1 className="text-center display-6 mb-4">
              Total: {totalCost}
          </h1>
          <button
              onClick={Checkout}
              className="LoginButton text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Checkout
            </button></>
            )}
            
          </div>
        </div>
      ) : (
        <Modal />
      )}
    </>
  );
}
