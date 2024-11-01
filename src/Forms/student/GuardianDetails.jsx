import React, { useState } from "react";
import IMG from "../../img/Upload.png";
import Form from "react-bootstrap/Form";

function GuardianDetails() {
  const [guardianImage, setGuardianImage] = useState(null);

  const handleGuardianImageUpload = (e) => {
    const file = e.target.files[0];
    setGuardianImage(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setGuardianImage(null);
  };

  return (
    <div>
      <div className="section1">
        <h4 className="mt-5">Guardian Details</h4>

        <div className="radio-wrapper-2 d-flex my-4">
          <div className="mx-3">
            <input id="parents-radio" type="radio" name="guardianType" />
            <label htmlFor="parents-radio">Parents</label>
          </div>
          <div className="mx-3">
            <input id="guardian-radio" type="radio" name="guardianType" />
            <label htmlFor="guardian-radio">Guardian</label>
          </div>
          <div className="mx-3">
            <input id="others-radio" type="radio" name="guardianType" />
            <label htmlFor="others-radio">Others</label>
          </div>
        </div>

        <div className="d-flex justify-content-start mt-5">
          {/* Image preview or placeholder */}
          <div>
            {guardianImage ? (
              <img
                src={guardianImage}
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
          
          {/* Upload and Remove buttons */}
          <div className="mx-3">
            <label htmlFor="file-upload" className="btn btn-primary">
              Upload
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleGuardianImageUpload}
              style={{ display: "none" }}
            />
            
            <button
              type="button"
              className="btn btn-danger mx-3"
              onClick={handleRemoveImage}
            >
              Remove
            </button>

            <div className="mt-2">
              Upload image size 4MB, Format JPG, PNG, SVG
            </div>
          </div>
        </div>

        {/* Form fields */}
        <div className="row">
          <div className="col-sm-3 mt-3">
            <Form.Label>
              <b>Name</b>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </div>
          <div className="col-sm-3 mt-3">
            <Form.Label>
              <b>Email</b>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </div>
          <div className="col-sm-3 mt-3">
            <Form.Label>
              <b>Phone Number</b>
            </Form.Label>
            <Form.Control type="tel" placeholder="Enter Phone Number" />
          </div>
          <div className="col-sm-3 mt-3">
            <Form.Label>
              <b>Occupation</b>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter Occupation" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuardianDetails;
