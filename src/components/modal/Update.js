import React,{useState} from 'react'
import AddModal from '../addModal/AddModal'
import UpdateModal from './UpdateModal'
export default function  Update({productId,products,setProducts,status,stock,spoiled}) {
  const [update,setUpdate]=useState(false)
  const [stocks, setStocks]=useState(stock)

const[spoil,setSpoil]=useState(spoiled)
const[stat,setStat]=useState(status)
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
 console.log(userInfo)
  const handleUpdate=(e)=>{
         e.preventDefault()
         fetch(`/products/${productId}`,{
            method:"PATCH",
            headers:{
                "Content-Type": "application/json",
                 Authorization: 'Bearer ' + userInfo.jwt 
            },
            body: JSON.stringify({
                payment_status:stat,
                no_of_product_in_stock:stocks,
                no_of_spoiled_item:spoil
            })
         })
         .then(resp=> resp.json)
         .then(data=>{
             /*localStorage.getItem("token",data.token)*/
            const newProduct=products.map(product=>{
                if(product.id===productId){
                    return data
                }
                else{
                    return product
                }
            })
            console.log(newProduct)
            setProducts(console.log(newProduct))
         })
         window.location.reload(true)
}
  const handleModal =()=>{
    setUpdate(true)
  }
  const handleClose=()=>{
    setUpdate(false)
  }

  return (
    <div>
       <button type="button" class="btn btn-secondary" onClick={handleModal} >Update</button>
       <UpdateModal update={update}>
          <div className='modal-wrapper'>
             <div onClick={handleClose} className='close'>&times;</div>
              <div className='add-container'>
                <form onSubmit={handleUpdate} className="update">
            <input type="text" value={stat} placeholder="update product status" onChange={(e)=>setStat(e.target.value)}/>
            <input type="product" value={stocks} placeholder="update number of stock" onChange={(e)=>setStocks(e.target.value)}/>
            <input type="number" value={spoil} placeholder="update number of spoiled product" onChange={(e)=>setSpoil(e.target.value)}/>


            <input type='submit'value="save" className='save'/>

        </form>
              </div>
         </div>
       </UpdateModal>
    </div>
  )
}
