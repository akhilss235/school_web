import React from 'react'
import Icon from '../SvgComponent'
import { IconCard } from '../IconCard'

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
        <IconCard data={data} />
    </div>
  )
}
