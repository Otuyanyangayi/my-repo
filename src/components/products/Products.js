import React, { useEffect, useState } from "react"
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
// import { Link, Outlet } from 'react-router-dom'
import axios from "axios";
import ProductDetails from "./ProductDetails";
import ProductDel from "./ProductDel";



function Products() {
const [products, setProducts]=useState([])
useEffect(()=>{
 axios.get("http://localhost:3000/products")
 .then(product=>setProducts(product.data))
},[]) 
    return (

        <>

        <h3 className="me">Welcome to Glama store</h3>  
        <div className="product">
            {
               products?(products.map(product=>{
              <div>  {product.payment_status !== "rejected" || product.payment_status !== "rejected" }</div>
                    return(
                    <div key={product.id} className="products">
                        <img src={product.image} alt=""/>
                        <p>Name:{product.name}</p>
                        <p>Payment status:{product.payment_status}</p>
                        
                        <p>Product in stock:{product.no_of_product_in_stock}</p>
                        <p>Buying Price:{product.buying_price}</p>
                         <p>selling price:{product.selling_price}</p>
                          <p>Item received:{product.no_of_received_item}</p>
                          <p>Spoiled items:{product.no_of_spoiled_item}</p>
                          <ProductDetails productId={product.id} products={products} setProducts={setProducts} 
                          status={product.payment_status} stock={product.no_of_product_in_stock} spoiled={product.no_of_spoiled_item}/>
                          
                    </div>
                    
                    )
                })
            ):(<h2>No product shown</h2>)}
            </div>
        </>

    )
}

export default Products
