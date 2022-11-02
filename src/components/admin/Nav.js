import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';
// import { useNavigate } from 'react-router-dom';

export default function App() {


  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <nav aria-label='breadcrumb'>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <a href='#'>Home</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <a href='/clerks'>Clerks</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <a href='/prods'>Products</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active aria-current='page'>
              <a href='/supply'>Suppliers </a>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </nav>
      </MDBContainer>
    </MDBNavbar>
  );
}

// Products page is renamed prods in the admin for ease of navigation
// suppliers page is renamed supply in admin for ease of navigation
