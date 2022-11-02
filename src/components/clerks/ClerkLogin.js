import React, { useContext, useState } from 'react'
import { myContext } from '../context/Context'
import { useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
    } from 'mdb-react-ui-kit';

const ClerkLogin = () => {
  const [clerk,setClerk]=useState([])
const{password,username,setUsername,setPassword}=useContext(myContext)
const navigate=useNavigate()
 const handleSubmit=(e)=>{
        e.preventDefault();
  fetch("http://localhost:3000/api/v1/login",{
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify({
            clerk:{ 
            username: username,
            password: password}
        })
        })
   .then((resp)=>{
    if(resp.ok){
        resp.json()
        .then(data=>{
       /*localStorage.setItem("token",data.token)*/
      /*setClerk(data.clerk)*/
      localStorage.setItem("userInfo",JSON.stringify(data))
     navigate("/")
      setPassword("");
     setUsername('')
    })
    }
    else{
        resp.json()
        .then(error=>console.log(error))
        navigate("/clerk")
    }
    
   })
    
  }
  return (
    <div>
      <form className="admin" onSubmit={handleSubmit}>
        <label className="password">
                        password:
                        <input type="text" 
                        name="text" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
                         placeholder="Enter your password"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters" required 
                         value={password} onChange={(e)=>setPassword(e.target.value)} />

                    </label>
                    <label className="username">
                Username:
                <input type="text" name="username" placeholder='Enter user name'value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </label>
            <button className="btns">Login</button>
      </form>
     <div className="signup"> 
    <MDBNavbarItem>
    <MDBNavbarLink href='/clerk'>ClerkSignup</MDBNavbarLink>
    </MDBNavbarItem>
            </div>
    </div>
  )
}

export default ClerkLogin
