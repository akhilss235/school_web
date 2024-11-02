import React from 'react'
import { GoDotFill } from "react-icons/go";


export const StudentCard = ({isInfo=true, data}) => {
  return (
    <div className='d-flex flex-row gap-3' style={{width:"260px",paddingBottom:isInfo ? "20px" :"0px",borderBottom:isInfo ? "1px solid #D1D1D1" : ""}}>
        <div style={{height:"100px", width:"100px", borderRadius:"10px"}}>
            <img src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?cs=srgb&dl=pexels-olly-3762800.jpg&fm=jpg" alt="student image"  style={{height:"100%", width:"100%", borderRadius:"10px"}}/>
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
            <p className='m-0 ' style={{color:"#148CF0"}}>{data?.number || data?.relation}</p>
            {
                !isInfo && data?.class && (
                    <p className='m-0' style={{fontWeight:"600"}}>Class: {data?.class}</p>
                )
            }
        </div>
    </div>
  )
}
