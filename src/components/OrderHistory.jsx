import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import axios from "axios";

export default function OrderHistory(props) {
  const [historyProducts, setHistoryProducts] = useState([]);
  const FetchOrderHistory = () => {
    if (!props.islogin) {
      document.getElementById("modalButton").click();
    }

    //fetching order history
    axios
      .post(`http://${props.ip}:3002/orderHistory`, {
        userEmail: props.userEmail,
      })
      .then((response) => setHistoryProducts(response.data.data), setTimeout(() => {
        props.setProgress(100);
      }, 300))
      .catch((error) => console.log(error));
  };

  const getProductTime=(time)=>{
    console.log(time)
    const newTime = new Date(time).toLocaleString();
    return newTime
  }

  useEffect(() => {
    if (!props.islogin) {
      document.getElementById("modalButton").click();
    }
    props.setProgress(30);
    FetchOrderHistory();
    props.setNavigateTo("history")
  }, []);

  return (
    <>
      {props.islogin ? (
        <div className="container ">
          <h1 className="text-center display-6 mt-3 mb-5">
            <b>ORDER HISTORY</b>
          </h1>
          {historyProducts.map((product) => (
            <div key={product.order_id} className="container mb-4">
              <div className="row">
                <div className="col-12 col-md-6 md:mx-auto">

              <div className="card HistoryPage">
                <div className="card-body">
                  <div className="row">
                    <div className="col-4 text-center ">
                      <img
                        src={product.product_image}
                        className="card-img-top foodImageHistory"
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
                        Total Cost: <b>Rs. {product.product_price*product.order_quantity}</b>
                      </h6>
                      <h6 className="foodPriceHistory mb-3">
                        Quantity: <b className="uppercase">{product.order_quantity}</b>
                      </h6>
                      <h6 className="foodPriceHistory mb-3">
                        Order Status: <b className="uppercase">{product.status}</b>
                      </h6>

                      <Link to={`/order/${product.product_id}`}>
                        <button className="ReorderButton">Reorder</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Modal />
      )}
    </>
  );
}
