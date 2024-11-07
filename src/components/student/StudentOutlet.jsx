import React from 'react'
import { DetailNav } from '../DetailNav'
import { Outlet } from 'react-router-dom'

export const StudentOutlet = ({isTeacher}) => {
  const title = isTeacher ? "teacher" : "student"
  return (
<<<<<<< Updated upstream
    <div className='d-flex flex-column gap-3' style={{width:"100%"}}>
      <DetailNav  title={title} />
=======
    <div className='d-flex flex-column gap-3' style={{width:"100%",overflowX:'auto'}}>
      <DetailNav />
>>>>>>> Stashed changes
      <Outlet />
    </div>
  )
}
