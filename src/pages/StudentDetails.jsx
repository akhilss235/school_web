import React from 'react'
import BasicBreadcrumbs from '../components/BasicBreadcrumbs'
import "../Styles/StudentDetails.css"
import { StudentOutlet } from '../components/student/StudentOutlet'
import { DetailSection } from '../components/student/DetailSection'

export const StudentDetails = ({isTeacher}) => {
  const title = isTeacher ? "Teacher Details" : "Student details"
  return (
    <section className='student-detail-page'>
        <div className=' text-start'> 
            <h4><b>{title}</b></h4>
            <BasicBreadcrumbs />
        </div>
        <div className='detail-section'>
            <DetailSection isTeacher={isTeacher} />
            <StudentOutlet isTeacher={isTeacher}/>
        </div>
    </section>
  )
}