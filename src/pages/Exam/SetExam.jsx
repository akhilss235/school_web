import React, { useState } from "react";
import { Button, Table, Row, Col, Dropdown } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineToggleOff } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Search from "../../filter/Search";
import NewSubject from "../../Model/NewSubject";
import BasicBreadcrumbs from "../../components/BasicBreadcrumbs";

export const SetExam = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const inputData = [
    {
      id: 1,
      name: "Exam Name",
      type: "input",
    },
    [
        {
          id: 2,
          name: "Start Date",
          type: "date",
        },
        {
          id: 3,
          name: "End Date",
          type: "date",
        },
    ],
    {
        id: 4,
        name: "Duration",
        type: "input",
        value:["hours", "minutes"]
    },
    [
        {
          id: 5,
          name: "Start Time",
          type: "input",
        },
        {
          id: 6,
          name: "End Time",
          type: "input",
        },
    ],

  ];
  return (
    <div className="p-3">
      <div className="text-start mb-3">
        <h4>
          <b>Set Exam</b>
        </h4>
        <BasicBreadcrumbs />
      </div>

      <Row
        className="justify-content-end mb-4"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <Col
          xs={12}
          md={4}
          lg={6}
          className="d-flex justify-content-md-end mt-2 mt-md-0"
        >
          <Search />
          <Button
            variant="#148CF0"
            style={{ backgroundColor: "#148CF0", color: "#FFFFFF" }}
            className="ms-3"
            onClick={() => setModalShow(true)}
          >
            <FiPlus /> New Exam
          </Button>
        </Col>
      </Row>

      <div className="table-responsive" style={{ backgroundColor: "#FFFFFF" }}>
        <Table responsive>
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Exam Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Duration</th>
              <th>Timing</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly Exam(March)</td>
              <td>10/11/2024</td>
              <td>10/11/2024</td>
              <td>01 hr</td>
              <td>09:00 AM - 10:00 AM</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="link" bsPrefix="p-0">
                    {" "}
                    {/* Removes default button styling */}
                    <BsThreeDotsVertical />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/view"
                      style={{ borderBottom: "1px solid #D1D1D1" }}
                    >
                      <FaRegEdit className="me-2" /> Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setModalDelete(true)}
                      style={{
                        borderBottom: "1px solid #D1D1D1",
                        color: "#148CF0",
                      }}
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

      <NewSubject
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={inputData}
        title={"New Exam"}
        btnTitle={"Save"}
      />
      <NewSubject
        show={modalDelete}
        onHide={() => setModalDelete(false)}
        title={"Delete Room"}
        isDelete={true}
        label={"delete the Room"}
        btnTitle={"Delete"}
      />
    </div>
  );
};
