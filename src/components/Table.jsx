import React from 'react'
import { StatusTag } from './StatusTag'

export const Table = ({columns, rows, isBorder=true, bgColor="#0E7EA8"}) => {
  return (
    <div style={{
        border: !isBorder && "1px solid #EBF5FD",
        borderBottom: !isBorder && "none",
        borderRadius: "10px",
        overflow: "hidden"
    }}>
        <table style={{
            width: "100%",
            tableLayout: "fixed",
            borderCollapse: "separate", 
            borderSpacing: "0", 
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
                        {Object.entries(row).filter(([key, item])=> key !== "id").map(([key, item], colIndex) => (
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
  )
}
