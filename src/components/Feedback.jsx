import React from "react";

export default function Feedback() {
  return (
    <>
      <div className="container ">
        <h1 className="text-center display-6 my-3">
          <b>FEEDBACK</b>
        </h1>
        <div class="container mb-3">
          <textarea
            class="mx-auto form-control FeedBackField"
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
        <div className="container text-center FeedBackSubmit">
            <button className="button">SUBMIT</button>
        </div>
      </div>
    </>
  );
}
