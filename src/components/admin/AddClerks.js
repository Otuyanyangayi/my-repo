import React from "react"
import { useNavigate } from 'react-router-dom'
import { MDBBtn } from 'mdb-react-ui-kit';


function AddClerks() {

    const navigate = useNavigate()

    return (

        <div>
            <MDBBtn onClick={() => navigate('/landing')} >Admin Home</MDBBtn>

            <MDBBtn onClick={() => navigate(-1)} >Go Back</MDBBtn>
            Add Clerks

            <MDBBtn onClick={() => navigate(-1)} >Go Back</MDBBtn>
        </div>

    )
}

export default AddClerks

