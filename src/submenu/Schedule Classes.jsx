import React, { useState } from "react";
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import { Button, Table, Row, Col, Dropdown } from "react-bootstrap";
import StaticFilter from "../filter/StaticFilter";
import DropdownFilter from "../filter/DropdownFilter";
import Search from "../filter/Search";
import { FiPlus } from "react-icons/fi";
import { LiaEyeSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import NewSubject from "../Model/NewSubject";
import ClassTiming from "./ClassTiming";

function ScheduleClasses() {
  const [modalShow, setModalShow] = useState(false);
  const [modalInactivate, setModalInactivate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [filters, setFilters] = useState({
    class: "",
    section: "",
  });

  const filterConfigs = [
    {
      label: "Class",
      options: ["LKG", "UKG", "1", "2"],
      name: "class",
    },
    {
      label: "Section",
      options: ["A", "B", "C", "D"],
      name: "section",
    },
  ];

  const inputData = [
    {
      id: "1",
      name: "Period",
      type: "input",
    },
    [
      {
        id: "2",
        name: "From",
        type: "input",
      },
      ,
      {
        id: "3",
        name: "To",
        type: "input",
      },
    ],
  ];

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <div className="p-3">
      <div className="text-start mb-3">
        <h4>
          <b>Schedule Classes</b>
        </h4>
        <BasicBreadcrumbs />
      </div>
<Row>
  <Col>
  <ClassTiming />
  </Col>
</Row>

      <Row className="justify-content-end mb-4 gy-3">
        <Col xs={"auto"}>
          <Button
            variant="#148CF0"
            style={{ backgroundColor: "#148CF0", color: "#FFFFFF" }}
            className="d-flex align-items-center gap-2"
            // onClick={() => setModalShow(true)}
          >
            <FiPlus size={18} /> Schedule Class
          </Button>
        </Col>
      </Row>
      <Row className="align-items-center mb-3 gy-3">
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
      </Row>
      <div className="table-responsive" style={{ backgroundColor: "#FFFFFF" }}>
        <Table responsive>
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Class</th>
              <th>Section</th>
              <th>No.of Subjects</th>
              <th>No.of Periods</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LKG</td>
              <td>A</td>
              <td>01</td>
              <td>11</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="link" bsPrefix="p-0">
                    {" "}
                    {/* Removes default button styling */}
                    <BsThreeDotsVertical />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      // href="Students/Details"
                      style={{ borderBottom: "1px solid #D1D1D1" }}
                    >
                      <LiaEyeSolid className="me-2" /> View
                    </Dropdown.Item>
                    <Dropdown.Item
                      // onClick={() => setModalShow(true)}
                      style={{ borderBottom: "1px solid #D1D1D1" }}
                    >
                      <FaRegEdit className="me-2" /> Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      // onClick={() => setModalDelete(true)}
                      style={{ color: "#ED1C00" }}
                    >
                      <MdOutlineDeleteOutline className="me-2" /> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      {modalShow && (
        <NewSubject
          show={modalShow}
          onHide={() => setModalShow(false)}
          data={inputData}
          title={"Add Timing"}
          btnTitle={"Add Timing"}
        />
      )}
      {modalDelete && (
        <NewSubject
          show={modalDelete}
          onHide={() => setModalDelete(false)}
          title={"Delete Timing"}
          isDelete={true}
          label={"delete the Timing?"}
          btnTitle={"Delete"}
        />
      )}
    </div>
  );
}

export default ScheduleClasses;
