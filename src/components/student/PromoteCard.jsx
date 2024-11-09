import React from 'react'
import { Dropdown } from './Dropdown'
import { Input } from '../Input'

export const PromoteCard = ({data}) => {
    
    const Form = ({item}) => (
          item.type === "select" ?
            <Dropdown label={item?.title} value={item?.value} />
          : item.type === "input" ?
            <Input label={item?.title} />
          : 
            <ShowContent item={item}/>
      );

    const ShowContent = ({item})=>(
        <div className="d-flex flex-column gap-1" style={{height:"78px"}}>
            <label className='fw-semibold ' style={{fontSize:"16px"}}>{item?.title}</label>
            <p className='m-0' style={{height:"50px"}}>{item?.value}</p>
        </div>
    )
  return (
    <div className='d-flex flex-column p-3 gap-3' style={{width:"100%", borderRadius:"10px", border: "1px solid #EBF5FD"}}>
        {/* <ShowContent  /> */}
        {/* {
          data && !isInactive && data.map((item, index) =>(
            Array.isArray(item) ? (
              <div key={index} className='d-flex flex-row gap-4' style={{ width: "100%" }}>
                {item.map((it) => (
                  <Form key={it.id} item={it} />
                ))}
              </div>
            ) : (
              <Form key={item.id} item={item} />
            )
          ))
        } */}
        <label className='fw-medium'>{data?.cardTitle}</label>
        <div className='d-flex flex-row align-items-center gap-3'>
            {
                data.fields.map((item)=>(
                    <Form item={item} />
                ))
            }
        </div>
    </div>
  )
}
