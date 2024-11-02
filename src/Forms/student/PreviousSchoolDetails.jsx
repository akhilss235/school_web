import React from "react";
import Form from "react-bootstrap/Form";
import InfoAccordion from "../../components/InfoAccordion";

function PreviousSchoolDetails() {
  return (
    <div>
          <InfoAccordion title="Previous School Details" iconName="PreviousSchoolDetails">

      <div className="row mt-3">
        <div className="col">
          <Form.Label>
            <b>School Name</b>
          </Form.Label>
          <Form.Control type="text" placeholder='Enter School Name' />
        </div>
        <div className="col">
          <Form.Group className="mb-3"                                  >
            <Form.Label>
              <b>Address</b>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter  Address..."
            />
          </Form.Group>
        </div>
      </div></InfoAccordion>
    </div>
  );
}

export default PreviousSchoolDetails;
