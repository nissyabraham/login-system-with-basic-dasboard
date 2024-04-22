import React, { useState,useEffect } from 'react'
import "./Login.css"
import { IoMdPerson } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie"
const Loginform = () => {
  const navigate = useNavigate();

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [cookies, setCookie] = useCookies(["email", "password"]);
  const [emailerror, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");
    const [incorrect, setIncorrect] = useState("");

   
  
  const handlebuttonloginclick = (event) =>{
    event.preventDefault()
    if (!email && !password) {
      setEmailError("Email is required");
      setPasswordError("Password is required");
  } else if (!email) {
      setEmailError("Email is required");
  } else if (!password) {
      setPasswordError("Password is required");
  } else if (email !== "admin@gmail.com" || password !== "admin123") {
      setIncorrect("Incorrect email and password");
  } else {
      document.cookie = `email=${email}`;
      document.cookie = `password=${password}`;
      navigate("/dasboard");
  }
   
    
    
    

  }
  const handlesBlur = () => {
    if (password.trim() === "") {
       setPasswordError("password is required");
    }
  }
  const handleBlur = () => {
    if (email.trim() === "") {
       setEmailError("Email is required");
    }
    

  };
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  
  return (
    <div className='formcontainer'>
      
<div className='formdiv'>


<h1 className='formheader'>Login</h1>
    <hr style={{marginLeft:"220px",marginRight:"220px" ,height:"3px",backgroundColor:"rgb(130, 14, 238)",borderColor:"rgb(130, 14, 238),",marginBottom:"50px"}}/>
     <div className='formcontent'>

<input className='emailinput' value={email} placeholder='email id'onChange={(e)=>{setEmail(e.target.value)
if (!validateEmail(e.target.value)) {
  setEmailError("Invalid email format");
} else {
  setEmailError("");
}
}}
onBlur={handleBlur}
/>
{emailerror && (
            <label style={{fontSize:"12px",color:"red"}}>
              {emailerror}!
            </label>
          )}
<input className='nameinput' value={password} placeholder='password' onChange={(e)=>{setPassword(e.target.value)
setPasswordError("");

}}
onBlur={handlesBlur}
/>
{passworderror && (
            <label style={{fontSize:"12px",color:"red"}}>
              {passworderror}!
            </label>
          )}
          <div style={{fontSize:"12px",color:"red"}} >
          {incorrect && <p>{incorrect}</p>}
          </div>
<div className='buttoncontainer'>

<button   className= "loginbtn"  onClick={handlebuttonloginclick}>Login</button>

</div>

     </div>
</div>






    </div>
  )
}

export default Loginform