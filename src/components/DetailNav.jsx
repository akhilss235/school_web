import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const DetailNav = ({data, title}) => {

    const navigate = useNavigate()
    const location = useLocation()
    const [activeNav, setActiveNav] = useState("")
   

    const handleChangeNav = (item)=>{
        setActiveNav(item)
        if(title === "teacher"){
            if(item === "Teacher"){
                navigate(`/Teachers/Details`)
            }else{
                navigate(`/Teachers/Details/${item}`)
            }
        }else if(title === "staff"){
            if(item === "Staff"){
                navigate(`/Staffs/Details`)
            }else{
                navigate(`/Staffs/Details/${item}`)
            }
        }
        else{
            if(item === "Details"){
                navigate(`/Students/Details`)
            }else{
                navigate(`/Students/Details/${item}`)
            }
        }
    }

    useEffect(() => {
        const pathSegments = location.pathname.split('/').filter(segment => segment);
        const lastSegment = pathSegments[pathSegments.length - 1].replace(/%20/g, " ");
        lastSegment === "Details" &&  title === "teacher"? 
        setActiveNav("Teacher")
        : title === "staff" ?
        lastSegment === "Details" &&  setActiveNav("Staff")
        :setActiveNav(lastSegment);
    }, [location.pathname]);

  return (
    <div className='details-nav'>
        {data?.map((item) => (
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
