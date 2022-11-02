import React from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { MDBBtn } from 'mdb-react-ui-kit';

function ClerkList() {

    const navigate = useNavigate()

    return (

        <div>
            <div>
                <MDBBtn onClick={() => navigate('/landing')} >Admin Home</MDBBtn>
            </div>
            <div>
                <MDBBtn onClick={() => navigate(-1)} >Go Back</MDBBtn>
            </div>
            Clerks List
            {/* Time to fetch Clerks data */}
        </div>

    )
}

export default ClerkList

