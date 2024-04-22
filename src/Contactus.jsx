import React from 'react'
import "./Contactus.css"
import pizza from "./Image/pizzaa.webp"
const Contactus = () => {
  return (
    <div className='contactcontainer'>

        <div className='contactbg' style={{backgroundImage:`url(${pizza})`}}>

        </div>
        <div>
        <h1 className='contacttxt'>
            Contact Us
        </h1>
        <p className='contactname'>Full Name</p>
        <h1 className='placeholdertxt'>Enter full name...</h1>
        <hr className='border'/>
        <p className='contactname'>Email</p>
        <h1 className='placeholdertxt'>Enter email...</h1>
        <hr className='border'/>
        <p className='contactname'>Messsage</p>
        <h1 className='placeholdertxtmsg'>Enter message...</h1>

        <hr className='border'/>
        <button style={{marginLeft:"40px",marginTop:"30px",fontSize:"15px", paddingLeft:"40px",paddingRight:"40px",paddingTop:"10px",paddingBottom:"10px",background:"black",color:"white",cursor:"pointer"}}>Send</button>
        </div>
    </div>
  )
}

export default Contactus