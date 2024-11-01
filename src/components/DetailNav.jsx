import React, { useState } from 'react'
import { PiStudentLight } from "react-icons/pi";
import { HiOutlineTableCells } from "react-icons/hi2";
import { IoIosFingerPrint } from "react-icons/io";
import { IoCashOutline } from "react-icons/io5";
import { PiExam } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

export const DetailNav = ({title="students"}) => {

    const navigate = useNavigate()
    const [activeNav, setActiveNav] = useState(title === "students" ? "Students" : "Teacher Details")
    const data = {
        students:[
            {
                id:"1",
                icon: <PiStudentLight className='react-icon'/>,
                title:"Students"
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
        ]
    }

    const handleChangeNav = (item)=>{
        setActiveNav(item)
        if(item === "Students"){
            navigate(`/students/Details`)
        }else{
            navigate(`/students/Details/${item}`)
        }
    }
  return (
    <div className='d-flex flex-row gap-4 align-items-center'>
        {data[title]?.map((item) => (
            <div 
                className={`d-flex flex-row gap-2 align-items-center item ${activeNav === item.title ? "item-active" : ""}`} 
                style={{cursor:"pointer"}} 
                key={item.id}
                onClick={()=>handleChangeNav(item?.title)}
            >
                {item.icon}
                <p className='m-0' style={{fontSize:"17px"}}>{item.title}</p>
            </div>
        ))}
    </div>
  )
}
