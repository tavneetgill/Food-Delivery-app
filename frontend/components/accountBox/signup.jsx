import React, { useState, useNavigate, useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import axios from'axios';

import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const[data,setData]=useState({
    UserName:"",
    email:"",
    password:"",
});
const[error,setError]=useState=("")
const navigate=useNavigate();


const handleChange = ({currentTarget:input})=>{
    setData({...data,[input.name]:input.value});
};

const handleSubmit =async(e)=>{
    e.preventDefault();
    try{
        const url="http://localhost:8000/api/users";
        const{data:res}=await axios.post(url,data);
        navigate("/login")
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
        <Input type="text" placeholder="User Name" value={data.UserName} required="" onChange={handleChange}/>
        <Input type="email" placeholder="Email"  required=""value={data.email} onChange={handleChange} />
        <Input type="password" placeholder="Password"  required=""value={data.password} onChange={handleChange} />
      </FormContainer>
      {error&& <div className='error-message'>{error}</div>}
      <SubmitButton type="submit">Signup</SubmitButton>
      
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Login
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}