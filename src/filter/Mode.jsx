import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { MdKeyboardArrowDown } from "react-icons/md";

function Mode() {
  return (
    <div>

      <InputGroup>
        <InputGroup.Text style={{ backgroundColor: "#FFFFFF" }}>
        Mode
        </InputGroup.Text>
        <Form.Select aria-label="Default select example">
          <option>

            <MdKeyboardArrowDown />
          </option>
          <option value="1">2024/2025</option>
          <option value="1">2023/2024</option>
          <option value="1">2022/2023</option>
        </Form.Select>
      </InputGroup>
      
    </div>
  );
}




export default Mode