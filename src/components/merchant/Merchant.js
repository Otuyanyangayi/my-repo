import React, {useState, useContext} from 'react'
import { myContext } from '../context/Context'
import { useNavigate } from 'react-router-dom';


const Merchant = () => {
    const {username,setUsername,password,setPassword,passwordConfirmation,setPasswordConfirmation,
email,setEmail,firstName,setFirstName,lastName,setLastName,role,setRole
,merchant,setMerchant}=useContext(myContext)
const navigate=useNavigate()

   const handleSubmit=(e)=>{
    e.preventDefault();
     e.preventDefault();
        fetch("http://localhost:3000/merchants",{
            method:"POST",
          headers: {
            "Content-Type": "application/json",
           Accept: "application/json"
        },
         body:JSON.stringify({
            merchant:{ 
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
            email:email,
            first_name: firstName,
            last_name:lastName,
            role:role}
        })
        .then(res=>{
            if(res.ok){
                res.json()
                .then(data=>{
            localStorage.setItem("jwt", data.jwt);
            navigate("/storeChart")
           setMerchant(data.merchant)
           setMerchant(data, ...merchant)
           setUsername("")
           setPassword("")
           setEmail("")
           setPasswordConfirmation("")
           setRole("")
        })
            }
            else{
                res.json()
        .then(error=>console.log(error))
        navigate("/")
            }
        })
        
    })
   }
   
  return (
    <div>
        <form className='admin' onSubmit={handleSubmit}>
            <label className='username'>
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
                    <label className="role">
                        Role:
                        <input type="text" placeholder="Enter role" 
                        name="role" value={role} 
                        onChange={(e)=>setRole(e.target.value)}/>
                    </label>
                   <button className="btns">submit</button>
        </form>
    </div>
  )
}

export default Merchant