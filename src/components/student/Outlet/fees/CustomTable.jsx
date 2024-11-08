import React from "react";
import { Table, Button } from "react-bootstrap";
import { ReactComponent as FileIcon } from "../../../../img/file.svg";

function CustomTable({ headers, data }) {
  return (
    <div className="table-responsive">
      <Table responsive hover>
        <thead style={{ color: "#505050" }}>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`${
                  header.label === "Action" ? "text-center" : "text-start"
                }`}
              >
                {header.label}
              </th>
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
                    color: header.label === "Fees Type" ? "#148CF0" : "",
                    textAlign: "start",
                  }}
                >
                  {header.label === "Action" ? (
                    <div
                      style={{
                        backgroundColor: "#FDEEE2",
                        borderRadius: "5px",
                        width: "30px",
                        height: "30px",
                      }}
                      className="d-flex justify-content-center align-items-center mx-auto"
                    >
                      <FileIcon />
                    </div>
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
