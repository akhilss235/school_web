import React from 'react'
import { toCamelCase } from '../utils/function'

export const InputDropdown = ({label, value}) => {
  return (
    <div className='d-flex flex-column gap-3' style={{width:"100%"}}>
        <label className='fw-medium'>{label}</label>
        <div className='d-flex flex-row' style={{height:"50px", borderRadius:"5px", border: "1px solid #CCCCCC"}}>
            <input 
                type="text"
                className='dropdownInput px-2'
                name={toCamelCase(label)}
                style={{width:"80%", border:"none", borderRadius:"5px", padding:"7px",}} 
             />
            <div style={{border: "1px solid #CCCCCC", height:"100%", width:"2px"}}>
            </div>
            <select className='select' style={{width:"30%", border:"none", padding:"10px" }}>
                {
                    value.map((item, index)=>(
                        <option value={item} key={index}>{item}</option>
                    ))
                }
            </select>
        </div>
    </div>
  )
}
