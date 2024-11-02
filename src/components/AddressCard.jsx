import React from 'react'
import { IconCard } from './IconCard';

export const AddressCard = ({ data }) => { 
    const addData = [
        {
            "id":1,
            "icon":"Location",
            "title":"Current Address",
            "value": data?.current,
        },
        {
            id:2,
            "icon":"Pin",
            "title":"Permanent Address",
            "value": data?.permanent,
        }
    ]
    return(
    <div style={{}}>
      <IconCard data={addData} />
    </div>
  )
};
  
