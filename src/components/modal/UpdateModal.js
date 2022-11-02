import { createPortal } from 'react-dom'
let divmodal=document.querySelector('#modal')
export default function UpdateModal({update,children}) {
    if(!update){return null}
  return createPortal(
   <div >
   <div className='modal-container'>
    {children}
   </div>
    </div>,divmodal)
}