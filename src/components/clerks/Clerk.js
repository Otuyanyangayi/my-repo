import React, { useContext } from 'react'
import { myContext } from '../context/Context'

const Clerk = () => {
    const {username,setUsername,password,setPassword,passwordConfirmation,setPasswordConfirmation,
email,setEmail,firstName,setFirstName,lastName,setLastName,role,setRole
,clerk,setClerk,adminId, setAdminId}=useContext(myContext)
const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:3000/api/v1/clerks",{
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
            admin_id:adminId}
        })
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data)
            localStorage.setItem("jwt", data.jwt);
           setClerk(data.clerk)
            setClerk([data, ...clerk])
            setUsername("")
            setPassword("")
            setPasswordConfirmation("")
            setEmail("")
            setFirstName("")
            setLastName("")
            setRole("")
            setAdminId("")
        })
    }
  return (
  <>
            <div>
                <h1 className="sign">Clerk Signup</h1>
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
                        value={adminId} onChange={(e)=>setAdminId(e.target.value)}/>
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
            
        </>

    )
}

export default Clerk