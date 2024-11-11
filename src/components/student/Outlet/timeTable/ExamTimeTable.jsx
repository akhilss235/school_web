import React from 'react'
import InfoAccordion from '../../../InfoAccordion'
import { ExamTable } from './ExamTable'

export const ExamTimeTable = ({isLine=false, isBorder=true}) => {
  const columns  = ["Date", "Day", "Subject"]
  const novemberData = [
      {
        "date":"18/11/2024",
        "day":"Monday",
        "subject":"Maths"
      },
      {
        "date":"19/11/2024",
        "day":"Tuesday",
        "subject":"English"
      },
      {
        "date":"20/11/2024",
        "day":"Wednesday",
        "subject":"Tamil"
      },
      {
        "date":"21/11/2024",
        "day":"Thursday",
        "subject":"Science"
      },
      {
        "date":"22/11/2024",
        "day":"Friday",
        "subject":"Social"
      }
  ]
  const decemberData = [
      {
        "date":"18/12/2024",
        "day":"Monday",
        "subject":"Maths"
      },
      {
        "date":"19/12/2024",
        "day":"Tuesday",
        "subject":"English"
      },
      {
        "date":"20/12/2024",
        "day":"Wednesday",
        "subject":"Tamil"
      },
      {
        "date":"21/12/2024",
        "day":"Thursday",
        "subject":"Science"
      },
      {
        "date":"22/12/2024",
        "day":"Friday",
        "subject":"Social"
      }
  ]
  return (
    <div className='d-flex flex-column gap-3' style={{width:"100%"}}>
      <InfoAccordion title="Monthly Test (November)" iconName="HostelInformation" isToggle={false} isBorder={isBorder} isLine={isLine}>
        <ExamTable columns={columns} rows={novemberData} />
      </InfoAccordion>
      <InfoAccordion title="Monthly Test (December)" iconName="HostelInformation" isToggle={false} isBorder={isBorder} isLine={isLine}>
        <ExamTable columns={columns} rows={decemberData} />
      </InfoAccordion>
    </div>
  )
}
