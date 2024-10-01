import React from 'react'
import Signcard from './Signcard'
import InputField from './InputField'

export default function Signin() {
  return (
    <div>
      <Signcard 
      heading={"Sign in"}
      subheading={"Don't have an account?"}
      linktext={"Sign up"}
      linkTo={"/signup"}
      buttonText={"Sign in"}
      buttonTo={""}
      >
        <InputField label={"Email"} placeholder={"example@gmail.com"}></InputField>
        <InputField label={"Password"} placeholder={""}></InputField>
      </Signcard>
    </div>
  )
}
