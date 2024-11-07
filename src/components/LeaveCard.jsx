import React from 'react'

export const LeaveCard = ({data}) => {
  return (
    <div className='d-flex flex-column gap-2 p-2' style={{borderRadius:"10px", border: "1px solid #D9D9D9",width:"maxContent" }}>
        <p className='m-0 fw-semibold'>{data?.leaveType} ({data?.leaveCount})</p>
        <div className='d-flex flex-row' style={{fontSize:"14px"}}>
            <p className='m-0' style={{color:"red"}}>Used : {data?.usedCount}</p>
            <div style={{
            height: "100%",
            width: "1px",
            backgroundColor: "#D9D9D9",
            margin: "0 8px"
            }}></div>
            <p className='m-0' style={{color:"#16BE16"}}>Remaining : {data?.remainingCount}</p>
        </div>
    </div>
  )
}
