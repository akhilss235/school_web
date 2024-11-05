import React from 'react'
import Icon from './SvgComponent'

export const IconCard = ({data, isGray=false, isAddress=false, isBorder=false, borderColor=""}) => {
  return (
    <div 
      className={`d-flex flex-column gap-3`}
      // style={{border: isBorder ? "1px solid" : ""}}
    >
      {data?.map((item) => (
        <div className='d-flex flex-row gap-3 align-items-center' key={item.id}>
        <div style={{ width: "50px", flexShrink: 0 }}>
            <Icon iconName={item.icon} width={item.icon === "mobile" ? "35px" : "25px"} height="30px" />
          </div>
          <div className='d-flex flex-column justify-content-center'>
            <p className={`m-0 ${!isGray ? "fw-semibold" : "" }`} style={{ height: "20px", color: !isGray ? "black" :"#7A7A7A", fontSize:isAddress ? "14px":"" }}>{item.title}</p>
            <p className='m-0' style={{color:isGray ? "black" :"#7A7A7A", fontSize:isAddress ? "12px":""}}>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
