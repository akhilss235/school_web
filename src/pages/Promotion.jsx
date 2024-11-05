import React from 'react'
import BasicBreadcrumbs from '../components/BasicBreadcrumbs'
import Icon from '../components/SvgComponent'
import { StudentCard } from '../components/student/StudentCard'

export const Promotion = ({isStudent}) => {

  const data = {
    name:"MOBOT",
    "number":"211241252",
    "class": "I A"
  }
  return (
    <section className="p-4 d-flex flex-column gap-5">
      <div className=' text-start'> 
          <h4><b>Student Details</b></h4>
          <BasicBreadcrumbs />
      </div>
      <div className='d-flex flex-row align-items-center gap-2 p-2' style={{borderRadius:"10px", border: "1px solid #D13650", backgroundColor:"#FEEAEC", color:"#D13650"}}> 
        <Icon iconName={"Warning"} fill='white' />
        <p className='m-0'><span className='fw-bold'>Note: </span> Prompting Student from the Present class to the Next Class will Create an enrollment of the student to the next Session</p>
      </div>
      <div className='d-flex flex-column gap-3 p-3' style={{boxShadow: "2px 2px 8px 0px #ABABAB29", "width":"100%", backgroundColor:"white", borderRadius:"10px"}}>
        <h6>Promotion</h6>
        <p>Select a Class to Promote next session and new class</p>
        <div className='p-3' style={{backgroundColor:"#EBF5FD", borderRadius:"15px"}}>
          <StudentCard data={data} isInfo={false} />
        </div>
        {/* <div className='d-flex flex-row gap-3'>
          <div></div>
          <div></div>
        </div> */}
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
