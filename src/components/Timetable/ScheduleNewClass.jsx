import React, { useState } from "react";
import { Button, Form, Row, Col, Dropdown } from "react-bootstrap";
import NewSubject from "../../Model/NewSubject";
import InfoHeader from "../InfoHeader";

function ScheduleNewClass() {
  const [formData, setFormData] = useState({
    class: "",
    section: "",
    startTime: "",
    endTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Row className="mb-3">
        <Col>
          <InfoHeader iconName="info" title="Class Details" />
        </Col>
      </Row>
      <Row className="mb-3 gy-3">
        <Col lg={3}>
          <Form.Group controlId="class">
            <Form.Label>Class</Form.Label>
            <Form.Select
              name="class"
              value={formData.class}
              onChange={handleInputChange}
            >
              <option value="">Select Class</option>
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              {/* Add more classes as needed */}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col lg={3}>
          <Form.Group controlId="section">
            <Form.Label>Section</Form.Label>
            <Form.Select
              name="section"
              value={formData.section}
              onChange={handleInputChange}
            >
              <option value="">Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              {/* Add more sections as needed */}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col lg={3}>
          <Form.Group controlId="startTime">
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              type="text"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              placeholder="e.g., 09:00 AM"
            />
          </Form.Group>
        </Col>
        <Col lg={3}>
          <Form.Group controlId="endTime">
            <Form.Label>End Time</Form.Label>
            <Form.Control
              type="text"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
              placeholder="e.g., 04:45 PM"
            />
          </Form.Group>
        </Col>
      </Row>
      <InfoHeader iconName="settimetable" title="Set Time Table" />
    </div>
  );
}

export default ScheduleNewClass;
