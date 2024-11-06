import React from 'react'
import { LuClock4 } from "react-icons/lu";

export const Break = () => {

    const data = [
        {
            id:"1",
            title:"Morning Break",
            time:"9:00AM - 9:45AM",
            color:"#1EA207",
            border:"#D5FDCE"
        },
        {
            id:"2",
            title:"Afternoon Break",
            time:"9:00AM - 9:45AM",
            color:"#A2072F",
            border:"#ECCDD5"
        },
        {
            id:"3",
            title:"Evening Break",
            time:"9:00AM - 9:45AM",
            color:"#710571",
            border:"#E2CCE2"
        },
    ]
  return (

    <div className='class-break-cont' style={{width:"100%",}}>
        {
            data?.map((item, index) => (
                <div className='class-break-card' style={{border: `1px solid ${item.border}`}} key={index}>
                    <div className='d-flex align-items-center justify-content-center' style={{height:"30px", width:"100%",backgroundColor:item.border, color:item.color, borderTopLeftRadius:"10px", borderTopRightRadius:"10px"}}>
                        <h6 className='m-0' >{item?.title}</h6>
                    </div>
                    <div className='d-flex flex-row align-items-center gap-2 justify-content-center' style={{  color:item.color, width:"100%", height:"45px"}}>
                        <span style={{ fontSize: "20px" }}> {/* Customize your styles here */}
                            <LuClock4 />
                        </span>
                        <p className='m-0' style={{fontSize:"14px",}}>{item?.time}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
