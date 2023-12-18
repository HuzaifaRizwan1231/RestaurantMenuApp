import axios from "axios";
import React, { useEffect, useState } from "react";



export default function CompletedOrders(props) {

  const [completedOrders, setCompletedOrders] = useState([]);

  const FetchCompletedOrders = () => {
    //fetching completed orders
    axios
      .post(`http://${props.ip}:3002/completedOrders`)
      .then((response) => setCompletedOrders(response.data.data),setTimeout(() => {
        props.setProgress(100)
      }, 300))
      .catch((error) => console.log(error));
  };

  const getProductTime = (time) => {
    const newTime = new Date(time).toLocaleString();
    return newTime;
  };

  useEffect(() => {
    props.setProgress(30)
    FetchCompletedOrders();
  }, []);


  return (
    <>
    <div className="container ">
        <h1 className="text-center display-6 mt-3 mb-5">
          <b>COMPLETED ORDERS</b>
        </h1>
        {completedOrders.map((product) => (
          <div key={product.order_id} className="container mb-4">
            <div className="row">
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
                      Total Cost: Rs. <b>{product.product_price*product.order_quantity}</b>
                    </h6>
                    <h6 className="foodPriceHistory mb-3">
                      Quantity: <b>{product.order_quantity}</b>
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
                    <h6 className="foodPriceHistory mb-3">
                      Order Status:{" "}
                      <b className="uppercase" style={{ color: "green" }}>{product.status}</b>
                    </h6>

                    
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
        {completedOrders.length == 0 ? (
          <h6 className="mt-16">No Completed Orders</h6>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
