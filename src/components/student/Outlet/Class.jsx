import React, { Fragment } from 'react'
import { ClassScheduleCard } from '../../ClassScheduleCard'

export const Class = () => {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    const timeTableData = [
        {
          day: "Monday",
          classes: [
            { subject: "Maths", time: "9:00 AM - 10:00 AM", teacher: "Mr. Smith" },
            { subject: "Tamil", time: "10:15 AM - 11:15 AM", teacher: "Mrs. Johnson" },
          ],
        },
        {
          day: "Tuesday",
          classes: [
            { subject: "Science", time: "9:00 AM - 10:00 AM", teacher: "Dr. Brown" },
            { subject: "Social", time: "10:15 AM - 11:15 AM", teacher: "Ms. Davis" },
          ],
        },
        {
          day: "Wednesday",
          classes: [
            { subject: "English", time: "9:00 AM - 10:00 AM", teacher: "Mrs. Wilson" },
            { subject: "Tamil", time: "10:15 AM - 11:15 AM", teacher: "Mr. Lee" },
          ],
        },
        {
          day: "Thursday",
          classes: [
            { subject: "Social", time: "9:00 AM - 10:00 AM", teacher: "Mr. Taylor" },
            { subject: "Science", time: "10:15 AM - 11:15 AM", teacher: "Ms. Martin" },
          ],
        },
        {
          day: "Friday",
          classes: [
            { subject: "Maths", time: "9:00 AM - 10:00 AM", teacher: "Mr. Anderson" },
            { subject: "English", time: "10:15 AM - 11:15 AM", teacher: "Mrs. Thompson" },
          ],
        },
      ];
      {/* {
            weekdays.map((item,index)=>(
            <th className='m-0' style={{width:"180px"}} key={index}>{item}</th>
        ))
    } */}

  return (
    <div className='d-flex flex-column p-3 info' style={{width:"100%",backgroundColor:"white" ,padding:"20px", overflowX:"auto"}}>
       <table className='d-flex flex-column gap-3'>
            <thead>
                <tr className='d-flex flex-row align-items-center gap-3'>
                    {weekdays.map((item, index) => (
                        <th className='m-0' style={{width:"180px"}} key={index}>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody className='d-flex flex-row gap-1'>
                <tr>
                    {timeTableData.map((dayData, dayIndex) => (
                        <td key={dayIndex}>
                            {dayData.classes.map((classData, classIndex) => (
                                <ClassScheduleCard key={classIndex} data={classData} />
                            ))}
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    </div>
  )
}
