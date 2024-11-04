import React from 'react'
import InfoAccordion from '../../../InfoAccordion'
import { ExamTable } from '../timeTable/ExamTable'

export const ExamResult = () => {
    const columns  = ["Subject", "Max Marks", "Min Marks", "Marks Obtained", "Result"]
    const novemberData = [
        {
            "subject":"Maths",
            "maxMark":"100",
            "minMarks":"35",
            "markObtained":"50",
            "result":"Pass"
        },
        {
            "subject":"English",
            "maxMark":"100",
            "minMarks":"35",
            "markObtained":"50",
            "result":"Pass"
        },
        {
            "subject":"Tamil",
            "maxMark":"100",
            "minMarks":"35",
            "markObtained":"50",
            "result":"Pass"
        },
        {
            "subject":"Science",
            "maxMark":"100",
            "minMarks":"35",
            "markObtained":"15",
            "result":"Fail"
        },
        {
            "subject":"Social",
            "maxMark":"100",
            "minMarks":"35",
            "markObtained":"50",
            "result":"Pass"
        },
    ]
    const decemberData = [
        {
            "subject":"Maths",
            "maxMark":"100",
            "minMarks":"35",
            "markObtained":"50",
            "result":"Pass"
        },
        {
            "subject":"English",
            "maxMark":"100",
            "minMarks":"35",
            "markObtained":"50",
            "result":"Pass"
        },
        {
            "subject":"Tamil",
            "maxMark":"100",
            "minMarks":"35",
            "markObtained":"50",
            "result":"Pass"
        },
        {
            "subject":"Science",
            "maxMark":"100",
            "minMarks":"35",
            "markObtained":"45",
            "result":"Pass"
        },
        {
            "subject":"Social",
            "maxMark":"100",
            "minMarks":"35",
            "markObtained":"55",
            "result":"Pass"
        },
    ]
  
  return (
    <div className='d-flex flex-column gap-3' style={{width:"100%"}}>
        <InfoAccordion title="Monthly Test (November)" iconName="HostelInformation" isToggle={false} isBorder={true} isLine={false}>
            <ExamTable columns={columns} rows={novemberData} isBorder={false} bgColor='#EBF5FD' isResult={true} />
        </InfoAccordion>
        <InfoAccordion title="Monthly Test (December)" iconName="HostelInformation" isToggle={false} isBorder={true} isLine={false}>
            <ExamTable columns={columns} rows={decemberData} isBorder={false} bgColor='#EBF5FD' isResult={true} />
        </InfoAccordion>
    </div>
  )
}
