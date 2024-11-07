import React from 'react'
import { Info } from './Info'
import { InfoCard } from '../InfoCard'
import { TravelInfo } from '../TravelInfo'

export const DetailSection = ({isTeacher=false}) => {
  const data = {
    name:"murugasa",
    "class":"IV",
    "number":"325235325"
  }
  const contactData = [
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
  const workDetailData = [
    {
      "id":1,
      icon:"email",
      title:"Contract Type",
      value:"Permanent" 
    }
  ]
  return (
    <div className='d-flex flex-column gap-3 info-section'>
        <Info />
        <InfoCard title={"Primary Contact Info"} data={contactData} />
        {
          isTeacher ?
             <InfoCard title={"Work Details"} data={workDetailData} />
          :  <InfoCard title={"Sibling Information"} data={data} isStudentCard={true}/>
        }
        
        <TravelInfo />
    </div>
  )
}
