import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import Products from '../products/Products'
import { useParams } from 'react-router-dom'

const Admin = () => {
    const params=useParams()
    console.log(params)
   
    const [admins,setAdmins]=useState([])
     const userInfo = JSON.parse(localStorage.getItem("userInfo"))
 
    
   
     useEffect(()=>{
    fetch("http://localhost:3000/admins",{
        headers: {
             "Content-Type": "application/json",
            Authorization: 'Bearer ' + userInfo.jwt 
        }
    })
    
    .then(res=> res.json())
    .then((data)=>setAdmins(data))
    },[])
      
  return (
    <div>
    {admins? (admins.map(admin=>{
        return(
           <> <h1>{admin.first_name}</h1>
            {admin.clerks.map(clerk=>{
                return(
                    <p>{clerk.role}</p>
                )
            })}
            </>
        )
    })):<h3>hello</h3>} 
       
      
    </div>
  )
}

export default Admin
