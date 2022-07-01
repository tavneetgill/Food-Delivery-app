import React, { useState, useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { AccountContext } from "./accountContext";
import axios from'axios';


export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const[data,setData]=useState({
    email:"",
    password:"",
});
const[error,setError]=useState=("")



const handleChange = ({currentTarget:input})=>{
    setData({...data,[input.name]:input.value});
};

const handleSubmit =async(e)=>{
    e.preventDefault();
    try{
        const url="http://localhost:8000/api/auth";
        const{data:res}=await axios.post(url,data);
        localStorage.setItem("token",res.data);
        window.location = "/"
        console.log(res.message);
    }catch(error){
        if(error.response&&
          error.response.status >=400 &&
          error.response.status <=500
        ){
            setError(error.response.data.message)
        }
    }
  }
  return (
        <BoxContainer>
          <FormContainer onSubmit={handleSubmit}>
            <Input type="email" name="email" placeholder="Email" required="" value={data.email} onChange={handleChange}/>
            <Input type="password" name="" placeholder="Password" required="" value={data.password} onChange={handleChange}/>
          </FormContainer>
          {error&& <div className='error-message'>{error}</div>}
          <SubmitButton type="submit">Login</SubmitButton>
          <MutedLink href="#">
          Don't have an account?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
             Signup
          </BoldLink>
          </MutedLink>
        </BoxContainer>
      );
  }
