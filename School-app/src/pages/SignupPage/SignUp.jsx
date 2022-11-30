import React from "react";
import MasterForm from "../../components/SignupComponent/MasterForm";
import Logo from "../../assets/logo.jpeg";

const SignUp = () => {
  //   const style = { maxWeigth: "10rem" };
  return (
    <div className="container px-0">
      <Logo back={true} />
      <MasterForm info="fillInfo" className="mx-3" />
    </div>
  );
};

export default SignUp;
