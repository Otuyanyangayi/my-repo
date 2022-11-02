import axios from "axios"
import React, { useContext, useState } from "react"
import { myContext } from "../context/Context"
import Merchant from "../merchant/Merchant"
import { useNavigate } from 'react-router-dom';



// :username, :password, :email,:role,:first_name,:last_name, :phone_no, :password_confirmation)
  

function AddAdmins() {
    const {admin,setAdmin,username,setUsername,password,setPassword,passwordConfirmation,setPasswordConfirmation,
email,setEmail,firstName,setFirstName,lastName,setLastName,role,setRole
,phoneNo,setPhoneNo,registration,setRegistration}=useContext(myContext)
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:3000/admins",{
            method:"POST",
          headers: {
            "Content-Type": "application/json",
           Accept: "application/json"
        },
         body:JSON.stringify({
            admin:{ 
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
            email:email,
            first_name: firstName,
            last_name:lastName,
            role:role,
            phone_no:phoneNo,
            registration_link_id:registration
        }
        })
        })
        .then((resp)=>{
            if(resp.ok){
         resp.json()
         .then((data)=>{
            console.log(data)
            localStorage.setItem("jwt", data.jwt);
            navigate("/chart")
           setAdmin(data.admin)
            setAdmin([data, ...admin])
            setUsername("")
            setPassword("")
            setPasswordConfirmation("")
            setEmail("")
            setFirstName("")
            setLastName("")
            setRole("")
            setPhoneNo("")
            setRegistration("")
        })
            }
            else{
        resp.json()
        .then(error=>console.log(error))
        
    }
        })
       
        
        
    }
   console.log(username)
   console.log(passwordConfirmation)
  
    return (

        <>
            <div>
                <h1 className="sign">Admin Signup</h1>
                <form className="admin" onSubmit={handleSubmit}>
                     <label className="username">
                Username:
                <input type="text" name="username" placeholder='Enter user name'value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </label>
                    <label className="password">
                        password:
                        <input type="text" 
                        name="text" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
                         placeholder="Enter your password"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required 
                         value={password} onChange={(e)=>setPassword(e.target.value)} />

                    </label>
                    <label className="password-confirm">
                        Password confirmation:
                        <input type="password" name="passwordConfirmation" 
                        placeholder="confirm password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        value={passwordConfirmation}
                         onChange={(e)=> setPasswordConfirmation(e.target.value)}/>
                    </label>
                    <label className="email">
                        Email:
                        <input type="text" name="email" placeholder="Enter email address"
                        value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </label>
                    <label className="first">
                        First Name:
                        <input type="text" name="firstName" placeholder="Enter your first name"
                        value={firstName} 
                        onChange={(e)=>setFirstName(e.target.value)}/>
                    </label>
                    <label className="last">
                        Last Name:
                        <input type="text" name="lastName" placeholder="Enter your last name"
                        value={lastName} 
                        onChange={(e)=>setLastName(e.target.value)}/>
                    </label>
                    <label className="num">
                        Phone No:
                        <input type="text" name="phoneno" placeholder="Enter phone number"
                        value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)}/>
                    </label>
                    <label className="role">
                        Role:
                        <input type="text" placeholder="Enter role" 
                        name="role" value={role} 
                        onChange={(e)=>setRole(e.target.value)}/>
                    </label>
                    <label className="email">
                        registration id:
                        <input type="number" name="email" placeholder="please enter your registration number"
                        value={registration} onChange={(e)=>setRegistration(e.target.value)}/>
                    </label>
                   <button className="btn">submit</button>
                </form>
                
                
            </div>
            
        </>

    )
}

export default AddAdmins

