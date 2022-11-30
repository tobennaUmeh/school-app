import React from "react";
import { FormGroup } from "react-bootstrap";
import { useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link } from "react-router-dom";

const Step1 = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const style = {
    border: "none",
    background: "#F7F7F7",
    color: "#6C7985",

    // padding: "0.5rem 1rem",
    // fontSize: "0.8rem",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#28B672",
    marginLeft: "3px",
  };

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  // console.log(props);

  if (props.currentStep !== 1) {
    return null;
  }

  function onChange() {
    const password = document.querySelector("input[name=pass]");
    const confirm = document.querySelector("input[name=coPass]");
    console.log(confirm);
    console.log(password.value.length);
    if (
      confirm.value === password.value &&
      password.value.length >= 5 &&
      !password.value.includes(" ")
    ) {
      password.style.border = "0.1rem solid green";
      confirm.style.border = "0.1rem solid green";
    } else if (password.value.length === 0 && confirm.value.length === 0) {
      password.style.border = "none";
      confirm.style.border = "none";
    } else {
      password.style.border = "0.1rem solid red";
      confirm.style.border = "0.1rem solid red";
    }
  }

  return (
    <>
      <FormGroup>
        <FloatingLabel controlId="fname" label="First Name" className="fs-6">
          <Form.Control
            type="text"
            name="fname"
            className="col-12 mt-4"
            required
            // id='fname'
            style={style}
            placeholder="First Name"
            value={props.fname} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into the state
          />
        </FloatingLabel>
        <FloatingLabel controlId="lname" label="Last Name" className="mb-3">
          <Form.Control
            type="text"
            name="lname"
            className="col-12 mt-3"
            // id='lname'
            required
            style={style}
            placeholder="Last Name"
            value={props.lname} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into the state
          />
        </FloatingLabel>
        <FloatingLabel controlId="eAdd" label="Email Address" className="mb-3">
          <Form.Control
            type="email"
            name="eAdd"
            className="col-12 mt-3"
            // id='eAdd'
            required
            style={style}
            placeholder="Email Address"
            value={props.eAdd} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into the state
          />
        </FloatingLabel>
        <FloatingLabel controlId="phNO" label="Phone Number" className="mb-3">
          <Form.Control
            type="number"
            name="phNO"
            className="col-12 mt-3"
            // id='phNO'
            required
            style={style}
            placeholder="Phone Number"
            value={props.phNO} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into the state
          />
        </FloatingLabel>
        <div
          className="mt-2 col-12"
          style={{
            border: "none",
            background: "#F7F7F7",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
          }}
        >
          <input
            type={passwordShown ? "text" : "password"}
            name="pass"
            className="mt-1 py-2 col-11 align-items-center "
            id="pass"
            onKeyUp={onChange}
            required
            style={{
              border: "none",
              background: "#F7F7F7",
              fontSize: "1rem",
              outline: "none",
            }}
            placeholder="Password (More than 5 letters)"
            value={props.pass} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into the state
          />
          <span className="text-end" onClick={togglePassword}>
            {passwordShown ? <EyeSlashFill /> : <EyeFill />}
          </span>
        </div>

        <div
          className="mt-3 col-12"
          style={{
            border: "none",
            background: "#F7F7F7",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
          }}
        >
          <input
            type={passwordShown ? "text" : "password"}
            name="coPass"
            className="mt-1 py-2 col-11"
            id="coPass"
            onKeyUp={onChange}
            required
            style={{
              border: "none",
              background: "#F7F7F7",
              fontSize: "1rem",
              outline: "none",
            }}
            placeholder="Confirm Password"
            value={props.coPass} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into the state
          />
          <span className="text-end" onClick={togglePassword}>
            {passwordShown ? <EyeSlashFill /> : <EyeFill />}
          </span>
        </div>
      </FormGroup>
      <div className="mt-md-4 mt-2 text-center">
        <div className="mt-md-4 mt-2">
          By signing up, you agree to Logistat
          <Link to="/" style={linkStyle}>
            Terms of Service
          </Link>
          <br /> and
          <Link to="/" style={linkStyle}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </>
  );
};

export default Step1;
