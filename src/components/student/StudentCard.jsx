import React from 'react'
import { GoDotFill } from "react-icons/go";


export const StudentCard = ({isInfo=true, data}) => {
  return (
    <div className='d-flex flex-row gap-3' style={{ paddingBottom:isInfo ? "20px" :"0px",borderBottom:isInfo ? "1px solid #D1D1D1" : ""}}>
        <div style={{height:"100px", width:"100px"}}>
            <img src={require("../../img/student.png")} alt="student image"  style={{height:"100%", width:"100%"}}/>
        </div>
        <div className="d-flex flex-column gap-1 justify-content-center">
            {
                isInfo && (
                    <div className='d-flex flex-row gap-1 align-items-center justify-content-center' style={{backgroundColor:"#ECF9EA", borderRadius:"5px", width:"80px", height:"20px"}}>
                        <GoDotFill style={{color:"#16BE16", width:"15px", height:"15px",paddingTop:"2px"}} />
                        <p className='m-0' style={{color:"#16BE16", fontSize:"16px", textAlign:"center"}} >{data?.status}</p>
                    </div>
                )
            }
            <p className='m-0' style={{fontWeight:"600"}}>{data?.name}</p>
            <p className='m-0 ' style={{color:"#148CF0"}}>{data?.number}</p>
            {
                !isInfo && (
                    <p className='m-0' style={{fontWeight:"600"}}>Class: {data?.class}</p>
                )
            }
        </div>
    </div>
  )
}
