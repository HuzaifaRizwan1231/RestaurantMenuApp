import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function OrderHistory(props) {
  useEffect(() => {
    if (!props.isLogin){
      document.getElementById("modalButton").click();
    }
   
  }, [])
  
  return (

    <>
    {props.isLogin ? ( <div className="container ">
        <h1 className="text-center display-6 mt-3 mb-5">
          <b>ORDER HISTORY</b>
        </h1>
        <div className="container mb-4">
          <div className="card HistoryPage">
            <div className="card-body">
              <div className="row">
                <div className="col-4 text-center ">
                  <img
                    src="/images/burger.png"
                    className="card-img-top foodImage"
                    alt="food"
                  />
                </div>
                <div className="col-8 text-center  TopDealsCard">
                  <h6 className="foodNameHistory mb-3">Order on: <b>04-12-2023</b></h6>

                  <h6 className="foodPriceHistory mb-3">Total Cost: <b>Rs. 650</b></h6>

                  <Link to="/">
                    <button className="ReorderButton">Reorder</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-4">
          <div className="card HistoryPage">
            <div className="card-body">
              <div className="row">
                <div className="col-4 text-center ">
                  <img
                    src="/images/burger.png"
                    className="card-img-top foodImage"
                    alt="food"
                  />
                </div>
                <div className="col-8 text-center TopDealsCard">
                  <h6 className="foodNameHistory mb-3">Order on: <b>04-12-2023</b></h6>

                  <h6 className="foodPriceHistory mb-3">Total Cost: <b>Rs. 650</b></h6>

                  <Link to="/">
                    <button className="ReorderButton">Reorder</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>):(<Modal/>)}
     
    </>
  );
}
