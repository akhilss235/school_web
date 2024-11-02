import React from 'react'
import { useOutletHook } from '../../../hooks/outletTab'

export const OutletTab = ({columns}) => {
    const {selectedTab, handleChangeTab} = useOutletHook(columns)

  return (
    <div className="d-flex flex-row gap-3 align-items-center" style={{cursor:"pointer"}}>
        {
            columns.map((column, index)=>(
                <p 
                    className={`m-0 p-1 px-4 outletTab ${selectedTab === column ? "selectedOutletTab" : ""}`} 
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

