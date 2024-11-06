import React, { useState } from "react";
import { Row, Col } from "react-bootstrap"; // Import Dropdown
import { OutletTab } from "../OutletTab";
import { useDispatch, useSelector } from "react-redux";
import { selectTab } from "../../../../features/student/tabSlice";
import Leaves from "./Leaves";
import AttendanceRecords from "./AttendanceRecords";
import { IoCalendarOutline } from "react-icons/io5";
import DropdownFilter from "./DropdownFilter";


export const Attendance = () => {
  const columns = ["Leaves", "Attendance"];
  const { selectedTab } = useSelector(selectTab);
  const [selectedLeaveType, setSelectedLeaveType] = useState("");
  // Function to render content based on selected tab
  const renderTabContent = () => {
    switch (selectedTab) {
      case "Leaves":
        return <Leaves />;
      case "Attendance":
        return <AttendanceRecords />;
      default:
        return <Leaves />; // Default to Leaves if no tab is selected
    }
  };


  const filterOptions = {
    label: "Academic Year",
    options: [
"2024/2025"
    ],
  };

  const handleLeaveTypeChange = (event) => {
    setSelectedLeaveType(event.target.value);
  };

  return (
    <div className="p-0 attendancemaindiv">
      <Row className="mb-4">
        <Col  className="mb-2">
          <OutletTab columns={columns} />
        </Col>
        <Col sm={'auto'}>
          {selectedTab === "Attendance" && (

                <DropdownFilter
                filterOptions={filterOptions}
                selectedOption={selectedLeaveType}
                handleOptionChange={handleLeaveTypeChange}
              />
          )}
        </Col>
      </Row>
      <div className="pt-3 p-3 rendertabcontent" style={{backgroundColor:'aliceblue',borderRadius:'10px'}} >{renderTabContent()}</div>
    </div>
  );
};
