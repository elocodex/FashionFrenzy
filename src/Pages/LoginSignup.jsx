import React, { useState } from 'react'
import '../Pages/CSS/LoginSignup.css'
import { toast, Toaster } from 'sonner'
const LoginSignup = () => {

  const LinkStyle = {
    cursor: 'Pointer'
  }
  const spanStyle ={
    color: '#ff4141',
    fontWeight: '700',
    cursor:'pointer'
  }

  const [loginStatus,setLoginStatus] = useState(true)
  const [signupStatus,setSignupStatus] = useState(true)
  const[state,setState] = useState("Sign Up")
  const [formData,SetFormData] = useState({
    name:"",
    password:"",
    email:"",
  })
  
  const changeHandler = (e)=>{
    SetFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async()=>{
    console.log("Login Function",formData);
    let responseData;
    await fetch('https://fashionfrenzybackend.onrender.com/login',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(responseData = data);
    })
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace("/")
      console.log(responseData.user.name);
    }else{
      setLoginStatus(false)
    }

  }

  const signup = async()=>{
    console.log("Signup Function",formData);
    let responseData;
    await fetch('https://fashionfrenzybackend.onrender.com/signup',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(responseData = data);
    })
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token)
      // window.location.replace("/")
      toast.message(
        <div>Login Succesful! <span style={spanStyle} onClick={()=>{setState("Login")}}>Login Here</span></div>
      )
    }else{
      // alert(responseData.error)
      setSignupStatus(false)
    }
  }

  return (
    <div className='loginsignup'>
      <Toaster position='bottom-right' closeButton richColors />
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {loginStatus == false?<div className='error'>Wrong Password Or Email</div>:<></>}
          {signupStatus == false?<div className='error'>Existing User found with same Email Id</div>:<></>}
          <form action="" method='post'>
            {state === "Sign Up"?<input required type="text" name="name" value={formData.name} onChange={changeHandler} placeholder='Username' />:<></>}
            <input type="email" required name="email" value={formData.email} onChange={changeHandler} placeholder='Email Address' />
            <input name="password" required value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
          </form>
        </div>
        <button onClick={()=>{state === "Login"?login():signup()}}>Continue</button>
        {state === "Sign Up"? <p style={LinkStyle} className="loginsignup-login">
          Already Have an Account? <span onClick={()=>{setState("Login")}}>Login Here</span>
        </p>: <p style={LinkStyle} className="loginsignup-login">
          Create an account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span>
        </p>}
      </div>
    </div>
  )
}

export default LoginSignup
