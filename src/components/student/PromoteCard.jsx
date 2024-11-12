import React from 'react'
import { Dropdown } from './Dropdown'
import { Input } from '../Input'
import "../../Styles/promotion.css"

export const PromoteCard = ({data}) => {
    
    const Form = ({item}) => (
          item.type === "select" ?
            <Dropdown label={item?.title} value={item?.value} />
          : item.type === "input" ?
            <Input label={item?.title} />
          : 
            <ShowContent item={item}/>
      );

    const ShowContent = ({item})=>{
        console.log("item", item)
        return(
        <div className="d-flex flex-column gap-1" style={{height:"auto", width:"100%"}}>
            <label className='fw-semibold ' style={{height:"auto",fontSize:"16px"}}>{item?.title}</label>
            <p className='m-0' style={{ verticalAlign:"middle", paddingLeft:"10%"}}>{item?.value}</p>
        </div>
    )}
  return (
    <div className='d-flex flex-column p-3 gap-3' style={{width:"100%", borderRadius:"10px", border: "1px solid #EBF5FD", height:"auto"}}>
        {
            Array.isArray(data?.content) ? (
              <div className='card-cont' style={{ width: "100%", height:"maxContent" }}>
                {data?.content.map((it, index) => (
                  <Form item={it} key={index}/>
                ))}
              </div>
            ) : (
              <Form item={data?.content} />
            )
        }
        <label className='fw-medium'>{data?.cardTitle}</label>
        <div className='card-section-cont'>
            {
              data.fields.map((item)=>(
                  <Form item={item} />
              ))
            }
        </div>
    </div>
  )
}
