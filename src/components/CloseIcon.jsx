import React from 'react'
import { RxCross2 } from "react-icons/rx";

export const CloseIcon = ({onClose}) => {
  return (
    <div 
        className='d-flex justify-content-center align-items-center' 
        style={{borderRadius:"50%", border:"2px solid #E4261D", cursor:"pointer"}}
        onClick={onClose}
    >
        <RxCross2 size={20} color='#E4261D' style={{padding:"1px"}} />
    </div>
  )
}
