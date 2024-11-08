import React from 'react'
import { DetailNav } from '../DetailNav'
import { Outlet } from 'react-router-dom'
import { PiStudentLight } from "react-icons/pi";
import { HiOutlineTableCells } from "react-icons/hi2";
import { IoIosFingerPrint } from "react-icons/io";
import { IoCashOutline } from "react-icons/io5";
import { PiExam } from "react-icons/pi";

export const StudentOutlet = ({isTeacher, isStaff}) => {
  console.log("isStaff", isStaff)
  const title = isStaff ?  "staff": isTeacher ? "teacher" : "student"
  const data = {
    student:[
        {
            id:"1",
            icon: <PiStudentLight className='react-icon'/>,
            title:"Details"
        },
        {
            id:"2",
            icon: <HiOutlineTableCells className='react-icon' />,
            title:"Time Table"
        },
        {
            id:"3",
            icon: <IoIosFingerPrint className='react-icon' />,
            title:"Attendance"
        },
        {
            id:"4",
            icon: <IoCashOutline className='react-icon' />,
            title:"Fees"
        },
        {
            id:"5",
            icon: <PiExam className='react-icon' />,
            title:"Exams"
        },
    ],
    teacher:[
        {
            id:"1",
            icon: <PiStudentLight className='react-icon'/>,
            title:"Teacher"
        },
        {
            id:"2",
            icon: <HiOutlineTableCells className='react-icon' />,
            title:"Time Table"
        },
        {
            id:"3",
            icon: <IoIosFingerPrint className='react-icon' />,
            title:"Attendance"
        },
        {
            id:"5",
            icon: <PiExam className='react-icon' />,
            title:"Salary"
        }
    ],
    staff:[
        {
            id:"1",
            icon: <PiStudentLight className='react-icon'/>,
            title:"Staff"
        },
        {
            id:"3",
            icon: <IoIosFingerPrint className='react-icon' />,
            title:"Attendance"
        },
        {
            id:"5",
            icon: <PiExam className='react-icon' />,
            title:"Salary"
        }
    ]
}
console.log("dta",data["staff"])
  return (
    <div className='d-flex flex-column gap-3' style={{width:"100%",overflowX:'auto'}}>
      <DetailNav data={data[title]} title={title}/>
      <Outlet />
    </div>
  )
}
