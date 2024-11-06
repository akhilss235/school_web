import React from 'react'
import { StatusTag } from '../../../StatusTag'
import { Table } from '../../../Table'


export const ExamTable = ({columns, rows, isBorder, bgColor, isResult=false}) => {
  return (
    <div 
    className="table-container" 
    >
        <Table columns={columns} rows={rows} isBorder={isBorder} bgColor={bgColor} isResult={isResult} />
    </div>
  )
}
