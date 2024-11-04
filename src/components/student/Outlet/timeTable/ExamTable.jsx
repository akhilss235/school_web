import React from 'react'

export const ExamTable = ({columns, rows}) => {

  return (
    <div className="d-flex align-items-center p-3 px-4">
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
                <thead style={{ backgroundColor: "#0E7EA8", height: "50px" }}>
                    {columns.map((column, index) => (
                        <th 
                            style={{ 
                                padding: "0px", 
                                textAlign: "center", 
                                height: "50px", 
                                color: "white", 
                                borderLeft: index > 0 ? "1px solid #FFFFFF" : ""
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
                            {Object.values(row).map((item, colIndex) => (
                                <td 
                                    key={colIndex} 
                                    style={{ 
                                        padding: "0px", 
                                        textAlign: "center", 
                                        height: "50px",
                                        borderLeft: colIndex > 0 ? "1px solid #EBF5FD" : "none"
                                    }}
                                >
                                    {item}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
