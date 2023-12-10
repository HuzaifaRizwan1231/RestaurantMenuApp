import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Modal() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <button
        type="button"
        className=""
        id="modalButton"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      ></button>

      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ModalClass">
            <div className="modal-header  ">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Oops!!
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">Looks like you are not logged in</div>
            <div className="modal-footer">
              <Link
                onClick={goBack}
                type="button"
                className="ModalButton  text-light"
                data-bs-dismiss="modal"
              >
                Cancel
              </Link>
              <Link
                onClick={goToLogin}
                type="button"
                className=" ModalButton text-light"
                data-bs-dismiss="modal"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
