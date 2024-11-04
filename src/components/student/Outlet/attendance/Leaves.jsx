// src/components/Leaves.js
import React, { useEffect, useState } from "react";
import { Button, Table, Row, Col, Dropdown } from "react-bootstrap"; // Import Dropdown
import { OutletTab } from "../OutletTab";
import { useSelector } from "react-redux";
import Search from "../../../../filter/Search";
import Filter from "../../../../filter/Filter";
import { GetDate } from "../../../../filter/Date";
import DropdownFilter from "./DropdownFilter";
// import { selectTab } from '../../../features/student/tabSlice';
import { GoFilter } from "react-icons/go";
import { IconContext } from "react-icons";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import CustomTable from "./CustomTable";
import Pagination from "./Pagination";
import ResultsSummary from "./ResultsSummary";

const Leaves = () => {
  const [selectedLeaveType, setSelectedLeaveType] = useState("");

  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = sessionStorage.getItem("currentPage");
    return savedPage ? Number(savedPage) : 1;
  });

  const filterOptions = {
    label: "Leave Type",
    options: [
      "All",
      "Medical Leave",
      "Casual Leave",
      "Maternity Leave",
      "Sick Leave",
    ],
  };

  const headers = [
    { label: "Leave Date", key: "leaveDate" },
    { label: "No. of Days", key: "noOfDays" },
    { label: "Leave Type", key: "leaveType" },
    { label: "Applied On", key: "appliedOn" },
  ];

  const datas = [
    {
      leaveDate: "02/12/2024 - 02/12/2024",
      noOfDays: "01",
      leaveType: "First Half",
      appliedOn: "02/12/2024",
    },
    {
      leaveDate: "02/12/2024 - 02/12/2024",
      noOfDays: "01",
      leaveType: "First Half",
      appliedOn: "02/12/2024",
    },
    {
      leaveDate: "02/12/2024 - 02/12/2024",
      noOfDays: "01",
      leaveType: "First Half",
      appliedOn: "02/12/2024",
    },
    {
      leaveDate: "02/12/2024 - 02/12/2024",
      noOfDays: "01",
      leaveType: "First Half",
      appliedOn: "02/12/2024",
    },

    // Add more student objects as needed
  ];

  const handleLeaveTypeChange = (event) => {
    setSelectedLeaveType(event.target.value);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="">
      <Row className="text-start mb-3">
        <Col>
          <h4>
            <b>Leaves</b>
          </h4>
        </Col>
        <Col className="d-flex justify-content-md-end mt-2 mt-md-0">
          <Search />
        </Col>
      </Row>
      <Row
        className="justify-content-between mb-3"
      >
        <Col>
          <Row>
            <Col sm={3}>
              <div
                className="card d-flex align-items-center justify-content-center filterbody p-2"
                style={{width:'78px', height: "37.6px", cursor: "pointer" }}
              >
                <IconContext.Provider
                  value={{ className: "react-icons", size: "1.5em" }}
                >
                  <div className="d-flex align-items-center">
                    <GoFilter className="Filteric" />
                    <span className="Filteric p-1">Filter</span>
                  </div>
                </IconContext.Provider>
              </div>
            </Col>
            <Col sm={"auto"}>
              <DropdownFilter
                filterOptions={filterOptions}
                selectedOption={selectedLeaveType}
                handleOptionChange={handleLeaveTypeChange}
              />
            </Col>
          </Row>
        </Col>
        <Col className="d-flex gap-3">
          <GetDate title="From" />
          <GetDate title="To" />
        </Col>
      </Row>
      <div>
        <CustomTable headers={headers} data={datas} />
      </div>
      <Row>
        <Col className="d-flex justify-content-between">
          <div style={{ marginTop: "auto", marginBottom: "auto" }}>
            <ResultsSummary currentPage={1} pageSize={8} totalResults={25} />
          </div>
          {datas.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(datas.length / itemsPerPage)}
              onPageChange={handlePageChange}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Leaves;
