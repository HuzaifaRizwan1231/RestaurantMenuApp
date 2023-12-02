import React, { useState } from "react";

export default function OrderItem() {

  const [Quantity, setQuantity] = useState(1);

  const HandleIncreaseQuantity = () =>{
    
    setQuantity(Quantity+1);
  }

  const HandleDecreaseQuantity = () =>{
    if (Quantity>1){
      setQuantity(Quantity-1);
    }
  }



  return (
    <>
      <div className="container-fuid ">
        <div className="container mt-4 mb-2 text-center">
          <img
            className=" orderImage mx-auto"
            src="/images/burger.png"
            alt=""
          />
        </div>
        <div className="container-fluid mb-2 ItemInfo">
          <br />
          <h1 className="itemHeading text-center">
            <b>ZINGER BURGER</b>
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
                  <button onClick={HandleIncreaseQuantity} className="btn btnQuantity">+</button>
                </b>
              </div>
              <div className="col-2 mt-2">
                <b>{Quantity}</b>
              </div>
              <div className="col-5">
                <button onClick={HandleDecreaseQuantity} className="btn btnQuantity">-</button>
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

          <div className="container border-black border-2 DrinksMenu p-2">
            <div className="row text-center">
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
            <div className="row text-center">
              <div className="col-4">
                <button className=" btnOrder">Rs. 650</button>
              </div>
              <div className="col-8">
                <button className=" btnOrder">Add to Cart</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
