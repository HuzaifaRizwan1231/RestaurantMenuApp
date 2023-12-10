import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "./Modal";
import axios from "axios";
import Alert from "./Alert";

export default function OrderItem(props) {
  const [Quantity, setQuantity] = useState(1);

  const HandleIncreaseQuantity = () => {
    setQuantity(Quantity + 1);
  };

  const HandleDecreaseQuantity = () => {
    if (Quantity > 1) {
      setQuantity(Quantity - 1);
    }
  };

  useEffect(() => {
    if (!props.islogin) {
      document.getElementById("modalButton").click();
    }
  }, []);

  const [product, setProduct] = useState([]);
  const { product_id } = useParams();

  useEffect(() => {
    //fetching product
    axios
      .get(`http://localhost:3002/products/${product_id}`)
      .then((res) => setProduct(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (id, Quantity) => {    
    axios
      .post(
        `http://localhost:3002/addToCart`,{id:id,  Quantity: Quantity, userEmail: props.userEmail}
      )
      .then((res)=>showAlert())
      .catch((err)=>console.log(err));
  };
  
  const showAlert=()=>{
    document.getElementById("liveAlertBtn").click();
    setTimeout(() => {
    document.getElementById("close-alert-button").click();
    }, 1500);
  }
 
  return (
    <>
      <div id="liveAlertPlaceholder"></div>
      <Alert message = "Added to Cart!"/>
      {props.islogin ? (
        product.map((product) => (
          <div key={product.product_id} className="container-fluid ">
            <div className="container mt-4 mb-2 text-center">
              <img
                className=" orderImage mx-auto"
                src={product.product_image}
                alt=""
              />
            </div>
            <div className="container-fluid mb-2 ItemInfo">
              <br />
              <h1 className="itemHeading text-center">
                <b>{product.product_name}</b>
              </h1>
              <div className="container-fluid menuSection mb-1 mt-4">
                <div className="row">
                  <div className="col-6">
                    <h3 className="OrderHeading">
                      <b>Quantity</b>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="container  mb-4 ">
                <div className="row ">
                  <div className="col-6 underLine"></div>
                </div>
              </div>

              <div className="container text-center">
                <div className="row mx-auto">
                  <div className="col-5">
                    <b>
                      <button
                        onClick={HandleIncreaseQuantity}
                        className="btn btnQuantity"
                      >
                        +
                      </button>
                    </b>
                  </div>
                  <div className="col-2 mt-2">
                    <b>{Quantity}</b>
                  </div>
                  <div className="col-5">
                    <button
                      onClick={HandleDecreaseQuantity}
                      className="btn btnQuantity"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>

              <div className="container-fluid menuSection mb-1 mt-4">
                <div className="row">
                  <div className="col-6">
                    <h3 className="OrderHeading">
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
                <div className="row DrinksMenu text-center mx-auto p-4">
                  <div className="col-6 p-1 ">Pepsi</div>
                  <div className="col-6 p-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                  </div>

                  <div className="col-6 p-1">Coke</div>
                  <div className="col-6 p-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                  </div>

                  <div className="col-6 p-1">7UP</div>
                  <div className="col-6 p-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                  </div>
                </div>
              </div>
              <div className="fixed z-49 bottom-0 left-0 rounded-lg container-fluid bg-black p-2 ">
                <div className="container">
                  <div className="row text-center my-1">
                    <div className="col-4">
                      <button className=" btnOrder">
                        {product.product_price}
                      </button>
                    </div>
                    <div className="col-8">
                      <Link
                        onClick={()=> addToCart(product.product_id, Quantity)}
                        className="btnOrder"
                      >
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Modal />
      )}
    </>
  );
}
