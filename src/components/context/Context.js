import React,{createContext,useState} from 'react'

export const myContext = createContext()
export const AppContext = ({children}) => {
    const [admin, setAdmin]=useState([])
    const [username,setUsername]= useState("")
    const [password,setPassword]= useState("")
    const [passwordConfirmation,setPasswordConfirmation]=useState('')
    const [email,setEmail]= useState("")
    const[firstName,setFirstName]= useState("")
    const [lastName,setLastName]= useState("")
    const [role,setRole]= useState("")
    const[phoneNo, setPhoneNo]= useState("")
    const [merchant,setMerchant]=useState([])
    const[clerk,setClerk]= useState([])
    const[adminId, setAdminId]= useState("")
    const[registration,setRegistration]=useState("")
    
  return <myContext.Provider value={{admin,setAdmin,username,setUsername,password,setPassword,passwordConfirmation,setPasswordConfirmation,
email,setEmail,firstName,setFirstName,lastName,setLastName,role,setRole
,phoneNo,setPhoneNo,merchant,setMerchant,clerk,setClerk,adminId, setAdminId,registration,setRegistration}}>{children}</myContext.Provider>
}

