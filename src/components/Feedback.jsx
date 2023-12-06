import React from "react";
import { Link } from "react-router-dom";


export default function Feedback(props) {
  return (
    
    <>
    {props.isLogin ? (<div className="container ">
        <h1 className="text-center display-6 my-3">
          <b>FEEDBACK</b>
        </h1>
        <div className="container mb-3">
          <textarea
            className="mx-auto form-control FeedBackField"
            placeholder="Enter Text Here"
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
        <div className="container text-center FeedBackSubmit">
            <button className="button">SUBMIT</button>
        </div>
      </div>):(<Link className="button" to="/login" >Please Log In to Continue</Link>)}
      
    </>
  );
}
