import React from 'react'
import { ClassScheduleCard } from '../../ClassScheduleCard'
import { Break } from './Break';

export const Class = () => {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    const timeTableData = [
        {
          day: "Monday",
          classes: [
            { subject: "Maths", time: "9:00 AM - 10:00 AM", teacher: "Mr. Smith" },
            { subject: "Tamil", time: "10:15 AM - 11:15 AM", teacher: "Mrs. Johnson" },
            { subject: "Science", time: "9:00 AM - 10:00 AM", teacher: "Dr. Brown" },
            { subject: "Social", time: "10:15 AM - 11:15 AM", teacher: "Ms. Davis" },
            { subject: "English", time: "9:00 AM - 10:00 AM", teacher: "Mrs. Wilson" },
        ],
    },
    {
        day: "Tuesday",
        classes: [
            { subject: "Science", time: "9:00 AM - 10:00 AM", teacher: "Dr. Brown" },
            { subject: "Social", time: "10:15 AM - 11:15 AM", teacher: "Ms. Davis" },
            { subject: "Maths", time: "9:00 AM - 10:00 AM", teacher: "Mr. Smith" },
            { subject: "Tamil", time: "10:15 AM - 11:15 AM", teacher: "Mrs. Johnson" },
            { subject: "English", time: "9:00 AM - 10:00 AM", teacher: "Mrs. Wilson" },
        ],
    },
    {
        day: "Wednesday",
        classes: [
            { subject: "English", time: "9:00 AM - 10:00 AM", teacher: "Mrs. Wilson" },
            { subject: "Tamil", time: "10:15 AM - 11:15 AM", teacher: "Mr. Lee" },
            { subject: "Maths", time: "9:00 AM - 10:00 AM", teacher: "Mr. Smith" },
            { subject: "Tamil", time: "10:15 AM - 11:15 AM", teacher: "Mrs. Johnson" },
            { subject: "Social", time: "9:00 AM - 10:00 AM", teacher: "Mr. Taylor" },
        ],
    },
    {
        day: "Thursday",
        classes: [
            { subject: "Social", time: "9:00 AM - 10:00 AM", teacher: "Mr. Taylor" },
            { subject: "Science", time: "10:15 AM - 11:15 AM", teacher: "Ms. Martin" },
            { subject: "Maths", time: "9:00 AM - 10:00 AM", teacher: "Mr. Smith" },
            { subject: "Tamil", time: "10:15 AM - 11:15 AM", teacher: "Mrs. Johnson" },
            { subject: "Maths", time: "9:00 AM - 10:00 AM", teacher: "Mr. Anderson" },
        ],
    },
    {
        day: "Friday",
        classes: [
            { subject: "Social", time: "9:00 AM - 10:00 AM", teacher: "Mr. Taylor" },
            { subject: "Science", time: "10:15 AM - 11:15 AM", teacher: "Ms. Martin" },
            { subject: "Maths", time: "9:00 AM - 10:00 AM", teacher: "Mr. Anderson" },
            { subject: "English", time: "10:15 AM - 11:15 AM", teacher: "Mrs. Thompson" },
            { subject: "Maths", time: "9:00 AM - 10:00 AM", teacher: "Mr. Smith" },
          ],
        },
      ];
    
    const color = (subject)=>{
        return subject === "Maths" ? "#F40B36" : subject === "English" ? "#0030A8" : subject === "Tamil" ? "#288128" : subject === "Social" ? "#0D7A9C" : "#2589DA" 
    }

    const bg = (subject)=>{
        return subject === "Maths" ? "#FEE9ED" : subject === "English" ? "#F1F5FF" : subject === "Tamil" ? "#E8F8E8" : subject === "Social" ? "#E7F8FD" : "#E7F2FB" 
    }

  return (
    <div className='d-flex flex-column gap-4' style={{width:"800px"}}>
        <div className='d-flex flex-column gap-3 p-3 time-table'>
            <table className='d-flex flex-column gap-3' style={{ width: "max-content" }}>
                <thead>
                    <tr className='d-flex flex-row align-items-center gap-3 text-center'>
                        {weekdays.map((item, index) => (
                            <th className='m-0' style={{ width: "180px" }} key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='d-flex flex-row gap-3 ' style={{ width: "100%" }}>
                    <tr className='d-flex gap-3'>
                        {timeTableData.map((dayData, dayIndex) => (
                            <td key={dayIndex} className='d-flex gap-3 flex-column'>
                                {dayData.classes.map((classData, classIndex) => (
                                    <ClassScheduleCard key={classIndex} data={classData} bg={bg(classData.subject)} color={color(classData.subject)} />
                                ))}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
        <Break />
    </div>
  )
}
