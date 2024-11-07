import { Col, Row } from "react-bootstrap"
import Search from "../../filter/Search"
import { IconContext } from "react-icons"
import DropdownFilter from "./Outlet/attendance/DropdownFilter"
import { GetDate } from "../../filter/Date"
import ResultsSummary from "./Outlet/attendance/ResultsSummary"
import Pagination from "./Outlet/attendance/Pagination"
import CustomTable from "./Outlet/attendance/CustomTable"
import { useState } from "react"
import { GoFilter } from "react-icons/go";
import { IconCard } from "./Outlet/attendance/IconCard"


export const Salary = () => {
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
    { label: "ID", key: "id" },
    { label: "Salary for", key: "salaryFor" },
    { label: "Date", key: "date" },
    { label: "Net Salary", key: "netSalary" },
    { label: "Action", key: "action" },
  ];

  const datas = [
    {
      id: "224224",
      salaryFor: "Apr-2024",
      date: "05/11/2024",
      netSalary: "24,000",
    },
    {
      id: "224224",
      salaryFor: "Apr-2024",
      date: "05/11/2024",
      netSalary: "24,000",
    },
    {
      id: "224224",
      salaryFor: "Apr-2024",
      date: "05/11/2024",
      netSalary: "24,000",
    },
    {
      id: "224224",
      salaryFor: "Apr-2024",
      date: "05/11/2024",
      netSalary: "24,000",
    },
  ];

  const attentanceData = [
    {
      id: 1,
      icon: "Present",
      title: `Rs. 252352`,
      value: "Total Net Salary",
    },
    {
      id: 2,
      icon: "Absent",
      title: `Rs. 265222`,
      value: "Total Gross Salary",
    },
    {
      id: 3,
      icon: "FirstHalf",
      title: `Rs. 52325352`,
      value: "Total Deduction",
    },
  ];
  const handleLeaveTypeChange = (event) => {
    setSelectedLeaveType(event.target.value);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="d-flex flex-column gap-2">
      <Row className="align-items-center text-break" >
        {attentanceData?.map((item) => (
          <Col
            xs={12}
            sm={4}
            className="mb-3"
            style={{ minWidth: "260px"}} 
            key={item.id}
          >
            <IconCard data={[item]} />
          </Col>
        ))}
      </Row>
      <div className="salary-table-section">
        <Row className="text-start mb-3 p-3">
          <Col>
            <h4>
              <b>Salary</b>
            </h4>
          </Col>
          <Col className="d-flex justify-content-md-end mt-2 mt-md-0">
            <Search />
          </Col>
        </Row>
        <div>
          <CustomTable headers={headers} data={datas} />
        </div>
        <Row className="p-3">
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
  </div>
  )
}
