import React from 'react'
import Cookies from 'js-cookie';
import {  Navigate, Outlet } from 'react-router-dom'
const useAuth =()=>{
   
    const email = Cookies.get('email'); 
    
     return email !== undefined && email !== null;
  }
const Protectedroutes = () => {
    const isAuth=useAuth()
    return isAuth ? <Outlet/>:<Navigate to='/'/>
  return (
    <div>




    </div>
  )
}

export default Protectedroutes