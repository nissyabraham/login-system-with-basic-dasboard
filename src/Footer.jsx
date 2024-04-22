import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <div className='footercontainer'>

<div className='footercontent'>
<i style={{marginRight: "30px"}}><FaInstagram /></i>
<i style={{marginRight: "30px"}}><SlSocialTwitter /></i>
<i style={{marginRight: "30px"}}><AiOutlineFacebook /></i>
<i style={{marginRight: "30px"}}><CiLinkedin /></i>

</div>

<p className='footertxt'>
<i style={{color:"white",fontSize:"20px"}}>@</i>
    2021 pizza.com</p>


    </div>
  )
}

export default Footer