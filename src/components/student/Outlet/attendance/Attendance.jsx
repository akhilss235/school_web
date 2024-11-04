import React, { useState } from "react";
import { Row, Col } from "react-bootstrap"; // Import Dropdown
import { OutletTab } from "../OutletTab";
import { useDispatch, useSelector } from "react-redux";
import { selectTab } from "../../../../features/student/tabSlice";
import Leaves from "./Leaves";
import AttendanceRecords from "./AttendanceRecords";
import { IoCalendarOutline } from "react-icons/io5";

export const Attendance = () => {
  const columns = ["Leaves", "Attendance"];
  const { selectedTab } = useSelector(selectTab);

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

  return (
    <div>
      <Row>
        <Col>
          <OutletTab columns={columns} />
        </Col>
        <Col>
          {selectedTab === "Attendance" && (
            <div className="card" style={{ borderColor: "#D9D9D9" }}>
              <div className="d-flex mx-1 p-2">
                <span style={{ color: "#505050" }}>
                  <IoCalendarOutline /> Academic Year: 2024/2025
                </span>
              </div>
            </div>
          )}
        </Col>
      </Row>
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};
