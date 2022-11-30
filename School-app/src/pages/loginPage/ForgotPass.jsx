import React from "react";
import { useState } from "react";
import LoginComponentWrapper from "./LoginComponentWrapper";
import logoImage from "../../Assets/Logo.svg";
import "./Login.css";

const ForgotPass = () => {
  const [inputtext, setinputtext] = useState({
    email: "",
  });

  const [warnemail, setwarnemail] = useState(false);

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputtext((lastValue) => {
      return {
        ...lastValue,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setwarnemail(false);

    if (inputtext.email === "") {
      setwarnemail(true);
    } else {
      alert("form submitted");
    }
  };
  return (
    <LoginComponentWrapper>
      <div className="Login-container">
        <div className="Login-card d-flex flex-column justify-content-between">
          <div>
            <div className="text-center my-3">
              <a href="/">
                <img src={logoImage} alt="" />
              </a>

              <div className="text mt-5">
                <h3 className="my-2 fw-semibold">Forgot Password</h3>
                <p
                  className="text-dark text-center"
                  style={{
                    fontWeight: "100",
                    fontSize: "16.5px",
                    margin: "0 25px",
                  }}
                >
                  Please enter your email address so we can send you a password
                  recovery link
                </p>

                <div className="input-text w-100">
                  <input
                    type="text"
                    className={` ${warnemail ? "warning" : ""}`}
                    placeholder="Enter your email"
                    value={inputtext.email}
                    onChange={inputEvent}
                    name="email"
                  />
                  <i className="fa fa-envelope"></i>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={submitForm}>
            <div className="buttons my-4">
              <button type="submit">Recover Password</button>
            </div>
            <div className="forgot">
              <p className="text-center w-100 fs-6">
                Remeber Password?{" "}
                <a
                  href="/login"
                  style={{
                    color: "#28b672",
                  }}
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </LoginComponentWrapper>
  );
};

export default ForgotPass;
