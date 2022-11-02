import React from "react"
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';


function Suppliers() {


    return (

        <>
        <br/>
            <MDBContainer fluid>
                <h3>Suppliers List</h3>
                <MDBBtn color="primary" className="position-relative">
                    Add
                    <span
                    className="position-absolute top-0 start-100 translate-middle badge border border-light">
                    </span>
                </MDBBtn>
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>First</th>
                        <th scope='col'>Last</th>
                        <th scope='col'>Handle</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                        <th scope='row'>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope='row'>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope='row'>3</th>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </MDBContainer>
            
        </>

    )
}

export default Suppliers

