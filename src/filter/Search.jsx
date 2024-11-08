import React from "react";
import { Form } from "react-bootstrap";

function Search() {
  return (
    <div style={{width:'200px'}}>
      {" "}
      <Form.Control placeholder="Search...." type="text" />
    </div>
  );
}

export default Search;
