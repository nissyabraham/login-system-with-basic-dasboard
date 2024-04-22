import React, { useState } from 'react'
import "./Menu.css"

const Menu = () => {

    const menulist=[

        {
            id:"1",
            name:"Sicilian Pizza",
            image:"https://img.pikbest.com/origin/09/16/80/108pIkbEsTuJN.jpg!w700wp",
            price:"$12.99"
        },
        {
            id:"2",
            name:" Margherita Pizza",
            image:"https://t3.ftcdn.net/jpg/05/60/70/82/360_F_560708240_pMZPOuSfvblWGRoaiZFLT4wiFTzQPwQe.jpg",
            price:"$12.99"
        },

        {
            id:"3",
            name:"Hawaiian Pizza",
            image:"https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.1.1154400669.1708586671&semt=ais",
            price:"$12.99"
        }
    ]

    const [menu,setMenu]= useState(menulist)
  return (
    <div style={{display:"flex"}}>
{menu.map((menu)=>
    < div key={menu.id}>
    
    <div className='menucontainer'>

    <img src={menu.image}  height="200px" width="300px"/>
    <h1 style={{marginLeft:"10px"}}>{menu.name}</h1>
    <p style={{marginLeft:"10px"}}>{menu.price}</p>



        
        </div>
    </div>
  
     
 
    


)}


    </div>
  )
}

export default Menu