import React, { useState, useEffect } from "react";
import { Row, Col, Table, OverlayTrigger } from "react-bootstrap";
import AttendanceIcon from "./AttendanceIcon"; // Make sure this component is defined with icons
import "./Attendance.css";


const AttendanceDetails = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const generateRandomStatus = () => {
      const statuses = [
        "present",
        "absent",
        "firstHalf",
        "secondHalf",
        "holiday",
      ];
      return statuses[Math.floor(Math.random() * statuses.length)];
    };

    const fetchData = () => {
      const data = monthNames.map((month) => ({
        month,
        days: Array.from({ length: 31 }, () => ({
          status: generateRandomStatus(), // Randomly generated status for each day
        })),
      }));
      setAttendanceData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="attendance-container">
      <Row className="attendance-row align-items-center">
        <Col
          xs={12}
          sm={"auto"}
          className="fixed-width-col py-3 fw-bold fs-20"
          style={{ paddingLeft: "20px" }}
        >
          Attendance
        </Col>
        <Col xs={12} sm={"auto"} style={{ paddingLeft: "20px" }}>
          <Row className="justify-content-start align-items-start">
            <Col
              xs={6}
              sm={"auto"}
              className="py-3 fw-semibold fs-14 text-start"
            >
              <AttendanceIcon type="present" label="Present" />
            </Col>
            <Col xs={6} sm={"auto"} className="py-3 fw-semibold fs-14">
              <AttendanceIcon type="absent" label="Absent" />
            </Col>
            <Col xs={6} sm={"auto"} className="py-3 fw-semibold fs-14">
              <AttendanceIcon type="firstHalf" label="First Half" />
            </Col>
            <Col xs={6} sm={"auto"} className="py-3 fw-semibold fs-14" >
              <AttendanceIcon type="secondHalf" label="Second Half" />
            </Col>
            <Col xs={6} sm={"auto"} className="py-3 fw-semibold fs-14">
              <AttendanceIcon type="holiday" label="Holiday" />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="table-responsive">
        <Table responsive className="">
          <thead style={{ color: "#505050" }}>
            <tr>
              <th className="fixed-width-col fs-18">Date/Month</th>
              {Array.from({ length: 31 }, (_, i) => (
                <th className="fw-semibold" key={i + 1}>
                  {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((attendance, index) => (
              <tr key={index} className={attendance.month === "December" ? "no-border-bottom" : ""}>
                <td className="fixed-width-col fw-semibold fs-14">
                  {attendance.month}
                </td>
                {attendance.days.map((day, i) => (
                  <td key={i}>
                    {day.status === "present" && (
                      <AttendanceIcon type="present" label="" />
                    )}
                    {day.status === "absent" && (
                      <AttendanceIcon type="absent" label="" />
                    )}
                    {day.status === "firstHalf" && (
                      <AttendanceIcon type="firstHalf" label="" />
                    )}
                    {day.status === "secondHalf" && (
                      <AttendanceIcon type="secondHalf" label="" />
                    )}
                    {day.status === "holiday" && (
                      <AttendanceIcon type="holiday" label="" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AttendanceDetails;

{
  /* Attendance Row */
}
{
  /* <tr className="attendance-row">
              <th className="fixed-width-col">Attendance</th>
              <th className="icon-header">
                <AttendanceIcon type="present" label="Present" />
              </th>
              <th className="icon-header">
                <AttendanceIcon type="absent" label="Absent" />
              </th>
              <th className="icon-header">
                <AttendanceIcon type="firstHalf" label="First Half" />
              </th>
              <th className="icon-header">
                <AttendanceIcon type="secondHalf" label="Second Half" />
              </th>
              <th className="icon-header">
                <AttendanceIcon type="holiday" label="Holiday" />
              </th>
              {Array.from({ length: 25 }).map((_, i) => (
                <th key={`spacer-${i}`}></th>
              ))}
            </tr> */
}
{
  /* Date Row */
}
