import React from 'react'
import { Info } from './Info'
import { ContactInfo } from './ContactInfo'
import { StudentCard } from './StudentCard'
import { TravelInfo } from '../TravelInfo'

export const DetailSection = () => {
  const data = {
    name:"murugasa",
    "class":"IV",
    "number":"325235325"
  }
  return (
    <div className='d-flex flex-column gap-3'>
        <Info />
        <ContactInfo />
        <div className='info'>
          <p className='m-0 fw-semibold'  style={{fontSize:"18px"}}>Sibling Information</p>
          <StudentCard isInfo={false} data={data}/>
        </div>
        <TravelInfo />
    </div>
  )
}
