import React, { useEffect } from "react";

export default function Alert(props) {
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const appendAlert = () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      
      `<div class="container auto-close d-flex alert customAlert fixed top-0  z-50 fade  show  alert-dismissible mb-0" role="alert">`,
      `   <div><i class="fa-solid fa-check mr-1.5" ></i>${props.message}</div>`,
      '<button id="close-alert-button" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  const alertTrigger = document.getElementById("liveAlertBtn");
  useEffect(()=>{
    if (alertTrigger) {
        alertTrigger.addEventListener("click", () => {
          appendAlert();
        });
      }
  },[alertTrigger])
  
  return (
    <>
      <button id="liveAlertBtn">
      </button>
    </>
  );
}
