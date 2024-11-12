import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { IconCard } from "./IconCard";

function ClassTiming({data}) {
  return (
    <div
      className="allocate-room mb-3"
      style={{ backgroundColor: "#EBF5FD", borderRadius: "10px" }}
    >
      <Row className="gy-3">
        {data?.map((item) => (
          <Col xs={12} sm={3} style={{ minWidth: "260px" }} key={item.id}>
            <IconCard data={[item]} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ClassTiming;
