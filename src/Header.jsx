import React from 'react'
import "./Header.css"
import pizzalogo from "./Image/Pizza-logo-design-template-Vector-PNG.png"
import { useNavigate } from 'react-router-dom'
import { RiLogoutCircleLine } from "react-icons/ri";
import Cookies from "js-cookie";
const Header = () => {
    const navigate = useNavigate()
    const handlehomeclick = () =>{
    navigate("/dasboard")
    }
    const handleaboutclick = () =>{
        navigate("/about")
        }
        const handlecontactclick = ()=>{
          navigate("/contact")
        }
        const handlemenuclick = ()=>{
          navigate("/menu")
        }
        const handlelogout = ()=>{
          Cookies.set("email", "", { expires: -1 });
    Cookies.set("password", "", { expires: -1 });
         
          navigate("/")
        }
        
  return (
    <div className='headercontainer'>
    
       <div className='headercontent'>
       <img className='pizzalogo' src={pizzalogo}/>
      <h1 style={{marginRight:"40px",marginLeft:"700px",cursor:"pointer"}} onClick={handlehomeclick}>Home</h1>
      <h1 style={{marginRight:"40px",cursor:"pointer"}} onClick={handlemenuclick}>Menu</h1>
      <h1 style={{marginRight:"40px",cursor:"pointer"}} onClick={handleaboutclick}>About Us</h1>
      <h1 style={{cursor:"pointer"}} onClick={handlecontactclick}>Contact</h1>
      <h1 style={{display:'flex'}} onClick={handlelogout}>
      <i><RiLogoutCircleLine style={{cursor:"pointer",marginTop:"2px", marginLeft:"30px"}} /></i>
     <p style={{marginTop:"0px",cursor:"pointer"}}>Logout</p> 
      </h1>
       </div>

   
    </div>
  )
}

export default Header