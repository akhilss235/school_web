import React from 'react'
import { OutletTab } from './OutletTab'

export const TimeTable = () => {
  const items = ["Class Time Table", "Exam Time Table"]
  return (
    <div className='d-flex flex-column '>
      <OutletTab columns={items} />
    </div>
  )
}
