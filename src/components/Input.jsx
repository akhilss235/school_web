import React, { useState } from 'react'

export const Input = ({label,type="text"}) => {
    const [value, setValue] = useState("")


  return (
    <div className='d-flex flex-column gap-2' style={{width:"100%"}}>
        <label className='fw-medium'>{label}</label>
        <input 
        type={type}  
        value={value}    
        onChange={(e)=>setValue(e.target.value)}
        // placeholder={label}
        style={{borderRadius:"5px",  padding:"7px",border: "1px solid #CCCCCC"}}
        />
    </div>
  )
}
