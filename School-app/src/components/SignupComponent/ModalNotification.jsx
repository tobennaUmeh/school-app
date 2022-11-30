import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import modalNotificationImg from "../../assets/inboxNotification.png";

const ModalNotification = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-grid w-100 my-3">
        {/* <!-- Button trigger modal --> */}
        <Button
          type="button"
          class=""
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style={{
            fontSize: "1.2rem",
            backgroundColor: "#28B672",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          Submit
        </Button>

        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header border-0">
                <div></div>

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    navigate("/login");
                  }}
                ></button>
              </div>
              <div class="modal-body px-5">
                <div className=" w-100 text-center container">
                  <img
                    src={modalNotificationImg}
                    alt="modal Notification"
                    className="text-center pb-2"
                  />
                </div>

                <div className="w-100 text-center my-3">
                  <p className="">
                    A verification email has been sent to <br /> your email
                    address
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNotification;
