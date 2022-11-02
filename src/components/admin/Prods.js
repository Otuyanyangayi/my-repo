import React, { useEffect, useState }  from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios";
// import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';



function Prods() {

    const navigate = useNavigate()
    const [products, setProducts]=useState([])
   
    // Fetch products
    useEffect(()=>{
    axios.get("http://localhost:3000/products")
    .then(product=>setProducts(product.data))
    },[]) 

    return (

        

        <div>
            <div>
                <MDBBtn onClick={() => navigate('/landing')} >Admin Home</MDBBtn>
            </div>
            <div>
                {/* <button onClick={() => navigate(-1)}>Go back</button> */}
                <MDBBtn onClick={() => navigate(-1)} >Go Back</MDBBtn>
            </div>

            <div>
                {
                products?(products.map(product=>{
                        return(
                        <div key={product.id} className="products">
                            <img src={product.image} alt=""/>
                            <h4>Name:{product.name}</h4>
                            <p>Payment status:{product.payment_status}</p>
                            <p>Product in stock:{product.no_of_product_in_stock}</p>
                            <p>Buying Price:{product.buying_price}</p>
                            <p>selling price:{product.selling_price}</p>
                            <p>Item received:{product.no_of_received_item}</p>
                            <p>Spoiled items:{product.no_of_spoiled_item}</p>
                        </div>
                        
                        )
                    })
                ):(<h2>No product shown</h2>)}
            </div>

            {/* <button onClick={() => navigate(-1)}>Go back</button> */}
        </div>

    )
}

export default Prods

