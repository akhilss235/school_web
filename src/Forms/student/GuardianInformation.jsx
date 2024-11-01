import React, { useState } from "react";
import IMG from "../../img/Upload.png";
import Form from "react-bootstrap/Form";
// import Icon from "../../components/SvgComponent";
import InfoHeader from "../../components/InfoHeader";

function GuardianInformation() {
  const [Father, setFather] = useState(null);

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    setFather(URL.createObjectURL(file));


  };

  const handleRemoveImage2 = () => {
    setFather(null);
  };

  return (
    <div>
          {/* <InfoHeader title="Parents & Guardian Information" iconName="Parents" /> */}
<InfoHeader iconName="Parents" title="Parents & Guardian Information"/>
      {/* <div
        className="d-flex p-3 mt-5"
        style={{
          backgroundColor: "#EBF5FD",
          borderBottom: "2px solid #2393F1",
        }}
      >
        <h4 className="d-flex">
          <span className="me-3">
            <Icon iconName="Parents" fill="white" />
          </span>
          <b className="mt-2">Parents & Guardian Information</b>
        </h4>
      </div>
       */}
      <div className="section1">
        <h4 className="mt-5">Father’s Info</h4>
        <div className="d-flex justify-content-start mt-3">
          <div>
            {Father ? (
              <img
                src={Father}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: "150px" }}
              />
            ) : (
              <img
                src={IMG}
                alt="Placeholder"
                style={{ maxWidth: "100%", maxHeight: "150px" }}
              />
            )}
          </div>
          <div className="mx-3">
            <label htmlFor="file-upload-guardian" className="custom-file-upload">
              Upload
            </label>
            <input
              id="file-upload-guardian"
              type="file"
              accept="image/*"
              onChange={handleFileChange2}
            />

            <button
              type="button"
              className="btn mx-3"
              onClick={handleRemoveImage2}
              style={{ backgroundColor: "#148CF0", color: "#FFFFFF" }}
            >
              Remove
            </button>

            <div>Upload image size 4MB, Format JPG, PNG, SVG</div>
          </div>
        </div>

        <div className="row">
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Father Name</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter Father Name" />
        </div>

        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Email</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter Email" />

        </div>

        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Phone Number</b>
          </Form.Label>
          <Form.Control type="number" placeholder="Enter Phone Number" />
        </div>
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Father Occupation</b>
          </Form.Label>
          <Form.Control type="number" placeholder="Enter Father Occupation" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default GuardianInformation;
