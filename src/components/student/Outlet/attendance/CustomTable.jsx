import React from "react";
import { Table, Dropdown } from "react-bootstrap";
import { GoDotFill } from "react-icons/go";
import { LiaEyeSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { MdOutlineToggleOff } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

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
