import React from 'react'
import Header from './Header'
import  pizzabg from './Image/pizzaa.webp'
import './Home.css'
import Footer from './Footer'
const Home = () => {
  return (
    <div>

<div className='homecontent' style={{backgroundImage: `url(${pizzabg})`}}>
  
 <h1 style={{paddingTop:"300px",paddingLeft:"60px"}}>
  Pedro's Pizzeria
 </h1>
 <p style={{paddingLeft:"60px"}}>PIZZA TO FIT ANY TASTE</p>
 <button className='orderbtn'>ORDER</button>
 
</div>

    </div>
  )
}

export default Home