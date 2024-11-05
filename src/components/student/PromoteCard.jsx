import React from 'react'
import { Dropdown } from './Dropdown'

export const PromoteCard = ({data}) => {
    
    const classes = ["I", "II","III", "IV", "V", "VI", "VII", "VIII"]
    const section = ["A", "B", "C", "D", "E"]
  return (
    <div className='d-flex flex-column p-3 gap-3' style={{width:"100%", borderRadius:"10px", border: "1px solid #EBF5FD"}}>
        {
            data.map((item, index)=>(
                <div className='d-flex flex-column  gap-2'>
                    {item?.type !== "select" && <label className='fw-medium'>{item?.title}</label>}
                    {item?.type === "select" ?
                        <Dropdown label={item?.title} value={item?.value} />
                    : 
                    <p className='m-0'>{item?.academicYear}</p>
                    }
                </div>
            ))
        }
        <label className='fw-medium'>Promotion to Class</label>
        <div className='d-flex flex-row align-items-center gap-3'>
            <Dropdown label={"Class"} value={classes} />
            <Dropdown label={"Section"} value={section} />
        </div>
    </div>
  )
}
