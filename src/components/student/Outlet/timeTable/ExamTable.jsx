import React from 'react'
import { StatusTag } from '../../../StatusTag'

export const ExamTable = ({columns, rows, isBorder=true, bgColor="#0E7EA8", isResult=false}) => {

  return (
    <div className="d-flex flex-column align-items-center p-3 px-4 gap-3">
        <div style={{
            border: "1px solid #EBF5FD",
            borderRadius: "10px",
            overflow: "hidden"
        }}>
            <table style={{
                width: "100%",
                tableLayout: "fixed",
                borderCollapse: "separate", // Changed from "collapse" to "separate"
                borderSpacing: "0", // Ensures cells touch without gaps
            }}>
                <thead style={{ backgroundColor: bgColor, height: "50px" }}>
                    {columns.map((column, index) => (
                        <th 
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
                            {Object.entries(row).map(([key, item], colIndex) => (
                                <td 
                                    className={key === "result" && 'd-flex flex-row justify-content-center align-items-center'}
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
            <div className="d-flex flex-row p-3 justify-content-between align-items-center fs-6" style={{color:"white",  width:"100%", backgroundColor:"#0E7EA8", borderRadius:"15px"}}>
                <p className='m-0'>Rank : 30</p>
                <p className='m-0'>Mark Obtained : 407/500</p>
                <div className='m-0 d-flex flex-row align-items-center gap-2 px-2' style={{backgroundColor:"white", color:"#0E7EA8", border:"none",borderRadius:"10px" }}>Result <StatusTag status={"Fail"}/></div>
            </div>
        }
    </div>
  )
}
