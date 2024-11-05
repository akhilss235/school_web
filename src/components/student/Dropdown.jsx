import React from 'react'

export const Dropdown = ({label, value}) => {
  return (
    <div className='d-flex flex-column gap-2' style={{width:"100%"}}>
        <label className='fw-medium'>{label}</label>
        <select className='select'>
            {
                value.map((item, index)=>(
                    <option value={item} key={index}>{item}</option>
                ))
            }
        </select>
    </div>
  )
}
