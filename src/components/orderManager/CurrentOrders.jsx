import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../Alert";

export default function CurrentOrders(props) {
  const [currentOrders, setCurrentOrders] = useState([]);

  const FetchCurrentOrders = () => {
    //fetching order history
    axios
      .post(`http://${props.ip}:3002/currentOrders`)
      .then((response) => setCurrentOrders(response.data.data),setTimeout(() => {
        props.setProgress(100)
      }, 300))
      .catch((error) => console.log(error));
  };

  const getProductTime = (time) => {
    console.log(time);
    const newTime = new Date(time).toLocaleString();
    return newTime;
  };

  useEffect(() => {
    props.setProgress(30)
    FetchCurrentOrders();
  }, []);

  const completeOrder = (order_id) => {
    props.setProgress(30)
    axios
      .post(`http://${props.ip}:3002/completeOrder`, { order_id: order_id })
      .then((response) => FetchCurrentOrders(), ClickOnAlert(),setTimeout(() => {
        props.setProgress(100)
      }, 300))
      .catch((error) => console.log(error));
  };

  const ClickOnAlert = () => {
    document.getElementById("liveAlertBtn").click();
    setTimeout(() => {
      document.getElementById("close-alert-button").click();
    }, 1500);
  };

  return (
    <>
      <div id="liveAlertPlaceholder"></div>
      <Alert message="Completed Order Successfully" />
      <div className="container ">
        <h1 className="text-center display-6 mt-3 mb-5">
          <b>MANAGE ORDERS</b>
        </h1>
        {currentOrders.map((product) => (
          <div key={product.order_id} className="container mb-4">
            <div className="row ">
              <div className="col-12 col-md-6 mx-auto">

            <div className="card HistoryPage">
              <div className="card-body">
                <div className="row">
                  <div className="col-4 text-center m-auto">
                    <img
                      src={product.product_image}
                      className="card-img-top foodImage"
                      alt="food"
                    />
                    <p className="foodPriceHistory mb-3">
                      <b>{product.product_name}</b>
                    </p>
                  </div>
                  <div className="col-8 text-center  TopDealsCard">
                    <h6 className="foodNameHistory mb-3">
                      Order on: <b>{getProductTime(product.order_date_time)}</b>
                    </h6>

                    <h6 className="foodPriceHistory mb-3">
                      Total Cost: <b>{product.product_price}</b>
                    </h6>
                    <h6 className="foodPriceHistory mb-3">
                      Order By:
                      <p className="foodPriceHistory mb-3">
                        {product.order_user_email}
                      </p>
                    </h6>
                    <h6 className="foodPriceHistory mb-3">
                      Address:
                      <p className="foodPriceHistory mb-3">
                        {product.order_address}
                      </p>
                    </h6>
                    <h6 className="foodPriceHistory mb-3">
                      Contact:
                      <p className="foodPriceHistory mb-3">
                        {product.order_contact}
                      </p>
                    </h6>
                    <h6 className="foodPriceHistory mb-3"  >
                      Order Status:{" "}
                      <b className="uppercase" style={{ color: "#ffd100" }}>{product.status}</b>
                    </h6>

                    <button
                      onClick={() => {
                        completeOrder(product.order_id);
                      }}
                      className="ReorderButton"
                    >
                      Complete Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container text-center mt-5">
        {currentOrders.length == 0 ? (
          <h6 className="mt-16">No Current Orders</h6>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
