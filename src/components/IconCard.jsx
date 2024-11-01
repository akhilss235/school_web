import React from 'react'
import Icon from './SvgComponent'

export const IconCard = ({data, isGray=false}) => {
  return (
    <div className='d-flex flex-column gap-3 '>
      {data?.map((item) => (
        <div className='d-flex flex-row gap-3 align-items-center' key={item.id}>
          <Icon iconName={item.icon} width={item.icon === "mobile" ? "35px" : "25px"} height={item.icon === "mobile" ? "30px" : "30px"} />
          <div className='d-flex flex-column justify-content-center '>
            <p className={`m-0 ${!isGray ? "fw-semibold" : "" }`} style={{ height: "20px", color: !isGray ? "black" :"#7A7A7A" }}>{item.title}</p>
            <p className='m-0' style={{color:isGray ? "black" :"#7A7A7A"}}>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
