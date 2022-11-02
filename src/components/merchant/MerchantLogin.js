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


const MerchantLogin = () => {
    const [merchant,setMerchant]=useState([])
    const navigate=useNavigate()
const{password,username,setUsername,setPassword}=useContext(myContext)
 const handleSubmit=(e)=>{
        e.preventDefault();
  fetch("http://localhost:3000/auths",{
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify({
            merchant:{ 
            username: username,
            password: password}
        })
        })
   .then((resp)=>{
    if(resp.ok){
        resp.json()
        .then(data=>{
      localStorage.setItem("token",data.token)
      setMerchant(data.clerk)
    navigate("/storeChart")
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
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required 
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
        <MDBNavbarLink href='/clerk'>Don't have acount create one</MDBNavbarLink>
        </MDBNavbarItem>
            </div>
    </div>
  )
}

export default MerchantLogin