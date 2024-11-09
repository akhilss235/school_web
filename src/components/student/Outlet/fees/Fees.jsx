import React, { useState } from "react";
import CustomTable from "./CustomTable";
import { Row, Col, Button } from "react-bootstrap"; // Import Dropdown
import StaticFilter from "../../../../filter/StaticFilter";
import Search from "../../../../filter/Search";
import { GetDate } from "../../../../filter/Date";
import DropdownFilter from "./DropdownFilter";
import Pagination from "../attendance/Pagination";
import ResultsSummary from "../attendance/ResultsSummary";
import { FiPlus } from "react-icons/fi";
import "./Fees.css";
import AddFeeModal from "./AddFeeModal";

export const Fees = () => {
  const [showModal, setShowModal] = useState(false);

  const [filters, setFilters] = useState({
    academicYear: "",
    paymentMode: "",
  });
  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = sessionStorage.getItem("currentPage");
    return savedPage ? Number(savedPage) : 1;
  });

  const filterConfigs = [
    {
      label: "Academic Year",
      options: ["2023/2024", "2024/2025"],
      name: "academicYear",
    },
    {
      label: "Mode",
      options: ["All", "Cash", "Cheque", "Online"],
      name: "paymentMode",
    },
  ];

  const headers = [
    { label: "Fees Type", key: "FeesType" },
    { label: "Date", key: "date" },
    { label: "Amount", key: "amount" },
    { label: "Mode", key: "mode" },
    { label: "Action", key: "action" },
  ];

  const datas = [
    {
      FeesType: "Monthly Fee (May)",
      date: "02/12/2024",
      amount: "Rs.5,000",
      mode: "Cash",
      action: "action",
    },
    {
      FeesType: "Exam Fee",
      date: "07/12/2023",
      amount: "Rs.2,000",
      mode: "Cheque",
      action: "action",
    },
    {
      FeesType: "Monthly fee (April)",
      date: "02/12/2024",
      amount: "Rs.2,500",
      mode: "Cheque",
      action: "action",
    },
    {
      FeesType: "Admission Fee",
      date: "07/12/2023",
      amount: "Rs.5,000",
      mode: "Cash",
      action: "action",
    },
  ];

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <div className="mytablestyle" style={{ backgroundColor: "white" }}>
      <Row className="text-start mb-3 gy-3 justify-content-between">
        <Col xs={"auto"}>
          <h4 className="m-0 mt-1">
            <b>Fees</b>
          </h4>
        </Col>
        <Col xs={'auto'}>
          <Button
            variant="#148CF0"
            style={{ backgroundColor: "#148CF0", color: "#FFFFFF" }}
            className="d-flex align-items-center gap-2"
            onClick={()=>setShowModal(true)}
          >
            <FiPlus size={18} /> Add Fee
          </Button>
        </Col>
      </Row>
      <Row className="mb-3 gy-3">
        <Col xs={"auto"}>
          <StaticFilter />
        </Col>
        <Col xs={"auto"}>
          <DropdownFilter
            filterOptions={{
              label: filterConfigs[0].label,
              options: filterConfigs[0].options,
            }}
            name={filterConfigs[0].name}
            selectedOption={filters[filterConfigs[0].name]}
            handleOptionChange={handleFilterChange}
          />
        </Col>
        <Col xs={"auto"}>
          <DropdownFilter
            filterOptions={{
              label: filterConfigs[1].label,
              options: filterConfigs[1].options,
            }}
            name={filterConfigs[1].name}
            selectedOption={filters[filterConfigs[1].name]}
            handleOptionChange={handleFilterChange}
          />
        </Col>
        <Col xs={"auto"}>
          <Search />
        </Col>
        <Col sm={"auto"} className="d-flex flex-wrap gap-3">
          <div className="" style={{ minWidth: "200px" }}>
            <GetDate title="From" />
          </div>
          <div style={{ minWidth: "200px" }}>
            <GetDate title="To" />
          </div>
        </Col>

      </Row>
      <div>
        <CustomTable headers={headers} data={datas} />
      </div>
      <Row>
        <Col className="d-flex justify-content-between">
          <div style={{ marginTop: "auto", marginBottom: "auto" }}>
            <ResultsSummary
              currentPage={currentPage}
              pageSize={itemsPerPage}
              totalResults={datas.length}
            />
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
      {showModal && (
        <div className="modal-container">
          <AddFeeModal open={showModal} onClose={onClose} />
        </div>
      )}
    </div>
  );
};
