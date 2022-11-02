import React from 'react';
import { MDBInputGroup, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle } from 'mdb-react-ui-kit';
import { useState } from 'react';


function ProductForm() {
    const[product,setProduct]=useState([])
    const [status,setStatus]=useState("")
    const[stock,setStock]=useState("")
    const [price,setPrice]=useState("")
    const[item,setItem]=useState('')
    const[inStock,setInstock]=useState('')
    const[buying,setBuying]=useState('')
    const[selling,setSellling]=useState('')
    const[image,setImage]=useState('')
    const[name,setName]=useState('')
    const[spoil,setSpoil]=useState('')
    const[clerkId,setClerkId]=useState('')

const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:3000/products",{
            method:"POST",
          headers: {
            "Content-Type": "application/json",
           Accept: "application/json"
        },
        body:JSON.stringify({
             
            payment_status: status,
            no_of_received_item: item,
            no_of_product_in_stock:inStock,
           buying_price:buying,
            selling_price: selling,
            no_of_spoiled_item:spoil,
            clerk_id:clerkId,
            name:name,
            image:image
        })
    })}

    /*  https://www.geeksforgeeks.org/how-to-pass-data-into-table-from-a-form-using-react-components/   */

    return (
        <>
            <MDBInputGroup className='mb-3'>
                <MDBDropdown>
                <MDBDropdownToggle>Product</MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem link>Separated link</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                <input className='form-control' type='text' />
                <input className='form-control' type='text' />
                <input className='form-control' type='text' />
            </MDBInputGroup>
        </>
    )
}

export default ProductForm;
// :buying_price, :selling_price, :no_of_spoiled_item,:clerk_id)
  