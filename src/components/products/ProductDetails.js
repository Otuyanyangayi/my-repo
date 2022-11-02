import { current } from '@reduxjs/toolkit'
import axios from 'axios'
import React,{Children, useState,useRef,useEffect} from 'react'
import AddModal from '../addModal/AddModal'
import Update from '../modal/Update'
import '../../App.css';
const ProductDetails = ({productId,products,setProducts,status,stock,spoiled}) => {
    // console.log(productId)
    //  console.log(products)
// const [stocks, setStocks]=useState(stock)
 const [modal, setModal]=useState(false)
// const[spoil,setSpoil]=useState(spoiled)
// const[stat,setStat]=useState(status)
const[showProduct,setShowProduct]=useState("")
const[myProduct,setMyProduct]=useState([])
    const [statu,setStatu]=useState("")
    const[item,setItem]=useState('')
    const[inStock,setInstock]=useState('')
    const[buying,setBuying]=useState('')
    const[selling,setSelling]=useState('')
    const[image,setImage]=useState('')
    const[name,setName]=useState('')
    const[spoilpro,setSpoilpro]=useState('')
    const[clerkId,setClerkId]=useState('')

 const userInfo = JSON.parse(localStorage.getItem("userInfo"))
 console.log(userInfo)
// function handleForm(){
//     setShowProduct((showProduct)=>!showProduct)
    
// }

// const handleUpdate=(e)=>{
//          e.preventDefault()
//          fetch(`/products/${productId}`,{
//             method:"PATCH",
//             headers:{
//                 "Content-Type": "application/json",
//                  Authorization: 'Bearer ' + userInfo.jwt 
//             },
//             body: JSON.stringify({
//                 payment_status:stat,
//                 no_of_product_in_stock:stocks,
//                 no_of_spoiled_item:spoil
//             })
//          })
        //  .then(resp=> resp.json)
//          .then(data=>{
//              /*localStorage.getItem("token",data.token)*/
//             const newProduct=products.map(product=>{
//                 if(product.id===productId){
//                     return data
//                 }
//                 else{
//                     return product
//                 }
//             })
//             console.log(newProduct)
//             setProducts(console.log(newProduct))
//          })
//          window.location.reload(true)
// }
const handleModal=()=>{
setModal(true)

    let body=document.body
     body.classList.add('no_scoll')

};
const handleClose=()=>{
    setModal(false)
     let body=document.body
     body.classList.remove('no_scoll')
}
const handleSubmit = (e)=>{
e.preventDefault()
 fetch("http://localhost:3000/products",{
            method:"POST",
          headers: {
             "Content-Type": "application/json",
            Authorization: 'Bearer ' + userInfo.jwt 
        },
        body: JSON.stringify({
            payment_status: statu,
            no_of_received_item: item,
            no_of_product_in_stock:inStock,
           buying_price:buying,
            selling_price: selling,
            no_of_spoiled_item:spoilpro,
            clerk_id:clerkId,
            name:name,
            image:image
        })})
        .then(res=>res.json())
        .then(data=>{
            setMyProduct(data,...myProduct)
          setStatu("")
          setItem("")
          setInstock("")
          setBuying("")
          setSelling("")
          setSpoilpro("")
          setClerkId("")
          setName("")
          setImage("")
        })
         window.location.reload(true)
 
    
}
const handleDelete=()=>{
    axios.delete(`/products/${productId}`,{
        method: "DELETE",
        headers:{"Content-Type": "application/json",
            Authorization: 'Bearer ' + userInfo.jwt }
    })
    .then(()=>{
        const undeletedProduct=products.filter(product=>product.id!==productId)
        setProducts(undeletedProduct)
    }) 
}
return(
<div>
    
    {/* {showProduct ?<form onSubmit={handleUpdate} className="update">
            <input type="text" value={stat} placeholder="update product status" onChange={(e)=>setStat(e.target.value)}/>
            <input type="product" value={stocks} placeholder="update number of stock" onChange={(e)=>setStocks(e.target.value)}/>
            <input type="number" value={spoil} placeholder="update number of spoiled product" onChange={(e)=>setSpoil(e.target.value)}/>


            <input type='submit'value="save" className='save'/>

        </form>:null }
         */}
        <div className='buttons'>
            <div className='btns'>
            <p><Update modal={modal} setmodal={setModal}/></p>
            <button type="button" class="btn btn-success btn-sm"  onClick={handleModal} >Add</button>
            <button type="button" class="btn btn-danger btn-sm" onClick={handleDelete} >Delete</button>
         </div>
        </div>
        <AddModal modal={modal}>
           <div className='modal-wrapper'> 
            <div onClick={handleClose} className='close'>&times;</div>
            <div className='add-container'>
              <form onSubmit={handleSubmit}>
            <input type="text" value={statu} placeholder="product status" title='can be pending or approved or rejected' onChange={(e)=>setStatu(e.target.value)}/>
            <input type="number" value={inStock} placeholder="number of product in stock" onChange={(e)=>setInstock(e.target.value)}/>
            <input type="text" value={buying} placeholder="buying price of product" onChange={(e)=>setBuying(e.target.value)}/>
            <input type="text" value={selling} placeholder="selling price of the product" onChange={(e)=>setSelling(e.target.value)}/>
            <input type="text" value={name} placeholder="name of the product" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" value={image} placeholder="Image url ..." onChange={(e)=>setImage(e.target.value)}/>
            <input type="number" value={clerkId} placeholder="Your number" onChange={(e)=>setClerkId(e.target.value)}/>
           <input type="text" value={item} placeholder="number of received items" onChange={(e)=>setItem(e.target.value)}/>
            <input type="text" value={spoilpro} placeholder="number of spoiled items" onChange={(e)=>setSpoilpro(e.target.value)}/>
 
                <button  type='submit'>Submit</button>
              </form>
            </div>
           </div>
        </AddModal>
</div>
)}

export default ProductDetails