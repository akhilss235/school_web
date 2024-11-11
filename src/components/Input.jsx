import React, { useState } from 'react'
import clockIcon from "../img/clock.png"

export const Input = ({label,type="text", value="", onChange}) => {

  const clockContent = ["start time", "end time", "from", "to"]

  return (
    <div className='d-flex flex-column gap-2' style={{position:"relative", width:"100%"}}>
        <label className='fw-medium'>{label}</label>
        <input 
        type={type}  
        value={value}    
        onChange={onChange}
        // placeholder={label}
        className='subjectInput'
        style={{borderRadius:"5px", height:"50px", padding:"7px",border: "1px solid #CCCCCC", appearance:"none"}}
        />
        {
          clockContent?.includes(label.toLowerCase()) &&
          <div style={{position:"absolute", top:"52%", right:"10px"}}>
            <img src={clockIcon} alt="clock-icon" height={"20px"} width={"20px"} />
          </div>
        }
    </div>
  )
}
