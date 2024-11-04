import React from "react";
import { InputGroup, Form } from "react-bootstrap";

const DropdownFilter = ({
  filterOptions,
  selectedOption,
  handleOptionChange,
}) => {
  return (
    <InputGroup>
      <InputGroup.Text id="basic-addon1" style={{ backgroundColor: "#FFFFFF" }}>
        {filterOptions.label} :
      </InputGroup.Text>
      <Form.Select
        aria-describedby="basic-addon1"
        style={{ borderLeft: "none" }}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {filterOptions.options.map((option, index) => (
          <option key={index} value={option === "All" ? "" : option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </InputGroup>
  );
};

export default DropdownFilter;
