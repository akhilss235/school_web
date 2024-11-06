import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTab, selectTab } from '../../../features/student/tabSlice'

export const OutletTab = ({columns}) => {

    const dispatch = useDispatch()
    const {selectedTab, isVisible} = useSelector(selectTab)

    const handleChangeTab = (item) =>{
        dispatch(changeTab(item))
    }

    useEffect(()=>{
        dispatch(changeTab(columns[0]))
    },[dispatch])

  return (
    <div className="d-flex flex-row gap-3 align-items-center" style={{cursor:"pointer"}}>
        {
            columns.map((column, index)=>(
                <p 
                    className={`m-0 p-1 px-4 outletTab ${selectedTab === column ? "selectedOutletTab" : ""}`} 
                    style={{fontSize:"auto"}}
                    onClick={()=>handleChangeTab(column)}
                    key={index}
                >
                {column}
                </p>
            ))
        }    
    </div>
  )
}

