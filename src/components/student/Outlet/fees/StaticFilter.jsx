import React from "react";
import { Col } from "react-bootstrap";
import { GoFilter } from "react-icons/go";
import { IconContext } from "react-icons";

const StaticFilter = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center p-2 border border-1 rounded-2 fs-16"
      style={{
        width: "78px",
        height: "37.6px",
        cursor: "pointer",
        border: "1px solid #dee2e6",
      }}
    >
      <GoFilter size={"1.5em"} />
      <span className="p-1">Filter</span>
    </div>
  );
};

export default StaticFilter;
