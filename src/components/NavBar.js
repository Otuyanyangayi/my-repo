import React, { useState } from 'react';
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

    export default function NavBar() {
    const [showNav, setShowNav] = useState(false);

    return (
        <MDBNavbar  expand='lg' light bgColor='dark'>
        <MDBContainer fluid>
            <MDBNavbarBrand style={{color : "white"}} href='/'>LocalShop</MDBNavbarBrand>
            <MDBNavbarToggler
            type='button'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNav(!showNav)}
            >
            <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav style={{color : "white"}}>
                <MDBNavbarItem>
                <MDBNavbarLink style={{color : "white"}} aria-current='page' href='/'>
                    Home
                </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink style={{color : "white"}} href='/products'>Products</MDBNavbarLink>
                </MDBNavbarItem>
                {/* <MDBNavbarItem>
                <MDBNavbarLink href='/suppliers'>Suppliers</MDBNavbarLink>
                </MDBNavbarItem> */}
                
                <MDBNavbarItem>
                <MDBNavbarLink style={{color : "white"}} href='/merchantLogin'>MerchantLogin</MDBNavbarLink>
                </MDBNavbarItem>
                
                <MDBNavbarItem>
                <MDBNavbarLink style={{color : "white"}} href='/adminlogin'> adminLogin</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink style={{color : "white"}} href='/admin'> Admin</MDBNavbarLink>
                </MDBNavbarItem>

               
                {/* <MDBNavbarItem>
                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                    Disabled
                </MDBNavbarLink>
                </MDBNavbarItem> */}
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
        </MDBNavbar>
    );
}

