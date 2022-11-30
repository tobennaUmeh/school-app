import React from "react";
import { FormGroup, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link } from "react-router-dom";

const Step4 = (props) => {
  const style = {
    border: "none",
    background: "#F7F7F7",
    // padding: '0.5rem 1rem',
    // fontSize: '0.8rem',
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#28B672",
  };

  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <>
      <div className="fw-bold mt-2">
        Please enter the one time password sent to you
      </div>
      <FormGroup>
        <FloatingLabel controlId="otp" label="OTP" className="mb-3">
          <Form.Control
            type="text"
            name="otp"
            className="col-12 mt-4"
            required
            // id='AccName'
            style={style}
            placeholder="Bank Name(Optional)"
            value={props.otp} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into the state
          />
        </FloatingLabel>
      </FormGroup>
      <div className="text-center">
        <div className="mt-4">
          <p>
            By signing up, you agree to Logistat
            <Link to="/" style={linkStyle}>
              <span className="pl-3">Terms of Service</span>
            </Link>{" "}
          </p>
          <br /> and
          <Link to="/" style={linkStyle}>
            {" "}
            Privacy Policy
          </Link>
        </div>
      </div>
    </>
  );
};

export default Step4;
