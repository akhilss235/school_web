import React from 'react'
import { OutletTab } from '../OutletTab'
import { useSelector } from 'react-redux'
import { selectTab } from '../../../../features/student/tabSlice'
import { ExamResult } from './ExamResult'
import { ExamTimeTable } from '../timeTable/ExamTimeTable'

export const Exam = () => {
    const items = ["Exam Result", "Exam Time Table"]
    const { isVisible, selectedTab } = useSelector(selectTab)


  return (
    <div className='d-flex flex-column gap-3'>
        <OutletTab columns={items} />
        <div className={`d-flex flex-row gap-3 align-items-center icon-card-container ${isVisible ? 'icon-card-visible' : ''}`}>
          {
            selectedTab === "Exam Result"
            ? <ExamResult />
            : <ExamTimeTable />
          }
        </div>
    </div>
  )
}
