import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const DropdownFilter = ({ label, options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <InputGroup className="mb-3 dropdown-filter">
      <InputGroup.Text className="dropdown-label">{label}</InputGroup.Text>
      <Form.Select
        value={selectedValue}
        onChange={handleChange}
        className="dropdown-select"
      >
        <option value="" disabled hidden>
          Select {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </InputGroup>
  );
};

export default DropdownFilter;
