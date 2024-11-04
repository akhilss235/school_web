import React from 'react'
import { OutletTab } from '../OutletTab'
import { Class } from './Class'
import { useSelector } from 'react-redux'
import { selectTab } from '../../../../features/student/tabSlice'
import { ExamTimeTable } from './ExamTimeTable'

export const TimeTable = () => {
  
  const items = ["Class Time Table", "Exam Time Table"]
  const {isVisible, selectedTab} = useSelector(selectTab)
  return (
    <div className='d-flex flex-column gap-3'>
      <OutletTab columns={items} />
      <div className={`d-flex flex-row gap-3 align-items-center icon-card-container ${isVisible ? 'icon-card-visible' : ''}`}>
          {
            selectedTab === "Class Time Table"
            ? <Class />
            : <ExamTimeTable />
          }
      </div>
    </div>
  )
}
