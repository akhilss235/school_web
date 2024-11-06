import React from 'react'
import BasicBreadcrumbs from '../components/BasicBreadcrumbs'
import "../Styles/StudentDetails.css"
import { StudentOutlet } from '../components/student/StudentOutlet'
import { DetailSection } from '../components/student/DetailSection'

export const StudentDetails = ({isTeacher}) => {
  return (
    <section className='student-detail-page'>
        <div className=' text-start'> 
            <h4><b>Student Details</b></h4>
            <BasicBreadcrumbs />
        </div>
        <div className='detail-section'>
            <DetailSection />
            <StudentOutlet />
        </div>
    </section>
  )
}
