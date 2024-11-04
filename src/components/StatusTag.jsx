import React from 'react'
import { GoDotFill } from "react-icons/go";


export const StatusTag = ({status}) => {

    const bgColor = status.toLowerCase() === "fail" ||  status.toLowerCase() === "rejected" || status.toLowerCase() === "inactive" ? "#FEEAEC" : status.toLowerCase() === "pending" ? "#E7F8FD" : "#ECF9EA"
    const color = status.toLowerCase() === "fail" || status.toLowerCase() === "rejected" || status.toLowerCase() === "inactive" ? "#E72546" : status.toLowerCase() === "ending" ? "#0D7A9C" : "#16BE16"

  return (
    <div className='d-flex flex-row gap-1 align-items-center justify-content-center' style={{backgroundColor:bgColor, color:color, borderRadius:"5px", width:"80px", height:"20px"}}>
        <GoDotFill style={{width:"15px", height:"15px",paddingTop:"2px"}} />
        <p className='m-0' style={{fontSize:"14px", textAlign:"center", fontWeight:"600"}} >{status}</p>
    </div>
  )
}
