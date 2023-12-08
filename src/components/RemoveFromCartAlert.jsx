import React, { useEffect } from "react";

export default function RemoveFromCartAlert() {
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const appendAlert = () => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="container alert customAlert top-0 fixed z-50 fade mx-auto show w-full alert-dismissible mb-0" role="alert">`,
      `   <div><i class="fa-solid fa-check mr-1.5" ></i>Removed From Cart</div>`,
      '<button type="button" class="btn-close text-white " data-bs-dismiss="alert" aria-label="Close"><b>X</b></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  const alertTrigger = document.getElementById("liveRemoveAlertBtn");
  useEffect(()=>{
    if (alertTrigger) {
        alertTrigger.addEventListener("click", () => {
          appendAlert();
        });
      }
  },[alertTrigger])
  
  return (
    <>
      <button id="liveRemoveAlertBtn">
      </button>
    </>
  );
}
