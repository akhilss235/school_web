import React from 'react'
import { DetailNav } from '../DetailNav'
import { Outlet } from 'react-router-dom'

export const StudentOutlet = () => {
  return (
    <div className='d-flex flex-column' style={{width:"100%"}}>
      <DetailNav />
      <Outlet />
    </div>
  )
}
