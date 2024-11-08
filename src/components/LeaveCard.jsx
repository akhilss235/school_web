import React from 'react'

export const LeaveCard = ({data}) => {
  return (
    <div className='leave-card'>
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
