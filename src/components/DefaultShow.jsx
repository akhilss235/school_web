import React from 'react'

export const DefaultShow = ({item, columns}) => {
  return (
    <div className="default-cont" style={{width:"100%"}}>
        {
            Object.entries(columns).map(([key, value], index) =>{ 
                return(
                    <div className='d-flex flex-column justify-content-center' key={index} style={{width:"100%"}}>
                        <p className={`m-0 fw-semibold`} style={{ height: "20px", color: "black", fontSize:"16px" }}>{key}</p>
                        <p className='m-0' style={{color:"#7A7A7A", fontSize:"14px"}}>{item[value]}</p>
                    </div>
            )})
        }
    </div>
  )
}
