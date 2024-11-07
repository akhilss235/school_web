import React from "react";
import { Table } from "react-bootstrap";
import { ReactComponent as Eye } from '../../../../img/eye.svg';


function CustomTable({ headers, data }) {
  return (
    <div className="table-responsive">
      <Table responsive hover >
        <thead style={{ color: "#505050" }}>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((header, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    color:header.key === "leaveDate" || header.key === "id" ?  "#148CF0" : "",
                    textAlign:"center",
                    verticalAlign: "middle", 
                  }}
                >
                {
                  header.label === "Action" ?
                  <div style={{"backgroundColor":"#E2F1FD" ,borderRadius:"5px", width:"35px", height:"35px"}} className='d-flex justify-content-center align-items-center'  >
                      <Eye />
                  </div>
                  :row[header.key]
                }
                  
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CustomTable;
