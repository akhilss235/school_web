import React from 'react'
import InfoHeader from '../InfoHeader'
import { Dropdown } from '../student/Dropdown'

export const ScheduleExamForm = () => {
    const examValue = ["Monthly Exam(January)", "Mid Term Exam", "Quartely Exam", "Half Yearly Exam"]
    const timing = ["9:00AM - 10:00AM", "10:00AM - 11:00AM", "11:00AM - 12:00AM"]
  return (
    <div>
        <InfoHeader title="Set Time Table" iconName="HostelInformation" isLine={true} />
        <div className='d-flex flex-column gap-3'>
            <div className='d-flex flex-row gap-2'>
                <Dropdown label={"Exam Name"} value={examValue} />
                <Dropdown label={"Timing"} value={timing} />
            </div>
            <div className='d-flex flex-row gap-2'>

            </div>
        </div>
    </div>
  )
}
