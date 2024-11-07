import React from 'react'
import { OutletTab } from '../OutletTab'
import { Class } from './Class'
import { useSelector } from 'react-redux'
import { selectTab } from '../../../../features/student/tabSlice'
import { ExamTimeTable } from './ExamTimeTable'
import "../../../../Styles/timetable.css"

export const TimeTable = ({isTeacher}) => {
  console.log("isTeacher", isTeacher)
  const items = ["Class Time Table", "Exam Time Table"]
  const {isVisible, selectedTab} = useSelector(selectTab)
  return (
    <div className='d-flex flex-column gap-3'>
      {
        !isTeacher &&
        <OutletTab columns={items} />
      }
      <div className={`icon-card-container ${isVisible ? 'icon-card-visible' : ''}`}>
          {
            ! isTeacher ?
            selectedTab === "Class Time Table"
            ? <Class />
            : <ExamTimeTable />
            :  <Class isTeacher={isTeacher} />

          }
      </div>
    </div>
  )
}
