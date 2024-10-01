import React from "react";
import Signcard from "./Signcard";
import InputField from "./InputField";

export default function Signup() {
  console.log("inside signup compo")
  return (
    <div>
      <Signcard
        heading={"Create an account"}
        subheading={"Already have an account?"}
        linktext={"Login"}
        linkTo={"/signin"}
        buttonText={"Sign Up"}
        buttonTo={""}
      >
        <InputField label={"Username"} placeholder={"Enter your username"}></InputField>
        <InputField label={"Email"} placeholder={"example@gmail.com"}></InputField>
        <InputField label={"Password"} placeholder={""}></InputField>
      </Signcard>
    </div>
  );
}
