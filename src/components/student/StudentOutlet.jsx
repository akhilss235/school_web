import React from 'react'
import { DetailNav } from '../DetailNav'
import { Outlet } from 'react-router-dom'

export const StudentOutlet = ({isTeacher}) => {
  const title = isTeacher ? "teacher" : "student"
  return (
    <div className='d-flex flex-column gap-3' style={{width:"100%"}}>
      <DetailNav  title={title} />
      <Outlet />
    </div>
  )
}
