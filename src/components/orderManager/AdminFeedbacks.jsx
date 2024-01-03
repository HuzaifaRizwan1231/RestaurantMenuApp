import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AdminFeedbacks(props) {
  const [feedbacks, setFeedbacks] = useState([]);

  const FetchFeedbacks = () => {
    //fetching feedbacks
    axios
      .get(`https://${props.ip}/feedbacks`)
      .then((response) => setFeedbacks(response.data.data),setTimeout(() => {
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
    FetchFeedbacks();
  }, []);

  return (
    <>
      <div className="container ">
        <h1 className="text-center display-6 mt-3 mb-5">
          <b>{props.islogin ? ('Reviews'):('Feedbacks')}</b>
        </h1>
        {feedbacks.map((feedback) => (
          <div key={feedback.feedback_id} className="container mb-4">
            <div className="row">
              <div className="col-12 col-md-6 mx-auto">

            <div className="card HistoryPage">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 text-center TopDealsCard">
                    <h6 className="foodPriceHistory mb-3">Feedback By:</h6>
                    <p className="foodPriceHistory mb-3 ">
                      {feedback.feedback_user_email}
                    </p>

                    <h6 className="foodPriceHistory mb-3 lh-base">
                      <i>
                        <sup>
                          <i
                            className="fa-solid fa-quote-left mr-1.5"
                            style={{ color: "#9ca3af" }}
                          ></i>
                        </sup>
                        <b>{feedback.feedback_desc}</b>

                        <sup>
                          <i
                            className="fa-solid fa-quote-right ml-1.5"
                            style={{ color: "#9ca3af" }}
                          ></i>
                        </sup>
                      </i>
                    </h6>
                   
                    <p className="foodPriceHistory mb-3 ">
                    {getProductTime(feedback.feedback_date_time)}
                    </p>
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
        {feedbacks.length == 0 ? (
          <h6 className="mt-16">No Completed Orders</h6>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
