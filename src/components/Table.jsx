import React from 'react'
import { StatusTag } from './StatusTag'

export const Table = ({columns, rows, isBorder=true, bgColor="#0E7EA8", isResult}) => {
  return (
    <div
        className='d-flex flex-column gap-3'
        style={{
            overflow:"scroll",
            width:"100%"
        }}
    >
        <div style={{
            border: !isBorder && "1px solid #EBF5FD",
            borderBottom: !isBorder && "none",
            borderRadius: "10px",
        }}>
            <table className='exam-table' style={{
                width: "100%",
                tableLayout: "fixed",
                borderCollapse: "separate", 
                borderSpacing: "0",
            }}>
                <thead style={{ backgroundColor: bgColor, height: "50px" }}>
                    {columns.map((column, index) => (
                        <th 
                            className='table-cell'
                            style={{ 
                                padding: "0px", 
                                textAlign: "center", 
                                height: "50px", 
                                color: bgColor ===  "#0E7EA8" ? "white" : "black" , 
                                borderLeft: isBorder && index > 0 ? "1px solid #FFFFFF" : "",
                            }} 
                            key={index}
                        >
                            {column}
                        </th>
                    ))}
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} style={{ borderBottom: "1px solid #EBF5FD" }}>
                            {Object.entries(row).filter(([key, item])=> key !== "id").map(([key, item], colIndex) => (
                                <td 
                                    className={key === "result" && 'd-flex flex-row justify-content-center align-items-center table-cell'}
                                    key={colIndex} 
                                    style={{ 
                                        padding: "0px", 
                                        textAlign: "center", 
                                        borderBottom: !isBorder && `1px solid ${bgColor}`,
                                        height: "50px",
                                        borderLeft:  isBorder &&  colIndex > 0 ? "1px solid #EBF5FD" : "none"
                                    }}
                                >
                                    {key === "result" ? <StatusTag status={item} /> : item}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        {
            isResult &&
            <div className="d-flex flex-row p-3 justify-content-between align-items-center fs-6"  style={{color:"white", width:"100%", backgroundColor:"#0E7EA8", borderRadius:"15px", overflow:"scroll", minWidth:"500px"}}>
                <p className='m-0'>Rank : 30</p>
                <p className='m-0'>Mark Obtained : 407/500</p>
                <div className='m-0 d-flex flex-row align-items-center gap-2 px-2' style={{backgroundColor:"white", color:"#0E7EA8", border:"none",borderRadius:"10px" }}>Result <StatusTag status={"Fail"}/></div>
            </div>
        }
    </div>
  )
}
