import React from "react";
import { Table, Button  } from "react-bootstrap";


function CustomTable({ headers, data }) {
  return (
    <div className="table-responsive">
      <Table responsive hover>
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
                  style={
                    header.key === "leaveDate"
                      ? { color: "#148CF0" }
                      : undefined
                  }
                >
                  {row[header.key]}
                  {/* Render the action button if this is the 'actions' column */}
                  {header.key === "action" ? (
                    <Button
                      variant="primary"
                      onClick={() => console.log("Action clicked", row)}
                    >
                      Action
                    </Button>
                  ) : (
                    row[header.key]
                  )}


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
