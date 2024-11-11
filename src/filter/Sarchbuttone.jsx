import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa"; // Import a search icon

function Searchbutton() {
  return (
    <div>
      <InputGroup>
        <InputGroup.Text style={{ backgroundColor: '#148CF0', border: 'none' }}>
          <FaSearch style={{ color: '#FFFFFF' }} />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search..."
          type="text"
          style={{
            backgroundColor: '#148CF0',
            color: '#FFFFFF',
            textAlign: 'center',
            borderLeft: 'none'
          }}
          className="white-placeholder" // Add custom class for placeholder styling
        />
      </InputGroup>
    </div>
  );
}

export default Searchbutton;
