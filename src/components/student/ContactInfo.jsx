import React from 'react'
import Icon from '../SvgComponent'

export const ContactInfo = () => {
    const data = [
        {
            id:"1",
            icon:"mobile",
            title:"Phone Number",
            value:"+1 123 456 7890"
        },
        {
            id:"2",
            icon:"email",
            title:"Email",
            value:"emma@gmail.com"   
        }
    ]
  return (
    <div className='info'>
        <p className='m-0 fw-semibold' style={{fontSize:"18px"}}>Primary Contact Info</p>
        <div className='d-flex flex-column gap-3 '>
            {
                data.map((item)=>(
                    <div className='d-flex flex-row gap-3 align-items-center' key={item.id}>
                        <Icon iconName={item.icon} width={item.icon === "mobile" ? "35px" : "25px"} height={item.icon === "mobile" ? "30px" : "30px"}/>
                        <div>
                            <p className='m-0 fw-semibold' style={{height:"20px"}}>{item.title}</p>
                            <p className='m-0'>{item.value}</p>
                        </div>
                    </div>
                ))
            } 
        </div>
    </div>
  )
}
