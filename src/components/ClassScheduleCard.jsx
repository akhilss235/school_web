import React from 'react'
import { LuClock4 } from "react-icons/lu";
import { MdOutlineMenuBook } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import { MdClass } from "react-icons/md";
export const ClassScheduleCard = ({data, bg="white", color="black",isTeacher}) => {

    const classData = {
        "student":[
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
        ],
        "teacher":[
            {
                "id":1,
                icon:<LuClock4 />,
                data:data?.time
            },
            {
                "id":2,
                icon:<MdClass />,
                data:`Class: ${data?.class}`
            },
            {
                "id":3,
                icon:<MdOutlineMenuBook />,
                data:`Subject: ${data?.subject}`
            },
            {
                "id":4,
                icon:<SiGoogleclassroom />,
                data:`Room No: ${data?.roomNo}`
            },
        ]
    }
    
    const category = isTeacher ? "teacher" : "student" 
    classData[category].map((item)=> item.data.startsWith("Class"))
  return (
    <div 
    className='d-flex flex-column gap-1' 
    style={{ width:"180px", borderRadius:"10px", padding:"10px", backgroundColor:bg,color:color, border: color === "black" ? "1px solid #EBF5FD": "" }}
    >
        {
            classData[category].map((item) => (
                <div 
                className='d-flex flex-row align-items-center gap-2' 
                style={{color:item.data.startsWith("Class") && "red", fontWeight:item.data.startsWith("Class") && "600"}}
                key={item.id}
                >
                    <span style={{ fontSize: "20px" }}>
                        {item.icon}
                    </span>
                    <p className='m-0' style={{fontSize:"14px"}}>{item?.data}</p>
                </div>
            ))
        }

    </div>
  )
}
