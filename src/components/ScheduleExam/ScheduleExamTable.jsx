import React from 'react'
import { ExamTimeTable } from '../student/Outlet/timeTable/ExamTimeTable'
import { ScheduleExamForm } from './ScheduleExamForm'

export const ScheduleExamTable = ({isExam}) => {
  return (
    <div className='p-3'>
        {
          isExam 
          ?  <ExamTimeTable isLine={true} isBorder={true}/>
          :  <ScheduleExamForm />
        }
    </div>
  )
}
