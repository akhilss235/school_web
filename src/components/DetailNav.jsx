import React from 'react'
import { PiStudentLight } from "react-icons/pi";
import { HiOutlineTableCells } from "react-icons/hi2";
import { IoIosFingerPrint } from "react-icons/io";
import { IoCashOutline } from "react-icons/io5";
import { PiExam } from "react-icons/pi";

export const DetailNav = () => {
    const data = [
        {
            id:"1",
            icon: <PiStudentLight />,
            title:"Students"
        },
        {
            id:"2",
            icon: <HiOutlineTableCells />,
            title:"Time Table"
        },
        {
            id:"3",
            icon: <IoIosFingerPrint />,
            title:"Attendance"
        },
        {
            id:"4",
            icon: <IoCashOutline />,
            title:"Fee"
        },
        {
            id:"5",
            icon: <PiExam />,
            title:"Fee"
        },
    ]
  return (
    <div className='d-flex flex-row gap-4 align-items-center'>
        {data.map((item) => (
            <div className='d-flex flex-row gap-2 align-items-center' key={item.id}>
                {icon}
                <p className='m-0'>{item.title}</p>
            </div>
        ))}
    </div>
  )
}
