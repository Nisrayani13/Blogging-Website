import { useEffect, useState } from 'react'
import Signcard from '../components/Signcard'
import InputField from '../components/InputField'
import { SigninInputType } from '@nisrayani/bloggingsite'
import { BACKEND_URL } from '../config'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export default function Signin() {
  const navigate=useNavigate();
  const [signinInputs,setSigninInputs]=useState<SigninInputType>({
    email:"",
    password:""
  })
  const [warning,setWarning]=useState();

  const jwt=localStorage.getItem("jwt");
  useEffect(()=>{
    if(jwt!=null){
      navigate("/blogs")
    }
  },[jwt])

  const onClick= async ()=>{
    try{
      const response= await axios.post(`${BACKEND_URL}/api/v1/user/signin`,{
        email: signinInputs.email,
        password: signinInputs.password
      })
      const jwt=response.data.jwt;
      localStorage.setItem("jwt",jwt)
      navigate("/blogs")
    }catch(error: any){
      setWarning(error.response.data.message);
      console.error(`error while sending request to backend: ${error.message}`)
      console.error(error)
    }
  }
  return (
    <div>
      <Signcard 
      heading={"Sign in"}
      subheading={"Don't have an account?"}
      linktext={"Sign up"}
      linkTo={"/signup"}
      buttonText={"Sign in"}
      onClick={onClick}
      >
        {warning?<div className='text-red-800 text-center'>{warning}! </div>:null}
        <InputField label={"Email"} placeholder={"example@gmail.com"} onChange={(event)=>{
          setSigninInputs((signinInputs)=>{
            return {...signinInputs,email:event.target.value}
          })
        }}></InputField>
        <InputField label={"Password"} placeholder={""} type='password' onChange={(event)=>{
          setSigninInputs((signinInputs)=>{
            return {...signinInputs,password:event.target.value}
          })
        }}></InputField>
      </Signcard>
    </div>
  )
}
