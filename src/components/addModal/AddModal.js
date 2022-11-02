
import { createPortal } from 'react-dom'
let divmodal=document.querySelector('#modal')
export default function AddModal({modal,children}) {
    if(!modal){return null}
  return createPortal(
   <div >
   <div className='modal-container'>
    {children}
   </div>
    </div>,divmodal)
}

