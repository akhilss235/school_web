import React from 'react'
import InfoHeader from './InfoHeader'
import { ParentInfoCard } from './student/Outlet/ParentInfoCard'
import {DocumentCard} from "./DocumentCard"
import { AddressCard } from './AddressCard'

export const CustomCard = ({iconName, title, label, data, isRow=false}) => {
    console.log("data", data)
  return (
    <div style={{border: "1px solid #EBF5FD", boxShadow: "2px 2px 8px 0px #ABABAB29", borderRadius:"15px", width:"100%"}}>
        <InfoHeader iconName={iconName} title={title} size={20}/>
        <div className={`d-flex ${isRow ? "flex-row": "flex-column"} gap-3`} style={{padding:"15px"}}>
            {
                data?.map((item)=>(
                    label === "parents" ?
                        <ParentInfoCard data={item}/>
                    : label === "Documents" ? 
                        <DocumentCard data={item}/>
                    :  <AddressCard data={item} />
                ))
            }
        </div>  
    </div>
  )
}
