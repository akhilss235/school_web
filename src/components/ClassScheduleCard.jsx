import React from 'react'
import { LuClock4 } from "react-icons/lu";
import { MdOutlineMenuBook } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";

export const ClassScheduleCard = ({data, bg, color}) => {

    const classData = [
        {
            "id":1,
            icon:<LuClock4 />,
            data:data?.time
        },
        {
            "id":2,
            icon:<MdOutlineMenuBook />,
            data:data?.subject
        },
        {
            "id":3,
            icon:<BsPersonCircle />,
            data:data?.teacher
        },
    ]
  return (
    <div 
    className='d-flex flex-column gap-1' 
    style={{ width:"180px", borderRadius:"10px", padding:"10px", backgroundColor:bg,color:color}}
    >
        {
            classData.map((item) => (
                <div className='d-flex flex-row align-items-center gap-2' key={item.id}>
                    <span style={{ fontSize: "20px" }}> {/* Customize your styles here */}
                        {item.icon}
                    </span>
                    <p className='m-0' style={{fontSize:"14px"}}>{item?.data}</p>
                </div>
            ))
        }

    </div>
  )
}
