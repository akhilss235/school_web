import React, { useState } from "react";
import { Row, Col } from "react-bootstrap"; // Import Dropdown
import { OutletTab } from "../OutletTab";
import { useSelector } from "react-redux";
import { selectTab } from "../../../../features/student/tabSlice";
import Leaves from "./Leaves";
import AttendanceRecords from "./AttendanceRecords";
import DropdownFilter from "./DropdownFilter";
import "./Attendance.css";

export const Attendance = ({isTeacher}) => {
  const columns = ["Leaves", "Attendance"];
  const { selectedTab } = useSelector(selectTab);
  const [selectedLeaveType, setSelectedLeaveType] = useState("");

  // Function to render content based on selected tab
  const renderTabContent = () => {
    switch (selectedTab) {
      case "Leaves":
        return <Leaves isTeacher={isTeacher} />;
      case "Attendance":
        return <AttendanceRecords isTeacher={isTeacher}/>;
      default:
        return <Leaves isTeacher={isTeacher}  />; // Default to Leaves if no tab is selected
    }
  };

  const filterOptions = {
    label: "Academic Year",
    options: ["2024/2025"],
  };

  const handleLeaveTypeChange = (event) => {
    setSelectedLeaveType(event.target.value);
  };

  return (
    <div className="d-flex flex-column gap-3">
      <div className="attendance-tab-cont">
        <OutletTab columns={columns} />
        <Col sm={"auto"}>
          {selectedTab === "Attendance" && (
            <DropdownFilter
              filterOptions={filterOptions}
              selectedOption={selectedLeaveType}
              handleOptionChange={handleLeaveTypeChange}
            />
          )}
        </Col>
      </div>
      <div className="time-table pt-3" style={{backgroundColor:'white',borderRadius:'10px'}} >{renderTabContent()}</div>
    </div>
  );
};
