import React, { useState } from "react";
import Signcard from "../components/Signcard";
import InputField from "../components/InputField";
import { SignupInputType } from "@nisrayani/bloggingsite";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate=useNavigate();
  const [signupInputs, setSignupInputs]= useState<SignupInputType>({
    name:"",
    email:"",
    password:""
  })
  const [warning,setWarning]=useState();

  const onClick= async ()=>{
    try{
      const response= await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
        name: signupInputs.name,
        email: signupInputs.email,
        password: signupInputs.password
      })
      const jwt=response.data.jwt;
      localStorage.setItem("jwt",jwt)
      navigate("/blogs")
    }catch(error: any){
      setWarning((warning)=> error.response.data.message)
      console.error(`error while sending request to backend: ${error.message}`)
    }
  }

  return (
    <div>
      <Signcard
        heading={"Create an account"}
        subheading={"Already have an account?"}
        linktext={"Login"}
        linkTo={"/signin"}
        buttonText={"Sign Up"}
        onClick={onClick}
      >
        {warning?<div> {warning}! </div>:null}
        <InputField label={"Username"} placeholder={"Enter your username"} onChange={(event)=>{
          setSignupInputs((signupInputs)=>{
            return { ...signupInputs,
            name: event.target.value}
          })
        }}></InputField>
        <InputField label={"Email"} placeholder={"example@gmail.com"} onChange={(event)=>{
          setSignupInputs((signupInputs)=>{return {...signupInputs, email:event.target.value}})
        }}></InputField>
        <InputField label={"Password"} placeholder={""} type="password" onChange={(event)=>{
          setSignupInputs((signupInputs)=>{
            return {...signupInputs,password:event.target.value}
          })
        }}></InputField>
      </Signcard>
    </div>
  );
}
