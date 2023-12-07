import React from 'react'
import { Link, useNavigate } from "react-router-dom";


export default function Modal() {

    const navigate = useNavigate();

    const goBack = ()=>{
        navigate('/');
    }
   const goToLogin = ()=>{
    navigate('/login');
   }
  return (
    <>
    <button
            type="button"
            class=""
            id="modalButton"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >  
          </button>

          <div
            class="modal fade "
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content ModalClass">
                <div class="modal-header  ">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Oops!!
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body ">Looks like you are not logged in</div>
                <div class="modal-footer ">
                  <Link
                    onClick={goBack}
                    type="button"
                    class="button text-light"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link onClick={goToLogin} type="button" class="button text-light"  data-bs-dismiss="modal">
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
