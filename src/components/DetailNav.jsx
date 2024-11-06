import React, { useEffect, useState } from 'react'
import { PiStudentLight } from "react-icons/pi";
import { HiOutlineTableCells } from "react-icons/hi2";
import { IoIosFingerPrint } from "react-icons/io";
import { IoCashOutline } from "react-icons/io5";
import { PiExam } from "react-icons/pi";
import { useLocation, useNavigate } from 'react-router-dom';

export const DetailNav = ({title="students"}) => {

    const navigate = useNavigate()
    const location = useLocation()
    const [activeNav, setActiveNav] = useState(title === "Details" ? "Students" : "Teacher Details")
    const data = {
        students:[
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
        ]
    }

    const handleChangeNav = (item)=>{
        setActiveNav(item)
        if(item === "Details"){
            navigate(`/students/Details`)
        }else{
            navigate(`/students/Details/${item}`)
        }
    }

    useEffect(() => {
        const pathSegments = location.pathname.split('/').filter(segment => segment);
        const lastSegment = pathSegments[pathSegments.length - 1].replace(/%20/g, " ");
        setActiveNav(lastSegment);
    }, [location.pathname]);

  return (
    <div className='details-nav'>
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
