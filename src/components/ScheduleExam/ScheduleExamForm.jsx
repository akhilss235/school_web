import React, { useEffect, useState } from 'react'
import InfoHeader from '../InfoHeader'
import { Dropdown } from '../student/Dropdown'
import { Input } from '../Input';
import trashCan from "../../img/delete.png"

export const ScheduleExamForm = () => {
    const [formData, setFormData] = useState({})
    const initialValue =  [ 
        {id:1, "label":"Subject", value:"", type:"select", options:["-","English", "Tamil", "Maths", "Science", "Social Science"]},
        {id:2, "label":"Date", value:"", type:"date"},
        {id:3, "label":"Day", value:"", type:"input" }
    ]
    const [inputFields, setInputFields] = useState([initialValue])


    
    const handleFieldChange = (selectedIndex, fieldId, e) => {
        const { value } = e.target;
        console.log("value", value)
        const date = new Date(value);
        const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
    
        setInputFields(prevFields => 
            prevFields.map((fields, index) =>
                index === selectedIndex
                    ? fields.map(item => {
                        if (fieldId === 2) {
                            if (item.id === 2) {
                                return { ...item, value }; 
                            }
                            if (item.id === 3) {
                                return { ...item, value: dayOfWeek }; 
                            }
                        }
                        if (item.id === fieldId) {
                            return { ...item, value };
                        }
                        return item;  
                    })
                    : fields
            )
        );
    };

    const handleSubmit = () => {
        const updatedForm = { ...formData };
        const allSubjects = [];
    
        inputFields.forEach((fields) => {
            let subject = {}; 
            fields.forEach((item) => {
                subject[item.label.toLowerCase()] = item.value;
            });
            allSubjects.push(subject); 
        });
    
        updatedForm["subjects"] = allSubjects;
    
        setFormData(updatedForm);
        console.log("Updated form data:", formData);
    };
    
    
   

    const examValue = ["Monthly Exam(January)", "Mid Term Exam", "Quartely Exam", "Half Yearly Exam"]
    const timing = ["9:00AM - 10:00AM", "10:00AM - 11:00AM", "11:00AM - 12:00AM"]

    const handleAddFields = ()=>{
        setInputFields([...inputFields, initialValue])
    }
    const handleRemoveFields = (deleteIndex)=>{
        setInputFields(inputFields.filter((_, index) => index !== deleteIndex))
    }
    const Form = ({item, selectedIndex}) => (
        item.type === "select" ?
            <Dropdown label={item?.label} value={item?.options} selectedValue={item?.value} onChange={(e)=>handleFieldChange(selectedIndex, item.id, e)} />
        : item.type === "input" ?
            <Input label={item?.label} value={item?.value} onChange={(e)=>handleFieldChange(selectedIndex, item.id, e)}   />
        : item.type === "date" ?
            <Input label={item?.label} type='date' value={item?.value} onChange={(e)=>handleFieldChange(selectedIndex, item.id, e)}   />
        : null
  );
    
  return (
    <div>
        <InfoHeader title="Set Time Table" iconName="HostelInformation" isLine={true} />
        <div className='d-flex flex-column' style={{backgroundColor:"white", borderBottomLeftRadius:"15px", borderBottomRightRadius:"15px"}}>
            <div className='d-flex flex-row gap-2 p-3'>
                <Dropdown label={"Exam Name"} value={examValue} />
                <Dropdown label={"Timing"} value={timing} />
            </div>
            <div style={{width:"100%", height:"1px", backgroundColor:"#EBF5FD"}}></div>
                {
                    inputFields?.map((item, index)=>(
                        <div className='d-flex flex-row gap-2  p-3' key={index}>
                            {
                                item?.map((data, i)=>(
                                    <Form item={data} key={i} selectedIndex={index}  />
                                ))
                            }
                            <div className='d-flex justify-content-center align-items-end pb-2' style={{cursor:"pointer"}} onClick={()=>handleRemoveFields(index)}>
                                <img src={trashCan} height={"30px"} width={"30px"} />
                            </div>
                        </div>
                    ))
                }
            <div className='ms-3 add-new-btn' onClick={handleAddFields} >
                <p className='m-0 p-2'>Add New</p>
            </div>
            <div className='d-flex justify-content-end align-items-center gap-3'>
                <p className='m-0'>Discard</p>
                <p className='m-0' onClick={handleSubmit}>Save</p>
            </div>
        </div>
    </div>
  )
}
