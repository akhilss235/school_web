import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InfoAccordion from "../../components/InfoAccordion";
import { Button } from "react-bootstrap";

const Siblings = () => {
  return (
    <>
      <InfoAccordion title="Sibling 1" iconName="Siblings">
        <div>
          <div className="section1 mb-5">
            <h4 className="mt-5">Sibling Info</h4>
            <div class="radio-wrapper-2">
              <label for="example-3">
                <b>Is Sibling studying in same school</b>
              </label>

              <div className="mx-3">
                <input id="example-2" type="radio" name="radio-examples" />
                <label for="example-2">Yes</label>
              </div>
              <div className="mx-3">
                <input id="example-2" type="radio" name="radio-examples" />
                <label for="example-2">No</label>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b> Student ID</b>
                </Form.Label>
                <Form.Control type="text" placeholder={`Enter  Student ID`} />
              </div>
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b>Name</b>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </div>
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b>Roll No</b>
                </Form.Label>
                <Form.Control type="tel" placeholder="Enter Roll No" />
              </div>
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b>Class</b>
                </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>select Class</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>{" "}
              </div>
            </div>


<Button className="addnewbuttone mt-5">Add New</Button>{' '}



          </div>
        </div>{" "}
      </InfoAccordion>

      {/* <InfoAccordion title="Sibling 2" iconName="Siblings">
        Content for Sibling 2
      </InfoAccordion> */}
    </>
  );
};

export default Siblings;
