import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InfoAccordion from "../../components/InfoAccordion";

const HostelInformation = () => {
  return (
    <>
      <InfoAccordion title="Hostel Information" iconName="HostelInformation">
        <div>
          <div className="section1 mb-5">
            <div className="row">
              <div className="col-sm-6 mt-3">
                <Form.Label>
                  <b> Hostel</b>
                </Form.Label>
                <Form.Control type="text" placeholder={`Enter  Route`} />
              </div>

              <div className="col-sm-6 mt-3">
                <Form.Label>
                  <b>Room Number</b>
                </Form.Label>
                <Form.Control type="tel" placeholder="Enter  Room Number" />
              </div>
            </div>

            {/* <Button className="addnewbuttone mt-5">Add New</Button>{' '} */}
          </div>
        </div>{" "}
      </InfoAccordion>

      {/* <InfoAccordion title="Sibling 2" iconName="Siblings">
        Content for Sibling 2
      </InfoAccordion> */}
    </>
  );
};

export default HostelInformation;
