import React, { Component } from "react";

import { Form, Button, Card } from "react-bootstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

import MultiStepProgressBar from "./MultiStepProgressBar";
import { Link } from "react-router-dom";
// import Otp from "../otherComponents/Otp";
import "./MasterForm.css";
import ModalNotification from "./ModalNotification";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      fname: "",
      lname: "",
      eAdd: "",
      phNO: "",
      pass: "",
      coPass: "",
      bname: "",
      bAdd: "",
      sEmail: "",
      sPhNo: "",
      country: "",
      state: "",
      bAccname: "",
      bAccNo: "",
      accName: "",
      otp: "",
      info: "fillInfo",
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this._verify = this._verify.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 3 ? 5 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  /// This is for the verify button we can modify the function for validation otp
  _verify() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep === 3 ? 4 : null;
    this.setState({
      currentStep: currentStep,
    });
  }

  /// Fuynction for OTP to be implemented later
  _otp() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep === 4 ? 5 : null;
    this.setState({
      currentStep: currentStep,
    });
  }

  // On submit showcasing the otp page.

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <div
          className="d-grid w-100 my-3
	"
        >
          <Button
            style={{
              fontSize: "1.2rem",
              backgroundColor: "#f7f7f7",
              color: "#28B672",
            }}
            onClick={this._prev}
            size="md"
            active
          >
            Previous
          </Button>
        </div>
      );
    }

    // ...else return nothing
    return null;
  }

  get #conditions1() {
    const fname = this.state.fname;
    const lname = this.state.lname;
    const eAdd = this.state.eAdd;
    const phNO = this.state.phNO;
    const pass = this.state.pass;
    const coPass = this.state.coPass;

    const passValidation =
      pass === coPass && pass.length > 5 && !pass.includes(" ");

    const con1 = passValidation && fname && lname && eAdd && phNO;

    return con1;
  }

  get #conditions2() {
    const bname = this.state.bname;
    const bAdd = this.state.bAdd;
    const sEmail = this.state.sEmail;
    const sPhNo = this.state.sPhNo;
    const country = this.state.country;
    const state = this.state.state;
    // const bAccname = this.state.bAccname;
    // const bAccNo = this.state.bAccNo;

    const con2 =
      bname &&
      bAdd &&
      sEmail &&
      sPhNo &&
      country &&
      // bAccname &&
      // bAccNo &&
      state;
    return con2;
  }

  get #conditions3() {
    const bAccname = this.state.bAccname;
    const bAccNo = this.state.bAccNo;
    const con3 = bAccname && bAccNo;
    return con3;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 4, then render the "next" button
    if (currentStep < 4) {
      if (currentStep === 1 && this.#conditions1) {
        return (
          <div
            className="w-100 my-3
        d-grid"
          >
            <Button
              style={{
                fontSize: "1.2rem",
                backgroundColor: "#28B672",
                color: "#ffffff",
                cursor: "pointer",
              }}
              onClick={this._next}
              size="md"
              active
            >
              Next
            </Button>
          </div>
        );
      } else if (currentStep === 2 && this.#conditions2) {
        return (
          <div className="d-grid w-100 my-3">
            <Button
              style={{
                fontSize: "1.2rem",
                backgroundColor: "#28B672",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
              }}
              onClick={this._next}
              size="md"
              className="buttonHover"
              active
            >
              Next
            </Button>
          </div>
        );
      } else if (currentStep === 3) {
        return (
          <div
            className="d-grid w-100 my-3
        "
          >
            <Button
              style={{
                fontSize: "1.2rem",
                backgroundColor: "#ffffff",
                color: "#28B672",
                cursor: "pointer",
              }}
              onClick={this._next}
              size="md"
              type="button"
              active
            >
              Skip
            </Button>
          </div>
        );
      }
      return (
        <div
          className="d-grid w-100 my-3
        "
        >
          <Button
            style={{
              fontSize: "1.2rem",
              backgroundColor: "#28B672",
              color: "#ffffff",
              cursor: "pointer",
            }}
            onClick={this._next}
            size="md"
            disabled
          >
            Next
          </Button>
        </div>
      );
    }
    // ...else render nothing
    return null;
  }

  get verifyButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 3 && this.#conditions3) {
      return (
        <div className="d-grid w-100 my-3">
          <Button
            style={{
              fontSize: "1.2rem",
              backgroundColor: "#28B672",
              color: "#ffffff",
              cursor: "pointer",
            }}
            onClick={this._verify}
            size="md"
            active
          >
            Verify Account
          </Button>
        </div>
      );
    }

    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 4) {
      return (
        <div>
          <ModalNotification onClick={this.handleSubmit} />
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    // ...else render nothing
    return null;
  }

  get alreadyLogin() {
    return (
      <div className="text-center mb-3">
        Already have an account?{" "}
        <Link
          style={{
            textDecoration: "none",
            color: "#28B672",
          }}
          to="/login"
        >
          Login
        </Link>
      </div>
    );
  }

  render() {
    return (
      <>
        <Form
          className="mt-2 px-3 px-sm-0 masterForm"
          //   style={{ maxWidth: "45rem", margin: "0 auto" }}
          onSubmit={this.handleSubmit}
        >
          <div>
            <Card.Body>
              <Card.Title>
                <MultiStepProgressBar currentStep={this.state.currentStep} />
              </Card.Title>
              <Card.Text />
              <Step1
                info={this.state.info}
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                fname={this.state.fname}
                lname={this.state.lname}
                pass={this.state.pass}
                coPass={this.state.coPass}
                eAdd={this.state.eAdd}
                phNO={this.state.phNO}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                bname={this.state.bname}
                bAdd={this.state.bAdd}
                sEmail={this.state.sEmail}
                sPhNo={this.state.sPhNo}
                country={this.state.country}
                state={this.state.state}
                bAccname={this.state.bAccname}
                bAccNo={this.state.bAccNo}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                bAccname={this.state.bAccname}
                bAccNo={this.state.bAccNo}
              />
              <Step4
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                otp={this.state.otp}
              />
              <Step5
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                accName={this.state.accName}
              />
            </Card.Body>
            <Card.Footer>
              {this.submitButton}
              {this.verifyButton}
              {this.nextButton}
              {this.previousButton}
              {this.alreadyLogin}
            </Card.Footer>
          </div>
        </Form>
      </>
    );
  }
}

export default MasterForm;
