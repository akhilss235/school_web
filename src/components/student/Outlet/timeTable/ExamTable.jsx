import React from 'react'
import { StatusTag } from '../../../StatusTag'
import { Table } from '../../../Table'


export const ExamTable = ({columns, rows, isBorder, bgColor, isResult=false}) => {

  return (
    <div className="d-flex flex-column align-items-center p-3 px-4 gap-3">
        <Table columns={columns} rows={rows} isBorder={isBorder} bgColor={bgColor} />
        {
            isResult &&
            <div className="d-flex flex-row p-3 justify-content-between align-items-center fs-6" style={{color:"white",  width:"100%", backgroundColor:"#0E7EA8", borderRadius:"15px"}}>
                <p className='m-0'>Rank : 30</p>
                <p className='m-0'>Mark Obtained : 407/500</p>
                <div className='m-0 d-flex flex-row align-items-center gap-2 px-2' style={{backgroundColor:"white", color:"#0E7EA8", border:"none",borderRadius:"10px" }}>Result <StatusTag status={"Fail"}/></div>
            </div>
        }
    </div>
  )
}
