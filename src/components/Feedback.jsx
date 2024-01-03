import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import axios from "axios";
import Alert from "./Alert";




export default function Feedback(props) {
  const [feedback,setFeedback] = useState("")

  useEffect(() => {
    if (!props.islogin){
      document.getElementById("modalButton").click();
    }
    props.setProgress(30)
    setTimeout(() => {
      props.setProgress(100)
    }, 300)
    Cleartext();
    props.setNavigateTo("feedback")
    props.KeepLoggedIn();
  }, [])

  const Cleartext=()=>{
    setFeedback("")
  }
  const submitFeedback=()=>{
    if (feedback!=""){
      props.setProgress(30)
      axios
    .post(`https://${props.ip}/submitFeedback`, { userEmail: props.userEmail, feedback:feedback })
    .then((res)=>Cleartext(),ClickOnSubmitAlert(),setTimeout(() => {
      props.setProgress(100)
    }, 300))
    .catch((error) => console.log(error));
    }
  }
  
  const ClickOnSubmitAlert = ()=>{
    document.getElementById("liveAlertBtn").click();
    setTimeout(() => {
      document.getElementById("close-alert-button").click();
    }, 1500);
  }
  return (
    
    <>
     <div id="liveAlertPlaceholder"></div>
    <Alert message = "Submitted Feedback Successfully"/>
    {props.islogin ? (<div className="container ">
        <h1 className="text-center display-6 my-3">
          <b>FEEDBACK</b>
        </h1>
        <div className="container mb-3 md:mt-12">
          <textarea
          value={feedback}
          onChange={(e)=>{
            setFeedback(e.target.value)
          }}
            className="mx-auto form-control FeedBackField"
            placeholder="Enter Text Here"
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
        <div className="container text-center FeedBackSubmit">
            <button onClick={submitFeedback} className="button">SUBMIT</button>
        </div>
      </div>):(<Modal/>)}
      
    </>
  );
}
