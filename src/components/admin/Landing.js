import React from "react"
import Nav from './Nav'
import { MDBBtn } from 'mdb-react-ui-kit';

import { useNavigate } from 'react-router-dom'



function Landing() {

    const navigate = useNavigate()

    return (

        <div>
            <Nav/>
            {/* <button onClick={() => navigate('/prods')}>Products</button> */}
            <MDBBtn onClick={() => navigate('/prods')}>Products</MDBBtn>
            <MDBBtn onClick={() => navigate('/clerk-list')}>Clerk List</MDBBtn>
            <MDBBtn onClick={() => navigate('/add-clerk')}>Add Clerk</MDBBtn>
        </div>
    )
}

export default Landing

