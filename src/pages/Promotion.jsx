import React from 'react'
import BasicBreadcrumbs from '../components/BasicBreadcrumbs'
import Icon from '../components/SvgComponent'
import { StudentCard } from '../components/student/StudentCard'
import { PromoteCard } from '../components/student/PromoteCard'

export const Promotion = ({isStudent, isCrumbsNeeded=true, title}) => {

  const promotionData = {
    "class":
      {
        title:"Shift Class Room",
        description:"Choose a new classroom to replace the old one",
        currentSectionData:{
          content:[
            {
              title: 'Class & Section',
              value: "IV A",
              
            },
            {
              title: 'Number of Students',
              value: "50"
            },
          ],
          cardTitle:"Change from Room",
          fields:[
            {
              title: 'Room Number',
              value: "110",
              
            },
            {
              title: 'Capacity',
              value: "50",
            },
          ]
        },
        selctedData : {
          content:[
            {
              title: 'Class & Section',
              value: "IV A",
              
            },
            {
              title: 'Number of Students',
              value: "50"
            },
          ],
          cardTitle:"Change to room",
          fields:[
            {
              title: 'Room Number',
              value: ["11","12","13","34","53","42","36"],
              type:"select"
              
            },
            {
              title: 'Capacity',
              value: "50",
              type:"input"
            },
          ]
      },
      },
    "student":
      {
        title:"Promotion",
        description:"Select a Class to Promote next session and new class",
        currentSectionData:{
          content:{
              title: 'Current Session',
              value: "2024 - 2025",
            },
          cardTitle:"Promotion to Class",
          fields:[
            {
              title: 'Class',
              value: ["I","II","III","IV","V"],
              type:"select"
              
            },
            {
              title: 'Section',
              value: ["A", "B", "C"],
              type:"selct"
            },
          ]
        },
        selctedData : {
          content:{
              title: "Promotion to section",
              value:["2023 - 2024", "2024 - 2025", "2025 - 2026", "2026-2027"],
              type:"select",
            },
            
          cardTitle:"Promotion to Class",
          fields:[
            {
              title: 'Class',
              value: ["I","II","III","IV","V"],
              type:"select"
              
            },
            {
              title: 'Section',
              value: ["A", "B", "C"],
              type:"selct"
            },
          ]
      },
      }
  }

  const data = {
    name:"MOBOT",
    "number":"211241252",
    "class": "I A"
  }
  const selectData = [{
    title: 'Promote to Section',
    academicYear : "2024 - 2025",
    type:"select",
    value:["2023 - 2024", "2024 - 2025", "2025 - 2026", "2026-2027"]
  }]

  const currentSectionData = [{
    title: 'Current Session',
    academicYear : "2024 - 2025",
}]
const item = promotionData[title]
  return (
    <section className="p-4 d-flex flex-column gap-5">
      {
        isCrumbsNeeded &&
        <>
          <div className=' text-start'> 
              <h4><b>Student Details</b></h4>
              <BasicBreadcrumbs />
          </div>
          <div className='d-flex flex-row align-items-center gap-2 p-2' style={{borderRadius:"10px", border: "1px solid #D13650", backgroundColor:"#FEEAEC", color:"#D13650"}}> 
            <Icon iconName={"Warning"} fill='white' />
            <p className='m-0'><span className='fw-bold'>Note: </span> Prompting Student from the Present class to the Next Class will Create an enrollment of the student to the next Session</p>
          </div>
        </>
      }
      <div className='d-flex flex-column gap-3 p-3' style={{boxShadow: "2px 2px 8px 0px #ABABAB29", "width":"100%", backgroundColor:"white", borderRadius:"10px"}}>
        <h5 className='fw-semibold fs-3'>{item?.title}</h5>
        <p>{item?.description}</p>
        {
          isStudent &&
          <div className='p-3' style={{backgroundColor:"#EBF5FD", borderRadius:"15px"}}>
            <StudentCard data={data} isInfo={false} />
          </div>
        }
        <div className='d-flex flex-row gap-3'>
          <PromoteCard data={item?.currentSectionData}/>
          <PromoteCard data={item?.selctedData} />
        </div>
        <div className='d-flex flex-row justify-content-center align-items-center gap-2'>
          <div 
            className='reset-btn' 
          >
            <p className="sign-in">Reset Promotion</p>
          </div>
          <div className="login-button" style={{width:"200px", height:"50px"}}>
            <p className="sign-in">Promote Student</p>
          </div>
        </div>
      </div>
    </section>
  )
}
