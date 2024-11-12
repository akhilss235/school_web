import React from "react";
import { Table} from "react-bootstrap"; 
import BasicBreadcrumbs from "../../components/BasicBreadcrumbs";
import Search from "../../filter/Search";
import { GetDate } from "../../filter/Date"
import { RadioButton } from "../../components/RadioButton";

function TeachersAttendance() {
  const options = ["Present", "Absent", "Late", "First Half", "Second Half"]


  const data = [
    {
      id:"1",
      teacherId:"20240015671",
      teacherName:"Maari",
    },
    {
      id:"2",
      teacherId:"20240015672",
      teacherName:"Sanikalama",
    },
    {
      id:"3",
      teacherId:"20240015673",
      teacherName:"Adithangi",
    },
    {
      id:"4",
      teacherId:"20240015674",
      teacherName:"Bad Ravi",
    },
    {
      id:"5",
      teacherId:"20240015675",
      teacherName:"Yavaruthura neeru",
    },
  ]

  
  return (
    <div className="p-3 d-flex flex-column gap-4">
      <div className="text-start">
        <h4>
          <b>Teacher Attendance</b>
        </h4>
        <BasicBreadcrumbs />
      </div>
      <div
        className="d-flex flex-row justify-content-between gap-2 px-5"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="me-3 mb-2 mb-md-0">
          <GetDate title="Date" />
        </div>
        <Search />
      </div>
      <div className="table-responsive" style={{ backgroundColor: "#FFFFFF" }}>
        <Table responsive>
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Teacher ID</th>
              <th>Teacher Name</th>
              <th className="d-flex justify-content-start">Attendance</th>
            </tr>
          </thead>
          <tbody>
              {
                data.map((item)=>(
                <tr key={item.teacherId}>
                  <td style={{color:"#148CF0"}}>{item.teacherId}</td>
                  <td>{item.teacherName}</td>
                  <td className="d-flex flex-row gap-4" >
                    <RadioButton options={options} label={item.teacherId}/>
                  </td>
                </tr>
                ))
              }
          </tbody>
        </Table>
      </div>
      <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
          <p>Attendance will be closed for the date 11/11/2024 </p>
          <div
            className="login-button"
            style={{ width: "200px", height: "50px" }}
          >
            <p className="sign-in">Close Attendance</p>
          </div>
      </div>
    </div>
  );
}


export default TeachersAttendance